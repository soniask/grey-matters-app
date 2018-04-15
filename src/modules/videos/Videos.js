import React from 'react';
import ContentFeed from '../shared/ContentFeed';

const Videos = () => {
  videos = [
    {
      imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
      title: 'Tapeworms on the Brain',
      author: 'BENJAMIN CORDY',
      time: '15 minutes',
      description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
      key: 1
    },
    {
      imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
      title: 'Tapeworms on the Brain',
      author: 'BENJAMIN CORDY',
      time: '15 minutes',
      description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
      key: 2
    },
    {
      imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
      title: 'Tapeworms on the Brain',
      author: 'BENJAMIN CORDY',
      time: '15 minutes',
      description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
      key: 3
    },
    {
      imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
      title: 'Tapeworms on the Brain',
      author: 'BENJAMIN CORDY',
      time: '15 minutes',
      description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
      key: 4
    },
    {
      imgURI: 'http://greymattersjournal.com/wp-content/uploads/2014/10/640px-Taenia_solium_scolex.jpg',
      title: 'Tapeworms on the Brain',
      author: 'BENJAMIN CORDY',
      time: '15 minutes',
      description: 'For most people, the mere thought of a parasite setting up residence in their tissues is enough to induce a',
      key: 5
    },
  ]
  return (
    <ContentFeed list={videos}/>
)}

export default Videos;
