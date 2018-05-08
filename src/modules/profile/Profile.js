import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';
import { Avatar, Header } from 'react-native-elements';
import ContentFeed from '../shared/ContentFeed';
import styles from './ProfileStyles';
import { profileActions } from '../../actions';
import { contentActions } from '../../actions';
import { termsActions } from '../../actions';
import Notes from './Notes';

class Profile extends Component {
  constructor(props) {
    super(props);
	}
	
	componentDidMount() {
		if (this.props.user) {
			this.props.getContents({ contentIds: this.props.user.bookmarks });
			this.props.getTerms();
		}
	}

  render() {
		return (
			<View style={{flex:1}}>
					{
						this.props.user ? (
							<View style={{flex:1}}>
								<View style={{alignItems: 'center'}}>
									<Avatar
										xlarge
										rounded
										title={this.props.user.name.substring(0, 1)}
										containerStyle={{marginTop: 20, marginBottom: 15}}
									/>
									<Text style={styles.name}>{this.props.user.name}</Text>
									<View style={styles.tabs}>
										<Text 
											style={[styles.tab, styles.tabLeft, this.props.showBookmarkList ? styles.tabSelected : null]}
											onPress={() => this.props.showBookmarks()}
										>
											Bookmarks
										</Text>
										<Text
											style={[styles.tab, styles.tabRight, !this.props.showBookmarkList ? styles.tabSelected : null]}
											onPress={() => this.props.showNotes()}
										>
											Notes
										</Text>
									</View>
								</View>
								{
									this.props.showBookmarkList ? (
										<ContentFeed list={this.props.contents} />
									) : (
										<Notes list={this.props.user.notes}/>
									)
								}
							</View>
						) : (
							<View style={{alignItems: 'center'}}>
								<Avatar
									xlarge
									rounded
									icon={{name: 'person'}}
									containerStyle={{marginTop: 20, marginBottom: 15}}
								/>
								<Text>Sign up under settings to unlock bookmarks</Text>
							</View>
						)
					}
			</View>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
	contents: state.content.contents,
	showBookmarkList: state.profile.showBookmarkList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	showBookmarks: profileActions.showBookmarks,
	showNotes: profileActions.showNotes,
	getContents: contentActions.getContents,
	getTerms: termsActions.getTerms,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
