import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { CustomButton, ScreenComponent, Paginator } from '../../components';
import { ContainerStyle } from '../Commonstyle';
import { Content } from '../../theme/Constent';
import Header from './utils/header';
import { Common } from '../../theme/Variables';
import { ImagePath } from '../../theme/Variables';
const StartingScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const [flatListRef, setFlatListRef] = useState(null);
  const [viewIndex, setViewIndex] = useState(0);

  const findIndex = onScroll => {
    const contentOffsetX = onScroll.nativeEvent.contentOffset.x;
    const itemIndex = Math.round(contentOffsetX / width);
    console.log(itemIndex, ' ', contentOffsetX, 'dsafdsfa');
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
      <Header
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />

      <FlatList
        ref={ref => setFlatListRef(ref)}
        pagingEnabled={true}
        snapToInterval={width}
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
        {viewIndex === 2 ? (
          <>
            <Paginator
              Content={Content}
              customStyle={styles.customStyle}
              indexofView={viewIndex}
            />
            <CustomButton
              title={Common.start}
              CustomStyle={styles.customStyle}
              onPress={() => jumpToNext()}
            />
          </>
        ) : (
          <>
            <Paginator Content={Content} indexofView={viewIndex} />
            <CustomButton title={Common.next} onPress={() => jumpToNext()} />
          </>
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
  customStyle: {
    backgroundColor: '#e6db43',
  },
});
