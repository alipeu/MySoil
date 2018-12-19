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