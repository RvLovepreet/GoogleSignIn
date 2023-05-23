import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CustomButton, MyModal } from '../../components';
/* import { CustomModal } from '../../components'; */
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FileUploadScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fileInfo, setFileInfo] = useState({});
  const showModal = () => {
    setModalVisible(!modalVisible);
    console.log('hello', modalVisible);
  };

  const UploadFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      //Printing the log realted to the file
      /*    console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size); */
      //Setting the state to show single file attributes
      console.log(res[0].fileCopyUri, 'file url');
      console.log(res[0], 'fileInfo');
      setFileInfo(res[0]);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const cancelAction = () => {
    setFileInfo(!fileInfo);
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => showModal()}>
        <Text>FileUpload</Text>
        <MyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPress={() => UploadFile()}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          cancelAction={cancelAction}
        />
      </TouchableOpacity>
      {/* <Image source={{ uri: fileInfo.uri }} /> */}
    </View>
  );
};
export default FileUploadScreen;
const styles = StyleSheet.create({
  modalStyle: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    borderColor: 'red',
    backgroundColor: '#111',
    opacity: 0.9,
  },
  modalContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    width: wp('80%'),
    height: hp('60%'),
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  modalHeader: {
    fontSize: hp('4%'),
    borderColor: 'red',
    backgroundColor: 'red',
  },
  modalClose: {
    color: '#111',
    alignSelf: 'flex-end',
  },
});
