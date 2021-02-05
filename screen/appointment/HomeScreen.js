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
import {SearchBar, ListItem, Header, Icon} from 'react-native-elements';
import {colors} from '../shared/constant';
import {upAppoint, pastAppoint} from '../data/dataArray';
import {
  getDoctorNameById,
  getDoctorJobById,
  getDoctoraddressById,
  getDoctorPhotoById,
} from '../data/MockDataAPI';
import PropTypes from 'prop-types';

export default class HomeScreen extends Component {
  renderRecipes = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.dateitem}>
        <Text style={styles.date_fnt}>{item.date}</Text>
        <Text style={styles.day_fnt}>{item.day}</Text>
        <Text style={styles.time_fnt}>{item.time}</Text>
      </View>
      <View
        style={
          {
            // backgroundColor: 'green',
          }
        }>
        <ListItem
          title={getDoctorNameById(item.doctorid)}
          titleStyle={styles.title}
          subtitle={getDoctorJobById(item.doctorid)}
          subtitleStyle={styles.subtitle}
          leftAvatar={{source: getDoctorPhotoById(item.doctorid)}}
          // bottomDivider
          chevron
        />
        <Text style={styles.subtitle}>
          {getDoctoraddressById(item.doctorid)}
        </Text>
      </View>
    </View>
  );
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'Appointment',
            style: {fontSize: 18, color: '#fff'},
          }}
          backgroundColor={colors.bar}
        />
        <View style={styles.title_item}>
          <Text style={styles.title_label}>Upcoming Appointments</Text>
        </View>

        <FlatList
          data={upAppoint}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
        <View style={styles.title_item}>
          <Text style={styles.title_label}>Past Appointments</Text>
        </View>
        <FlatList
          data={pastAppoint}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.white,
    // marginVertical: 3,
  },
  itemContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
    marginVertical: 3,
    // width: '100%',
    flexDirection: 'row',
  },
  title: {fontSize: 18, color: colors.black},
  subtitle: {color: colors.grey},
  title_label: {fontSize: 16, color: colors.grey},
  title_item: {
    width: '100%',
    paddingLeft: 20,
    paddingVertical: 15,
  },
  date_fnt: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  day_fnt: {
    color: colors.bar,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateitem: {
    paddingVertical: 5,
    width: 70,
    borderRightColor: colors.grey,
    borderRightWidth: 2,
    alignItems: 'center',
  },
  time_fnt: {color: colors.grey, fontSize: 16, textAlign: 'center'},
});
