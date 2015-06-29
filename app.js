$(document).ready( function () {
	$('form').on('submit', function () {
		event.preventDefault();
		var item = $(this).find('#listItem').val();	
		$(this).closest('body').find('ul').append('<li class="pork">'+item+'</li>');
		$('#listItem').val('');

	});

	$(document).on('click', 'li', function () {
		$(this).toggleClass('completed');

	});

});