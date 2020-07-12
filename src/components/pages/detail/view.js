import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

class Detail extends Component {
  render() {
    console.log('Props recibidas:', this.props);
    const {item} = this.props;
    const image = item.img
      ? {uri: item.img}
      : require('../../../assets/img/placeholder.png');
    //const image = require('../../../assets/img/placeholder.png');
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.texto}>{`Nombre del actor: ${item.name}`}</Text>
          <Text style={styles.texto}>{`Fecha nacimiento: ${
            item.birthday
          }`}</Text>
          <Text style={styles.texto}>{`Rol en la serie: ${item.status}`}</Text>
        </View>
      </View>
      // <Image source={{uri: item.img}} />
      // <Text>{('Actor:', title)}</Text>
    );
  }
}

export default Detail;
