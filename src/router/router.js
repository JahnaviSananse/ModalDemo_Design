import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ModalDemo1 from '../screens/modal1';
import ModalDemo2 from '../screens/modal2';
import ModalDemo3 from '../screens/modal3';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ModalDemo1">
        <Stack.Screen name="ModalDemo1" component={ModalDemo1} />
        <Stack.Screen name="ModalDemo2" component={ModalDemo2} />
        <Stack.Screen name="ModalDemo3" component={ModalDemo3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
