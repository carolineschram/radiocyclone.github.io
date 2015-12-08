

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

$('#p1 img').on({
    'mouseover' : function() {
      $(this).attr('src','attachments/fuzz_ewe_play.png');
    },
    mouseout : function() {
  $(this).attr('src','attachments/fuzz_ewe.png');
    }
  });

  $('#p2 img').on({
    'mouseover' : function() {
      $(this).attr('src','attachments/emused_play.png');
    },
    mouseout : function() {
  $(this).attr('src','attachments/emused.png');
    }
  });
  
  $('#p3 img').on({
    'mouseover' : function() {
      $(this).attr('src','attachments/late_delivery_play.png');
    },
    mouseout : function() {
  $(this).attr('src','attachments/late_delivery.png');
    }
  });
  
  $('#p4 img').on({
    'mouseover' : function() {
      $(this).attr('src','attachments/hippo_dentist_play.png');
    },
    mouseout : function() {
  $(this).attr('src','attachments/hippo_dentist.png');
    }
  });
	/* Audio Loading and Playing on Click */
	$('#p1').click(function(){
	var sound = new Howl({
		urls: ['audio/fuzz_ewe.m4a']
	}).play();
});

$('#p2').click(function(){
	var sound = new Howl({
		urls: ['audio/emused.m4a']
	}).play();
});
$('#p3').click(function(){
	var sound = new Howl({
		urls: ['audio/late_delivery.m4a']
	}).play();
});
$('#p4').click(function(){
	var sound = new Howl({
		urls: ['audio/hippo_dentist.m4a']
	}).play();
});



/*scrolling*/
 $('#fullpage').fullpage({
	 anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thpage'],
	 slidesNavigation: true
 });
	
	
/*CONTACT PAGE*/
});