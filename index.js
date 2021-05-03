/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Router from './src/router/router';
import ModalDemo1 from './src/screens/modal1';
import ModalDemo2 from './src/screens/modal2';
import ModalDemo3 from './src/screens/modal3';
AppRegistry.registerComponent(appName, () => Router);
