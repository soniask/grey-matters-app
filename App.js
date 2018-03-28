import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native'

import { NativeRouter, Route, Link } from 'react-router-native'

const Home = () => (
  <Text style={styles.header}>
    Home
  </Text>
)

const Articles = () => (
  <Text style={styles.header}>
    Articles
  </Text>
)

const Podcasts = () => (
  <Text style={styles.header}>
    Podcasts
  </Text>
)

const Events = () => (
  <Text style={styles.header}>
    Events
  </Text>
)

const Basics = () => (
  <Text style={styles.header}>
    The Basics
  </Text>
)

const Glossary = () => (
  <Text style={styles.header}>
    Glossary
  </Text>
)

const Store = () => (
  <Text style={styles.header}>
    Store
  </Text>
)

const Topic = ({ match }) => (
  <Text style={styles.topic}>
    {match.params.topicId}
  </Text>
)

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
          <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
          <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
          <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <Text style={styles.topic}>Please select a topic.</Text>
    )} />
  </View>
)

export default class App extends React.Component {
  render () {
    return (
      <NativeRouter>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link
                to="/"
                underlayColor='#f0f4f7'
                style={styles.navItem}>
                  <Text>Home</Text>
              </Link>
              <Link
                to="/articles"
                underlayColor='#f0f4f7'
                style={styles.navItem}>
                  <Text>Articles</Text>
              </Link>
              <Link
                to="/podcasts"
                underlayColor='#f0f4f7'
                style={styles.navItem} >
                  <Text>Podcasts</Text>
              </Link>
              <Link
                to="/events"
                underlayColor='#f0f4f7'
                style={styles.navItem} >
                  <Text>Events</Text>
              </Link>
              <Link
                to="/basics"
                underlayColor='#f0f4f7'
                style={styles.navItem} >
                  <Text>The Basics</Text>
              </Link>
              <Link
                to="/glossary"
                underlayColor='#f0f4f7'
                style={styles.navItem} >
                  <Text>Glossary</Text>
              </Link>
              <Link
                to="/store"
                underlayColor='#f0f4f7'
                style={styles.navItem} >
                  <Text>Store</Text>
              </Link>
            </View>

            <Route exact path="/" component={Home}/>
            <Route path="/articles" component={Articles}/>
            <Route path="/podcasts" component={Podcasts}/>
            <Route path="/events" component={Events}/>
            <Route path="/basics" component={Basics}/>
            <Route path="/glossary" component={Glossary}/>
            <Route path="/store" component={Store}/>
          </View>
        </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    padding: 10,
  },
  header: {
    flex: 1,
    fontSize: 20,
  },
  nav: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})
