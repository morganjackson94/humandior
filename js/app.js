$(document).ready(function() {
	playSFX()
	$('.hd').fadeIn(3000);
	$('.video-container').YTPlayer({
		videoId: 'qOnoVOCl1gg',
		fitToBackground:true,// use as a background video
		ratio: 16 / 9,
		autoplay: 1,
		start: 0,
		repeat:true,
		width: $(window).width(),
		wrapperZIndex: 99,
		playButtonClass: 'YTPlayer-play',
		pauseButtonClass: 'YTPlayer-pause',
		muteButtonClass: 'YTPlayer-mute',
		volumeUpButtonClass: 'YTPlayer-volume-up',
		volumeDownButtonClass: 'YTPlayer-volume-down'
	});
});

function playSFX () {
	$('#sfx')[0].volume = 0.8;
	$('#sfx')[0].load();
	$('#sfx')[0].play();
}