// function to open/close nav
function toggleNav(){
    // if nav is open, close it
    if($("nav").is(":visible")){
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else{
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
    }
  }
  
  // when clicking + or ☰ button
  $("button").click(function(){
    // when clicking ☰ button, open nav
    if($("header").hasClass("open")){
      toggleNav();
    }
    // when clicking + button, open header
    else{
      $("header").addClass("open");
    }
  });
  
  // close nav
  $("#nav-close").click(function(){
    toggleNav();
  });
  
  // scroll to sections
  $("nav li").click(function(){
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("content section").eq(index);
    
    toggleNav();
    
    $('html,body').delay(300).animate({
      scrollTop: target.offset().top
    }, 500);
  });
  var words = ['Hallo, Welkom op onze CarExpo!', 'Bekijk Verschillende type BMWs!', 'Vergeet niet onze Quiz te bekijken om je kennis te testen! ;)', 'Gemaakt door Mason en Renato'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});