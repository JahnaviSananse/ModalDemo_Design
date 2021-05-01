import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // paddingTop: 60,
    // marginLeft: 20,
    backgroundColor: 'yellow',
  },
  imgView: {
    backgroundColor: 'red',
    height: '60%',
    width: '100%',
    marginTop: '15%',
  },
  stretch: {
    width: '70%',
    height: 400,
    resizeMode: 'stretch',
    borderRadius: 20,
    // marginLeft: 20,
    alignSelf: 'center',
  },

  imgNext: {
    height: '80%',
    width: 50,
    marginTop: '80%',
  },
  imgCrop: {
    height: 30,
    width: 30,
    marginTop: '7%',
    marginLeft: '90%',
  },
  imgRotate: {
    height: '70%',
    width: 50,
    marginTop: '80%',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    // textAlign: 'center',
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 25,
  },
  modalText2: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
