import React from 'react'
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import MenuLinks from './MenuLinks';

const Menu = (props) => (
    props.show 
    ? <MenuLinks />
    : null
)

const mapStateToProps = state => ({
  show: state.show,
});

export default connect(mapStateToProps)(Menu);
 