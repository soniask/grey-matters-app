import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	View,
	Image,
	Text,
	ScrollView,
} from 'react-native';
import styles from './HomeStyles';
import { contentActions } from '../../actions';
import Loading from '../shared/Loading';
import References from '../shared/References';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getContents({ type: 'article', state: 'published' });
  }

  render() {
    if (this.props.isGettingContents) {
      return (
        <Loading />
      );
    }
    if (!this.props.contents) {
      return (
        <Text>
          No Content Available
        </Text>
      );
    }
    return (
			<View>
				<ScrollView>
					<View>
						<Image style={styles.image} source={{uri: 'http://greymattersjournal.com/wp-content/uploads/2018/01/HM-700x757.png'}}/>
						<View style={styles.container}>
							<Text style={styles.title}>{this.props.contents[0].title}</Text>
							<View style={styles.metaData}>
								<View style={[styles.large, styles.metaDataBox]}>
									<Text>AUTHOR</Text>
									<Text style={styles.blue}>{this.props.contents[0].creators[0].name.name}</Text>
								</View>
								<View style={[styles.large, styles.metaDataBox]}>
									<Text>ARTIST</Text>
									<Text style={styles.blue}>{this.props.contents[0].creators[0].name.name}</Text>
								</View>
								<View style={[styles.small, styles.metaDataBox]}>
									<Text>{ new Date(this.props.contents[0].publishTime).toLocaleDateString()}</Text>
								</View>
							</View>
							<Text>{this.props.contents[0].body}</Text>
							{this.props.contents[0].references && <References references={this.props.contents[0].references}/>}
						</View>
					</View>
				</ScrollView>
			</View>
    );
  }
}

const mapStateToProps = state => ({
  contents: state.content.contents,
  isGettingContents: state.content.isGettingContents,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getContents: contentActions.getContents,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
