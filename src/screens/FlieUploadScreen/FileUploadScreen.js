import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CustomButton, MyModal, CustomHeader, Field } from '../../components';
import FileViewer from 'react-native-file-viewer';
import { ContainerStyle } from '../Commonstyle';
/* import { CustomModal } from '../../components'; */
import DocumentPicker from 'react-native-document-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FileUploadScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fileInfo, setFileInfo] = useState({});
  const [filePath, setFilePath] = useState(null);
  const showModal = () => {
    setModalVisible(!modalVisible);
    console.log('hello', modalVisible);
  };

  const UploadFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
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
    <>
      <CustomHeader title="File Upload" />
      <View style={[ContainerStyle.mainContainer, styles.contentContainer]}>
        {fileInfo.uri ? (
          <Field title={'name:'} uri={fileInfo.uri} data={fileInfo.name} />
        ) : (
          <></>
        )}
        <View style={{ flexDirection: 'row' }}>
          <CustomButton
            title="File Upload"
            onPress={() => UploadFile()}
            CustomStyle={styles.customStyleChoiceFile}
          />

          {fileInfo.uri ? (
            <CustomButton
              CustomStyle={styles.customStyleCancel}
              title="Cancel"
              onPress={() => setFileInfo({})}
            />
          ) : (
            <></>
          )}
        </View>
        {/*   <MyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPress={() => UploadFile()}
          fileInfo={fileInfo}
          setFileInfo={setFileInfo}
          cancelAction={cancelAction}
        /> */}

        {/* <Image source={{ uri: fileInfo.uri }} /> */}
      </View>
    </>
  );
};
export default FileUploadScreen;
const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('2%'),
  },
  customStyleCancel: {
    marginTop: 20,
    backgroundColor: '#f21707',
    borderRadius: 10,
    marginLeft: 20,
  },
  customStyleChoiceFile: { marginTop: 20, borderRadius: 10, marginLeft: 20 },
});
