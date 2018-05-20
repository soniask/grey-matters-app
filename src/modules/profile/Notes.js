import React, { Component } from 'react';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	Text,
	ScrollView,
	View,
} from 'react-native';
import Loading from '../shared/Loading';
import Unavailable from '../shared/Unavailable';
import styles from './NotesStyles';


class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
		if (this.props.isGettingTerms) {
      return (
        <Loading />
      );
    }

    if (!this.props.list || this.props.list.length == 0 ) {
      return (
				<Unavailable message='No bookmarks yet'/>
      );
		}

    return (
			<ScrollView>
				<View style={styles.content}>
					{this.props.list.map(item => (
						<Link to={`/terms/${item.term}`} key={item.term}>
							<View style={styles.box}>
								<View>
									<Text style={styles.titleText}>{this.props.termsMap[item.term]}</Text>
								</View>
								<Text style={styles.text}>{item.body}</Text>
							</View>
						</Link>
					))}
				</View>
			</ScrollView>
    );
  }
}

const mapStateToProps = state => ({
	termsMap: state.terms.termsMap,
});

export default connect(mapStateToProps)(Notes);
