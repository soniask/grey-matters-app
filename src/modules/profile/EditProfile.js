import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Button, FormInput } from 'react-native-elements';
import { validate } from 'validate.js';
import { editProfileValidation } from './validation';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { userActions } from '../../actions';
import styles from '../../styles';


class EditProfile extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.clearMessage();
  }

	onPress() {
		console.log('onPress called')
		let newName = !this.newName ? this.newName : this.newName.trim();
		console.log(`newName: ${newName}`)
		let errors = validate({ newName }, editProfileValidation);
		console.log(`errors: ${errors}`);
		if (errors) {
			console.log(`entered errors case`)
			for (let key in errors) {
				console.log(errors[key]);
				this.props.errorMessage(errors[key][0]);
				break;
			}
		} else {
			console.log('no errors detected')
			this.props.clearMessage();
			this.props.updateUser({ name: this.newName, id: this.props.user._id, history: this.props.history });
		}
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
				<Button
					title='Change Name'
					onPress={() => this.onPress()}
					buttonStyle={{ marginTop: 20, marginBottom: 20 }}
				/>
				{this.props.message && <Text style={[styles.formMessage, styles.red]}>{this.props.message}</Text>}
			</View>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
	message: state.user.message,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	updateUser: userActions.updateUser,
	clearMessage: userActions.clearMessage,
  errorMessage: userActions.errorMessage,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
