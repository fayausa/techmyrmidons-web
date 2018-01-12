$(function() { 

  // Android People to Follow

  $.getJSON('/data/android/android-follow.json', function(data) {

    $.each(data.androidFolowPeople, function(i, f) {

      var androidFolow = "<a href='" + f.followLink + "' target='blank' class='follow__list'><div class='follow__list__img grow'><img src='" +'assets/img/android/' + f.photo + "'></div><div class='follow__list__name'> <span>" + f.name + "</span> </div></a>"

      $(androidFolow).appendTo("#androidFollowWrap");

    });

  });



  //Android Blog

  $.getJSON('/data/android/android-blog.json', function(data) {

    $.each(data.androidBlog, function(i, f) {

      var androidBlog = "<a href='" + f.blog + "' target='blank' class='blog__name'>" + f.author + "</a>"

      $(androidBlog).appendTo("#androidBlogWrap");

    });

  });


  //Android Technology Year Tab

  $.getJSON('/data/android/android-years.json', function(data) {

    var count = 0;
    $.each(data.androidTab, function(i, f) {

      var androidYear = "<li class='tab' data-year='"+ f.year +"' data-url='" + f.url + "'><a  href='"+ '#' + f.year + "'>" + f.year + "</a></li>"

      var androidYeartab = "<div id='" + f.year + "'></div>"

      $(androidYear).appendTo("#androidYear");

      $(androidYeartab).appendTo("#androidYeartab");
      count = count + 1;
      if (data.androidTab.length == count) {
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


  //Android Technology 2017 with popup
  function getJson(url, year) {
    $.getJSON(url, function(data) {
      $("#androidPop").html('');
      $("#" + year).html('');
      $.each(data[year], function(i, f) {

        var androidRow2017 = "<div class='large-3 medium-6 columns'><div class='techwidget'><div class='techwidget__logo'><img src=' " +'assets/img/android/' + f.icon + " '></div><div class='techwidget__head'>" + f.title + "</div><p class='techwidget__content'>" + f.description + "</p><a class='techwidget__more popup-link' href='"+ '#' + f.morelink + "'>Read More</a></div></div>"

        var androidRow = "<div id='"+ f.morelink + "' class='popup'><div class='techwidget'><div class='techwidget__logo'><img src='" +'assets/img/android/' + f.icon + "'></div><div class='techwidget__head'>" + f.title + "</div><div class='techwidget__content'>" + f.description + "</div><p class='techwidget__content'>Dowoload here <a class='link' target='blank' href='" + f.url + "'> " + f.url + "</a></p></div></div>"

        $(".popup-link").colorbox({inline:true, width:"90%",maxWidth: '960px',});

        $(androidRow).appendTo("#androidPop");

        $(androidRow2017).appendTo("#" + year);

      });

    });
  }

  function getInitialData() {
      var loadYear = window.location.hash.substr(1);
      if(loadYear){
        var loadUrl  = '/data/android/android-'+ loadYear +'.json';
      } else {
        var loadUrl = $('.tab-container').find('.tab').attr('data-url');
        var loadYear = $('.tab-container').find('.tab').attr('data-year');
      }     
      getJson(loadUrl, loadYear);
   
  }

  
  


  //Android Technology 2016 with popup

  // $.getJSON('/data/android/android-2016.json', function(data) {

  //   $.each(data.android2016, function(i, f) {

  //     var androidRow2016 = "<div class='large-3 medium-6 columns'><div class='techwidget'><div class='techwidget__logo'><img src=' " +'assets/img/android/' + f.icon + " '></div><div class='techwidget__head'>" + f.title + "</div><p class='techwidget__content'>" + f.description + "</p><a class='techwidget__more popup-link' href='"+ '#' + f.morelink + "'>Read More</a></div></div>"

  //     var androidRow = "<div id='"+ f.morelink + "' class='popup'><div class='techwidget'><div class='techwidget__logo'><img src='" +'assets/img/android/' + f.icon + "'></div><div class='techwidget__head'>" + f.title + "</div><div class='techwidget__content'>" + f.description + "</div><p class='techwidget__content'>Dowoload here <a class='link' target='blank' href='" + f.url + "'> " + f.url + "</a></p></div></div>"

  //     $(".popup-link").colorbox({inline:true, width:"90%",maxWidth: '960px',});

  //     $(androidRow).appendTo("#androidPop");

  //     $(androidRow2016).appendTo("#2016");

  //   });

  // });

});




