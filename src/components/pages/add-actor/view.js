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
import {Input} from '../../atoms';
import styles from './styles';
import Button from '../../atoms/button/view';

class AddActor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      happy: '',
      rol: '',
      image: null,
    };
  }

  // Guardar el Actor
  _onSubmit = () => {
    const {name, happy, rol, image} = this.state;
    const {actor} = this.props;
    const data = {
      getActor: actor.char_id,
      nombre: name,
      cumple: happy,
    };
    this.props.postActor(data);
  };

  render() {
    const {name, happy, rol, image} = this.state;
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          label={'Nombre'}
          value={name}
          onChangeText={v => this.setState({name: v})}
          placeholder={'Introduce el nombre'}
          style={styles.input}
        />
        <Input
          label={'Fecha nacimiento'}
          value={happy}
          onChangeText={v => this.setState({happy: v})}
          placeholder={'Introduce la fecha de nacimiento'}
          style={styles.input}
        />
        <Button
          label={'Guardar'}
          loading={loading}
          onPress={() => {}}
          style={styles.button}
        />
      </SafeAreaView>
    );
  }
}

AddActor.propTypes = {
  loading: PropTypes.bool,
  actor: PropTypes.object,
  postActor: PropTypes.func,
};

export default AddActor;
