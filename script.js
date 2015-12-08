

/* HOME PAGE*/

$(document).ready(function(){
	/* miscellany */
	$(".main div").hover(function(){
		$(this).css("cursor", "pointer");
	});
	$("a").hover(function(){
		$(this).css("cursor", "pointer");
	});
	$('body').flowtype({
 minimum : 550,
 maximum : 1100
});

	

	/* Audio Loading and Playing on Click */
	$('#p1').click(function(){
	var sound = new Howl({
		urls: ['audio/FuzzEwe.mp3']
	}).play();
});


/*scrolling*/
 $('#fullpage').fullpage({
	 anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thpage'],
	 slidesNavigation: true
 });
	
	
/*CONTACT PAGE*/
});