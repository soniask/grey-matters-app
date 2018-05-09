import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { learningActions } from '../../actions';

const styles = StyleSheet.create({
  page: {
    width: Dimensions.get('window').width,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    position: 'absolute',
    bottom: 50,
  },
})

class LearningSection extends Component {
  constructor(props) {
    super(props);
  }

  onScrollEnd(e) {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    console.log('scrolled to page ', pageNum);
    this.props.changeImage(pageNum);
    // this.imageIndex = pageNum;
  }

  render() {
    let imageList = [
      require('../../images/placeholder_diagram_1.png'),
      require('../../images/placeholder_diagram_2.gif'),
      require('../../images/placeholder_diagram_3.jpg'),
    ];
    console.log(`this.props.imageIndex: ${this.props.imageIndex}`);
    // console.log(`this.imageIndex: ${this.imageIndex}`);
    return (
      <View style={{height: Dimensions.get('window').height}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          onMomentumScrollEnd={(e) => this.onScrollEnd(e)}
        >
          <View>
            <Text style={styles.page}>
              LearningSection text 1
            </Text>
          </View>
          <View>
            <Text style={styles.page}>
              LearningSection text 2
            </Text>
          </View>
          <View>
            <Text style={styles.page}>
              LearningSection text 3
            </Text>
          </View>
        </ScrollView>
        <Image key={this.props.imageIndex} style={styles.image} source={imageList[this.props.imageIndex]}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  imageIndex: state.learning.imageIndex,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeImage: learningActions.changeImage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LearningSection);
