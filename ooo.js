

$( document ).ready(function() {
  function hovit(itsname) {
    $(itsname).hover(function(){
       $(this).find(".fillit").css("fill", "black");
       $(this).find(".notfill").css("stroke", "white");
       }, function(){
       $(this).find(".fillit").css("fill", "none");
       $(this).find(".notfill").css("stroke", "black");
    });
  }

  function hova(thename) {
    $(thename).hover(function(){
       $(this).next().find(".fillit").css("fill", "black");
       $(this).next().find(".notfill").css("stroke", "white");
       }, function(){
       $(this).next().find(".fillit").css("fill", "none");
       $(this).next().find(".notfill").css("stroke", "black");
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

  var copyText = $("#mine").text();

  console.log( "if you're reading this, have a great day!" );
  console.log(copyText);
});



/*paralax scrolling function*/

/*
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
*/
/*call function*/

/*
$(window).bind('scroll', update);
*/

// header background color change
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".header");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $("#bithead");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $("#headlink");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});


$("#backwhite") .click(function () {
  var copyText = $("#mine").text();
  document.execCommand("copy");
  alert("Copied the text: " + copyText);
})
