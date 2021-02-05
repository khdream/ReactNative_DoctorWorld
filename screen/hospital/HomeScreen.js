import React, {Component} from 'react';
//import react in our code.
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {SearchBar, Header, Icon} from 'react-native-elements';
import {colors} from '../shared/constant';
import {hospitals} from '../data/dataArray';
import PropTypes from 'prop-types';

class MyCustomRightComponent extends Component {
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={this.props.onList}
        // onPress={() => navigate('Shoplist')}
      >
        <Icon name="shopping-cart" color={colors.white} />
      </TouchableOpacity>
    );
  }
}

class MyCustomLeftComponent extends Component {
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="location-on" color={colors.white} />
        <Text style={{color: colors.white}}>Wallington</Text>
      </View>
    );
  }
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      images: [
        require('../../assets/image/hospital_back.png'),
        require('../../assets/image/hospital_back.png'),
        require('../../assets/image/hospital_back.png'),
      ],
    };
  }

  updateSearch = search => {
    this.setState({search: search});
  };
  renderCategory = ({item}) => (
    <View style={styles.categoriesItemContainer}>
      <View style={styles.rowStyle}>
        <View>
          <Text style={styles.categoriesName}>{item.name}</Text>
          <Text style={styles.label2}>{item.rating}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: colors.white}}>Call Now</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.photo1} style={styles.categoriesPhoto} />
          <Image source={item.photo2} style={styles.categoriesPhoto} />
          <Image source={item.photo3} style={styles.categoriesPhoto} />
          <Image source={item.photo4} style={styles.categoriesPhoto} />
          <Image source={item.photo5} style={styles.categoriesPhoto} />
        </View>
      </ScrollView>
      <View style={styles.rowStyle}>
        <View>
          <Text style={styles.label2}>{item.address}</Text>
        </View>

        <Text style={styles.label1}>Get Direction</Text>
      </View>
    </View>
  );

  render() {
    const {navigation} = this.props;
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<MyCustomLeftComponent />}
          centerComponent={{
            text: 'Hospitals',
            style: {fontSize: 18, color: '#fff'},
          }}
          rightComponent={{icon: 'map', color: '#fff'}}
          backgroundColor={colors.bar}
        />
        <View>
          <Image
            style={{resizeMode: 'stretch'}}
            source={require('../../assets/image/hospital_back.png')}
          />
        </View>
        <View style={styles.label_box1}>
          <Text style={{fontSize: 18, color: colors.black}}>
            {'Get to know'}
            {'\n'}
            {'about nearby'}
            {'\n'}
            {'Hospitals.'}
          </Text>
        </View>

        <View style={styles.viewStyle}>
          <SearchBar
            round
            searchIcon={{size: 24}}
            placeholder="Search Hospital Clinics, health center..."
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={styles.containerStyle}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: colors.black,
              backgroundColor: 'white',
            }}
          />
        </View>
        <ScrollView>
          <FlatList
            data={hospitals}
            renderItem={this.renderCategory}
            keyExtractor={item => `${item.id}`}
          />
          {/* {this.list()} */}
        </ScrollView>
      </View>
    );
  }
}

MyCustomRightComponent.propTypes = {
  // onPress: PropTypes.func,
  // photo: PropTypes.string,
  // name: PropTypes.string,
  // sex: PropTypes.string,
  // age: PropTypes.string,
  // country: PropTypes.string,
  // userid: PropTypes.string,
  onList: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  viewStyle: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  containerStyle: {
    borderTopColor: 'white',
    borderBottomColor: 'white',
    backgroundColor: 'white',
  },
  rowStyle: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label1: {color: colors.bar, fontSize: 16},
  label2: {color: colors.grey, fontSize: 16},

  label_box1: {position: 'absolute', left: 40, top: 100},
  label_box2: {position: 'absolute', left: 30, top: 180},
  btn: {
    backgroundColor: colors.bar,
    borderRadius: 5,
    padding: 10,
  },
  categoriesItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    // paddingVertical: 20,
    margin: 5,
  },
  categoriesName: {color: colors.black, fontSize: 18},
  categoriesPhoto: {width: 100, height: 80, margin: 5},
});
