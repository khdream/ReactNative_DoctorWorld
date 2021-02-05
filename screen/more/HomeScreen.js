import React, {Component} from 'react';
import styles from '../shared/styles';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-elements';
import {colors} from '../shared/constant';
//import all the components we are going to use.

export default class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container1}>
        <View
          style={{paddingLeft: 30, flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            size="large"
            rounded
            source={require('../../assets/image/avata.png')}
          />
          <View>
            <Text style={styles.black_font1}>Samantha Smith</Text>
            <Text style={{paddingLeft: 30, color: colors.grey}}>
              View Profile
            </Text>
          </View>
        </View>
        <View style={styles.title_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more1.png')}
          />
          <Text style={styles.blue_font1}>Track current order</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate('MyProfile')}
          style={styles.more_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more2.png')}
          />
          <Text style={styles.black_font1}>My Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('MyAddress')}
          style={styles.more_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more3.png')}
          />
          <Text style={styles.black_font1}>Saved Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.more_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more4.png')}
          />
          <Text style={styles.black_font1}>Contact us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.more_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more5.png')}
          />
          <Text style={styles.black_font1}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('FAQs')}
          style={styles.more_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more6.png')}
          />
          <Text style={styles.black_font1}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('SingIn')}
          style={styles.more_item}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/more7.png')}
          />
          <Text style={styles.black_font1}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
