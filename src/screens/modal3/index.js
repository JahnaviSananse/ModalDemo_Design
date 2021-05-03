import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const ModalDemo3 = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Then, move on or re-record.</Text>
            <Text style={styles.modalText2}>
              Tap the arrow to go to the next question
            </Text>
            <Text style={styles.modalText2}>
              or the stop button to stop & re-record.
            </Text>

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <View
                style={{
                  width: 70,
                  height: 30,
                  // backgroundColor: 'pink',
                  marginLeft: '80%',
                }}>
                <Text style={styles.textStyle}> Skip >> </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          height: '10%',
          width: '100%',
          backgroundColor: 'green',
          flexDirection: 'row',
          // justifyContent: 'space-between',
          // padding: 15,
        }}>
        <TouchableOpacity onPress={() => alert('Crop ?')}>
          <Image
            style={styles.imgCrop}
            source={require('../../constant/images/crop.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imgView}>
        <Image
          style={styles.stretch}
          source={require('../../constant/images/lady.jpg')}
        />
      </View>
      <View
        style={{
          height: '15%',
          width: '100%',
          backgroundColor: 'pink',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <TouchableOpacity onPress={() => alert('Rotate ?')}>
          <Image
            style={styles.imgNext}
            source={require('../../constant/images/rotate.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={styles.imgRecord}
            source={require('../../constant/images/stop-button.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Next ?')}>
          <Image
            style={styles.imgRotate}
            source={require('../../constant/images/next.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ModalDemo3;
