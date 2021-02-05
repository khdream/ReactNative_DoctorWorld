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
import {SearchBar, Header, ListItem, Icon} from 'react-native-elements';
import {colors} from '../shared/constant';
import {doctor_categories} from '../data/dataArray';
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
        require('../../assets/image/doctor_back.png'),
        require('../../assets/image/doctor_back.png'),
        require('../../assets/image/doctor_back.png'),
      ],
    };
  }

  updateSearch = search => {
    this.setState({search: search});
  };

  renderCategory = ({item}) => (
    <TouchableOpacity
    // onPress={() => this.onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={item.photo} />
        <Text style={styles.categoriesName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  renderCategory = ({item}) => (
    <TouchableOpacity
    // onPress={() => this.onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={item.photo} />
        <Text style={styles.categoriesName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  renderList = ({item}) => (
    <TouchableOpacity
    // onPress={() => this.onPressCategory(item)}
    >
      <View style={styles.listitem}>
        <Text style={{color: colors.black}}>{item.item}</Text>
        <Text style={{color: colors.grey}}>{item.num}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const list = [
      {item: 'Addiction psychiatrist', num: 124},
      {item: 'Adolescent medicine specialist', num: 144},
      {item: 'Allergist(immunologist)', num: 112},
      {item: 'Anesthesiologist', num: 56},
      {item: 'Cardiac electrophysiolgist', num: 98124},
      {item: 'Addiction psychiatrist', num: 144},
      {item: 'Adolescent medicine specialist', num: 112},
      {item: 'Allergist(immunologist)', num: 56},
      {item: 'Anesthesiologist', num: 85},
    ];
    const {navigation} = this.props;
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<MyCustomLeftComponent />}
          centerComponent={{
            text: 'DoctorWorld',
            style: {fontSize: 18, color: '#fff'},
          }}
          // rightComponent={{icon: 'shopping-cart', color: '#fff'}}

          backgroundColor={colors.bar}
        />
        <View style={{height: 200}}>
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            dotColor={colors.bar}
            inactiveDotColor="#90A4AE"
            autoplay="true"
            circleLoop="true"
          />
        </View>
        <View style={styles.label_box1}>
          <Text style={styles.label1}>
            {'Consult with'}
            {'\n'}
            {'expert doctors...'}
          </Text>
        </View>
        <View style={styles.label_box2}>
          <Text style={styles.label2}>
            {'Book your'}
            {'\n'}
            {'Appointment Now'}
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <SearchBar
            round
            searchIcon={{size: 24}}
            placeholder="Doctor, specialities, clinic, hospital..."
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

        <FlatList
          data={doctor_categories}
          horizontal
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
        <View style={{width: '100%', padding: 15}}>
          <Text style={{fontSize: 18, color: colors.grey}}>
            List of specialities
          </Text>
        </View>
        <ScrollView style={{width: '100%'}}>
          <FlatList
            data={list}
            renderItem={this.renderList}
            keyExtractor={item => `${item.id}`}
          />
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
  label1: {color: colors.black, fontSize: 18},
  label2: {color: colors.bar, fontSize: 18},

  label_box1: {position: 'absolute', left: 30, top: 120},
  label_box2: {position: 'absolute', left: 30, top: 180},

  categoriesItemContainer: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    // paddingVertical: 20,
    margin: 3,
  },
  categoriesName: {color: colors.black, fontSize: 16, textAlign: 'center'},
  categoriesPhoto: {width: 50, height: 50},
  listitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 10,
  },
});
