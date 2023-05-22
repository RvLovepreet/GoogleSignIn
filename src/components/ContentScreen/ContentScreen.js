import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontSize, Colors } from '../../theme/Variables';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../CustomButton/CustomButton';
const ContentScreen = ({ onPress, data }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{data.title}</Text>
        <Text style={styles.title}>
          {data.header}
          {/*   {'Discover All Kind \nof plants in the world'} */}
        </Text>
      </View>
      <Text style={styles.content}>{data.content}</Text>
    </>
  );
};
export default ContentScreen;
const styles = StyleSheet.create({
  headerContainer: { justifyContent: 'space-around', padding: wp('2%') },
  header: {
    fontSize: hp('2%'),
    fontWeight: '800',
    color: Colors.primary,
    textTransform: 'uppercase',
    marginBottom: hp('2%'),
  },
  title: {
    fontSize: hp('4%'),
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  content: {
    fontSize: hp('2%'),

    color: Colors.text,
    letterSpacing: 0,
    padding: wp('2%'),
  },
});
