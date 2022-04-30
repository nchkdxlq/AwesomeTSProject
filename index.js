/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppRoot from './src/AppRoot';

AppRegistry.registerComponent(appName, () => AppRoot);
