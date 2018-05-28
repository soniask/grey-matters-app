import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';
import { userActions } from '../../actions';
import styles from './SettingsStyles';
import { colors } from '../../constants';


class Settings extends Component {
	constructor(props) {
	  super(props);
	}
  
	render() {
		if (!this.props.user._id) {
			return (
				<View style={styles.container}>
					<Text style={[styles.option, styles.grey]}>
						Edit Profile
					</Text>
					<Text style={[styles.option, styles.grey]}>
						Change Password
					</Text>
					<Link to="/signup" underlayColor={colors.lightGrey}>
						<Text style={styles.option}>
							Sign Up
						</Text>
					</Link>
					<Link to="/privacyPolicy" underlayColor={colors.lightGrey}>
						<Text style={styles.option}>
							Privacy Policy
						</Text>
					</Link>
					<Link to="/support" underlayColor={colors.lightGrey}>
						<Text style={styles.option}>
							Support
						</Text>
					</Link>
				</View>
			);
		}
	  return (
			<View style={styles.container}>
				<Link to="/editProfile" underlayColor={colors.lightGrey}>
					<Text style={styles.option}>
						Edit Profile
					</Text>
				</Link>
				<Link to="/changePassword" underlayColor={colors.lightGrey}>
					<Text style={styles.option}>
						Change Password
					</Text>
				</Link>
				<Text 
					style={styles.option}
					onPress={() => this.props.logout({ history: this.props.history })}
				>
					Logout
				</Text>
				<Link to="/privacyPolicy" underlayColor={colors.lightGrey}>
					<Text style={styles.option}>
						Privacy Policy
					</Text>
				</Link>
				<Link to="/support" underlayColor={colors.lightGrey}>
					<Text style={styles.option}>
						Support
					</Text>
				</Link>
			</View>
	  );
	}
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	logout: userActions.logout,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));

