import React, {Component} from 'react';
import {Image} from 'react-native';
import {colors} from './screen/shared/constant';
import {stackOptionsOff, stackOptionsOn} from './screen/utils';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SinginPage from './screen/auth/SinginPage';
import SingupPage from './screen/auth/SingupPage';
import MedicineStack from './screen/medecine/MedicineStack';
import DoctorStack from './screen/doctor/DoctorStack';
import HospitalStack from './screen/hospital/HospitalStack';
import AppointStack from './screen/appointment/AppointStack';
import MoreStack from './screen/more/MoreStack';

const AppStack = createBottomTabNavigator(
  {
    Medicine: {
      screen: MedicineStack,
    },
    Doctor: {
      screen: DoctorStack,
    },
    Hospitals: {
      screen: HospitalStack,
    },
    Appts: {
      screen: AppointStack,
    },
    More: {
      screen: MoreStack,
    },
    // Settings
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Medicine') {
          return (
            <Image
              source={require('./assets/icon/medicine.png')}
              focused={focused}
              style={{
                width: 30,
                height: 30,
                opacity: focused ? 1 : 0.2,
              }}
            />
          );
        }
        if (routeName === 'Doctor') {
          return (
            <Image
              source={require('./assets/icon/doctor.png')}
              focused={focused}
              style={{width: 30, height: 30, opacity: focused ? 1 : 0.2}}
            />
          );
        }
        if (routeName === 'Hospitals') {
          return (
            <Image
              source={require('./assets/icon/hospital.png')}
              focused={focused}
              style={{width: 30, height: 30, opacity: focused ? 1 : 0.2}}
            />
          );
        }
        if (routeName === 'Appts') {
          return (
            <Image
              source={require('./assets/icon/appo.png')}
              focused={focused}
              style={{width: 30, height: 30, opacity: focused ? 1 : 0.2}}
            />
          );
        }
        if (routeName === 'More') {
          return (
            <Image
              source={require('./assets/icon/more.png')}
              focused={focused}
              style={{width: 30, height: 30, opacity: focused ? 1 : 0.2}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      showLabel: true,
      labelStyle: {
        fontSize: 15,
        // font:'Footlight MT Light',
        textAlign: 'center',
      },
      tabStyle: {
        // backgroundColor: colors.creamy,
        //  height: 70,
        // paddingBottom: 5,
      },
      activeTintColor: colors.bar,
      inactiveTintColor: colors.grey,
      activeBackgroundColor: colors.bright,
    },
  },
);

const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    SingIn: {
      screen: SinginPage,
      navigationOptions: {
        header: null,
      },
    },
    //First entry by default be our first screen if we do not define initialRouteName
    SingUp: {
      screen: SingupPage,
      navigationOptions: {
        title: 'Register Now',
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        headerStyle: {
          backgroundColor: colors.bar,
          borderBottomWidth: 0,
        },
      },
    },
    AppStack: {screen: AppStack, navigationOptions: stackOptionsOff('')},
  },
  {
    initialRouteName: 'AppStack',
  },
);
export default createAppContainer(App);
console.disableYellowBox = true;
