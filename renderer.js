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

var tblUsers = document.getElementById('tbl_users_list');
var databaseRef = firebase.database().ref('soil');
var rowIndex = 1;

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
    
        var row = tblUsers.insertRow(rowIndex);
        var cellQual = row.insertCell(0);
        var cellReg = row.insertCell(1);
        var cellSType = row.insertCell(2);
        var cellPType = row.insertCell(3);
        var cellP1 = row.insertCell(4);
        var cellP2 = row.insertCell(5);
        var cellP3 = row.insertCell(6);
        var cellP4 = row.insertCell(7);
        var cellP5 = row.insertCell(8);
        var cellP6 = row.insertCell(9);
        var cellP7 = row.insertCell(10);
        var cellP8 = row.insertCell(11);
        var cellP9 = row.insertCell(12);
        var cellP10 = row.insertCell(13);
        var cellP11 = row.insertCell(14);
        var cellP12 = row.insertCell(15);
        var cellP13 = row.insertCell(16);
        var cellP14 = row.insertCell(17);
        cellQual.appendChild(document.createTextNode(childData.soil_ind));
        cellReg.appendChild(document.createTextNode(childData.asal_daerah));
        if(childData.slk_flag == 's') {
            cellSType.appendChild(document.createTextNode("Sawah"));
        }
        else if(childData.slk_flag == 'lk') {
            cellSType.appendChild(document.createTextNode("Lahan Kering"));
        }
        cellPType.appendChild(document.createTextNode(childData.sc_flag));
        cellP1.appendChild(document.createTextNode(childData.p1));
        cellP2.appendChild(document.createTextNode(childData.p2));
        cellP3.appendChild(document.createTextNode(childData.p3));
        cellP4.appendChild(document.createTextNode(childData.p4));
        cellP5.appendChild(document.createTextNode(childData.p5));
        cellP6.appendChild(document.createTextNode(childData.p6));
        cellP7.appendChild(document.createTextNode(childData.p7));
        cellP8.appendChild(document.createTextNode(childData.p8));
        cellP9.appendChild(document.createTextNode(childData.p9));
        cellP10.appendChild(document.createTextNode(childData.p10));
        cellP11.appendChild(document.createTextNode(childData.p11));
        cellP12.appendChild(document.createTextNode(childData.p12));
        cellP13.appendChild(document.createTextNode(childData.p13));
        cellP14.appendChild(document.createTextNode(childData.p14));

        rowIndex = rowIndex + 1;
    });
});

var saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', function() {
    var sid = firebase.database().ref().child('soil').push().key;
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;
    var p3 = document.getElementById('p3').value;
    var p4 = document.getElementById('p4').value;
    var p5 = document.getElementById('p5').value;
    var p6 = document.getElementById('p6').value;
    var p7 = document.getElementById('p7').value;
    var p8 = document.getElementById('p8').value;
    var p9 = document.getElementById('p9').value;
    var p10 = document.getElementById('p10').value;
    var p11 = document.getElementById('p11').value;
    var p12 = document.getElementById('p12').value;
    var p13 = document.getElementById('p13').value;
    var p14 = document.getElementById('p14').value;
    var ad = document.getElementById('ad').value;
    var slk = document.getElementById('slk').value;
    var sc = document.getElementById('sc').value;

    var data = {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5,
        p6: p6,
        p7: p7,
        p8: p8,
        p9: p9,
        p10: p10,
        p11: p11,
        p12: p12,
        p13: p13,
        p14: p14,
        asal_daerah: ad,
        slk_flag: slk,
        sc_flag: sc,
        soil_ind: p1 + p2
    }
    
    var updates = {};
    updates['/soil/' + sid] = data;
    firebase.database().ref().update(updates);
    
    alert('Your data has been added!');
    window.location.reload();
});

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

