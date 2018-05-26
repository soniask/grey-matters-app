import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ScrollView,
	Text,
	View,
} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import ContentFeed from '../shared/ContentFeed';
import styles from './ProfileStyles';
import { profileActions } from '../../actions';
import { contentActions } from '../../actions';
import { termsActions } from '../../actions';
import Notes from './Notes';
import Unavailable from '../shared/Unavailable';

class UserProfile extends Component {
  constructor(props) {
    super(props);
	}
	
	componentDidMount() {
    // get creator by id
    this.props.getContents();
	}

  render() {
    let creator = {
      id: 1,
      name: 'Benjamin Cordy',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus eros nec lacus maximus blandit. Aenean eget augue non leo viverra ornare. Nam dictum tempus suscipit. Duis non dolor vehicula ante condimentum consectetur. '
    }
		return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flex:1}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.name}>{creator.name}</Text>
              {/* { this.props.user && this.props.user.id == creator.id ? (

              ) : ( */}
                <Text style={styles.bio}>{creator.bio}</Text>
              {/* )} */}
            </View>
            <View style={styles.tabs}>
              <Text 
                style={[styles.tab, styles.tabRight, styles.tabSelected]}
              >
                Latest
              </Text>
            </View>
            { this.props.contents && this.props.contents.length > 0 && <ContentFeed list={this.props.contents} /> }
          </View>
        </View>
      </ScrollView>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
	contents: state.content.contents,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	getContents: contentActions.getContents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
