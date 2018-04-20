import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { Link } from 'react-router-native';

const Glossary = () => {
  list = [
    {
      "word": "Synapse",
      "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
      "key": 1,
      "type": "glossarypage"
    },
    {
      "word": "Synapse",
      "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
      "key": 2,
      "type": "glossarypage"
    },
    {
      "word": "Synapse",
      "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
      "key": 3
    },
    {
      "word": "Synapse",
      "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
      "key": 4,
      "type": "glossarypage"
    },
    {
      "word": "Synapse",
      "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
      "key": 5,
      "type": "glossarypage"
    },
    {
      "word": "Synapse",
      "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
      "key": 6,
      "type": "glossarypage"
    },
  ];
  return (
  <ScrollView>
    <View style={[styles.content]}>
    {
      list.map((item) => (
        <Link key={item.key} to={"/"+item.type}>
          <View style={styles.box}>
            <Text style={styles.word}>
              {item.word}
            </Text>
            <Text style={styles.definition}>
              {item.definition}
            </Text>
          </View>
        </Link>
      ))
    }
    </View>
  </ScrollView>
)}

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

export default Glossary;
