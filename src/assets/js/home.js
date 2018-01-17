$(function() {

  var people = [];

  $.getJSON('/data/home.json', function(data) {

    $.each(data.home, function(i, f) {

    	var techRow = "<li  class='tech-link'><a class='techlist__item hovicon effect-4 sub-b' href='" + f.page + "?tech="+f.techData +"'><img src='  " +'assets/img/' + f.logo + " ' alt=' " + f.logoAlt + " ' ><span> " + f.technology + " </span></a></li>"

      $(techRow).appendTo("#technology-wrap");
    });

  });

});