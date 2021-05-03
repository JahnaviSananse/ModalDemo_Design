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
  const [modalVisible2, setModalVisible2] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewNext}>
            <View style={{width: '150%', height: 30}}>
              <Text style={styles.modalTextNext}>
                Next, recored your answer
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: 'grey',
                width: '160%',
                height: 70,
                top: 10,
              }}>
              <Text style={styles.modalText2Next}>
                Tap record when ready. Don't stress about reharrasing, genuine
                answer work best.
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  margin: 5,
                  backgroundColor: 'grey',
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 12,
                  borderRadius: 10,
                  margin: 5,
                  backgroundColor: 'blue',
                }}
              />

              <View
                style={{
                  width: 12,
                  height: 12,
                  margin: 5,
                  borderRadius: 10,
                  backgroundColor: 'grey',
                }}
              />

              <TouchableOpacity
                onPress={() => {
                  setModalVisible2(false);
                }}>
                <View
                  style={{
                    width: 70,
                    height: 30,
                    // backgroundColor: 'pink',
                    marginLeft: '74%',
                  }}>
                  <Text style={styles.textStyleNext}> Skip >> </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            style={styles.imgSelect2}
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

        <TouchableOpacity onPress={() => setModalVisible2(true)}>
          <View
            style={{
              height: 65,
              width: 65,
              // backgroundColor: 'red',
              borderColor: 'black',
              borderWidth: 4,
              borderRadius: 40,
              top: 25,
              left: 2,
              borderStyle: 'dotted',
            }}>
            <Image
              style={styles.imgRecord}
              source={require('../../constant/images/record.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ModalDemo3');
          }}>
          <Image
            style={styles.imgRotate}
            source={require('../../constant/images/next.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ModalDemo1;
