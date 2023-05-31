import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CustomButton, CustomHeader, Loader } from '../../components';
import { Common } from '../../theme/Variables';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { useUploadImageMutation } from '../../services/modules/users';
import { ImagePath } from '../../theme/Variables';
import axios from 'axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ImageUpload = () => {
  const [uploadImage, { isLoading, isError }] = useUploadImageMutation();
  const [uri, setUri] = useState('');
  const [loader, setLoader] = useState(false);
  const pickPicture = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    setLoader(true);
    console.log(image.mime, 'hello 1 ');
    const data = await uploadImage(image);
    console.log(data, 'hello2');
    // setUri(data.path);
    setUri(data?.data?.status?.image_url);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader size={60} />
      ) : (
        <>
          <CustomHeader title={Common.UploadImage} />
          <View style={styles.container}>
            <Image
              source={uri ? { uri: uri } : ImagePath.userImage}
              style={styles.ImageStyle}
            />

            <CustomButton
              title={Common.UploadImage}
              onPress={() => pickPicture()}
            />
          </View>
        </>
      )}
    </>
  );
};
export default ImageUpload;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    width: hp('15%'),
    height: hp('15%'),
    marginBottom: wp('20%'),
    borderRadius: 100,
  },
});
