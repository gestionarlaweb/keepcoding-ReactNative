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
import _ from 'lodash';

class AddActor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      happy: '',
      rol: '',
      image: null,
      errors: {},
    };
  }

  // Guardar el Actor
  _onSubmit = () => {
    const {name, happy, rol, image} = this.state;
    const {actor, postActor} = this.props;

    const errors = {};

    if (!name || name.length < 3) {
      errors.name = 'Campo obligatorio y mínimo 3 caracteres';
    }
    if (!happy) {
      errors.happy = 'Campo obligatorio';
    }

    this.setState({errors});
    // Si hay tamaño de errors lanza un Return
    if (_.size(errors)) {
      return;
    }
    const data = {
      //getActor: actor.char_id,
      nombre: name,
      cumple: happy,
    };
    // Recogemos los datos en el formulario
    postActor(data);
  };

  render() {
    const {name, happy, rol, image, errors} = this.state;
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          label={'Nombre'}
          value={name}
          onChangeText={v => this.setState({name: v})}
          placeholder={'Introduce el nombre'}
          style={styles.input}
          error={errors.name}
        />
        <Input
          label={'Fecha nacimiento'}
          value={happy}
          onChangeText={v => this.setState({happy: v})}
          placeholder={'Introduce la fecha de nacimiento'}
          style={styles.input}
          error={errors.happy}
        />
        <Button
          label={'Guardar'}
          loading={loading}
          onPress={this._onSubmit}
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
