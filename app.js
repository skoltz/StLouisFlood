$(document).ready(function() {
	$('.map-container').hide();
	$('#map_1').show();
	$('.map-btn button').click(function(){
        var target = "#" + $(this).data("target");
        $(".map-container").not(target).hide();
        $(target).show();
    });

});