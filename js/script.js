$(document).ready(function() {

	$('.generate-quote').on('click', function() {
		$.ajaxSetup({ cache: false });
		$.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', function(data) {
			$.each( data, function( key, val ) {
				var url = 'https://twitter.com/intent/tweet?text="' + val.content.replace(/<\/?[^>]+(>|$)/g, "") +'" ' + val.title;
				$('p span').html(val.content)
				$('p strong').html(" ~ " + val.title)
				$('.button-quote').prop('href', url).attr('href', url);
			});
		});
	});

	$('.button-quote').click(function() {

	});
});