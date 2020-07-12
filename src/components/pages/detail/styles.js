import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '70%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.main,
    alignItems: 'center',
    //justifyContent: 'center',
    margin: 2,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    margin: 5,
    textTransform: 'uppercase',
  },
});

export default styles;
// styles de DETAIL
