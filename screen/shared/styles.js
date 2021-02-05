import {StyleSheet} from 'react-native';
import {colors} from '../shared/constant';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 10,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 120,
  },
  font1: {
    color: colors.white,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  font2: {
    color: colors.white,
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  black_font1: {color: colors.black, fontSize: 18, paddingLeft: 30},
  blue_font1: {
    color: colors.bar,
    fontSize: 18,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 10,
    marginHorizontal: 30,
    backgroundColor: colors.bar,
    paddingVertical: 10,
  },
  icon: {width: 30, height: 30, marginLeft: 20},
  input: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: colors.grey,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    // marginHorizontal: 20,
  },
  more_item: {alignItems: 'center', height: 70, flexDirection: 'row'},
  title_item: {
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
  },
  placeholder: {color: colors.grey, fontSize: 16},
  item_input: {flex: 1, textAlign: 'right', paddingRight: 10},
});

export default styles;
