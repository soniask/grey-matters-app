import React from 'react';
import { connect } from 'react-redux';
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
      props.list ? props.list.map((item) => (
        <View key={item._id} style={[styles.box]}>
          <Image style={styles.image} 
                source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg'}}
          />
          <View style={styles.informationBox}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {item.title}
              </Text>
              { props.user ? (<Icon name='ios-bookmark-outline' type='ionicon' />) : null }
              
            </View>
            <View style={styles.metaData}>
              <View style={styles.author}>
                <Text>AUTHOR</Text>
                {/* TODO: How to access creator names? Looks like an id so 
                try fetching corresponding user*/}
                <Text style={styles.blue}>{item.creators[0]}</Text>
              </View>
              <View style={styles.date}>
                <Text>{new Date(item.publishTime).toLocaleDateString()}</Text>
              </View>
            </View>
            <Link to={`/${item.type}s/${item._id}`}>
              <Text style={styles.description}>
                {item.description}...
                <Text style={styles.blue}>READ MORE</Text>
              </Text>
            </Link>
          </View>
        </View>
      )) : null
    }
    </View>
  </ScrollView>
)

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ContentFeed);
