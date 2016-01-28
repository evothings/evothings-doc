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

	evothings.doc.openDocPage = function(url)
	{
		location.assign(url)
	}

	function enableGoogleAnalytics()
	{
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-44159401-1', 'auto');
		ga('send', 'pageview');
	}

	// Insert meta viewport tag.
	document.write(
		'<meta name="viewport" content="user-scalable=yes,initial-scale=1,width=device-width"/>')

	// Include CSS.
	var path = evothings.doc.getLibPath()
	document.write('<link rel="stylesheet" href="' + path + 'css/evo-doc.css" />')

	// Only enable Google Analytics if documentation is accessed online.
	if (window.location.protocol != 'file:')
	{
		enableGoogleAnalytics()
	}
})()
