import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Splash extends React.Component {
  // AL MONTAR vete a la página principal HOME
  componentDidMount() {
    setTimeout(() => Actions.replace('Home'), 4000);
  }

  // RENDER
  render() {
    const image = require('../../../assets/img/portada.png');
    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
      </View>
    );
  }
}

export default Splash;
