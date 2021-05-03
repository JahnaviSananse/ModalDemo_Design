/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ModalDemo1 from './src/screens/modal1';
import ModalDemo2 from './src/screens/modal2';

AppRegistry.registerComponent(appName, () => ModalDemo1);
