import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validate } from 'validate.js';
import validation from './validation';
import {
  Text,
  View
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { withRouter } from 'react-router';
import styles from '../../styles.js';
import { userActions } from '../../actions';


class Login extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.clearMessage();
    this.props.clearConfirmation();
  }

  onPress() {
    let email = !this.email ? this.email : this.email.trim();
    let errors = validate({ email }, validation);
    if (errors) {
      for (let key in errors) {
        this.props.errorMessage(errors[key][0]);
        break;
      }
    } else {
      this.props.clearMessage();
      //TODO: dispatch action to send reset link
    }
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
        <Button
          title='Send Reset Link'
          onPress={() => this.onPress()}
        />
        {this.props.confirmation && <Text style={[styles.formMessage, styles.green]}>{this.props.confirmation}</Text>}
        {this.props.message && <Text style={[styles.formMessage, styles.red]}>{this.props.message}</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
	message: state.user.message,
	confirmation: state.user.confirmation,
});
  
const mapDispatchToProps = dispatch => bindActionCreators({
  clearConfirmation: userActions.clearConfirmation,
  clearMessage: userActions.clearMessage,
  errorMessage: userActions.errorMessage,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
