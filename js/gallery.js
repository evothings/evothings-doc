/*
File: gallery.js
Description: Evothings Gallery.
Author: Mikael Kindborg
Copyright (c) 2013-2014 Evothings AB
*/

$(function() {

	$.getJSON( "gallery.json", function( data ) {

		var $list = $('#list');
		var $listItemTemplate = $('#list-item-template');

		$.each( data.items, function(key, val) {
			$listItemTemplate
				.clone()
				.appendTo($list)
				.show()
				.children("img")
				.attr('src', val.image)
				.attr('alt', val.description);
		});

	}).fail(function() {
		alert('Failed to load gallery.')
	});

});
