import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../theme';
import { ContentScreen, CustomButton, ScreenComponent } from '../../components';
import { FontSize, Colors } from '../../theme/Variables';
import { Images } from '../../theme';
import { ContainerStyle } from '../Commonstyle';

const onViewableItemsChanged = ({ viewableItems, changed }) => {
  console.log('Visible items are', viewableItems);
  console.log('Changed in this iteration, ', changed);
};

const StartingScreen = () => {
  const [flatListRef, setFlatListRef] = useState(null);
  let index = 0;
  const obj = [
    {
      id: 0,
      title: 'intelligent Screen',
      header: 'Discover All Kind of Plants in the World',
      imageUrl: '../../theme/assets/images/painting.jpeg',
      content:
        'Quickly scan the plant and find , in our complete catalog, everythis about the plant you want.',
    },
    {
      id: 1,
      title: 'welcome',
      header: 'Discover All Kind of Plants in the World',
      imageUrl: '../../theme/assets/images/painting.jpeg',
      content:
        'Quickly scan the plant and find , in our complete catalog, everythis about the plant you want.',
    },
    {
      id: 2,
      title: 'Cute',
      header: 'Discover All Kind of Plants in the World',
      imageUrl: '../../theme/assets/images/painting.jpeg',
      content:
        'Quickly scan the plant and find , in our complete catalog, everythis about the plant you want.',
    },
  ];
  const viewabilityConfig = {
    waitForInteraction: true,
    viewAreaCoveragePercentThreshold: 30,
  };
  const FlatListItemSeparator = () => {
    return <View style={{ marginLeft: 10, marginRight: 10 }} />;
  };
  return (
    <View style={ContainerStyle.mainContainer}>
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={() => console.log('hllo')}>
          <Text style={{ fontSize: FontSize.small, color: Colors.lightBlack }}>
            SKIP
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        initialScrollIndex={0}
        ref={ref => setFlatListRef(ref)}
        pagingEnabled
        horizontal={true}
        data={obj}
        showsHorizontalScrollIndicator={false}
        /*      onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig} */
        keyExtractor={item => item.id}
        disableIntervalMomentum={true}
        renderItem={({ item, index }) => {
          console.log(index, 'index of item');
          return (
            <View style={{ width: wp('94%') }}>
              <ScreenComponent data={item} />
            </View>
          );
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text>-----</Text>
        <CustomButton
          title="Next"
          onPress={() => {
            console.log(flatListRef, 'flat list ref');
            if (index < 2) {
              index = index + 1;
            }
            setTimeout(() => flatListRef.scrollToIndex({ index: index }), 200);
          }}
          style={{ borderWidth: 1 }}
        />
      </View>
    </View>
  );
};
export default StartingScreen;
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
