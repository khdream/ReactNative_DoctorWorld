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
import {categories} from '../data/dataArray';
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
        require('../../assets/image/medicine_back.png'),
        require('../../assets/image/medicine_back.png'),
        require('../../assets/image/medicine_back.png'),
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

  render() {
    const {navigation} = this.props;
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<MyCustomLeftComponent />}
          centerComponent={{
            text: 'Medicine',
            style: {fontSize: 18, color: '#fff'},
          }}
          // rightComponent={{icon: 'shopping-cart', color: '#fff'}}
          rightComponent={
            <MyCustomRightComponent
              onList={() => {
                navigation.navigate('Shoplist');
              }}
            />
          }
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
        <View style={styles.label_box}>
          <Text style={styles.label}>
            {'We ensure the lowest'}
            {'\n'}
            {'and best price for'}
            {'\n'}
            {'each medicine'}
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <SearchBar
            round
            searchIcon={{size: 24}}
            placeholder="Seache medicines..."
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
            data={categories}
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={this.renderCategory}
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
  label: {color: colors.black, fontSize: 20},
  label_box: {position: 'absolute', left: 30, top: 150},
  categoriesItemContainer: {
    width: 110,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    // paddingVertical: 20,
    margin: 5,
  },
  categoriesName: {color: colors.black, fontSize: 16, textAlign: 'center'},
  categoriesPhoto: {width: 80, height: 80},
});
