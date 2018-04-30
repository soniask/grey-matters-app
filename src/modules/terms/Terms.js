// import React from 'react';
// import {
//   Text,
//   ScrollView,
//   View,
//   Image,
//   StyleSheet
// } from 'react-native';
// import { Link } from 'react-router-native';

// const Glossary = () => {
//   list = [
//     {
//       "word": "Synapse",
//       "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
//       "key": 1,
//       "type": "glossarypage"
//     },
//     {
//       "word": "Synapse",
//       "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
//       "key": 2,
//       "type": "glossarypage"
//     },
//     {
//       "word": "Synapse",
//       "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
//       "key": 3
//     },
//     {
//       "word": "Synapse",
//       "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
//       "key": 4,
//       "type": "glossarypage"
//     },
//     {
//       "word": "Synapse",
//       "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
//       "key": 5,
//       "type": "glossarypage"
//     },
//     {
//       "word": "Synapse",
//       "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
//       "key": 6,
//       "type": "glossarypage"
//     },
//   ];
//   return (
//   <ScrollView>
//     <View style={[styles.content]}>
//     {
//       list.map((item) => (
//         <Link key={item.key} to={"/"+item.type}>
//           <View style={styles.box}>
//             <Text style={styles.word}>
//               {item.word}
//             </Text>
//             <Text style={styles.definition}>
//               {item.definition}
//             </Text>
//           </View>
//         </Link>
//       ))
//     }
//     </View>
//   </ScrollView>
// )}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  box: {
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  word: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#1ba5b8'
  },
  definition: {
    paddingTop: 5
  },
});

//////////////////////////////////////

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { Link } from 'react-router-native';
import { termsActions } from '../../actions';

class Terms extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTerms();
  }

  render() {
    if(this.props.isGettingTerms) {
      return (
        <Text>
          Loading
        </Text>
      )
    }
    if (!this.props.terms) {
      return (
        <Text>
          No Terms Available
        </Text>
      )
    }
    return (
      <ScrollView>
        <View style={[styles.content]}>
        {
          this.props.terms.map((term) => (
            <Link key={term._id} to={`/terms/${term._id}`}>
              <View style={styles.box}>
                <Text style={styles.word}>
                  {term.term}
                </Text>
                <Text style={styles.definition}>
                  {term.description}
                </Text>
              </View>
            </Link>
          ))
        }
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  terms: state.terms.terms,
  isGettingTerms: state.terms.isGettingTerms,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTerms: termsActions.getTerms,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Terms);
