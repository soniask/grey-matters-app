import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ScrollView,
  Text,
  TextInput,
	View,
} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import ContentFeed from '../shared/ContentFeed';
import styles from './ProfileStyles';
import { contentActions } from '../../actions';
import { userActions } from '../../actions';
import Notes from './Notes';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';

class UserProfile extends Component {
  constructor(props) {
    super(props);
	}
	
	componentDidMount() {
    this.props.getCreator(this.props.match.params.id);
  }
  
  componentWillUnmount() {
    if (this.props.user && this.props.creator 
      && this.props.user._id == this.props.creator._id && this.bio) {
      this.props.updateUser({ 
        fields: {bio: this.bio}, 
        id: this.props.user._id
      });
    }
  }

  render() {
    if (this.props.isGettingCreator) {
      return (
        <Loading />
      );
    }

    if (!this.props.creator) {
      return (
        <Unavailable message='Could not fetch data' />
      );
    }
    
		return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flex:1}}>
            <View style={{alignItems: 'center', flex: 1}}>
              <Text style={styles.name}>{this.props.creator.name}</Text>
              { this.props.user && this.props.user._id == this.props.creator._id ? (
                <TextInput
                  multiline = {true}
                  defaultValue={this.props.creator.bio}
                  style={[styles.bio]}
                  onChangeText={(text) => this.bio = text}
                />
              ) : (
                <Text style={styles.bio}>{this.props.creator.bio}</Text>
              )}
            </View>
            <View style={styles.tabs}>
              <Text 
                style={[styles.tab, styles.tabRight, styles.tabSelected]}
              >
                Latest
              </Text>
            </View>
            { 
              this.props.creator.contributions 
              && this.props.creator.contributions.length > 0 ? (
                <ContentFeed list={this.props.creator.contributions} />
              ) : (
                <Unavailable message='No published content' />
              )  
            }
          </View>
        </View>
      </ScrollView>
		)
	}
}

const mapStateToProps = state => ({
  user: state.user.user,
  creator: state.content.creator,
  isGettingCreator: state.content.isGettingCreator,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCreator: contentActions.getCreator,
  updateUser: userActions.updateUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
