import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // paddingTop: 60,
    // marginLeft: 20,
    // backgroundColor: 'yellow',
  },
  imgView: {
    // backgroundColor: 'red',
    height: '80%',
    width: '100%',
    // marginTop: '10%',
    bottom: 50,
  },
  stretch: {
    width: '87%',
    height: 530,
    resizeMode: 'stretch',
    borderRadius: 10,
    // marginLeft: 20,
    alignSelf: 'center',
    opacity: 0.1,
  },

  imgNext: {
    height: '80%',
    width: 50,
    marginTop: '80%',
  },
  imgCrop: {
    height: 20,
    width: 20,
    // marginTop: '7%',
    // marginLeft: '100%',
  },
  imgSelect: {
    height: 70,
    width: 70,
    bottom: 50,
  },
  imgSelect3: {
    height: 70,
    width: 70,
    top: '23%',
  },
  imgSelect4: {
    height: 70,
    width: 70,
    top: '13%',
    marginLeft: '70%',
  },
  imgSelect2: {
    height: 70,
    width: 70,
    bottom: 50,
  },
  imgRotate: {
    height: 50,
    width: 50,
    marginTop: '70%',
  },
  imgRecord: {
    height: 50,
    width: 50,
    marginTop: '5%',
    left: 2,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },
  modalView: {
    margin: 35,
    marginBottom: '31%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    top: 30,
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
  modalViewNext: {
    margin: 82,
    bottom: '10%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 30,
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
  modalViewThen: {
    marginTop: 5,
    bottom: 25,
    margin: 49,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
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
  modalView2: {
    margin: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    left: 10,
    borderColor: 'black',
    borderWidth: 1,
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
  back1: {
    // height: '30%',
    width: '89%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 29,
    bottom: 54,
    left: 5,

    right: 2,
  },
  back2: {
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 28,
    bottom: 120,
    left: 11,

    right: -4,
  },
  back3: {
    height: 40,
    width: '90%',
    left: 19,

    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 30,
    bottom: 187,
    right: -9,
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
    color: 'red',
    fontWeight: 'bold',
    // textAlign: 'center',
    fontSize: 17,
    marginRight: 5,
    marginTop: 10,
    // marginBottom: 10,
    // margin: 10,
  },
  textStyleNext: {
    color: 'red',
    fontWeight: 'bold',
    // textAlign: 'center',
    fontSize: 17,
    right: 10,
    marginTop: 4,
  },
  modalTextFirst: {
    margin: 20,
    bottom: 10,
    marginBottom: 17,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 22,
  },
  modalText: {
    margin: 10,
    // top: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 22,
  },
  modalText2: {
    // marginBottom: 2,
    bottom: 20,
    textAlign: 'center',
    color: 'blue',
    fontSize: 15,
  },
  bottomModal: {
    // marginBottom: 2,
    // bottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    fontSize: 18,
  },
  modalTextNext: {
    // marginBottom: 5,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 22,
    // padding: 2,
  },
  modalText2Next: {
    // marginBottom: 2,
    textAlign: 'center',
    color: 'blue',
    fontSize: 16,
  },
});

export default styles;
