import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {colors} from '../shared/constant';
import styles from '../shared/styles';

export default class SingupPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            // backgroundColor: 'green',
            height: '20%',
          }}>
          <Text style={{alignItems: 'center', fontSize: 18}}>
            Your phone number is not registered yet. Let us know basic details
            for registration.
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            justifyContent: 'space-around',
            height: '30%',
          }}>
          <View style={styles.item}>
            <Text style={styles.placeholder}>Phone Number</Text>
            <TextInput style={styles.item_input} keyboardType={'numeric'} />
          </View>
          <View style={styles.item}>
            <Text style={styles.placeholder}>Full Name</Text>
            <TextInput style={styles.item_input} />
          </View>
          <View style={styles.item}>
            <Text style={styles.placeholder}>Email Address</Text>
            <TextInput style={styles.item_input} keyboardType={'email'} />
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigate('AppStack')}>
            <Text style={styles.font2}>Continue</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigate('SingIn')}>
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Back to sign in
          </Text>
        </TouchableOpacity>
        <View style={{paddingBottom: 20}}>
          <Text style={{textAlign: 'center', fontSize: 16}}>
            {"We'll send an OTP on above"}
            {'\n'} {'given phone number'}
          </Text>
        </View>
      </View>
    );
  }
}
