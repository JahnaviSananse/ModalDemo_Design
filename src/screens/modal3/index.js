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
import {useNavigation} from '@react-navigation/native';

const ModalDemo1 = () => {
  const [modalVisible3, setModalVisible3] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible3(!modalVisible3);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewThen}>
            <View style={{width: '200%', height: 85}}>
              <Text style={styles.modalText}>Then, move on or re-record.</Text>
            </View>
            <Text style={styles.modalText2}>
              Tap the arrow to go to the next question or
            </Text>
            <Text style={styles.modalText2}>
              the stop button to stop & re-record.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  left: 19,

                  margin: 5,
                  backgroundColor: 'grey',
                }}
              />
              <View
                style={{
                  width: 12,
                  height: 12,
                  left: 19,

                  borderRadius: 10,
                  margin: 5,
                  backgroundColor: 'grey',
                }}
              />

              <View
                style={{
                  width: 20,
                  height: 12,
                  left: 19,

                  margin: 5,
                  borderRadius: 10,
                  backgroundColor: 'blue',
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setModalVisible3(false);
                }}>
                <View
                  style={{
                    width: 70,
                    height: 30,
                    // backgroundColor: 'pink',
                    marginLeft: '65%',
                    bottom: 15,
                  }}>
                  <Text style={styles.textStyle}> Skip >> </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            style={styles.imgSelect3}
            source={require('../../constant/images/tap.png')}
          />
          <Image
            style={styles.imgSelect4}
            source={require('../../constant/images/tap.png')}
          />
        </View>
      </Modal>
      <View
        style={{
          height: '10%',
          width: '100%',
          // backgroundColor: 'green',
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
          width: '90%',
          // backgroundColor: 'pink',
          bottom: 45,
          // top: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          marginLeft: 30,
        }}>
        <TouchableOpacity onPress={() => alert('Rotate ?')}>
          <Image
            style={styles.imgNext}
            source={require('../../constant/images/rotate.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 60,
            width: 60,
            // backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 4,
            borderRadius: 40,
            top: 30,
            left: 2,
            borderStyle: 'dotted',
          }}>
          <TouchableOpacity onPress={() => setModalVisible3(true)}>
            <Image
              style={styles.imgRecord}
              source={require('../../constant/images/stop-button.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 60,
            width: 60,
            // backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 4,
            borderRadius: 40,
            top: 30,
            left: 2,
            borderStyle: 'dotted',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ModalDemo2');
            }}>
            <Image
              style={styles.imgRotate}
              source={require('../../constant/images/next.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModalDemo1;
