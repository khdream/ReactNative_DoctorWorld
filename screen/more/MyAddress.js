import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {colors} from '../shared/constant';
//import all the components we are going to use.

export default class MyAddress extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.val}>Saved Addresses</Text>
        <ScrollView>
          <View style={styles.blue_frm}>
            <View>
              <Image source={require('../../assets/icon/home.png')} />
              <Text style={styles.font1}>home</Text>
            </View>
            <View>
              <Text style={styles.font2}>14134, Silver Green Street,</Text>
              <Text style={styles.font2}>2nd Avenue, Hemiltone,</Text>
              <Text style={styles.font2}>New York, USA</Text>
            </View>
          </View>
          <View style={styles.white_frm}>
            <View>
              <Image source={require('../../assets/icon/office.png')} />
              <Text style={styles.font3}>Office</Text>
            </View>
            <View>
              <Text style={styles.font4}>14134, Silver Green Street,</Text>
              <Text style={styles.font4}>2nd Avenue, Hemiltone,</Text>
              <Text style={styles.font4}>New York, USA</Text>
            </View>
          </View>
          <View style={styles.white_frm}>
            <View>
              <Image source={require('../../assets/icon/other.png')} />
              <Text style={styles.font3}>Other</Text>
            </View>
            <View>
              <Text style={styles.font4}>14134, Silver Green Street,</Text>
              <Text style={styles.font4}>2nd Avenue, Hemiltone,</Text>
              <Text style={styles.font4}>New York, USA</Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.frm}>
          <Text style={styles.font5}>+ Add New Location</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  blue_frm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bar,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  white_frm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  frm: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  font1: {textAlign: 'center', color: colors.white, fontSize: 16},
  font2: {color: colors.white, fontSize: 16},
  font3: {textAlign: 'center', color: colors.black, fontSize: 16},
  font4: {color: colors.black, fontSize: 16},
  font5: {color: colors.bar, fontSize: 18, fontWeight: 'bold'},

  val: {
    paddingVertical: 20,
    color: colors.black,
    fontSize: 18,
  },
});
