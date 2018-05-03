import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';
import { authActions } from '../../actions';
import styles from './SettingsStyles';


class Settings extends Component {
	constructor(props) {
	  super(props);
	}
  
	render() {
	  return (
		<View style={styles.container}>
			<Text style={this.props.user ? styles.option : [styles.option, styles.grey]}>
				Edit Profile
			</Text>
			<Text style={this.props.user ? styles.option : [styles.option, styles.grey]}>
				Change Password
			</Text>
			{this.props.user ? (
				<Text 
					style={styles.option}
					onPress={() => this.props.logout()}
				>
					Logout
				</Text>
			) : (		
				<Link to="/signup" >
					<Text style={styles.option}>
						Sign Up
					</Text>
				</Link>
			)}
			</View>
	  );
	}
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	logout: authActions.logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

