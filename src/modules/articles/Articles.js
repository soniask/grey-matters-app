import React from 'react'
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from 'react-native'
import { Icon } from 'react-native-elements';


const Articles = () => (
  <ScrollView>
    <View style={[styles.content]}>
    {
      [0, 1, 2, 3, 4].map((i) => (
        <View key={i} style={[styles.box]}>
          <Image style={styles.image} 
                source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg'}}
          />
          <View style={styles.informationBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                These Titles Can Surprisingly Get Quite Long
              </Text>
              <Icon name='ios-bookmark-outline' type='ionicon' />
            </View>
            <View style={styles.metaData}>
              <View style={styles.author}>
                <Text>AUTHOR</Text>
                <Text style={styles.blue}>JESSE MILES</Text>
              </View>
              <View style={styles.date}>
                <Text>8/5/15</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipi...
              <Text style={styles.blue}>READ MORE</Text>
            </Text>
          </View>
        </View>
      ))
    }
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  box: {
    height: 200,
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flex: 3
  },
  informationBox: {
    flex: 4, 
    paddingLeft: 10
  },
  titleContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    paddingBottom: 5
  },
  titleText: {
    fontSize: 18, 
    fontWeight: 'bold'
  },
  metaData: {
    flexDirection: 'row', 
    borderTopColor: '#ff404e',
    borderTopWidth: 1,
    borderBottomColor: '#ff404e',
    borderBottomWidth: 1,
  },
  author: {
    flex: 2,
    marginTop: 5,
    marginBottom: 5,
    borderRightColor: '#ff404e',
    borderRightWidth: 1,
    alignItems: 'flex-start',
  },
  date: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  description: {
    paddingTop: 5
  },
  blue: {
    color: '#1ba5b8'
  }
});

export default Articles;
