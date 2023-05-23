import React, { useState } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Field = ({ title, data }) => {
  return (
    <View>
      <Text style={styles.fieldContainer}>
        <Text style={styles.field}>{title}</Text>
        <Text style={styles.fieldValue}>{data ? data : 'no file Choice'}</Text>
      </Text>
    </View>
  );
};
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
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalClose}>X</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Field title={'uri:'} data={fileInfo.uri} />
          <Field title={'name:'} data={fileInfo.name} />
          <Field title={'type:'} data={fileInfo.type} />

          <View style={{ padding: wp('2%'), flex: 1 }}>
            <CustomButton
              CustomStyle={{ marginTop: 20, borderRadius: 10 }}
              title="Choice File"
              onPress={onPress}
            />
            <CustomButton
              CustomStyle={{
                marginTop: 20,
                backgroundColor: '#f21707',
                borderRadius: 10,
              }}
              title="Cancel"
              onPress={cancelAction}
            />
            {fileInfo.uri ? (
              <Image
                style={{ width: 200, height: 230 }}
                source={{ uri: fileInfo.uri }}
              />
            ) : (
              <></>
            )}
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

    backgroundColor: '#111',
    opacity: 0.9,
  },
  modalContainer: {
    alignSelf: 'center',

    width: wp('80%'),
    height: hp('60%'),
    backgroundColor: '#fff',
    flexWrap: 'wrap',
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
});
