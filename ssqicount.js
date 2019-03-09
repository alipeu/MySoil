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
    var ad = document.getElementById('ad').value;
    var date = new Date();
        
    if(p1 && p2 && p3 && p4 && p5 && p6 && p7 && p8 && p9 && p10 && p11 && p12 && p13) {
        hitungBtn.innerHTML = "Menghitung";
        hitungBtn.classList.add('spinning');

        var cp1, cp2, cp3, cp5, cp6, cp7, cp8, cp9, cp10, cp11, cp12, cp13, soil_ind, soil_percentage, soil_quality;

        // Kedalaman Tanah Efektif
        if(p1 < 5) cp1 = 0 * 0.09;
        else if(p1 < 10) cp1 = 1 * 0.09;
        else if(p1 < 20) cp1 = 2 * 0.09;
        else if(p1 < 40) cp1 = 3 * 0.09;
        else if(p1 < 60) cp1 = 4 * 0.09;
        else if(p1 < 80) cp1 = 5 * 0.09;
        else if(p1 < 100) cp1 = 6 * 0.09;
        else cp1 = 7 * 0.09;

        // Bobot Isi Tanah
        if(p2 < 0.7) cp2 = 7 * 0.09;
        else if(p2 < 1.0) cp2 = 6 * 0.09;
        else if(p2 < 1.2) cp2 = 5 * 0.09;
        else if(p2 < 1.3) cp2 = 4 * 0.09;
        else if(p2 < 1.4) cp2 = 3 * 0.09;
        else if(p2 < 1.6) cp2 = 2 * 0.09;
        else if(p2 < 1.8) cp2 = 1 * 0.09;
        else cp2 = 0 * 0.09;

        // Drainase , 's' untuk sawah, 'lk' untuk lahan kering
        if((p3 == 'Sangat cepat' && slk == 's') || (p3 == 'Tergenang' && slk == 'lk')) cp3 = 0 * 0.07;
        else if((p3 == 'Cepat' && slk == 's') || (p3 == 'Sangat buruk' && slk == 'lk')) cp3 = 1 * 0.07;
        else if((p3 == 'Agak cepat' && slk == 's') || (p3 == 'Buruk' && slk == 'lk')) cp3 = 2 * 0.07;
        else if((p3 == 'Sedang' && slk == 's') || (p3 == 'Agak buruk' && slk == 'lk')) cp3 = 3 * 0.07;
        else if((p3 == 'Agak buruk' && slk == 's') || (p3 == 'Sedang' && slk == 'lk')) cp3 = 4 * 0.07;
        else if((p3 == 'Buruk' && slk == 's') || (p3 == 'Agak cepat' && slk == 'lk')) cp3 = 5 * 0.07;
        else if((p3 == 'Sangat buruk' && slk == 's') || (p3 == 'Cepat' && slk == 'lk')) cp3 = 6 * 0.07;
        else if((p3 == 'Tergenang' && slk == 's') || (p3 == 'Sangat cepat' && slk == 'lk')) cp3 = 7 * 0.07;

        //Tekstur Tanah
        if(p4 == 'Pasir') cp4 = 1 * 0.09;
        else if(p4 == 'Pasir berlempung') cp4 = 2 * 0.09;
        else if(p4 == 'Klei(liat) berat') cp4 = 3 * 0.09;
        else if(p4 == 'Lempung berpasir' || p4 == 'Klei(liat)' || p4 == 'Klei(liat) berpasir') cp4 = 4 * 0.09;
        else if(p4 == 'Klei(liat) berdebu' || p4 == 'Debu' || p4 == 'Lempung berliat') cp4 = 5 * 0.09;
        else if(p4 == 'Lempung klei(liat) berdebu' || p4 == 'Lempung klei(liat) berpasir' || p4 == 'Lempung berdebu') cp4 = 6 * 0.09;
        else if(p4 == 'Lempung') cp4 = 7 * 0.09;

        //pH
        if(p5 < 3.5 || p5 > 9.7) cp5 = 0 * 0.08;
        else if(p5 < 4.0 || p5 > 9.3) cp5 = 1 * 0.08;
        else if(p5 < 4.5 || p5 > 8.9) cp5 = 2 * 0.08;
        else if(p5 < 5.5 || p5 > 8.5) cp5 = 3 * 0.08;
        else if(p5 < 5.9 || p5 > 8.1) cp5 = 4 * 0.08;
        else if(p5 < 6.3 || p5 > 7.7) cp5 = 5 * 0.08;
        else if(p5 < 6.7 || p5 > 7.3) cp5 = 6 * 0.08;
        else cp5 = 7 * 0.08;

        //Kapasitas Tukar Kation
        if(p6 < 2.0) cp6 = 0 * 0.07;
        else if(p6 < 5.0) cp6 = 1 * 0.07;
        else if(p6 < 10.0) cp6 = 2 * 0.07;
        else if(p6 < 16.5) cp6 = 3 * 0.07;
        else if(p6 < 24.5) cp6 = 4 * 0.07;
        else if(p6 < 40.0) cp6 = 5 * 0.07;
        else if(p6 < 80.0) cp6 = 6 * 0.07;
        else cp6 = 7 * 0.07;

        //Total N Organik
        if(p7 < 0.02) cp7 = 0 * 0.06;
        else if(p7 < 0.05) cp7 = 1 * 0.06;
        else if(p7 < 0.1) cp7 = 2 * 0.06;
        else if(p7 < 0.2) cp7 = 3 * 0.06;
        else if(p7 < 0.35) cp7 = 4 * 0.06;
        else if(p7 < 0.5) cp7 = 5 * 0.06;
        else if(p7 < 0.75) cp7 = 6 * 0.06;
        else cp7 = 7 * 0.06;

        // Fosfor (P) Tersedia
        if(p8 < 1.0) cp8 = 0 * 0.06;
        else if(p8 < 2.5) cp8 = 1 * 0.06;
        else if(p8 < 4.5) cp8 = 2 * 0.06;
        else if(p8 < 7.5) cp8 = 3 * 0.06;
        else if(p8 < 10.5) cp8 = 4 * 0.06;
        else if(p8 < 15.0) cp8 = 5 * 0.06;
        else if(p8 < 60.0) cp8 = 6 * 0.06;
        else cp8 = 7 * 0.06;

        // Kalium dapat dipertukarkan
        if(p9 < 0.05) cp9 = 0 * 0.06;
        else if(p9 < 0.1) cp9 = 1 * 0.06;
        else if(p9 < 0.2) cp9 = 2 * 0.06;
        else if(p9 < 0.35) cp9 = 3 * 0.06;
        else if(p9 < 0.6) cp9 = 4 * 0.06;
        else if(p9 < 1) cp9 = 5 * 0.06;
        else if(p9 < 1.6) cp9 = 6 * 0.06;
        else cp9 = 7 * 0.06;

        //Kalsium dapat dipertukarkan
        if(p10 < 1.0) cp10 = 0 * 0.05;
        else if(p10 < 2.5) cp10 = 1 * 0.05;
        else if(p10 < 4.0) cp10 = 2 * 0.05;
        else if(p10 < 5.5) cp10 = 3 * 0.05;
        else if(p10 < 10.5) cp10 = 4 * 0.05;
        else if(p10 < 20.0) cp10 = 5 * 0.05;
        else if(p10 < 40.0) cp10 = 6 * 0.05;
        else cp10 = 7 * 0.05;

        //Magnesium dapat dipertukarkan
        if(p11 < 0.1) cp11 = 0 * 0.04;
        else if(p11 < 0.35) cp11 = 1 * 0.04;
        else if(p11 < 1.0) cp11 = 2 * 0.04;
        else if(p11 < 1.6) cp11 = 3 * 0.04;
        else if(p11 < 2.1) cp11 = 4 * 0.04;
        else if(p11 < 8) cp11 = 5 * 0.04;
        else if(p11 < 20.0) cp11 = 6 * 0.04;
        else cp11 = 7 * 0.04;

        // Aluminium dapat dipertukarkan
        if(p12 < 2) cp12 = 7 * 0.06;
        else if(p12 < 5) cp12 = 6 * 0.06;
        else if(p12 < 10) cp12 = 5 * 0.06;
        else if(p12 < 15) cp12 = 4 * 0.06;
        else if(p12 < 20) cp12 = 3 * 0.06;
        else if(p12 < 40) cp12 = 2 * 0.06;
        else if(p12 < 70) cp12 = 1 * 0.06;
        else cp12 = 0 * 0.06;

        // Kandungan Organik Tanah (C-Organik, dalam %)
        if(p13 < 0.1) cp13 = 0 * 0.12;
        else if(p13 < 0.5) cp13 = 1 * 0.12;
        else if(p13 < 1.0) cp13 = 2 * 0.12;
        else if(p13 < 2.0) cp13 = 3 * 0.12;
        else if(p13 < 3.0) cp13 = 4 * 0.12;
        else if(p13 < 4.0) cp13 = 5 * 0.12;
        else if(p13 < 5.0) cp13 = 6 * 0.12;
        else cp13 = 7 * 0.12;

        //Index Kualitas Tanah
        soil_ind = cp1 + cp2 + cp3 + cp4 + cp5 + cp6 + cp7 + cp8 + cp9 + cp10 + cp11 + cp12 + cp13
        soil_percentage = soil_ind / 7 * 100

        if(soil_ind <= 1.0) soil_quality = "Sangat Rendah"
        else if(soil_ind <= 2.0) soil_quality = "Rendah"
        else if(soil_ind <= 3.0) soil_quality = "Agak Rendah"
        else if(soil_ind <= 4.0) soil_quality = "Moderat"
        else if(soil_ind <= 5.0) soil_quality = "Agak Tinggi"
        else if(soil_ind <= 6.0) soil_quality = "Tinggi"
        else soil_quality = "Sangat Tinggi"

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
            asal_daerah: ad,
            slk_flag: slk,
            sc_flag: 's',
            soil_ind: soil_ind.toFixed(2),
            soil_percentage: (soil_ind / 7 * 100).toFixed(2),
            soil_quality: soil_quality,
            time: date
        }

        var updates = {};
        updates['/soil/' + sid] = data;
                            
        setTimeout( 
            function() {  
                firebase.database().ref().update(updates).then(function() {
                    alert("Indeks kualitas tanah Anda: " + data.soil_ind + " (" + data.soil_percentage + "%)" + "\nKualitas tanah Anda: " + data.soil_quality);
                    // window.location.reload();
                });
                hitungBtn.classList.remove('spinning');
                hitungBtn.innerHTML = "Hitung";
                document.getElementById("warning").style.visibility = "hidden";
            }, 2000);
    }
    else {
        alert('Ada field yang kosong');
        document.getElementById("warning").style.visibility = "visible";
    }
}, false);