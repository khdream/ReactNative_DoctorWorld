import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import MyProfile from './MyProfile';
import MyAddress from './MyAddress';
import FAQs from './FAQs';

import {stackOptionsOff, stackOptionsOn} from '../utils';
import {colors} from '../shared/constant';

const MoreStack = createStackNavigator({
  home: {
    screen: HomeScreen,
    navigationOptions: stackOptionsOff(''),
  },
  MyProfile: {
    screen: MyProfile,
    navigationOptions: stackOptionsOn('My Profile'),
  },
  MyAddress: {
    screen: MyAddress,
    navigationOptions: stackOptionsOn('My Address'),
  },
  FAQs: {
    screen: FAQs,
    navigationOptions: stackOptionsOn('FAQs'),
  },
});

export default MoreStack;
