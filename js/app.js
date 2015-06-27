$(document).ready(function() {
	playSFX()
	$('.hd').fadeIn(3000);
});

function playSFX () {
	$('#sfx')[0].volume = 0.8;
	$('#sfx')[0].load();
	$('#sfx')[0].play();
}