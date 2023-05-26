import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import FileViewer from 'react-native-file-viewer';

import CustomButton from '../CustomButton/CustomButton';
import Field from '../Field/Field';
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
      theme={{
        colors: {
          backdrop: 'transparent',
        },
      }}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalStyle}>
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.modalHeader}>Choice File</Text>
            <View>
              <TouchableOpacity
                style={{ padding: hp('1%') }}
                onPress={cancelAction}
              >
                <Text style={styles.modalClose}>X</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Field title={'name:'} uri={fileInfo.uri} data={fileInfo.name} />
          <Field title={'type:'} data={fileInfo.type} />

          <View style={styles.btnContainer}>
            {fileInfo.uri ? (
              <CustomButton
                CustomStyle={styles.customStyleDone}
                title="Done"
                onPress={() => setModalVisible(!modalVisible)}
              />
            ) : (
              <View />
            )}
            <CustomButton
              CustomStyle={styles.customStyleChoiceFile}
              title="Choice File"
              onPress={onPress}
            />
            {/*     <CustomButton
              CustomStyle={styles.customStyleCancel}
              title="Cancel"
              onPress={cancelAction}
            /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default MyModal;
const styles = StyleSheet.create({
  modalStyle: {
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: wp('80%'),
    height: hp('55%'),
    backgroundColor: '#fff',
    opacity: 1,
  },
  modalHeader: {
    flex: 1,
    fontSize: hp('4%'),
    padding: hp('2%'),
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalClose: {
    color: '#111',
    fontSize: hp('5%'),
  },
  fieldContainer: { padding: hp('2%') },
  field: { fontSize: hp('2%'), fontWeight: '700' },
  fieldValue: {
    fontSize: hp('2%'),
    fontWeight: '500',
  },
  btnContainer: { padding: wp('2%'), flex: 1 },
  customStyleCancel: {
    marginTop: 20,
    backgroundColor: '#f21707',
    borderRadius: 10,
  },
  customStyleDone: {
    marginTop: 20,
    backgroundColor: '#37cc55',
    borderRadius: 10,
  },
  customStyleChoiceFile: { marginTop: 20, borderRadius: 10 },
});
