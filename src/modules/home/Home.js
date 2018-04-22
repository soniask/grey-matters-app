import React from 'react';
import {
	View,
	Image,
	Text,
	ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import styles from './HomeStyles';
import MenuIcon from '../shared/MenuIcon.js';
import SearchIcon from '../shared/SearchIcon.js';
import SettingsIcon from '../profile/SettingsIcon.js';

const Home = (props) => {
	const article = {
    imgURI: 'http://greymattersjournal.com/wp-content/uploads/2018/01/HM-700x757.png',
    title: 'In the Memory of Henry Molaison',
		author: 'NICOLE RIELY',
		artist: 'JUSTIN WATERHOUSE',
    time: '1/15/18',
		text: `
		What H.M. lost, we now know,
		was a critical part of his identity.
		—Dr. Thomas Carew
		
Scientists have grappled with the question of how memories are stored for quite some time. Today many technologies exist that allow for a variety of approaches to answering this question, but one tactic that has withstood the test of time has been the study of amnesiacs1. Henry Molaison, referred to as patient H.M., was one such amnesiac who gained fame for his willingness to partake in scientific studies. Over 100 scientists and teams have studied H.M., making him one of the most heavily examined amnesiacs of all time1 . Over the years, study of H.M.’s brain helped to reveal some of the structural components of memory2 .`,
    key: 1,
    type: 'article',
	}
	console.log(props);
	return (
	<View>
		<Header
			leftComponent={<MenuIcon />}
			centerComponent={{ text: 'GREY MATTERS', style: { color: '#282828' } }}
			rightComponent={props.location.pathname == '/profile' ? <SettingsIcon /> : <SearchIcon />}
			outerContainerStyles={{ backgroundColor: '#E6E6E8', alignSelf: 'stretch' }}
		/>
		<ScrollView>
			<View>
				<Image source={{uri: article.imgURI}} style={styles.image}/>
				<View style={styles.container}>
					<Text style={styles.title}>{article.title}</Text>
					<View style={styles.metaData}>
						<View style={[styles.large, styles.metaDataBox]}>
							<Text>AUTHOR</Text>
							<Text style={styles.blue}>{article.author}</Text>
						</View>
						<View style={[styles.large, styles.metaDataBox]}>
							<Text>ARTIST</Text>
							<Text style={styles.blue}>{article.artist}</Text>
						</View>
						<View style={[styles.small, styles.metaDataBox]}>
							<Text>{article.time}</Text>
						</View>
					</View>
					<Text>{article.text}</Text>
				</View>
			</View>
		</ScrollView>
	</View>
)}
const mapStateToProps = state => ({
	show: state.show,
});

export default connect(mapStateToProps)(Home);
