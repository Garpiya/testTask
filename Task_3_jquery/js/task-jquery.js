$(function (){
	var $divRow = $('.row'), $item = $('article');

	var itemTemplate = "<div class='col-xs-12 col-sm-12 col-md-4'>" +
           "<article>"+
                "<h2><a> {{title}} </a></h2>" +
                "<img src='{{image}}' class='img_corect'>" + 
                "<p> {{description}} </p>" +
                "<p class='priceTag'>{{price}}</p>" +
                "<span class='label label-important' id='removeItem'>Close</span>" +
            "</article> " +
          "</div>";

	$.ajax({
		type: 'GET',
		url: 'products.json',
		success: function(itemTv) {
			$.each(itemTv, function(i, item) {
				$divRow.append(Mustache.render(itemTemplate, item));
			});
			$( "span" ).click( function(e){
      			e.preventDefault();
    		$(this).parent().hide("fast");
    		});
		},
		error: function() {
			alert('Something went wrong.');
		}
	});




});