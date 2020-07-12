import {StyleSheet} from 'react-native';
// Aquí lo hago diferente que el styles.js de DETAIL
import colors from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  listado: {},
  nombreActor: {
    color: 'white',
    fontSize: 16,
    margin: 5,
    textTransform: 'uppercase',
  },
});
// styles de HOME
