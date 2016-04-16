$(document).ready(function(){

	$(".beer-info").hide();
	$(".beer").show();

	$(".beer").click(function(){
	$(".beer-info").slideToggle();
	});
});

