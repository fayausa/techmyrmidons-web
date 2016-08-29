$(document).foundation();

$(document).ready(function() {
    console.log("ready!");
});
$( "#nav-toggle" ).on( "click", function() {
	$(this).toggleClass("active");
  $('#side-menu').toggle();
});

// var $div = $('#side-menu');
// $(document.body).click(function(){
//     if (!$div.has(this).length) { // if the click was not within $div
//         $div.hide();
//     }
// });