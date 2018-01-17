$(function() { 
  var url_string = location.href; //window.location.href
  var url = new URL(url_string);
  var tech = url.searchParams.get("tech");

  var title = tech + ' Myrmidon';
  $('.page-title').html(title);


  // People to Follow 

  $.getJSON('/data/'+ tech +'/' + tech + '-follow.json', function(data) {

    $.each(data[tech], function(i, f) {

      var follow = "<a href='" + f.followLink + "' target='blank' class='follow__list'><div class='follow__list__img grow'><img src='" +'assets/img/' +tech+ '/' + f.photo + "'></div><div class='follow__list__name'> <span>" + f.name + "</span> </div></a>"

      $(follow).appendTo("#follow");

    });

  });


  // Blog

  $.getJSON('/data/'+ tech +'/' + tech + '-blog.json', function(data) {

    $.each(data[tech], function(i, f) {

      var androidBlog = "<a href='" + f.blog + "' target='blank' class='blog__name'>" + f.author + "</a>"

      $(androidBlog).appendTo("#blogWrap");

    });

  });


  //Technology Year Tab

  $.getJSON('/data/'+ tech +'/'+ tech +'-years.json', function(data) {

    var count = 0;
    $.each(data[tech], function(i, f) {

      var androidYear = "<li class='tab' data-year='"+ f.year +"' data-url='" + f.url + "'><a  href='"+ '#' + f.year + "'>" + f.year + "</a></li>"

      var androidYeartab = "<div id='" + f.year + "'></div>"

      $(androidYear).appendTo("#year");

      $(androidYeartab).appendTo("#yearTab");
      count = count + 1;
      if (data[tech].length == count) {
        getInitialData();
      }
    });

    $('#tab-container').easytabs();
     
  });

  $('body').on('click','.tab',function(){
    var url = $(this).attr('data-url');
    var year = $(this).attr('data-year');
    getJson(url, year);
  });


  //Technology 2017 with popup

  function getJson(url, year) {
    $.getJSON(url, function(data) {
      $("#detailPop").html('');
      $("#" + year).html('');
      $.each(data[year], function(i, f) {

        var techRow = "<div class='large-3 medium-6 columns'><div class='techwidget'><div class='techwidget__logo'><img src=' " +'assets/img/'+tech+'/' + f.icon + " '></div><div class='techwidget__head'>" + f.title + "</div><p class='techwidget__content'>" + f.description + "</p><a class='techwidget__more popup-link' href='"+ '#' + f.morelink + "'>Read More</a></div></div>"

        var techRowDetail = "<div id='"+ f.morelink + "' class='popup'><div class='techwidget'><div class='techwidget__logo'><img src='" +'assets/img/'+tech+'/' + f.icon + "'></div><div class='techwidget__head'>" + f.title + "</div><div class='techwidget__content'>" + f.description + "</div><p class='techwidget__content'>Dowoload here <a class='link' target='blank' href='" + f.url + "'> " + f.url + "</a></p></div></div>"

        $(techRowDetail).appendTo("#detailPop");
        $(techRow).appendTo("#" + year);
        $(".popup-link").colorbox({inline:true, width:"90%",maxWidth: '960px',});

      });

    });
  }

  function getInitialData() {
      var loadYear = window.location.hash.substr(1);
      if(loadYear){
        var loadUrl  = '/data/'+tech+'/'+tech+'-'+ loadYear +'.json';
      } else {
        var loadUrl = $('.tab-container').find('.tab').attr('data-url');
        var loadYear = $('.tab-container').find('.tab').attr('data-year');
      }     
      getJson(loadUrl, loadYear);
   
  }

});




