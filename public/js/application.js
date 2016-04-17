$(document).ready(function(){
    $('.beer-open').click(function (e) {
    	e.preventDefault();
    	var d = $(this).attr('data-target');
    	console.log(d)
    	$(d).modal('show');
    });
});

