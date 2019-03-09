// $('input[type=text]').tooltip({
//   placement: "top",
//   trigger: "focus"
// });

// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
      return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    };
  }(jQuery));
  
  
  // Install input filters.
$("#intTextBox").inputFilter(function(value) {
    return /^-?\d*$/.test(value); 
});
$("#uintTextBox").inputFilter(function(value) {
    return /^\d*$/.test(value); 
});
$("#intLimitTextBox").inputFilter(function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 500); 
});
$("#floatTextBox").inputFilter(function(value) {
    return /^-?\d*[.,]?\d*$/.test(value); 
});
$("#currencyTextBox").inputFilter(function(value) {
    return /^-?\d*[.,]?\d{0,2}$/.test(value); 
});
$("#hexTextBox").inputFilter(function(value) {
    return /^[0-9a-f]*$/i.test(value); 
});

// Persentase 0-100 (N Total, Kapasitas Menahan Air, Kejenuhan Basa, Kejenuhan Al, C-Organik)
$('input.persen[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 100); 
});

// Kedalaman Tanah Efektif SSQI 0-200
$('input#p1.ssqi[type="text"]').inputFilter(function(value) {
    return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 200); 
});

// Kerapatan Isi SSQI 0-3.6
$('input#p2.ssqi[type="text"]').inputFilter(function(value) {
  return /^\d*[.]?\d*$/.test(value); 
});

// pH SSQI 1-14
$('input#p5.ssqi[type="text"]').inputFilter(function(value) {
  return /^(|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 14); 
});

// Kapasitas Tukar Kation SSQI 0-160
$('input#p6.ssqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 160); 
});

// P Tersedia SSQI 0-120
$('input#p8.ssqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 120); 
});

// K dapat dipertukarkan

// Ca dapat dipertukarkan
$('input#p10.ssqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 80); 
});

// Mg dapat dipertukarkan

// 