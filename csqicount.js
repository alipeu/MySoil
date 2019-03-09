var hitungBtn = document.getElementById('hitungBtn');
var slk = 's';

$("input[name='rSType']").change(function(){
    slk = this.value;
});

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
    var p15 = document.getElementById('p15').value;
    var p16 = document.getElementById('p16').value;
    var p17a = document.getElementById('p17a').value;
    var p17b = document.getElementById('p17b').value;
    var p17c = document.getElementById('p17c').value;
    var p17d = document.getElementById('p17d').value;
    var p17 = document.getElementById('p17').value;
    var ad = document.getElementById('ad').value;
    var date = new Date();
        
    var cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12, cp13, cp14, cp15, cp16, cp16, cp17;
    
    //Kedalaman Tanah Efektif
    if(p1 < 5) cp1 = 0 * 0.07;
    else if(p1 < 10) cp1 = 1 * 0.07;
    else if(p1 < 20) cp1 = 2 * 0.07;
    else if(p1 < 40) cp1 = 3 * 0.07;
    else if(p1 < 60) cp1 = 4 * 0.07;
    else if(p1 < 80) cp1 = 5 * 0.07;
    else if(p1 < 100) cp1 = 6 * 0.07;
    else cp1 = 7 * 0.07;

    //Kerapatan Isi
    if(p2 < 0.7) cp2 = 7 * 0.07;
    else if(p2 < 1.0) cp2 = 6 * 0.07;
    else if(p2 < 1.2) cp2 = 5 * 0.07;
    else if(p2 < 1.3) cp2 = 4 * 0.07;
    else if(p2 < 1.4) cp2 = 3 * 0.07;
    else if(p2 < 1.6) cp2 = 2 * 0.07;
    else if(p2 < 1.8) cp2 = 1 * 0.07;
    else cp2 = 0 * 0.07;

    //Drainase
    if((p3 == 'Sangat cepat' && slk == 's') || (p3 == 'Tergenang' && slk == 'lk')) cp3 = 0 * 0.05;
    else if((p3 == 'Cepat' && slk == 's') || (p3 == 'Sangat buruk' && slk == 'lk')) cp3 = 1 * 0.05;
    else if((p3 == 'Agak cepat' && slk == 's') || (p3 == 'Buruk' && slk == 'lk')) cp3 = 2 * 0.05;
    else if((p3 == 'Sedang' && slk == 's') || (p3 == 'Agak buruk' && slk == 'lk')) cp3 = 3 * 0.05;
    else if((p3 == 'Agak buruk' && slk == 's') || (p3 == 'Sedang' && slk == 'lk')) cp3 = 4 * 0.05;
    else if((p3 == 'Buruk' && slk == 's') || (p3 == 'Agak cepat' && slk == 'lk')) cp3 = 5 * 0.05;
    else if((p3 == 'Sangat buruk' && slk == 's') || (p3 == 'Cepat' && slk == 'lk')) cp3 = 6 * 0.05;
    else if((p3 == 'Tergenang' && slk == 's') || (p3 == 'Sangat cepat' && slk == 'lk')) cp3 = 7 * 0.05;
    
    //Tekstur
    if(p4 == 'Pasir') cp4 = 1 * 0.07;
    else if(p4 == 'Pasir berlempung') cp4 = 2 * 0.07;
    else if(p4 == 'Klei (liat) berat') cp4 = 3 * 0.07;
    else if(p4 == 'Lempung berpasir' || p4 == 'Klei (liat)' || p4 == 'Klei (liat) berpasir') cp4 = 4 * 0.07;
    else if(p4 == 'Klei(liat) berdebu' || p4 == 'Debu' || p4 == 'Lempung berliat') cp4 = 5 * 0.07;
    else if(p4 == 'Lempung klei(liat) berdebu' || p4 == 'Lempung klei(liat) berpasir' || p4 == 'Lempung berdebu') cp4 = 6 * 0.07;
    else if(p4 == 'Lempung') cp4 = 7 * 0.07;

    //Kapasitas Menahan Air
    if(p5 < 1) cp5 = 0 * 0.05;
    else if(p5 < 4) cp5 = 1 * 0.05;
    else if(p5 < 8) cp5 = 2 * 0.05;
    else if(p5 < 10) cp5 = 3 * 0.05;
    else if(p5 < 12) cp5 = 4 * 0.05;
    else if(p5 < 16) cp5 = 5 * 0.05;
    else if(p5 < 20) cp5 = 6 * 0.05;
    else cp5 = 7 * 0.05;

    //Permeabilitas - padi sawah
    if(p6 < 0.025 && slk == 's') cp6 = 7 * 0.05;
    else if(p6 < 0.125 && slk == 's') cp6 = 6 * 0.05;
    else if(p6 < 0.5 && slk == 's') cp6 = 5 * 0.05;
    else if(p6 < 2.0 && slk == 's') cp6 = 4 * 0.05;
    else if(p6 < 6.25 && slk == 's') cp6 = 3 * 0.05;
    else if(p6 < 12.5 && slk == 's') cp6 = 2 * 0.05;
    else if(p6 < 25.0 && slk == 's') cp6 = 1 * 0.05;
    else if(p6 >= 25.0 && slk == 's') cp6 = 0;

    //Permeabilitas - lahan kering
    if(p7 < 0.025 && slk == 'lk') cp7 = 0 * 0.05;
    else if(p7 < 0.125 && slk == 'lk') cp7 = 1 * 0.05;
    else if(p7 < 0.5 && slk == 'lk') cp7 = 2 * 0.05;
    else if(p7 < 2.0 && slk == 'lk') cp7 = 3 * 0.05;
    else if(p7 < 6.25 && slk == 'lk') cp7 = 4 * 0.05;
    else if(p7 < 12.5 && slk == 'lk') cp7 = 5 * 0.05;
    else if(p7 < 25.0 && slk == 'lk') cp7 = 6 * 0.05;
    else if(p7 >= 25.0 && slk == 'lk') cp7 = 7* 0.05;

    //pH
    if(p7 < 3.5 || p7 > 9.7) cp7 = 0 * 0.07;
    else if(p7 < 4.0 || p7 > 9.3) cp7 = 1 * 0.07;
    else if(p7 < 4.5 || p7 > 8.9) cp7 = 2 * 0.07;
    else if(p7 < 5.5 || p7 > 8.5) cp7 = 3 * 0.07;
    else if(p7 < 5.9 || p7 > 8.1) cp7 = 4 * 0.07;
    else if(p7 < 6.3 || p7 > 7.7) cp7 = 5 * 0.07;
    else if(p7 < 6.7 || p7 > 7.3) cp7 = 6 * 0.07;
    else cp7 = 7 * 0.07;

    //Kapasitas Tukar Kation
    if(p8 < 2.0) cp8 = 0 * 0.06;
    else if(p8 < 5.0) cp8 = 1 * 0.06;
    else if(p8 < 10.0) cp8 = 2 * 0.06;
    else if(p8 < 16.5) cp8 = 3 * 0.06;
    else if(p8 < 24.5) cp8 = 4 * 0.06;
    else if(p8 < 40.0) cp8 = 5 * 0.06;
    else if(p8 < 80.0) cp8 = 6 * 0.06;
    else cp8 = 7 * 0.06;

    //Kejenuhan Basa
    if(p9 < 5) cp9 = 0 * 0.04;
    else if(p9 < 10) cp9 = 1 * 0.04;
    else if(p9 < 20) cp9 = 2 * 0.04;
    else if(p9 < 40) cp9 = 3 * 0.04;
    else if(p9 < 60) cp9 = 4 * 0.04;
    else if(p9 < 80) cp9 = 5 * 0.04;
    else if(p9 < 90) cp9 = 6 * 0.04;
    else if(p9 < 100) cp9 = 7 * 0.04;

    //N Total
    if(p10 < 0.02) cp10 = 0 * 0.05;
    else if(p10 < 0.05) cp10 = 1 * 0.05;
    else if(p10 < 0.1) cp10 = 2 * 0.05;
    else if(p10 < 0.2) cp10 = 3 * 0.05;
    else if(p10 < 0.35) cp10 = 4 * 0.05;
    else if(p10 < 0.5) cp10 = 5 * 0.05;
    else if(p10 < 0.75) cp10 = 6 * 0.05;
    else cp10 = 7 * 0.05;

    // P Tersedia
    if(p11 < 1.0) cp11 = 0 * 0.05;
    else if(p11 < 2.5) cp11 = 1 * 0.05;
    else if(p11 < 4.5) cp11 = 2 * 0.05;
    else if(p11 < 7.5) cp11 = 3 * 0.05;
    else if(p11 < 10.5) cp11 = 4 * 0.05;
    else if(p11 < 15.0) cp11 = 5 * 0.05;
    else if(p11 < 60.0) cp11 = 6 * 0.05;
    else cp11 = 7 * 0.05;

    //K dapat dipertukarkan
    if(p12 < 0.05) cp12 = 0 * 0.05;
    else if(p12 < 0.1) cp12 = 1 * 0.05;
    else if(p12 < 0.2) cp12 = 2 * 0.05;
    else if(p12 < 0.35) cp12 = 3 * 0.05;
    else if(p12 < 0.6) cp12 = 4 * 0.05;
    else if(p12 < 1) cp12 = 5 * 0.05;
    else if(p12 < 1.6) cp12 = 6 * 0.05;
    else cp12 = 7 * 0.05;

    //Ca dapat dipetukarkan
    if(p13 < 1.0) cp13 = 0 * 0.05;
    else if(p13 < 2.5) cp13 = 1 * 0.05;
    else if(p13 < 4.0) cp13 = 2 * 0.05;
    else if(p13 < 5.5) cp13 = 3 * 0.05;
    else if(p13 < 10.5) cp13 = 4 * 0.05;
    else if(p13 < 20.0) cp13 = 5 * 0.05;
    else if(p13 < 40.0) cp13 = 6 * 0.05;
    else cp13 = 7 * 0.05;

    //Mg dapat dipertukarkan
    if(p14 < 0.1) cp14 = 0 * 0.04;
    else if(p14 < 0.35) cp14 = 1 * 0.04;
    else if(p14 < 1.0) cp14 = 2 * 0.04;
    else if(p14 < 1.6) cp14 = 3 * 0.04;
    else if(p14 < 2.1) cp14 = 4 * 0.04;
    else if(p14 < 8) cp14 = 5 * 0.04;
    else if(p14 < 20.0) cp14 = 6 * 0.04;
    else cp14 = 7 * 0.04;

    //Kejenuhan Aluminium
    if(p15 < 2) cp15 = 7 * 0.05;
    else if(p15 < 5) cp15 = 6 * 0.05;
    else if(p15 < 10) cp15 = 5 * 0.05;
    else if(p15 < 15) cp15 = 4 * 0.05;
    else if(p15 < 20) cp15 = 3 * 0.05;
    else if(p15 < 40) cp15 = 2 * 0.05;
    else if(p15 < 70) cp15 = 1 * 0.05;
    else cp15 = 0 * 0.05;

    // Kandungan Zn (Zinc)
    if(p16a < 0.1 || p16a >800) cp16a = 0;
    else if(p16a < 0.3 || p16a > 500) cp16a = 1;
    else if(p16a < 0.7 || p16a > 300) cp16a = 2;
    else if(p16a < 1.5 || p16a > 150) cp16a = 3;
    else if(p16a < 2.5 || p16a > 50) cp16a = 4;
    else if(p16a < 4 || p16a > 12) cp16a = 5;
    else if(p16a < 6 || p16a > 9) cp16a = 6;
    else cp16a = 7;

    // Kandungan Fe (Besi)
    if(p16b < 0.1 || p16b >1200) cp16b = 0;
    else if(p16b < 0.5 || p16b > 850) cp16b = 1;
    else if(p16b < 1 || p16b > 600) cp16b = 2;
    else if(p16b < 3.5 || p16b > 350) cp16b = 3;
    else if(p16b < 6 || p16b > 150) cp16b = 4;
    else if(p16b < 9 || p16b > 50) cp16b = 5;
    else if(p16b < 13 || p16b > 19) cp16b = 6;
    else cp16b = 7;

    // Kandungan Mn (Mangan)
    if(p16c < 0.1 || p16c > 800) cp16c = 0;
    else if(p16c < 0.3 || p16c > 500) cp16c = 1;
    else if(p16c < 0.7 || p16c > 300) cp16c = 2;
    else if(p16c < 1.5 || p16c > 150) cp16c = 3;
    else if(p16c < 2.5 || p16c > 25) cp16c = 4;
    else if(p16c < 4 || p16c > 15) cp16c = 5;
    else if(p16c < 6 || p16c > 9) cp16c = 6;
    else cp16c = 7;

    // Kandungan Cu (Tembaga)
    if(p16d < 0.1 || p16d > 25) cp16d = 0;
    else if(p16d < 0.13 || p16d > 20) cp16d = 1;
    else if(p16d < 0.16 || p16d > 15) cp16d = 2;
    else if(p16d < 0.19 || p16d > 10) cp16d = 3;
    else if(p16d < 0.22 || p16d > 6) cp16d = 4;
    else if(p16d < 0.25 || p16d > 3) cp16d = 5;
    else if(p16d < 0.28 || p16d > 0.31) cp16d = 6;
    else cp16d = 7;
    //Final Average Score
    cp16 = (cp16a + cp16b + cp16c + cp16d) / 4 * 0.05;

    // C-Organik
    if(p17 < 0.1) cp17 = 0 * 0.11;
    else if(p17 < 0.5) cp17 = 1 * 0.11;
    else if(p17 < 1.0) cp17 = 2 * 0.11;
    else if(p17 < 2.0) cp17 = 3 * 0.11;
    else if(p17 < 3.0) cp17 = 4 * 0.11;
    else if(p17 < 4.0) cp17 = 5 * 0.11;
    else if(p17 < 5.0) cp17 = 6 * 0.11;
    else cp17 = 7 * 0.11;

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
        p15: p15,
        p16: p16,
        p16a: p16a,
        p16b: p16b,
        p16c: p16c,
        p16d: p16d,
        p17: p17,
        asal_daerah: ad,
        slk_flag: slk,
        sc_flag: 'c',
        soil_ind: (cp1 + cp2 + cp3 + cp4 + cp5 + cp6 + cp7 + cp8 + cp9 + cp10 + cp11 + cp12 + cp13 + cp14 + cp15 + cp16 + cp17 + cp17).toFixed(2),
        time: date
    }
    
    if(data.p1 && data.p2 && data.p3 && data.p4 && data.p5 && data.p6 && data.p7 && data.p8 && data.p9 && data.p10 && data.p11 && data.p12 && data.p13 && data.p14 && data.p15 && data.p16a && data.p16b && data.p16c && data.p16d && data.p17) {
        var updates = {};
        updates['/soil/' + sid] = data;
        firebase.database().ref().update(updates).then(function() {
            alert("Indeks kualitas tanah Anda: " + data.soil_ind);
            window.location.reload();
        });
    }
    else {
        alert('Ada field yang kosong');
        document.getElementById("warning").style.visibility = "visible";
    }
    
});