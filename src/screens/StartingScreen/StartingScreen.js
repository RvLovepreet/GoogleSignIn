import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme';
import { CustomButton, ScreenComponent, Slider } from '../../components';
import { ContainerStyle } from '../Commonstyle';
import { Content } from '../../theme/Constent';
import Header from './utils/header';
import Footer from './utils/Footer';

const StartingScreen = ({ navigation }) => {
  const [flatListRef, setFlatListRef] = useState(null);
  let index = 0;
  const findIndex = onScroll => {
    const contentOffsetX = onScroll.nativeEvent.contentOffset.x;
    const itemIndex = Math.floor(contentOffsetX / 360);
    console.log('hello', index);
    index = itemIndex + 1;
  };
  const jumpToNext = () => {
    if (index == 0) {
      index = index + 1;
    } else if (index == 3) {
      navigation.navigate('SignIn');
    } else {
      setTimeout(() => flatListRef.scrollToIndex({ index: index }), 200);
    }
  };
  return (
    <View style={ContainerStyle.mainContainer}>
      <Button title="hello" onPress={() => navigation.navigate('SignIn')} />
      <Header onPress={() => console.log('hello') /*  */} />
      <FlatList
        ref={ref => setFlatListRef(ref)}
        pagingEnabled
        horizontal={true}
        data={Content}
        onScroll={findIndex}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        disableIntervalMomentum={true}
        renderItem={({ item }) => {
          return (
            <View style={{ width: wp('92%') }}>
              <ScreenComponent data={item} />
            </View>
          );
        }}
      />

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row' }}>
          {Content.map((arr, indexofarr) => (
            <Slider index={indexofarr} />
          ))}
        </View>
        <CustomButton title="Next" onPress={() => jumpToNext()} />
      </View>
    </View>
  );
};
export default StartingScreen;
const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
