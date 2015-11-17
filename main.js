$(document).ready(function(){
$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});
//Load Initial page
$.get('intro.html', function(data){
	$('#content').html(data)
});
//Load Page on Click
$('#navpane a').click(
	function(event){ 
		event.preventDefault();
		$('#nav-links li').css('background','')
		$('#nav-links a').css('color','inherit')
		if($(this).attr('id')!='heading'){
			$(this).parent().css('background','#D0BDB4')
			$(this).css('color','#003326')
		}
		$.ajax(
			{
				url: $(this).attr('href'),
				success: function(response) {
					$('#content').html(response);
				}
		})
	return false;
	}
);

$('#content .gmaps').off();
});