import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import {colors} from '../shared/constant';
//import all the components we are going to use.

export default class MyProfile extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{height: 200, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar
            size={100}
            rounded
            source={require('../../assets/image/avata.png')}
          />
          <View style={styles.badge}>
            <Icon
              type="ionicon"
              name="ios-camera"
              color={colors.white}
              size={25}
            />
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.val}>987 654 3210</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Full Name</Text>
          <Text style={styles.val}>Samantha Smith</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Email Address</Text>
          <Text style={styles.val}>samsmith@mail.com</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 15,
  },
  label: {color: colors.grey, fontSize: 16},
  val: {
    flex: 1,
    color: colors.black,
    fontSize: 16,
    textAlign: 'right',
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bar,
    width: 30,
    height: 30,
    borderRadius: 15,
    position: 'relative',
    top: -50,
    right: -50,
  },
});
