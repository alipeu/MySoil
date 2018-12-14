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
    var p15 = document.getElementById('p15').value;
    var p16 = document.getElementById('p16').value;
    var p17a = document.getElementById('p17a').value;
    var p17b = document.getElementById('p17b').value;
    var p17c = document.getElementById('p17c').value;
    var p17d = document.getElementById('p17d').value;
    var p18 = document.getElementById('p18').value;
    //var ad = document.getElementById('ad').value;
    //var slk = document.getElementById('slk').value;
    //var sc = document.getElementById('sc').value;
        
    var cp1, cp2, cp3, cp4, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12, cp13, cp14,cp15,cp16,cp17,cp18;
    
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
    // if((p3 == 'Sangat cepat' && slk == 's') || (p3 == 'Tergenang' && slk == 'lk')) cp3 = 0 * 0.07;
    // else if((p3 == 'Cepat' && slk == 's') || (p3 == 'Sangat buruk' && slk == 'lk')) cp3 = 1 * 0.07;
    // else if((p3 == 'Agak cepat' && slk == 's') || (p3 == 'Buruk' && slk == 'lk')) cp3 = 2 * 0.07;
    // else if((p3 == 'Sedang' && slk == 's') || (p3 == 'Agak buruk' && slk == 'lk')) cp3 = 3 * 0.07;
    // else if((p3 == 'Agak buruk' && slk == 's') || (p3 == 'Sedang' && slk == 'lk')) cp3 = 4 * 0.07;
    // else if((p3 == 'Buruk' && slk == 's') || (p3 == 'Agak cepat' && slk == 'lk')) cp3 = 5 * 0.07;
    // else if((p3 == 'Sangat buruk' && slk == 's') || (p3 == 'Cepat' && slk == 'lk')) cp3 = 6 * 0.07;
    // else if((p3 == 'Tergenang' && slk == 's') || (p3 == 'Sangat cepat' && slk == 'lk')) cp3 = 7 * 0.07;

    if((p3 == 'Sangat cepat')) cp3 = 0 * 0.05;
    else if((p3 == 'Cepat')) cp3 = 1 * 0.05;
    else if((p3 == 'Agak cepat')) cp3 = 2 * 0.05;
    else if((p3 == 'Sedang')) cp3 = 3 * 0.05;
    else if((p3 == 'Agak buruk')) cp3 = 4 * 0.05;
    else if((p3 == 'Buruk')) cp3 = 5 * 0.05;
    else if((p3 == 'Sangat buruk')) cp3 = 6 * 0.05;
    else if((p3 == 'Tergenang')) cp3 = 7 * 0.05;
    
    //Tingkat Erosi
    if(p4 == 'Tidak ada') cp4 = 0 * 0.04;
    else if(p4 == 'Sangat rendah') cp4 = 1 * 0.04;
    else if(p4 == 'Rendah') cp4 = 2 * 0.04;
    else if(p4 == 'Agak rendah') cp4 = 3 * 0.04;
    else if(p4 == 'Sedang') cp4 = 4 * 0.04;
    else if(p4 == 'Agak tinggi') cp4 = 5 * 0.04;
    else if(p4 == 'Tinggi') cp4 = 6 * 0.04;
    else if(p4 == 'Sangat tinggi') cp4 = 7 * 0.04;

    //Tekstur
    if(p5 == 'Pasir') cp5 = 1 * 0.07;
    else if(p5 == 'Pasir berlempung') cp5 = 2 * 0.07;
    else if(p5 == 'Klei berat') cp5 = 3 * 0.07;
    else if(p5 == 'Lempung berpasir' || p5 == 'Klei' || p5 == 'Klei berpasir') cp5 = 4 * 0.07;
    else if(p5 == 'Klei berdebu' || p5 == 'Debu' || p5 == 'Lempung berliat') cp5 = 5 * 0.07;
    else if(p5 == 'Lempung klei berdebu' || p5 == 'Lempung klei berpasir' || p5 == 'Lempung berdebu') cp5 = 6 * 0.07;
    else if(p5 == 'Lempung') cp5 = 7 * 0.07;

    //Kapasitas Menahan Air
    if(p6 < 1) cp6 = 0 * 0.05;
    else if(p6 < 4) cp6 = 1 * 0.05;
    else if(p6 < 8) cp6 = 2 * 0.05;
    else if(p6 < 10) cp6 = 3 * 0.05;
    else if(p6 < 12) cp6 = 4 * 0.05;
    else if(p6 < 16) cp6 = 5 * 0.05;
    else if(p6 < 20) cp6 = 6 * 0.05;
    else if(p6 >= 20) cp6 = 7 * 0.05;

    //Permeabilitas - padi sawah
    if(p7 < 0.025) cp7 = 7 * 0.05;
    else if(p7 < 0.125) cp7 = 6 * 0.05;
    else if(p7 < 0.25) cp7 = 5 * 0.05;
    else if(p7 < 0.5) cp7 = 4 * 0.05;
    else if(p7 < 2.0) cp7 = 3 * 0.05;
    else if(p7 < 6.25) cp7 = 2 * 0.05;
    else if(p7 < 12.5) cp7 = 1 * 0.05;
    else if(p7 >= 25.0) cp7 = 0;

    //Permeabilitas - lahan kering
    if(p7 < 0.025) cp7 = 0 * 0.05;
    else if(p7 < 0.125) cp7 = 1 * 0.05;
    else if(p7 < 0.25) cp7 = 2 * 0.05;
    else if(p7 < 0.5) cp7 = 3 * 0.05;
    else if(p7 < 2.0) cp7 = 4 * 0.05;
    else if(p7 < 6.25) cp7 = 5 * 0.05;
    else if(p7 < 12.5) cp7 = 6 * 0.05;
    else if(p7 >= 25.0) cp7 = 7* 0.05;

    //pH
    if(p8 < 3.5 || p8 > 9.7) cp8 = 0 * 0.07;
    else if(p8 < 4.0 || p8 > 9.3) cp8 = 1 * 0.07;
    else if(p8 < 4.5 || p8 > 8.9) cp8 = 2 * 0.07;
    else if(p8 < 5.5 || p8 > 8.5) cp8 = 3 * 0.07;
    else if(p8 < 5.9 || p8 > 8.1) cp8 = 4 * 0.07;
    else if(p8 < 6.3 || p8 > 7.7) cp8 = 5 * 0.07;
    else if(p8 < 6.7 || p8 > 7.3) cp8 = 6 * 0.07;
    else cp8 = 7 * 0.07;

    //Kapasitas Tukar Kation
    if(p9 < 2.0) cp9 = 0 * 0.06;
    else if(p9 < 5.0) cp9 = 1 * 0.06;
    else if(p9 < 10.0) cp9 = 2 * 0.06;
    else if(p9 < 16.5) cp9 = 3 * 0.06;
    else if(p9 < 24.5) cp9 = 4 * 0.06;
    else if(p9 < 40.0) cp9 = 5 * 0.06;
    else if(p9 < 80.0) cp9 = 6 * 0.06;
    else cp9 = 7 * 0.06;

    //Kejenuhan Basa
    if(p10 < 5) cp10 = 0 * 0.04;
    else if(p10 < 10) cp10 = 1 * 0.04;
    else if(p10 < 20) cp10 = 2 * 0.04;
    else if(p10 < 40) cp10 = 3 * 0.04;
    else if(p10 < 60) cp10 = 4 * 0.04;
    else if(p10 < 80) cp10 = 5 * 0.04;
    else if(p10 < 90) cp10 = 6 * 0.04;
    else if(p10 >= 90 || p10 <100) cp10 = 7 * 0.04;

    //N Total
    if(p11 < 0.02) cp11 = 0 * 0.05;
    else if(p11 < 0.05) cp11 = 1 * 0.05;
    else if(p11 < 0.1) cp11 = 2 * 0.05;
    else if(p11 < 0.2) cp11 = 3 * 0.05;
    else if(p11 < 0.35) cp11 = 4 * 0.05;
    else if(p11 < 0.5) cp11 = 5 * 0.05;
    else if(p11 < 0.75) cp11 = 6 * 0.05;
    else cp11 = 7 * 0.05;

    // P Tersedia
    if(p12 < 1.0) cp12 = 0 * 0.05;
    else if(p12 < 2.5) cp12 = 1 * 0.05;
    else if(p12 < 4.5) cp12 = 2 * 0.05;
    else if(p12 < 7.5) cp12 = 3 * 0.05;
    else if(p12 < 10.5) cp12 = 4 * 0.05;
    else if(p12 < 15.0) cp12 = 5 * 0.05;
    else if(p12 < 60.0) cp12 = 6 * 0.05;
    else cp12 = 7 * 0.05;

    //K dapat dipertukarkan
    if(p13 < 0.05) cp13 = 0 * 0.05;
    else if(p13 < 0.1) cp13 = 1 * 0.05;
    else if(p13 < 0.2) cp13 = 2 * 0.05;
    else if(p13 < 0.35) cp13 = 3 * 0.05;
    else if(p13 < 0.6) cp13 = 4 * 0.05;
    else if(p13 < 1) cp13 = 5 * 0.05;
    else if(p13 < 1.6) cp13 = 6 * 0.05;
    else cp13 = 7 * 0.05;

    //Ca dapat dipetukarkan
    if(p14 < 1.0) cp14 = 0 * 0.05;
    else if(p14 < 2.5) cp14 = 1 * 0.05;
    else if(p14 < 4.0) cp14 = 2 * 0.05;
    else if(p14 < 5.5) cp14 = 3 * 0.05;
    else if(p14 < 10.5) cp14 = 4 * 0.05;
    else if(p14 < 20.0) cp14 = 5 * 0.05;
    else if(p14 < 40.0) cp14 = 6 * 0.05;
    else cp14 = 7 * 0.05;

    //Mg dapat dipertukarkan
    if(p15 < 0.1) cp15 = 0 * 0.04;
    else if(p15 < 0.35) cp15 = 1 * 0.04;
    else if(p15 < 1.0) cp15 = 2 * 0.04;
    else if(p15 < 1.6) cp15 = 3 * 0.04;
    else if(p15 < 2.1) cp15 = 4 * 0.04;
    else if(p15 < 8) cp15 = 5 * 0.04;
    else if(p15 < 20.0) cp15 = 6 * 0.04;
    else cp15 = 7 * 0.04;

    //Kejenuhan Aluminium
    if(p16 < 2) cp16 = 7 * 0.05;
    else if(p16 < 5) cp16 = 6 * 0.05;
    else if(p16 < 10) cp16 = 5 * 0.05;
    else if(p16 < 15) cp16 = 4 * 0.05;
    else if(p16 < 20) cp16 = 3 * 0.05;
    else if(p16 < 40) cp16 = 2 * 0.05;
    else if(p16 < 70) cp16 = 1 * 0.05;
    else cp16 = 0 * 0.05;

    // Kandungan Zn (Zinc)
    if(p17a < 0.1 || p17a >800) cp17a = 0;
    else if(p17a < 0.3 || p17a > 500) cp17a = 1;
    else if(p17a < 0.7 || p17a > 300) cp17a = 2;
    else if(p17a < 1.5 || p17a > 150) cp17a = 3;
    else if(p17a < 2.5 || p17a > 50) cp17a = 4;
    else if(p17a < 4 || p17a > 12) cp17a = 5;
    else if(p17a < 6 || p17a > 9) cp17a = 6;
    else cp17a = 7;

    // Kandungan Fe (Besi)
    if(p17b < 0.1 || p17b >1200) cp17b = 0;
    else if(p17b < 0.5 || p17b > 850) cp17b = 1;
    else if(p17b < 1 || p17b > 600) cp17b = 2;
    else if(p17b < 3.5 || p17b > 350) cp17b = 3;
    else if(p17b < 6 || p17b > 150) cp17b = 4;
    else if(p17b < 9 || p17b > 50) cp17b = 5;
    else if(p17b < 13 || p17b > 19) cp17b = 6;
    else cp17b = 7;

    // Kandungan Mn (Mangan)
    if(p17c < 0.1 || p17c > 800) cp17c = 0;
    else if(p17c < 0.3 || p17c > 500) cp17c = 1;
    else if(p17c < 0.7 || p17c > 300) cp17c = 2;
    else if(p17c < 1.5 || p17c > 150) cp17c = 3;
    else if(p17c < 2.5 || p17c > 25) cp17c = 4;
    else if(p17c < 4 || p17c > 15) cp17c = 5;
    else if(p17c < 6 || p17c > 9) cp17c = 6;
    else cp17c = 7;

    // Kandungan Cu (Tembaga)
    if(p17d < 0.1 || p17d > 25) cp17d = 0;
    else if(p17d < 0.13 || p17d > 20) cp17d = 1;
    else if(p17d < 0.16 || p17d > 15) cp17d = 2;
    else if(p17d < 0.19 || p17d > 10) cp17d = 3;
    else if(p17d < 0.22 || p17d > 6) cp17d = 4;
    else if(p17d < 0.25 || p17d > 3) cp17d = 5;
    else if(p17d < 0.28 || p17d > 0.31) cp17d = 6;
    else cp17d = 7;
    //Final Average Score
    cp17 = (cp17a+cp17b+cp17c+cp17d)/4*0.05

    // C-Organik
    if(p18 < 0.1) cp18 = 0 * 0.11;
    else if(p18 < 0.5) cp18 = 1 * 0.11;
    else if(p18 < 1.0) cp18 = 2 * 0.11;
    else if(p18 < 2.0) cp18 = 3 * 0.11;
    else if(p18 < 3.0) cp18 = 4 * 0.11;
    else if(p18 < 4.0) cp18 = 5 * 0.11;
    else if(p18 < 5.0) cp18 = 6 * 0.11;
    else cp18 = 7 * 0.11;

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
        p17a: p17a,
        p17b: p17b,
        p17c: p17c,
        p17d: p17d,
        p18: p18,
        //asal_daerah: ad,
        //slk_flag: slk,
        //sc_flag: sc,
        soil_ind: (cp1 + cp2 + cp3 + cp4 + cp5 + cp6 + cp7 + cp8 + cp9 + cp10 + cp11 + cp12 + cp13 + cp14 +cp15+cp16+cp17+cp18).toFixed(2)
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