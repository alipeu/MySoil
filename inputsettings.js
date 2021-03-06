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
// Persentase 0-100 (N Total, Kapasitas Menahan Air, Kejenuhan Basa, Kejenuhan Al, C-Organik)
$('input.persen[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 100); 
});

// Kedalaman Tanah Efektif 0-200
$('input#p1[type="text"]').inputFilter(function(value) {
    return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 200); 
});

// Kerapatan Isi 0-3.6
$('input#p2[type="text"]').inputFilter(function(value) {
  return /^\d*[.]?\d*$/.test(value) && (value === "" || parseFloat(value) <= 3.6); 
});

// pH 1-14
$('input#p5.ssqi[type="text"], input#p7.csqi[type="text"]').inputFilter(function(value) {
  return /^(|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 14); 
});

// Kapasitas Tukar Kation SSQI 0-160
$('input#p6.ssqi[type="text"], input#p8.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 160); 
});

// P Tersedia SSQI 0-120
$('input#p8.ssqi[type="text"], input#p11.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 120); 
});

// K dapat dipertukarkan
$('input#p2.ssqi[type="text"], input#p12.csqi[type="text"]').inputFilter(function(value) {
  return /^\d*[.]?\d*$/.test(value) && (value === "" || parseFloat(value) <= 3.2); 
});

// Ca dapat dipertukarkan
$('input#p10.ssqi[type="text"], input#p13.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 80); 
});

// Mg dapat dipertukarkan
$('input#p10.ssqi[type="text"], input#p14.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 40); 
});

// Permeabilitas, Cu
$('input#p6.csqi[type="text"], input#p16d.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 50); 
});

// Zn, Fe
$('input#p16a.csqi[type="text"], input#p16c.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 1600); 
});

// Mn
$('input#p16b.csqi[type="text"]').inputFilter(function(value) {
  return /^(|0|[1-9]\d*)$/.test(value) && (value === "" || parseInt(value) <= 2400); 
});