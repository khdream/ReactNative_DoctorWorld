import {colors} from '../shared/constant';

export const tabOptions = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      height: 0,
    },
    activeTintColor: colors.blue,
    inactiveTintColor: colors.dark,
    style: {
      backgroundColor: colors.bright,
    },
  },
};

export const stackOptionsOn = title => ({
  title,
  headerTintColor: colors.white,
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: colors.bar,
    borderBottomWidth: 0,
  },
});

export const stackOptionsOff = title => ({
  title,
  header: null,
  headerTintColor: colors.white,
  headerBackTitle: 'Back',
  headerStyle: {
    backgroundColor: colors.creamy,
    borderBottomWidth: 0,
  },
});
