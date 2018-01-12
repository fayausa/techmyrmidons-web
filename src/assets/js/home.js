$(function() {

  var people = [];

  $.getJSON('/data/home.json', function(data) {

    $.each(data.home, function(i, f) {

    	var techRow = "<li><a class='techlist__item hovicon effect-4 sub-b' href='" + f.page + "'><img src='  " +'assets/img/' + f.logo + " ' alt=' " + f.logoAlt + " ' ><span> " + f.technology + " </span></a></li>"

      $(techRow).appendTo("#technology-wrap");
    });

  });

});