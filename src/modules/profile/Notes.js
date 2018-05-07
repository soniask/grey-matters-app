import React from 'react';
import { Link } from 'react-router-native';
import {
	Text,
	ScrollView,
	View,
} from 'react-native';
import styles from './NotesStyles';

const Notes = (props) => (
	<ScrollView>
		<View style={styles.content}>
			{props.list.map(item => (
				<Link to={`/terms/${item._id}`} key={item._id}>
					<View style={styles.box}>
						<View>
							<Text style={styles.titleText}>{item.term}</Text>
						</View>
						<Text style={styles.text}>{item.notes}</Text>
					</View>
				</Link>
			))}
		</View>
	</ScrollView>
)

export default Notes;
