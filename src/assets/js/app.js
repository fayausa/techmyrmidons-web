$(document).foundation();

$(document).ready(function() {
    console.log("ready!");
});
$( "#nav-toggle" ).on( "click", function() {
	$(this).toggleClass("active");
  $('#side-menu').toggle();
});
$('#tab-container').easytabs();
