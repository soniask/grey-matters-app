import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
} from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from 'react-native-elements';
import styles from './contentFeedStyles';

const ContentFeed = (props) => (
  <ScrollView>
    <View style={[styles.content]}>
    {
      props.list.map((item) => (
        <View key={item.title} style={[styles.box]}>
          <Image style={styles.image} 
                source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg'}}
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
                {/* How to access creator names? */}
                <Text style={styles.blue}>{item.creators}</Text>
              </View>
              <View style={styles.date}>
                <Text>{item.publishTime}</Text>
              </View>
            </View>
            <Link to={"/"+item.type}>
              <Text style={styles.description}>
                {item.description}...
                <Text style={styles.blue}>READ MORE</Text>
              </Text>
            </Link>
          </View>
        </View>
      ))
    }
    </View>
  </ScrollView>
)

export default ContentFeed;
