var sparam = 'c';

$("input[name='rPType'], input[name='rSType']").change(function(){
    sparam = $('[name=rPType]:checked').val();
    var stype = $('[name=rSType]:checked').val();
    console.log(sparam);
    if(sparam == 'c') {
        $('.csqi-param').show();
    }
    $('tr').each(function() {
        var p = $(this).find('.pType').text();
        var s = $(this).find('.sType').text();
        
        if (p == sparam && (s == stype || stype == 'a')) {
            $(this).show();
        } 
        else if (p != '' && s != '') {
            $(this).hide();
        }
    });
});

var tblSoil = document.getElementById('tbl_soil_list');
var databaseRef = firebase.database().ref('soil');
var rowIndex = 1;

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
    
        var row = tblSoil.insertRow(rowIndex);
        var cellQual = row.insertCell(0);
        var cellReg = row.insertCell(1);
        var cellSType = row.insertCell(2);
        var cellP1 = row.insertCell(3);
        var cellP2 = row.insertCell(4);
        var cellP3 = row.insertCell(5);
        var cellP4 = row.insertCell(6);
        var cellP5 = row.insertCell(7);
        var cellP6 = row.insertCell(8);
        var cellP7 = row.insertCell(9);
        var cellP8 = row.insertCell(10);
        var cellP9 = row.insertCell(11);
        var cellP10 = row.insertCell(12);
        var cellP11 = row.insertCell(13);
        var cellP12 = row.insertCell(14);
        var cellP13 = row.insertCell(15);
        var cellP14 = row.insertCell(16);
        var cellP15 = row.insertCell(17);
        var cellP16 = row.insertCell(18);
        var cellP17a = row.insertCell(19);
        var cellP17b = row.insertCell(20);
        var cellP17c = row.insertCell(21);
        var cellP17d = row.insertCell(22);
        var cellP18 = row.insertCell(23);
        var cellPType = row.insertCell(24);
        cellSType.setAttribute('class', 'sType');
        cellPType.setAttribute('class', 'pType');
        cellP15.setAttribute('class', 'csqi-param');
        cellP16.setAttribute('class', 'csqi-param');
        cellP17a.setAttribute('class', 'csqi-param');
        cellP17b.setAttribute('class', 'csqi-param');
        cellP17c.setAttribute('class', 'csqi-param');
        cellP17d.setAttribute('class', 'csqi-param');
        cellP18.setAttribute('class', 'csqi-param');
        cellQual.appendChild(document.createTextNode(childData.soil_ind));
        cellReg.appendChild(document.createTextNode(childData.asal_daerah));
        if(childData.slk_flag == 's') {
            cellSType.appendChild(document.createTextNode("Sawah"));
        }
        else if(childData.slk_flag == 'lk') {
            cellSType.appendChild(document.createTextNode("Lahan Kering"));
        }
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
        cellP15.appendChild(document.createTextNode(childData.p15));
        cellP16.appendChild(document.createTextNode(childData.p16));
        cellP17a.appendChild(document.createTextNode(childData.p17a));
        cellP17b.appendChild(document.createTextNode(childData.p17b));
        cellP17c.appendChild(document.createTextNode(childData.p17c));
        cellP17d.appendChild(document.createTextNode(childData.p17d));
        cellP18.appendChild(document.createTextNode(childData.p18));
        cellPType.appendChild(document.createTextNode(childData.sc_flag));

        $(".pType, .csqi-param").hide();

        rowIndex = rowIndex + 1;
    });

    $('tr').each(function() {
        var p = $(this).find('.pType').text();
            
        if (p == sparam) {
            $(this).hide();
        } 
    });
});