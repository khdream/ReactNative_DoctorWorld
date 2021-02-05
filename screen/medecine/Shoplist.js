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

export default class Shoplist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
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
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomColor: colors.grey,
    // borderBottomWidth: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    // paddingVertical: 20,
    // margin: 5,
  },
  categoriesName: {color: colors.grey, fontSize: 16, textAlign: 'center'},
  categoriesPhoto: {width: 90, height: 90},
});
