import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  Pressable,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const ModalDemo = () => {
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
            <Text style={styles.modalText}>Next, recored your answer</Text>
            <Text style={styles.modalText2}>
              Tap record when ready. Don't stress about reharrasing, genuine
              answer work best.
            </Text>

            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <View
                style={{
                  width: 70,
                  height: 30,
                  // backgroundColor: 'pink',
                  marginLeft: '80%',
                }}>
                <Text style={styles.textStyle}> Skip >>> </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.imgView}>
        <Image
          style={styles.stretch}
          source={require('../constant/images/lady.jpg')}
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
        <TouchableOpacity>
          <Image
            style={styles.imgNext}
            source={require('../constant/images/rotate.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: 'black',
              borderRadius: 45,
              borderWidth: 3,
              marginTop: '30%',
            }}></View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.imgRotate}
            source={require('../constant/images/next.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ModalDemo;
