/* eslint-disable import/order */
import Firebase from '../utils/initializeFirebase';
import 'firebase/auth';

import crypto from 'crypto';

interface IRequestuser {
    name: string;
    email: string;
    password: string;
}

class User {
    static async create(email: string, password: string) {
        // const id = crypto.randomBytes(4).toString('HEX');
        console.log('CHEGOU AQUI COM ISSO: ', email, password);

        await Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async user => {
                console.log('LOGOU');
            })
            .catch(err => {
                throw new Error('Error in create user');
            });
    }

    static async authentication(email: string, password: string) {
        await Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log('DEU BOM???????????/');
            })
            .catch(err => {
                throw new Error('Error in authentication');
            });
    }

    static async logout() {
        await Firebase.auth()
            .signOut()
            .catch(err => {
                throw new Error('Error in logout');
            });
    }
}

export default User;
