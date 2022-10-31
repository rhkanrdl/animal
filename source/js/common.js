
$(function(){

  menu();
  coverimage();
  maintab();
  outlink();



  $("button.check-co").click(function() {
      $("#modal-co").addClass("on");
  });

  
  $("ul.map-list li").on("click", function() {
    $("ul.map-list li").removeClass("on");
    $(this).addClass("on");
});

  $("ul.map-list li button").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".faqList li h5").on("click", function(){
      $(".faqList li h5").removeClass("on");
      $(this).addClass("on");
  });
  
  
  $("section.sub-content #sub-menu li.on a").on("click", function(e){

      $("nav#sub-menu").toggleClass("active");
      e.preventDefault();

  });

  $(window).on("resize", function(){
      $("nav#main-menu h3 a").unbind();
      menu();
  });




  var subHead = $( '.sub-head' ).offset();
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > subHead.top ) {
      $( '.sub-head' ).addClass( 'fixed' );
    }
    else {
      $( '.sub-head' ).removeClass( 'fixed' );
    }
  });

  


  /* ----- slider ----- */
  var $popupzone = $("section.main-news div.popupzone div.slider");

  $popupzone.slick({
      autoplay:true,
      autoplaySpeed:5000,
      arrows:false,
      speed: 800,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
  });




});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();


$(window).on("resize", function(){
  windowh = $(window).height();
  windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {

  $(document).on("mousemove", function(e){
      if (windowW > 1200 && e.pageY > 410) {
          $("nav#main-menu").removeClass("on");
          $("#header").removeClass("on");
      }
  });

  $("button.main-menu").on("click", function () {
      $("nav#main-menu").addClass("on");

  });

  $("nav#main-menu button.close").on("click", function () {
      $("nav#main-menu").removeClass("on");
  });

  $("nav#main-menu h3 a").on("click", function (e) {
      
      $("nav#main-menu h3").removeClass("on");



      if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

          $(this).parent().addClass("on");
          e.preventDefault();

      }
      else {
          $("nav#main-menu h3 a").unbind();

      }
  });

  $("nav#main-menu div.menus").on("mouseenter", function(){
      $(this).parent().addClass("on");
      $("#header").addClass("on");
  });

  $(".schedule strong button").on("click", function(){
      $(this).parent().parent().toggleClass("off");
  });

  $(".boardList3 div.file button").on("click", function(){
      $(".boardList3 div.file button").removeClass("on");
      $(this).addClass("on");
      $(".boardList3 div.file ul.files").removeClass("on");
      $(this).parent().find("ul.files").addClass("on");
  });


  var subToggle = "0";

  $(".sub-head button").on("click", function(){



    if (subToggle == "1") {

        $(this).parent().removeClass("on");
        $(".shadow").removeClass("on");
        subToggle = "0";

    } else if (windowW < 1200 || subToggle == "0") {

        $(this).parent().addClass("on");
        $(".shadow").addClass("on");
        subToggle = "1";

    }

    if ($(this).parent().hasClass("depth2")) {
        $(".sub-head div.depth1").removeClass("on");
    }

    if ($(this).parent().hasClass("depth1")) {
        $(".sub-head div.depth2").removeClass("on");
    }

    console.log(subToggle);

  });

}

/* ----- cover image ----- */ 
function coverimage() {


  $(".main-issue .slide").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".main-news .news p.image").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".main-factory p.image").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".sub-content .sub-agency-detail p.image").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".sub-content ul.galleryList p.image").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });
}

/* ----- main tab ----- */ 
function maintab() {

  $(".main-content .news h3").on("click", function(){
      $(".main-content .news h3").removeClass("active");
      $(this).addClass("active");

      $(".main-content .news .tab-data").removeClass("active");
      
      $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

  });
}

/* ----- outlink ----- */ 
function outlink() {
  $(".agency-open").click(function() {
      console.log("클릭");
      $(this).toggleClass("on");
  });
}











