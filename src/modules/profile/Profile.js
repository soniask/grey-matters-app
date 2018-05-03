import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-native';
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import ContentFeed from '../shared/ContentFeed';
import styles from './ProfileStyles';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		bookmarks = [
			{
				imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
				title: 'Food for Thought: How the Brain Controls What You Eat',
				creators: ['LEANN NGUYEN'],
				publishTime: '11/7/14',
				description: 'One of the most frequent decisions we make is what to eat, but just because',
				type: 'article',
				_id: 1,
			},
			{
				imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
				title: 'Tapeworms on the Brain',
				creators: ['BENJAMIN CORDY'],
				publishTime: '15 minutes',
				description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
				type: 'podcast',
				_id: 2,
			},
			{
				imgURI: 'https://image.freepik.com/free-vector/technology-background-with-circuit_23-2147592157.jpg',
				title: 'Of Computers and Brains',
				creators: ['JESSE MILES'],
				publishTime: '13 minutes',
				description: 'Earlier this summer , Gary Marcus – a New York University professor of neural science and psychology –  wrote a',
				type: 'video',
				_id: 3,
			},
		];
		return (
			<View>
					{
						this.props.user ? (
							<View>
								<View style={{alignItems: 'center'}}>
									<Avatar
										xlarge
										rounded
										title={this.props.user.name.substring(0, 1)}
										containerStyle={{marginTop: 20, marginBottom: 15}}
									/>
									<Text style={styles.name}>{this.props.user.name}</Text>
									<View style={styles.tabs}>
										<Text style={[styles.tab, styles.tabLeft, styles.tabSelected]}>Bookmarks</Text>
										<Text style={[styles.tab, styles.tabRight]}>Notes</Text>
									</View>
								</View>
								<ContentFeed list={bookmarks} />
							</View>
						) : (
							<View style={{alignItems: 'center'}}>
								<Avatar
									xlarge
									rounded
									icon={{name: 'person'}}
									containerStyle={{marginTop: 20, marginBottom: 15}}
								/>
								<Text>Sign up under settings to unlock bookmarks and notes</Text>
							</View>
						)
					}
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(Profile));
