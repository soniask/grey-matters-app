import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get('window').width,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  }
})


const LearningSection = () => (
  <ScrollView
    horizontal={true}
    pagingEnabled={true}
  >
    <View>
      <Text style={styles.page}>
        The LearningSection text 1
      </Text>
      <Image style={styles.image} source={{uri: 'https://www.therapistaid.com/images/content/worksheet/the-human-brain-diagram/preview.png'}}/>
    </View>
    <View>
      <Text style={styles.page}>
        The LearningSection text 2
      </Text>
      <Image style={styles.image} source={{uri: 'http://www.brainwaves.com/images/brain-basic_and_limbic.gif'}}/>
    </View>
    <View>
      <Text style={styles.page}>
        The LearningSection text 3
      </Text>
      <Image style={styles.image} source={{uri: 'https://sites.google.com/a/wisc.edu/neuroradiology/_/rsrc/1468741100768/anatomy/under-spin/ct/Cerebral%20hemisperes-%20diagram.jpg?height=235&width=400'}}/>
    </View>

  </ScrollView>
)

export default LearningSection;
