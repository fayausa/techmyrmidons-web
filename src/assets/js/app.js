$(document).foundation();

$(document).ready(function() {
    $('.techwidget').matchHeight();
});
$( "#nav-toggle" ).on( "click", function() {
	$(this).toggleClass("active");
  $('#side-menu').toggle();
});

$(".popup-link").colorbox({inline:true, width:"90%",maxWidth: '960px',});