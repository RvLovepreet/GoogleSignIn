import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme';
import {
  CustomButton,
  ScreenComponent,
  Slider,
  Paginator,
} from '../../components';
import { ContainerStyle } from '../Commonstyle';
import { Content } from '../../theme/Constent';
import Header from './utils/header';
import Footer from './utils/Footer';

const StartingScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const [flatListRef, setFlatListRef] = useState(null);
  const [viewIndex, setViewIndex] = useState(0);

  const findIndex = onScroll => {
    const contentOffsetX = onScroll.nativeEvent.contentOffset.x;
    const itemIndex = Math.floor(contentOffsetX / width);
    setViewIndex(itemIndex);
  };
  const jumpToNext = () => {
    if (viewIndex == 2) {
      navigation.navigate('SignIn');
    } else {
      setTimeout(() => {
        flatListRef.scrollToIndex({ index: viewIndex + 1 });
      }, 100);
    }
  };
  return (
    <View style={ContainerStyle.mainContainer}>
      <Header onPress={() => jumpToNext()} />
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
            <View style={{ width: width }}>
              <ScreenComponent data={item} />
            </View>
          );
        }}
      />

      <View style={styles.footer}>
        <Paginator Content={Content} indexofView={viewIndex} />
        {viewIndex === 2 ? (
          <CustomButton title="Start" onPress={() => jumpToNext()} />
        ) : (
          <CustomButton title="Next" onPress={() => jumpToNext()} />
        )}
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
    padding: hp('1%'),
  },
});
