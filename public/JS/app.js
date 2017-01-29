

angular
.module('app', ['firebase', 'ngRoute', 'app.status'])
.config(function () {
    var config = {
        apiKey: "AIzaSyA4893q4Jp3_KR8u5gg3P5vUEsOdHoF_is",
        authDomain: "depotapp-50d5a.firebaseapp.com",
        databaseURL: "https://depotapp-50d5a.firebaseio.com",
        storageBucket: "depotapp-50d5a.appspot.com",
        messagingSenderId: "875889357825"
    };
    firebase.initializeApp(config);
});