

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

  console.log(copyText);
});

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

$(function () {
  $(document).scroll(function () {
	  var $nav = $("#newname");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

//copy ipfs to the clipboard

$("#backwhite") .click(function () {
  var copyText = $("#mine").text();
  document.execCommand("copy");
  alert("Copied the text: " + copyText);
})


//epiphyteonhover

$(".linkcolumn") .hover(function () {
  $(".linkcolumn").toggleClass("wide");
})


$("#hovercarda") .hover(function () {
  $("#hovercarda").toggleClass("hov");
})

$("#hovercardb") .hover(function () {
  $("#hovercardb").toggleClass("hov");
})

$("#hovercardc") .hover(function () {
  $("#hovercardc").toggleClass("hov");
})
