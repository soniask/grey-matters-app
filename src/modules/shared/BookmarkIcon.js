import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	View,
	Text,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { userActions } from '../../actions';

class BookmarkIcon extends React.Component {
  constructor(props) {
    super(props);
	}
	
	render() {
		return (
			<Icon
				name={ this.props.bookmarkIDSet.has(this.props.item._id) ? 'ios-bookmark' : 'ios-bookmark-outline'}
				color={ this.props.bookmarkIDSet.has(this.props.item._id) ? '#ff404e' : '#282828'}
				type='ionicon'
				onPress={() => {
					if (this.props.bookmarkIDSet.has(this.props.item._id)) {
						let index = this.props.user.bookmarks.indexOf(this.props.item._id)
						if ( index > -1) {
							this.props.user.bookmarks.splice(index, 1)
						}
					} else {
						this.props.user.bookmarks.push(this.props.item._id)
					}
					this.props.updateUser(this.props.user, this.props.user._id, this.props.token)
				}}
			/>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
	token: state.user.token,
	bookmarkIDSet: state.user.bookmarkIDSet,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	updateUser: userActions.updateUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkIcon);
