$(document).ready(function(){
	// hide show maps
	$('.map-container').hide();
	$('#map_1').show();
	$('.map-btn button').click(function(){
        var target = "#" + $(this).data("target");
        $(".map-container").not(target).hide();
        $(target).show();

    });

	// $(function(){
	// 	var src = $(this).attr('src');

	// 	$('.map-image').click(function(e){
	// 		e.preventDefault();
	// 		$(this).attr('src', src.replace('.jpg', 'xsites.jpg'));
	// 	}, function(){
	// 		$(this).attr('src', src);
	// 	});
	// });

	// hide show toxic sites for each map on hover...
	// $('.map-image').each(function(e){
	// 	var toxic = $(this).attr('src');
	// 	$(this).hover(function(){
	// 		$(this).attr('src', toxic.replace('.jpg', 'xsites.jpg'));
	// 	}, function(){
	// 		$(this).attr('src', toxic);
	// 	});
	// });

	// magnifier with loupe.js
	$('.map-image').loupe({
		width: 225,
		height: 175
	});

});
