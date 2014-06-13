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
		var $resourceTemplate = $("#list-item-template .resource");

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

			if (val.links)
				$.each(val.links, function(resourceKey, resourceVal) {
					$newItem.append(
						$resourceTemplate
							.clone()
							.addClass("resource-"+resourceKey)
							.attr("href", resourceVal)
							.text(resourceKey)
							.show()
					);
				});
		});

	}).fail(function() {
		alert('Failed to load gallery.')
	});

});
