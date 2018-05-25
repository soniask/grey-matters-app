import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  View
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { Link } from 'react-router-native';
import { withRouter } from 'react-router';
import styles from '../../styles.js';
import { userActions } from '../../actions';


class Login extends Component {
  constructor(props) {
    super(props);
	}

  render() {
    return (
			<View style={styles.formContainer}>
				<View style={styles.formInput}>
					<FormInput
						placeholder='Email Address'
						autoCapitalize='none'
						autoCorrect={false}
						onChangeText={(text) => this.email = text}
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
				title='Log In'
				onPress={() => this.props.login({ email: this.email, password: this.password, history: this.props.history })}
			/>
			{this.props.message && <Text style={styles.formError}>{this.props.message}</Text>}
		</View>
    );
  }
}

const mapStateToProps = state => ({
	message: state.user.message,
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
	login: userActions.login,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
