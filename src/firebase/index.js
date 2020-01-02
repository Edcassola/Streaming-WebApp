import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDKJLjKxgiQ2sYqxToORMhTGv-AgjwViMs",
    authDomain: "streaming-webapp.firebaseapp.com",
    databaseURL: "https://streaming-webapp.firebaseio.com",
    projectId: "streaming-webapp",
    storageBucket: "streaming-webapp.appspot.com",
    messagingSenderId: "1083378207146",
    appId: "1:1083378207146:web:e306dcb9840be8509cc3d3",
    measurementId: "G-4PFR8529SR"
})


export default function install (Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get() {
            return firebaseApp
        }
    })
}

//Configuração do PLUGIN do Firebase