// Initialize Firebase
var config = {
    apiKey: "AIzaSyBYhZOCw_Ma-0SCHAf3geJgwmTh13YuVd0",
    authDomain: "mysoil-29827.firebaseapp.com",
    databaseURL: "https://mysoil-29827.firebaseio.com",
    projectId: "mysoil-29827",
    storageBucket: "mysoil-29827.appspot.com",
    messagingSenderId: "998601839541"
};
firebase.initializeApp(config);

var logInBtn = document.getElementById('logInBtn');
var signUpBtn = document.getElementById('signUpBtn');

logInBtn.addEventListener('click', function() {
    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(emailField, passwordField).then(function() {
        document.location.href = 'index.html';
    }).catch(function(error) {
        if(error != null) {
            console.log(error.message);
            alert("Incorrect Email or Password!");
            return;
        }
    });
});

signUpBtn.addEventListener('click', function() {
    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).then(function() {
        alert('Signed up succesfully!');
    }).catch(function(error) {
        if(error != null) {
            console.log(error.message);
            alert("Email has already been taken!");
            return;
        }
    });
});

