import React from 'react';
import ContentFeed from '../shared/ContentFeed';

const Podcasts = () => {
  podcasts = [
    {
      imgURI: 'https://image.freepik.com/free-vector/technology-background-with-circuit_23-2147592157.jpg',
      title: 'Of Computers and Brains',
      author: 'JESSE MILES',
      time: '13 minutes',
      description: 'Earlier this summer , Gary Marcus – a New York University professor of neural science and psychology –  wrote a',
      key: 1
    },
    {
      imgURI: 'https://image.freepik.com/free-vector/technology-background-with-circuit_23-2147592157.jpg',
      title: 'Of Computers and Brains',
      author: 'JESSE MILES',
      time: '13 minutes',
      description: 'Earlier this summer , Gary Marcus – a New York University professor of neural science and psychology –  wrote a',
      key: 2
    },
    {
      imgURI: 'https://image.freepik.com/free-vector/technology-background-with-circuit_23-2147592157.jpg',
      title: 'Of Computers and Brains',
      author: 'JESSE MILES',
      time: '13 minutes',
      description: 'Earlier this summer , Gary Marcus – a New York University professor of neural science and psychology –  wrote a',
      key: 3
    },
    {
      imgURI: 'https://image.freepik.com/free-vector/technology-background-with-circuit_23-2147592157.jpg',
      title: 'Of Computers and Brains',
      author: 'JESSE MILES',
      time: '13 minutes',
      description: 'Earlier this summer , Gary Marcus – a New York University professor of neural science and psychology –  wrote a',
      key: 4
    },
    {
      imgURI: 'https://image.freepik.com/free-vector/technology-background-with-circuit_23-2147592157.jpg',
      title: 'Of Computers and Brains',
      author: 'JESSE MILES',
      time: '13 minutes',
      description: 'Earlier this summer , Gary Marcus – a New York University professor of neural science and psychology –  wrote a',
      key: 5
    },
  ]
  return (
    <ContentFeed list={podcasts}/>
)}

export default Podcasts;
