$(function() {


  $.getJSON('/data/home.json', function(data) {

    $.each(data.home, function(key, value) {

    	var techRow = "<li  class='tech-link'><a class='techlist__item hovicon effect-4 sub-b' href='view.html?tech="+value.folderName +"'><img width='80' src='" +'data/'+ value.folderName +'/'+ value.folderName +'/' + value.logo + " ' alt=' " + value.folderName + " '><span> " + value.technology + " </span></a></li>"

      $(techRow).appendTo("#technology-wrap");
    });

  });

});
