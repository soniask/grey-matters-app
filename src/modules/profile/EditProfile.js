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


class EditProfile extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
    return (
			<View style={styles.formContainer}>
				<View style={styles.formInput}>
					<FormInput
						placeholder='New Name'
						autoCapitalize='words'
						autoCorrect={false}
						onChangeText={(text) => this.newName = text}
					/>
				</View>
				<View style={styles.formInput}>
					<FormInput
						placeholder='Password'
						secureTextEntry={true}
						onChangeText={(text) => this.password = text}
					/>
				</View>
				<Button
					title='Submit'
					onPress={() => this.props.updateUser(
						{
							name: this.newName, 
							email: this.props.user.email, 
							role: this.props.user.role,
						},
						this.props.user._id,
						this.props.token,
				)}
				/>
				{this.props.message && <Text style={styles.formError}>{this.props.message}</Text>}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
