import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';

import {stackOptionsOff, stackOptionsOn} from '../utils';
import {colors} from '../shared/constant';

const HospitalStack = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: stackOptionsOff(''),
  },
});

export default HospitalStack;
