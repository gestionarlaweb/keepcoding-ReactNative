import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import styles from './styles';

class AddActor extends React.Component {
  render() {
    return <SafeAreaView style={styles.container} />;
  }
}

AddActor.propTypes = {};

export default AddActor;
