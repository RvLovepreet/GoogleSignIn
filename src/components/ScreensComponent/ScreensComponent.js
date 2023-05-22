import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import ContentScreen from '../ContentScreen/ContentScreen';
import { FontSize, Colors } from '../../theme/Variables';
import { ImagePath } from '../../theme/Variables';
const ScreenComponent = ({ data }) => {
  return (
    <>
      <View style={styles.ImageContianer}>
        <ImageBackground
          style={styles.ImageStyle}
          source={ImagePath.painting}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentStyle}>
        <ContentScreen data={data} />
      </View>
    </>
  );
};
export default ScreenComponent;
const styles = StyleSheet.create({
  skipContainer: {
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  ImageContianer: {
    flex: 1,
    padding: 10,
  },
  ImageStyle: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
