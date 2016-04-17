$(document).ready(function(){

	
    $('.beer').click(function () {
        $(this).next('div').slideToggle();
        
        $(this).parent().siblings().children().next().slideUp();
        return false;
    });

		$('.ex1').slider();
		$('#beer-dropdown').multiselect();


});

