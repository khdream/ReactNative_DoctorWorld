import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../doctor/HomeScreen';

import {stackOptionsOff, stackOptionsOn} from '../utils';
import {colors} from '../shared/constant';

const DoctorStack = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: stackOptionsOff(''),
  },
});

export default DoctorStack;
