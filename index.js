/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Routing from './src/Routing';
import Login from './src/Login';

AppRegistry.registerComponent(appName, () => Routing);
