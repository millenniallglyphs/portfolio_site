

$( document ).ready(function() {
  function hovit(itsname) {
    $(itsname).hover(function(){
       $(this).find(".fillit").css("fill", "#F3F2FF");
       $(this).find(".notfill").css("stroke", "#1D3A39");
       }, function(){
       $(this).find(".fillit").css("fill", "none");
       $(this).find(".notfill").css("stroke", "white");
    });
  }

  function hova(thename) {
    $(thename).hover(function(){
       $(this).next().find(".fillit").css("fill", "#F3F2FF");
       $(this).next().find(".notfill").css("stroke", "#FF6969");
       }, function(){
       $(this).next().find(".fillit").css("fill", "none");
       $(this).next().find(".notfill").css("stroke", "white");
    });
  }

  //calling project section

  hova("#epiphytea");
  hova("#abacusa");
  hova("#bitclaimsa");
  hova("#botneta");

  //calling the writing section
  hovit("#clouda");
  hovit("#cybernetica");
  hovit("#recomposea");
  hovit("#opensourcea");


  console.log( "if you're reading this, have a great day!" );
});



/*paralax scrolling function*/
var velocity = 0.25;

function update(){
    var pos = $(window).scrollTop();
    $('#main').each(function() {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-3100;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
    });
};

/*call function*/
$(window).bind('scroll', update);


// header background color change
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
