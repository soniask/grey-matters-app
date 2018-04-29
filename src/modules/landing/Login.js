import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { Link } from 'react-router-native';
import styles from '../../styles.js';

const Login = () => (
<View>
	<FormInput
		placeholder='Email Address'
	/>
	<FormInput
		placeholder='Password'
	/>
	<Button
		title='Log In'
	/>
</View>
)

export default Login;

