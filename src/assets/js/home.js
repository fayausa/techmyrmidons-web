$(function() {

  var people = [];

  $.getJSON('/data/home.json', function(data) {

    $.each(data.home, function(i, f) {

    	var techRow = "<li  class='tech-link'><a class='techlist__item hovicon effect-4 sub-b' href='view.html?tech="+f.folderName +"'><img src='" +'data/'+ f.folderName +'/'+ f.folderName +'/' + f.logo + " ' alt=' " + f.folderName + " ' ><span> " + f.technology + " </span></a></li>"

      $(techRow).appendTo("#technology-wrap");
    });

  });

});