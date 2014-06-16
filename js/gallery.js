/*
File: gallery.js
Description: Evothings Gallery.
Author: Mikael Kindborg
Copyright (c) 2013-2014 Evothings AB
*/

$(function() {

	$.getJSON("gallery.json", function(data) {

		var $list = $("#list");
		var $listItemTemplate = $("#list_item_template");
		var $resourceTemplate = $("#list_item_template .resource");

		$.each(data.items, function(key, val) {
			var $newItem = $listItemTemplate
				.clone()
				.appendTo($list)
				.attr("id", "")
				.addClass("visible");

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

			$newItem
				.find(".author")
				.text(val.author);

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
