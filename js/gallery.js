/*
File: gallery.js
Description: Evothings Gallery.
Author: Mikael Kindborg
Copyright (c) 2013-2014 Evothings AB
*/

$(function() {

	$.getJSON("gallery.json", function(data) {

		var $list = $("#list");
		var $listItemTemplate = $("#list-item-template");

		$.each(data.items, function(key, val) {
			var $newItem = $listItemTemplate
				.clone()
				.appendTo($list)
				.show();

			$newItem
				.children("a.screenshot")
					.attr("href", val.url)
					.children("img")
						.attr("src", val.image)
						.attr("alt", val.description)
						.end()
					.children("div.description")
						.text(val.description)
						.end();

			if (val.youtube)
				$newItem.children("a.resource-youtube")
					.attr("href", val.youtube)
					.css("visibility", "visible");

			if (val.guide)
				$newItem.children("a.resource-docs")
					.attr("href", val.guide)
					.css("visibility", "visible");
		});

	}).fail(function() {
		alert('Failed to load gallery.')
	});

});
