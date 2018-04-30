import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { NativeRouter, Route, Link, BackButton as RouterBackButton } from 'react-router-native';
import { Header } from 'react-native-elements';
import styles from '../../styles.js';
import { history } from '../../store';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import Articles from '../articles/Articles';
import Article from '../articles/Article';
import Podcasts from '../podcasts/Podcasts';
import Videos from '../videos/Videos';
import Events from '../events/Events';
import ClubEvent from '../events/ClubEvent';
import Basics from '../basics/Basics';
import Glossary from '../glossary/Glossary';
import GlossaryPage from '../glossary/GlossaryPage';
import Store from '../store/Store';
import Profile from '../profile/Profile.js';
import AppHeader from './AppHeader.js';
import Search from '../search/Search.js';
import Settings from '../profile/Settings';
import Signup from '../landing/Signup.js';
import Login from '../landing/Login.js';


class AppView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <NativeRouter history={history} >
        <View style={styles.container}>
          <RouterBackButton />
          <Route path="/" component={AppHeader} />
          <View style={styles.mainContainer}>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/articles" component={Articles} />
            <Route path="/article" component={Article} />
            <Route path="/podcasts" component={Podcasts} />
            <Route path="/videos" component={Videos} />
            <Route path="/events" component={Events} />
            <Route path="/clubevent" component={ClubEvent} />
            <Route path="/basics" component={Basics} />
            <Route path="/glossary" component={Glossary} />
            <Route path="/glossarypage" component={GlossaryPage} />
            <Route path="/store" component={Store} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
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
