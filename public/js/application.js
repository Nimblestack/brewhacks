$(document).ready(function(){

	$(".beer-info").hide();
	$(".beer-image").show();

	$(".beer-image").click(function(){
	$(".beer-info").slideToggle();
	});
});

