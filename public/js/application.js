$(document).ready(function(){

	
    $('.beer').click(function () {
        $(this).next('div').slideToggle();
        
        $(this).parent().siblings().children().next().slideUp();
        return false;
    });

});

