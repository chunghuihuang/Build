//var Config = require('./js/package/config');

$(function index () {

	var tagpath = '';
	var tagindexOf = '';
	var tagindex = '';
	var api_url = '/apis/admin/Gettags';
	var owltag = $("#owl-tags");
	
	/*	
	$(document).ready(function() {
		owltag.owlCarousel({
			autoPlay : false,
			items : 1,
			singleItem : true,
			// Navigation
			navigation : false,
			navigationText : ["prev","next"],
			rewindNav : true,
			scrollPerPage : false,
			//Pagination
			pagination : false, //Cancel little circle point
			paginationNumbers: false
		});
	});
	*/
	
	//$('.ui.sticky').sticky();

	/*	
	$('a.EditTags.brand').on('click', function () {
		$('.fullscreen.modal').modal('show');
	});

	$( ".ui-droppable" ).droppable({
		//accept: "li",
		//activeClass: "custom-state-active",
		drop: function( event, ui ) {
			console.log(ui);
			//self.window_list_index = parseInt(self.window_list_index)+1;
			//deleteImage( ui.draggable );
		}
	});
	$( ".ui-selectable" ).selectable({
		selected: function( event, ui ) {
			console.log(ui);
		}
	}).draggable({
	  revert: "invalid", // when not dropped, the item will revert back to its initial position
	  //containment: "document",
	  //helper: "clone",
	  //cursor: "move"
	});
	$("div.ui.button.ui-widget-content").click(function() {
		//$(this).addClass("ui-selected");
		if(!$(this).hasClass("ui-selected")) {
			//$(this).addClass("ui-selected");
			$(this).addClass("ui-selected").siblings().removeClass("ui-selected");
		}
	});	
	
	// Add phrase
	$('a.EditTags.brand').on('click', function () {
		$('.addphrase.modal').modal('show');
	});
	
	// Search bar
	$('input').keyup(function (event) {
		if (event.keyCode == 13)
			window.location = 'http://toefl.iservice.com.tw/admin/search/' + document.getElementById('search').value;
	});
	*/
})
