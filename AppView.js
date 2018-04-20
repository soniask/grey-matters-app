import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Header } from 'react-native-elements';
import styles from './src/styles.js';
import Menu from './src/modules/menu/Menu';
import Home from './src/modules/home/Home';
import Articles from './src/modules/articles/Articles';
import Article from './src/modules/articles/Article';
import Podcasts from './src/modules/podcasts/Podcasts';
import Videos from './src/modules/videos/Videos';
import Events from './src/modules/events/Events';
import Basics from './src/modules/basics/Basics';
import Glossary from './src/modules/glossary/Glossary';
import GlossaryPage from './src/modules/glossary/GlossaryPage';
import Store from './src/modules/store/Store';
import MenuIcon from './src/modules/shared/MenuIcon.js';
import Profile from './src/modules/profile/Profile.js';


export default class AppView extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Header
            leftComponent={<MenuIcon />}
            centerComponent={{ text: 'GREY MATTERS', style: { color: '#282828' } }}
            rightComponent={{ icon: 'search', color: '#282828' }}
            outerContainerStyles={{ backgroundColor: '#E6E6E8', alignSelf: 'stretch' }}
          />
          <View style={styles.mainContainer}>
            <Route exact path="/" component={Home} />
            <Route path="/articles" component={Articles} />
            <Route path="/article" component={Article} />
            <Route path="/podcasts" component={Podcasts} />
            <Route path="/videos" component={Videos} />
            {/* <Route path="/video" component={Video} /> */}
            <Route path="/events" component={Events} />
            {/* <Route path="/event" component={ClubEvent} /> */}
            <Route path="/basics" component={Basics} />
            <Route path="/glossary" component={Glossary} />
            <Route path="/glossarypage" component={GlossaryPage} />
            <Route path="/store" component={Store} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/settings" component={Settings} /> */}
            <Menu />
          </View>
        </View>
      </NativeRouter>
    );
  }
}
