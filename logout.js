var logOutBtn = document.getElementById('logOutBtn');

logOutBtn.addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        document.location.href = 'login.html';
      }, function(error) {
        console.error('Sign Out Error', error);
    });
});