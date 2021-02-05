import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../shared/constant';
import MapView, {
  PROVIDER_GOOGLE,
  AnimatedRegion,
  Animated,
} from 'react-native-maps';

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class FAQs extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  getInitialState() {
    return {
      region: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    };
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      // <View style={styles.container}>
      <MapView style={{flex: 1}} />
      // </View>
      // <Animated
      //   region={this.state.region}
      //   onRegionChange={this.onRegionChange}
      // />
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
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  label: {color: colors.grey, fontSize: 16},
  val: {
    // flex: 1,
    color: colors.black,
    fontSize: 16,
    textAlign: 'right',
  },
});
