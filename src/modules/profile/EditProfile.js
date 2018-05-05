import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormInput } from 'react-native-elements';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';
import { usersActions } from '../../actions';
import styles from './SettingsStyles';


class EditProfile extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
    return (
			<View>
				<FormInput
					placeholder='New Name'
					autoCapitalize='words'
					autoCorrect={false}
					onChangeText={(text) => this.newName = text}
				/>
				<FormInput
					placeholder='Password'
					secureTextEntry={true}
					onChangeText={(text) => this.password = text}
				/>
				<Button
					title='Submit'
					onPress={() => this.props.updateUser(
						{
							name: this.newName, 
							email: this.props.user.email, 
							role: this.props.user.role,
						},
						this.props.user._id,
						this.props.user.token,
				)}
				/>
				{this.props.message ? (
					<Text style={{color: 'red', textAlign: 'center'}}>{this.props.message}</Text>
				) : null}
			</View>
    );
	}
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	updateUser: usersActions.updateUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
