import React from 'react';
import ContentFeed from '../shared/ContentFeed';


const Articles = () => {
  const articles = [
    {
      imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
      title: 'Food for Thought: How the Brain Controls What You Eat',
      author: 'LEANN NGUYEN',
      time: '11/7/14',
      description: 'One of the most frequent decisions we make is what to eat, but just because',
      key: 1,
      type: 'article'
    },
    {
      imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
      title: 'Food for Thought: How the Brain Controls What You Eat',
      author: 'LEANN NGUYEN',
      time: '11/7/14',
      description: 'One of the most frequent decisions we make is what to eat, but just because',
      key: 2,
      type: 'article'
    },
    {
      imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
      title: 'Food for Thought: How the Brain Controls What You Eat',
      author: 'LEANN NGUYEN',
      time: '11/7/14',
      description: 'One of the most frequent decisions we make is what to eat, but just because',
      key: 3,
      type: 'article'
    },
    {
      imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
      title: 'Food for Thought: How the Brain Controls What You Eat',
      author: 'LEANN NGUYEN',
      time: '11/7/14',
      description: 'One of the most frequent decisions we make is what to eat, but just because',
      key: 4,
      type: 'article'
    },
    {
      imgURI: 'https://is2-ssl.mzstatic.com/image/thumb/Purple60/v4/98/53/cc/9853cc2f-4b7a-8fd0-a7f8-5c6902e94ae8/source/256x256bb.jpg',
      title: 'Food for Thought: How the Brain Controls What You Eat',
      author: 'LEANN NGUYEN',
      time: '11/7/14',
      description: 'One of the most frequent decisions we make is what to eat, but just because',
      key: 5,
      type: 'article'
    },
  ]
  return (
    <ContentFeed list={articles}/>
)}

export default Articles;