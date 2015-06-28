$(function (){
	var $divRow = $('.row'), $item = $('article');

	$.ajax({
		type: 'GET',
		url: 'products.json',
		success: function(itemTv) {
			$.each(itemTv, function(i, item) {
				$divRow.append(' <div class="col-xs-12 col-sm-12  col-md-4">' );
				// $item.addClass('col-md-4');
				$item.append('<a><h2>' + item.title + '</h2></a>' + "<p class='priceTag'>" + item.price + "</p>");
				$item.append('<img class="img_corect"  src =' + item.image + '>');
				$item.append('<p>' + item.description + '</p>');
				// $item.append("<p class='priceTag'>" + item.price + "</p>");
				$item.append('<span class="label label-important" id="removeItem">Close</span> ');

			});
		},
		error: function() {
			alert('Something went wrong.');
		}
	});

	$('#removeItem').on('click', function(){
		
	});
});