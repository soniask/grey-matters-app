import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-native';
import { Dialog, Button } from 'react-native-ui-lib';
import {
	Dimensions,
  Text,
  View,
} from 'react-native';
import styles from '../articles/ArticleStyles';
import { profileActions } from '../../actions';
import PrivacyPolicy from './PrivacyPolicy';

class PolicyDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
				<Dialog
					visible={true}
					width="100%"
					height={Dimensions.get("window").height - 45}
					animationConfig={{duration: 250}}
				>
					<View style={styles.dialog}>
						<PrivacyPolicy />	
						<Button style={{marginTop: 10}}  text60 label="Done" link onPress={() => this.props.hidePrivacyPolicy()} />
					</View>
				</Dialog>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
	hidePrivacyPolicy: profileActions.hidePrivacyPolicy,
}, dispatch);

export default connect(null, mapDispatchToProps)(PolicyDialog);
