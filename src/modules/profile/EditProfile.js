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
				<Button
					title='Change Name'
					onPress={() => this.props.updateUser({ name: this.newName, id: this.props.user._id})}
					buttonStyle={{ marginTop: 20, marginBottom: 20 }}
				/>
				{this.props.message && <Text style={[styles.formMessage, styles.red]}>{this.props.message}</Text>}
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
