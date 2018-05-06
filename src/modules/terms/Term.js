import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextArea } from 'react-native-ui-lib';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  KeyboardAvoidingView,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  StyleSheet
} from 'react-native';
import Loading from '../shared/Loading';
import { termsActions } from '../../actions';
import styles from './TermStyles';

class Term extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTerm(this.props.match.params.id);
    this.notes = "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter."
  }

  render() {
    if (this.props.isGettingTerm) {
      return (
        <Loading />
      )
    }
    if (!this.props.term) {
      return (
        <Text>
          Term not found
        </Text>
      )
    }
    return (
      <KeyboardAwareScrollView 
        enableResetScrollToCoords={false} 
        extraScrollHeight={20}
      >
        <Image style={styles.image} source={{uri: 'http://3.bp.blogspot.com/-oulaC4PV0sw/V1Y4OskA1yI/AAAAAAAAb20/_clCVq9Y7DsvpM7CQU6PBJCTwC9D-VEsQCK4B/s1600/synapse.jpg'}}/>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.term.term}</Text>
          <View>
            <View style={styles.sectionHeaderBox}>
              <Text style={styles.sectionHeader}>Definition</Text>
            </View>
            <Text style={styles.paragraph}>{this.props.term.description}</Text>
          </View>
          <View>
            <View style={styles.sectionHeaderBox}>
              <Text style={styles.sectionHeader}>Description</Text>
            </View>
            <Text style={styles.paragraph}>{this.props.term.description}</Text>
          </View>
          {
            this.props.user ? (
              <View>
                <View style={styles.sectionHeaderBox}>
                  <Text style={styles.sectionHeader}>Notes</Text>
                </View>
                <View>
                  <TextInput
                    multiline = {true}
                    defaultValue={this.notes}
                    style={styles.paragraph}
                    onChangeText={(text) => this.notes = text}
                  />
                </View>
              </View>
            ) : null
          }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  term: state.terms.term,
  isGettingTerm: state.terms.isGettingTerm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTerm: termsActions.getTerm,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Term);

