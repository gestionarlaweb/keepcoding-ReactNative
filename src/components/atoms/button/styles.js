import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    //alignSelf: 'center',
    minHeight: 46,
    flexDirection: 'row',
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  activityIndicator: {marginLeft: 8},
});
