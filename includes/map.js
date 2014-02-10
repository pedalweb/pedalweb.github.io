/**
 * @author Isaac Seigel-Boettner
 */
$(document).ready(function(){
	
/** video player **/
	$('#vidplayer').fadeOut(0);

	$('#xbutton').click(function(){
		$('#vidplayer').fadeOut(500);
	})
	



	$('a.dot').click(function(){
		
		$('#vidplayer').fadeIn(500)
		
		$('a.dot').removeClass('selected');
		$(this).addClass('selected');
		
		var session = '.session_detail#' + $(this).attr('session');
		var htmlCode = $(session).html();
		
		$('.prompt').fadeOut(500, function(){
			$('.prompt .session_detail').html(htmlCode);
			$('.prompt').fadeIn(500);
		});
		

	});
		
	
});

