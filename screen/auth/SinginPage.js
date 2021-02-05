import React, {Component} from 'react';
//import react in our code.
import {StatusBar, View, Text, ImageBackground, TextInput} from 'react-native';
import {colors} from '../shared/constant';
import styles from '../shared/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SocialIcon} from 'react-native-elements';

export default class SinginPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={colors.bar}
          translucent={true}
        />
        <ImageBackground
          source={require('../../assets/image/back.png')}
          style={styles.background}>
          <Text style={styles.title}>DoctoWorld</Text>
          <Text style={styles.font1}>Welcome</Text>
          <Text style={styles.font2}>Please enter your mobile number</Text>

          <View style={{paddingTop: 80, paddingBottom: 10}}>
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              placeholder={'Mobile Number'}
            />
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigate('SingUp')}>
            <Text style={styles.font2}>Continue</Text>
          </TouchableOpacity>

          <View
            style={{
              height: '15%',
              justifyContent: 'flex-end',
              paddingBottom: 20,
            }}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              Or quick continue with
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <SocialIcon
              button
              style={{borderRadius: 10, flex: 1}}
              title="Facebook"
              type="facebook"
              onPress={() => {
                alert('facebook');
              }}
            />
            <SocialIcon
              button
              style={{backgroundColor: 'white', borderRadius: 10, flex: 1}}
              title="Gmail"
              iconColor="red"
              type="google"
              fontStyle={{color: 'black'}}
              onPress={() => {
                alert('Gmail');
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
