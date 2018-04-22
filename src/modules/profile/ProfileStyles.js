import {
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	name: {
		fontSize: 25,
		fontWeight: 'bold',
		paddingBottom: 25,
	},
	tabs: {
		flexDirection: 'row', 
	},
	tab: {
		flex: 1,
		fontSize: 18,
		color: '#BABABA',
	},
	tabLeft: {
		textAlign: 'right',
		paddingRight: 10,
	},
	tabRight: {
		textAlign: 'left',
		paddingLeft: 10,
	},
	tabSelected: {
		color: 'black',
	}
})

export default styles;
