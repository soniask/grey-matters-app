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
import Podcast from '../podcasts/Podcast';
import Videos from '../videos/Videos';
import Video from '../videos/Video';
import Events from '../events/Events';
import ClubEvent from '../events/ClubEvent';
import Basics from '../basics/Basics';
import Terms from '../terms/Terms';
import Term from '../terms/Term';
import Store from '../store/Store';
import Profile from '../profile/Profile.js';
import AppHeader from './AppHeader.js';
import Search from '../search/Search.js';
import Settings from '../profile/Settings';
import Signup from '../landing/Signup.js';
import Login from '../landing/Login.js';
import EditProfile from '../profile/EditProfile';


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
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:id" component={Article} />
            <Route exact path="/podcasts" component={Podcasts} />
            <Route exact path="/podcasts/:id" component={Podcast} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos/:id" component={Video} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/events/:id" component={ClubEvent} />
            <Route exact path="/basics" component={Basics} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/terms/:id" component={Term} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/editProfile" component={EditProfile} />
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
