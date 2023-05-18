import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ContentScreen from '../ContentScreen/ContentScreen';
import { FontSize, Colors } from '../../theme/Variables';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme';
const ScreenComponent = ({ data }) => {
  return (
    <>
      <View style={styles.ImageContianer}>
        <ImageBackground
          style={styles.ImageStyle}
          source={require('../../theme/assets/images/painting.jpeg')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentStyle}>
        <ContentScreen data={data} onPress={() => console.log('hello')} />
      </View>
    </>
  );
};
export default ScreenComponent;
const styles = StyleSheet.create({
  skipContainer: {
    alignItems: 'flex-end',
    paddingBottom: hp('1%'),
  },
  ImageContianer: {
    flex: 1,
  },
  ImageStyle: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
