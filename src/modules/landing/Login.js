import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { Link } from 'react-router-native';
import styles from '../../styles.js';
import { authActions } from '../../actions/authActions.js';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<View>
			<FormInput
				placeholder='Email Address'
				autoCapitalize='none'
				autoCorrect={false}
				onChangeText={(text) => this.email = text}
			/>
			<FormInput
				placeholder='Password'
				secureTextEntry={true}
				onChangeText={(text) => this.password = text}
			/>
			<Button
				title='Log In'
				onPress={() => this.props.login({email: this.email, password: this.password})}
			/>
		</View>
    );
  }
}
  
const mapDispatchToProps = dispatch => bindActionCreators({
	login: authActions.login,
}, dispatch);

export default connect(null, mapDispatchToProps)(Login);
  

