import React, { useState } from 'react';
import { View, Text, Modal, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
/* import { CustomModal } from '../../components'; */
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MyModal = ({
  modalVisible,
  setModalVisible,
  onPress,
  fileInfo,
  setFileInfo,
  cancelAction,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          borderWidth: 1,
          flex: 1,
          justifyContent: 'center',
          borderColor: 'red',
          backgroundColor: '#111',
          opacity: 0.9,
        }}
      >
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 1,
            width: wp('80%'),
            height: hp('60%'),
            backgroundColor: '#fff',
            flexWrap: 'wrap',
            zIndex: 1,
          }}
        >
          <Text style={{ justifyContent: 'space-between', borderWidth: 1 }}>
            <Text
              style={{
                borderWidth: 1,
                borderColor: 'red',
                backgroundColor: 'red',
              }}
            >
              Choice File
            </Text>
            <Text
              style={{
                color: '#111',
                alignSelf: 'flex-end',
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              X
            </Text>
          </Text>

          {fileInfo.uri ? (
            <>
              <View>
                <Text>
                  <Text>Uri:</Text>
                  <Text>{fileInfo.uri}</Text>
                </Text>
              </View>
              <View>
                <Text>
                  <Text>File Name: </Text>
                  <Text>{fileInfo.name}</Text>
                </Text>
              </View>
              <View>
                <Text>Type:</Text>
                <Text>{fileInfo.type}</Text>
              </View>
            </>
          ) : (
            <></>
          )}
          <TouchableOpacity onPress={onPress}>
            <Text>choice file</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelAction}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
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
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      /*    console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size); */
      //Setting the state to show single file attributes
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
