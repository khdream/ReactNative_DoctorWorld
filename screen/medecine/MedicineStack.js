import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../medecine/HomeScreen';
import Shoplist from '../medecine/Shoplist';

import {stackOptionsOff, stackOptionsOn} from '../utils';
import {colors} from '../shared/constant';

const MedicineStack = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: stackOptionsOff(''),
  },
  Shoplist: {
    screen: Shoplist,
    navigationOptions: stackOptionsOn('Shop by category'),
  },
});

export default MedicineStack;
