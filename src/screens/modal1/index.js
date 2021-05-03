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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const navigation = useNavigation();

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
            <Text style={styles.modalTextFirst}>
              First, choose your question.
            </Text>
            <Text style={styles.modalText2}>
              Swipe the question card in any direction to
            </Text>
            <Text style={styles.modalText2}>choose a new question. </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 20,
                  height: 12,
                  borderRadius: 10,
                  marginHorizontal: 5,
                  marginTop: 15,
                  left: 15,
                  backgroundColor: 'blue',
                }}
              />
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 10,
                  marginHorizontal: 5,
                  marginTop: 15,
                  left: 15,

                  backgroundColor: 'grey',
                }}
              />

              <View
                style={{
                  width: 12,
                  height: 12,
                  marginHorizontal: 5,
                  marginTop: 15,
                  left: 15,

                  borderRadius: 10,
                  backgroundColor: 'grey',
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setModalVisible2(true);
                  setModalVisible3(false);
                }}>
                <View
                  style={{
                    width: 70,
                    height: 40,
                    // backgroundColor: 'pink',
                    marginLeft: '60%',
                    left: '10%',
                    marginBottom: 10,
                    // bottom: 10,
                  }}>
                  <Text style={styles.textStyle}> Skip >> </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            style={styles.imgSelect}
            source={require('../../constant/images/tap.png')}
          />

          <View style={{width: '50%', height: 30, bottom: 30}}>
            <Text style={{fontSize: 25, color: 'white'}}>Choose question</Text>
          </View>
          <View
            style={{
              // flex: 0.3,
              // backgroundColor: 'white',
              borderWidth: 2,
              borderRadius: 10,
              borderStyle: 'dashed',
              borderColor: 'white',
              width: '85%',
              height: '18%',
              bottom: 20,
              // top: 10,
            }}>
            <View style={styles.modalView2}>
              <Text style={styles.bottomModal}>
                Are you a listener or a talker ?
              </Text>
            </View>
            <View style={styles.back1}></View>
            <View style={styles.back2}></View>
            <View style={styles.back3}></View>
          </View>
        </View>
      </Modal>
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
                  setModalVisible(false);
                  setModalVisible2(false);
                  setModalVisible3(true);
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

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            style={styles.imgRecord}
            source={require('../../constant/images/record.png')}
          />
        </TouchableOpacity>

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
    </SafeAreaView>
  );
};

export default ModalDemo1;
