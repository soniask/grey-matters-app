import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { NativeRouter, Route, Link, BackButton as RouterBackButton } from 'react-router-native';
import { Header } from 'react-native-elements';
import styles from './src/styles.js';
import { history } from './src/store';
import Menu from './src/modules/menu/Menu';
import Home from './src/modules/home/Home';
import Articles from './src/modules/articles/Articles';
import Article from './src/modules/articles/Article';
import Podcasts from './src/modules/podcasts/Podcasts';
import Videos from './src/modules/videos/Videos';
import Events from './src/modules/events/Events';
import ClubEvent from './src/modules/events/ClubEvent';
import Basics from './src/modules/basics/Basics';
import Glossary from './src/modules/glossary/Glossary';
import GlossaryPage from './src/modules/glossary/GlossaryPage';
import Store from './src/modules/store/Store';
import MenuIcon from './src/modules/shared/MenuIcon.js';
import SearchIcon from './src/modules/shared/SearchIcon.js';
import SettingsIcon from './src/modules/profile/SettingsIcon.js';
import Profile from './src/modules/profile/Profile.js';
import AppHeader from './src/modules/shared/AppHeader.js';
import Search from './src/modules/search/Search.js';


class AppView extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <NativeRouter history={history}>
        <View style={styles.container}>
          <RouterBackButton />
          <Route path="/" component={AppHeader} />
          <View style={styles.mainContainer}>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/articles" component={Articles} />
            <Route path="/article" component={Article} />
            <Route path="/podcasts" component={Podcasts} />
            <Route path="/videos" component={Videos} />
            {/* <Route path="/video" component={Video} /> */}
            <Route path="/events" component={Events} />
            <Route path="/clubevent" component={ClubEvent} />
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

const mapStateToProps = state => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(AppView);
