import firebase from 'firebase/app';

import ConfigFirebaseDevelopment from '../config/firebaseDevelopment.json';

let config = {};

config = ConfigFirebaseDevelopment;

export default firebase.initializeApp(config);
