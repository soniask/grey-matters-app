import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './contentFeedStyles';

const ContentFeed = (props) => {
  console.log('HELLO YES I AM PRINTING');
  console.log(props);
  return (
  <ScrollView>
    <View style={[styles.content]}>
    {
      props.list.map((item) => (
        <View key={item.key} style={[styles.box]}>
          <Image style={styles.image} 
                source={{uri: item.imgURI}}
          />
          <View style={styles.informationBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {item.title}
              </Text>
              <Icon name='ios-bookmark-outline' type='ionicon' />
            </View>
            <View style={styles.metaData}>
              <View style={styles.author}>
                <Text>AUTHOR</Text>
                <Text style={styles.blue}>{item.author}</Text>
              </View>
              <View style={styles.date}>
                <Text>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.description}>
              {item.description}...
              <Text style={styles.blue}>READ MORE</Text>
            </Text>
          </View>
        </View>
      ))
    }
    </View>
  </ScrollView>
)}

export default ContentFeed;
