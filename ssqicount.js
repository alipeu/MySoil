var hitungBtn = document.getElementById('hitungBtn');

hitungBtn.addEventListener('click', function() {
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
    //var ad = document.getElementById('ad').value;
    //var slk = document.getElementById('slk').value;
    //var sc = document.getElementById('sc').value;
        
    var cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12, cp13, cp14;

    if(p1 < 5) cp1 = 0 * 0.09;
    else if(p1 < 10) cp1 = 1 * 0.09;
    else if(p1 < 20) cp1 = 2 * 0.09;
    else if(p1 < 40) cp1 = 3 * 0.09;
    else if(p1 < 60) cp1 = 4 * 0.09;
    else if(p1 < 80) cp1 = 5 * 0.09;
    else if(p1 < 100) cp1 = 6 * 0.09;
    else cp1 = 7 * 0.09;

    if(p2 < 0.7) cp2 = 7 * 0.09;
    else if(p2 < 1.0) cp2 = 6 * 0.09;
    else if(p2 < 1.2) cp2 = 5 * 0.09;
    else if(p2 < 1.3) cp2 = 4 * 0.09;
    else if(p2 < 1.4) cp2 = 3 * 0.09;
    else if(p2 < 1.6) cp2 = 2 * 0.09;
    else if(p2 < 1.8) cp2 = 1 * 0.09;
    else cp2 = 0 * 0.09;

    // if((p3 == 'Sangat cepat' && slk == 's') || (p3 == 'Tergenang' && slk == 'lk')) cp3 = 0 * 0.07;
    // else if((p3 == 'Cepat' && slk == 's') || (p3 == 'Sangat buruk' && slk == 'lk')) cp3 = 1 * 0.07;
    // else if((p3 == 'Agak cepat' && slk == 's') || (p3 == 'Buruk' && slk == 'lk')) cp3 = 2 * 0.07;
    // else if((p3 == 'Sedang' && slk == 's') || (p3 == 'Agak buruk' && slk == 'lk')) cp3 = 3 * 0.07;
    // else if((p3 == 'Agak buruk' && slk == 's') || (p3 == 'Sedang' && slk == 'lk')) cp3 = 4 * 0.07;
    // else if((p3 == 'Buruk' && slk == 's') || (p3 == 'Agak cepat' && slk == 'lk')) cp3 = 5 * 0.07;
    // else if((p3 == 'Sangat buruk' && slk == 's') || (p3 == 'Cepat' && slk == 'lk')) cp3 = 6 * 0.07;
    // else if((p3 == 'Tergenang' && slk == 's') || (p3 == 'Sangat cepat' && slk == 'lk')) cp3 = 7 * 0.07;

    if((p3 == 'Sangat cepat')) cp3 = 0 * 0.07;
    else if((p3 == 'Cepat')) cp3 = 1 * 0.07;
    else if((p3 == 'Agak cepat')) cp3 = 2 * 0.07;
    else if((p3 == 'Sedang')) cp3 = 3 * 0.07;
    else if((p3 == 'Agak buruk')) cp3 = 4 * 0.07;
    else if((p3 == 'Buruk')) cp3 = 5 * 0.07;
    else if((p3 == 'Sangat buruk')) cp3 = 6 * 0.07;
    else if((p3 == 'Tergenang')) cp3 = 7 * 0.07;

    if(p4 == 'Tidak ada') cp4 = 0 * 0.06;
    else if(p4 == 'Sangat rendah') cp4 = 1 * 0.06;
    else if(p4 == 'Rendah') cp4 = 2 * 0.06;
    else if(p4 == 'Agak rendah') cp4 = 3 * 0.06;
    else if(p4 == 'Sedang') cp4 = 4 * 0.06;
    else if(p4 == 'Agak tinggi') cp4 = 5 * 0.06;
    else if(p4 == 'Tinggi') cp4 = 6 * 0.06;
    else if(p4 == 'Sangat tinggi') cp4 = 7 * 0.06;

    if(p5 == 'Pasir') cp5 = 1 * 0.09;
    else if(p5 == 'Pasir berlempung') cp5 = 2 * 0.09;
    else if(p5 == 'Klei berat') cp5 = 3 * 0.09;
    else if(p5 == 'Lempung berpasir' || p5 == 'Klei' || p5 == 'Klei berpasir') cp5 = 4 * 0.09;
    else if(p5 == 'Klei berdebu' || p5 == 'Debu' || p5 == 'Lempung berliat') cp5 = 5 * 0.09;
    else if(p5 == 'Lempung klei berdebu' || p5 == 'Lempung klei berpasir' || p5 == 'Lempung berdebu') cp5 = 6 * 0.09;
    else if(p5 == 'Lempung') cp5 = 7 * 0.09;

    if(p6 < 3.5 || p6 > 9.7) cp6 = 0 * 0.08;
    else if(p6 < 4.0 || p6 > 9.3) cp6 = 1 * 0.08;
    else if(p6 < 4.5 || p6 > 8.9) cp6 = 2 * 0.08;
    else if(p6 < 5.5 || p6 > 8.5) cp6 = 3 * 0.08;
    else if(p6 < 5.9 || p6 > 8.1) cp6 = 4 * 0.08;
    else if(p6 < 6.3 || p6 > 7.7) cp6 = 5 * 0.08;
    else if(p6 < 6.7 || p6 > 7.3) cp6 = 6 * 0.08;
    else cp6 = 7 * 0.08;

    if(p7 < 2.0) cp7 = 0 * 0.07;
    else if(p7 < 5.0) cp7 = 1 * 0.07;
    else if(p7 < 10.0) cp7 = 2 * 0.07;
    else if(p7 < 16.5) cp7 = 3 * 0.07;
    else if(p7 < 24.5) cp7 = 4 * 0.07;
    else if(p7 < 40.0) cp7 = 5 * 0.07;
    else if(p7 < 80.0) cp7 = 6 * 0.07;
    else cp7 = 7 * 0.07;

    if(p8 < 0.02) cp8 = 0 * 0.06;
    else if(p8 < 0.05) cp8 = 1 * 0.06;
    else if(p8 < 0.1) cp8 = 2 * 0.06;
    else if(p8 < 0.2) cp8 = 3 * 0.06;
    else if(p8 < 0.35) cp8 = 4 * 0.06;
    else if(p8 < 0.5) cp8 = 5 * 0.06;
    else if(p8 < 0.75) cp8 = 6 * 0.06;
    else cp8 = 7 * 0.06;

    if(p9 < 1.0) cp9 = 0 * 0.06;
    else if(p9 < 2.5) cp9 = 1 * 0.06;
    else if(p9 < 4.5) cp9 = 2 * 0.06;
    else if(p9 < 7.5) cp9 = 3 * 0.06;
    else if(p9 < 10.5) cp9 = 4 * 0.06;
    else if(p9 < 15.0) cp9 = 5 * 0.06;
    else if(p9 < 60.0) cp9 = 6 * 0.06;
    else cp9 = 7 * 0.06;

    if(p10 < 0.05) cp10 = 0 * 0.06;
    else if(p10 < 0.1) cp10 = 1 * 0.06;
    else if(p10 < 0.2) cp10 = 2 * 0.06;
    else if(p10 < 0.35) cp10 = 3 * 0.06;
    else if(p10 < 0.6) cp10 = 4 * 0.06;
    else if(p10 < 1) cp10 = 5 * 0.06;
    else if(p10 < 1.6) cp10 = 6 * 0.06;
    else cp10 = 7 * 0.06;

    if(p11 < 1.0) cp11 = 0 * 0.05;
    else if(p11 < 2.5) cp11 = 1 * 0.05;
    else if(p11 < 4.0) cp11 = 2 * 0.05;
    else if(p11 < 5.5) cp11 = 3 * 0.05;
    else if(p11 < 10.5) cp11 = 4 * 0.05;
    else if(p11 < 20.0) cp11 = 5 * 0.05;
    else if(p11 < 40.0) cp11 = 6 * 0.05;
    else cp11 = 7 * 0.05;

    if(p12 < 0.1) cp12 = 0 * 0.04;
    else if(p12 < 0.35) cp12 = 1 * 0.04;
    else if(p12 < 1.0) cp12 = 2 * 0.04;
    else if(p12 < 1.6) cp12 = 3 * 0.04;
    else if(p12 < 2.1) cp12 = 4 * 0.04;
    else if(p12 < 8) cp12 = 5 * 0.04;
    else if(p12 < 20.0) cp12 = 6 * 0.04;
    else cp12 = 7 * 0.04;

    if(p13 < 2) cp13 = 7 * 0.06;
    else if(p13 < 5) cp13 = 6 * 0.06;
    else if(p13 < 10) cp13 = 5 * 0.06;
    else if(p13 < 15) cp13 = 4 * 0.06;
    else if(p13 < 20) cp13 = 3 * 0.06;
    else if(p13 < 40) cp13 = 2 * 0.06;
    else if(p13 < 70) cp13 = 1 * 0.06;
    else cp13 = 0 * 0.06;

    if(p14 < 0.1) cp14 = 0 * 0.12;
    else if(p14 < 0.5) cp14 = 1 * 0.12;
    else if(p14 < 1.0) cp14 = 2 * 0.12;
    else if(p14 < 2.0) cp14 = 3 * 0.12;
    else if(p14 < 3.0) cp14 = 4 * 0.12;
    else if(p14 < 4.0) cp14 = 5 * 0.12;
    else if(p14 < 5.0) cp14 = 6 * 0.12;
    else cp14 = 7 * 0.12;

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
        //asal_daerah: ad,
        //slk_flag: slk,
        //sc_flag: sc,
        soil_ind: (cp1 + cp2 + cp3 + cp4 + cp5 + cp6 + cp7 + cp8 + cp9 + cp10 + cp11 + cp12 + cp13 + cp14).toFixed(2)
    }
    
    if(data.p1 && data.p2 && data.p3 && data.p4 && data.p5 && data.p6 && data.p7 && data.p8 && data.p9 && data.p10 && data.p11 && data.p12 && data.p13 && data.p14) {
        var updates = {};
        updates['/soil/' + sid] = data;
        firebase.database().ref().update(updates);
    
        alert(data.soil_ind);
        window.location.reload();
    }
    else {
        console.log('empty');
        alert('Ada field yang kosong');
    }
    
});