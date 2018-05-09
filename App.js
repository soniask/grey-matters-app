import React from 'react';
import { Provider } from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import store from './src/store';
import AppView from './src/modules/shared/AppView';


TrackPlayer.setupPlayer().then(() => {
  // The player is ready to be used
  var track = {
    id: 'unique track id',
  
    url: 'https://itunes.apple.com/us/podcast/lm101-073-how-to-build-machine-that-learns-to-play/id892779679?i=1000409875280&mt=2', // Load media from the network
    // url: require('./avaritia.mp4'), // Load media from the app bundle
  
    title: 'Title',
    artist: 'Artist',
    album: 'Album',
    genre: 'Genre',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
  
    artwork: 'http://via.placeholder.com/350x150', // Load artwork from the network
    // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
  };

  TrackPlayer.add([track]).then(function () {
    // The tracks were added
    TrackPlayer.play();
  });

  // TrackPlayer.registerEventHandler(require('./src/modules/podcasts/PodcastPlayer'));
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}
