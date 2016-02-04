// Include head tags and CSS.
;(function()
{
	// Define the evothings.doc object that holds global functions.
	window.evothings = window.evothings || {}
	evothings.doc = evothings.doc || {}

	// Function that returns the relative path to shared lib folders (CSS and scripts).
	evothings.doc.getLibPath = function()
	{
		var path =
			((window.location.href.indexOf('index.html') > -1) ||
			 (window.location.href.indexOf('.html') == -1))
			 	? ''
			 	: '../'
		return path
	}

	// Function that opens a URL.
	evothings.doc.openDocPage = function(url)
	{
		location.assign(url)
	}

	// Insert meta viewport tag.
	document.write(
		'<meta name="viewport" content="user-scalable=yes,initial-scale=1,width=device-width"/>')

	// Include CSS.
	var path = evothings.doc.getLibPath()
	document.write('<link rel="stylesheet" href="' + path + 'css/evo-doc.css" />')
})()
