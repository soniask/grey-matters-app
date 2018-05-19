import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormInput } from 'react-native-elements';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { userActions } from '../../actions';
import styles from './SettingsStyles';


class ChangePassword extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
    return (
			<View>
				<FormInput
					placeholder='Current Password'
					secureTextEntry={true}
					onChangeText={(text) => this.currentPassword = text}
				/>
				<FormInput
					placeholder='New Password'
					secureTextEntry={true}
					onChangeText={(text) => this.newPassword = text}
				/>
				<FormInput
					placeholder='Confirm New Password'
					secureTextEntry={true}
					onChangeText={(text) => this.confirmNewPassword = text}
				/>
				<Button
					title='Submit'
					onPress={() => this.props.updateUser(
						{
							name: this.props.user.name, 
							email: this.props.user.email,
							role: this.props.user.role,
						},
						this.props.user._id,
						this.props.token,
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
  user: state.user.user,
  token: state.user.token,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	updateUser: userActions.updateUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
