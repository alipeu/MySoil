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
