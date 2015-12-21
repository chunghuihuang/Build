"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	/*
	file:///D:/nodejs/js/templatemo_399_tamarillo/index.html#
	file:///D:/nodejs/js/templatemo_396_smoothy-Great/index.html#
	file:///D:/nodejs/js/templatemo_398_nature-Great/index.html
	file:///D:/nodejs/js/templatemo_359_singular-Great/index.html#about
	file:///D:/nodejs/js/templatemo_358_carousel-Great/index.html
	file:///D:/nodejs/js/templatemo_355_work_center-Great/distortion_effect.html
	file:///D:/nodejs/js/templatemo_342_single_slider-Great/index.html	
	http://www.hung-hua.com/product_english.html
	http://blog.xuite.net/shong6656/twblog1/141134014-%E6%89%8B%E5%B7%A5%E5%A4%A7%E9%A6%AC%E5%A3%AB%E9%9D%A9%E9%8B%BC%E7%AD%86%E5%89%B5%E4%BD%9CPart1(++Stainless+Steel++Damascus+Fountain+Pen+)
	*/
	
	//$("#owl-example").owlCarousel();	

	$("#owl-example").owlCarousel({
	 
		// Most important owl features
		items : 7,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,
		
		//Basic Speeds
		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
	 
		// Navigation
		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,
		
		//Pagination
		pagination : false, //Cancel little circle point
		paginationNumbers: false,
	 
		// Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
	 
		//Lazy load
		lazyLoad : true,
		lazyFollow : true,
		lazyEffect : "fade",
		
		//Auto height
		autoHeight : false,
	 
		//JSON 
		jsonPath : false, 
		jsonSuccess : false,
	 
		//Mouse Events
		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,
		
		//Transitions
		transitionStyle : "fade",
	 
		// Other
		addClassActive : false,
	 
		//Callbacks
		beforeUpdate : false,
		afterUpdate : false,
		beforeInit: false, 
		afterInit: false, 
		beforeMove: false, 
		afterMove: false,
		afterAction: false,
		startDragging : false,
		afterLazyLoad : false,
	 
	});
	
	$(".main_menu a, .responsive_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id[1]).addClass("animated fadeInDown").show();
		$("#menu-container .Lathe").hide();
		$(".support").hide();
		$(".testimonials").hide();
		return false;
	});

	$( window ).load(function() {
	  $("#menu-container .products").hide();
	  $("#menu-container .HRC").hide();
	});

	$(".main_menu a.templatemo_home").addClass('active');

	$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").click(function(){
		$("#menu-container .Lathe").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").click(function(){
		$("#menu-container .HRC").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").removeClass('active');
		$(".main_menu a.templatemo_page9, .responsive_menu a.templatemo_page9").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").click(function(){
		$("#menu-container .centerless").addClass("animated fadeInDown").show();
		$(".our-centerless").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").click(function(){
		$("#menu-container .topcenter").addClass("animated fadeInDown").show();
		$(".our-topcenter").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").click(function(){
		$("#menu-container .products").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").click(function(){
		$("#menu-container .services").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page4").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").click(function(){
		$("#menu-container .about").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").removeClass('active');
		return false;
	});

	$(".main_menu a.templatemo_page8, .responsive_menu a.templatemo_page8").click(function(){
		$("#menu-container .contact").addClass("animated fadeInDown").show();
		$(this).addClass('active');
		$(".main_menu a.templatemo_page2, .responsive_menu a.templatemo_page2").removeClass('active');
		$(".main_menu a.templatemo_page3, .responsive_menu a.templatemo_page3").removeClass('active');
		$(".main_menu a.templatemo_page4, .responsive_menu a.templatemo_page4").removeClass('active');
		$(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").removeClass('active');
		$(".main_menu a.templatemo_page6, .responsive_menu a.templatemo_page6").removeClass('active');
		$(".main_menu a.templatemo_page7, .responsive_menu a.templatemo_page7").removeClass('active');
		$(".main_menu a.templatemo_home, .responsive_menu a.templatemo_home").removeClass('active');
		return false;
	});
	
	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(16.8251789,96.1439764)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}