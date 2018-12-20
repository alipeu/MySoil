var sparam = 'c';

$("input[name='rPType']").change(function(){
    sparam = $('[name=rPType]:checked').val();
    $('tr').each(function() {
        var p = $(this).find('.pType').text();
        
        if (p == sparam) {
            $(this).show();
        } 
        else if (p != '') {
            $(this).hide();
        }
    });
});

$("input[name='rSType']").change(function(){
    var stype = $('[name=rSType]:checked').val();
    $('tr').each(function() {
        var s = $(this).find('.sType').text();
        
        if (s == stype || stype == 'a') {
            $(this).show();
        } 
        else if (s != '') {
            $(this).hide();
        }
    });
});

var filtrTable = document.getElementById('tbl_soil_list');
var databaseRef = firebase.database().ref('soil');
var rowIndex = 1;

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        
        var row = filtrTable.insertRow(rowIndex);
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
        cellSType.setAttribute('class', 'sType');
        cellPType.setAttribute('class', 'pType');
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

    $('tr').each(function() {
        var p = $(this).find('.pType').text();
            
        if (p == sparam) {
            $(this).hide();
        } 
    });
});

