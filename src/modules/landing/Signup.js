import React from 'react';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { Link } from 'react-router-native';
import styles from '../../styles.js';

const Signup = () => (
  <View>
    <FormInput
      placeholder='First Name'
    />
    <FormInput
      placeholder='Last Name'
    />
    <FormInput
      placeholder='Email Address'
    />
    <FormInput
      placeholder='Password'
    />
    <FormInput
      placeholder='Confirm Password'
    />
    <Button
      title='Sign Up'
      buttonStyle={{marginTop: 20, marginBottom: 20}}
    />
    <Link to="/login" >
      <Text style={{textAlign: 'center'}}>
        Already a Member? <Text style={{textDecorationLine: 'underline'}}>login</Text>
      </Text>
    </Link>
  </View>
)

export default Signup;
