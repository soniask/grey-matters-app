import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	View,
	Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

class BookmarkIcon extends React.Component {
  constructor(props) {
    super(props);
	}
	
	render() {
		let bookmarkIDSet = new Set(["5ae68a49f64e97d234f9bc33"])
		return (
			<Icon
				name={ bookmarkIDSet.has(this.props.item._id) ? 'ios-bookmark' : 'ios-bookmark-outline'}
				color={ bookmarkIDSet.has(this.props.item._id) ? '#ff404e' : '#282828'}
				type='ionicon'
				onPress={() => {
					console.log(`Bookmark pressed for: ${this.props.item.title}`)
				}}
			/>
		);
	}
}

const mapStateToProps = state => ({
	//   show: state.menu.show,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	//   showMenu: menuActions.showMenu,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkIcon);
