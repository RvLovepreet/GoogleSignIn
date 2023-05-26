import FileViewer from 'react-native-file-viewer';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Field = ({ title, data, uri }) => {
  const preview = () => {
    const path = FileViewer.open(uri);
    console.log(path, 'path ');
  };
  return (
    <View>
      <Text style={styles.fieldContainer}>
        <Text style={styles.field}>{title}</Text>
        <Text style={styles.fieldValue}>
          {data ? (
            <>
              <Text onPress={() => preview()}>{data}</Text>
            </>
          ) : (
            'No file Choice'
          )}
        </Text>
      </Text>
    </View>
  );
};
export default Field;
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
    justifyContent: 'space-between',
    width: wp('80%'),
    height: hp('55%'),
    backgroundColor: '#ffffff',
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
