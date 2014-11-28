// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require jquery-ui
//= require jquery.turbolinks
//= require turbolinks
//= require twitter/bootstrap

// require_tree . is removed because dropdowns did not work



$(document).ready( function () {
    $('#table_id').DataTable({bPaginate: false, bInfo: false});
    
    var isSmoker = $('input:checked[name="accident[smoker]"]').val() == "Yes";    	
    if (isSmoker) {
    	$('#smoker').show();
    } else {
    	//var typeofsmoke = document.getElementById("accident_typeofsmoke");
    	//typeofsmoke.value = "";
    	$('#smoker').hide(); 
    }

	$('input[name="accident[smoker]"]').change(function() {
    	var isSmoker = $('input:checked[name="accident[smoker]"]').val() == "Yes";    	
    	if (isSmoker) {
    		$('#smoker').show();
    	} else {
    		var typeofsmoke = document.getElementById("accident_typeofsmoke");
    		var smokequantity = document.getElementById("accident_smokequantity");
    		typeofsmoke.value = "";
    		smokequantity.value = "";
    		$('#smoker').hide(); 
    	}		
	});
	
	$('#alcohol').hide();
	
	$('input[name="accident[alcohol]"]').change(function() {
    	var isAlcohol = $('input:checked[name="accident[alcohol]"]').val() == "Yes";
    	$('#alcohol').toggle(isAlcohol);
	});
    
});


    
  
    





