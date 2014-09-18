// Include scripts and CSS-files.
;(function()
{
	function enableGoogleAnalytics()
	{
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-44159401-1', 'auto');
		ga('send', 'pageview');
	}

	var protocol = window.location.protocol
	var raw = window.location.href.indexOf('/raw') > -1
	var path =
		((window.location.href.indexOf('index.html') > -1) ||
		 (window.location.href.indexOf('.html') == -1))
			 ? ''
			 : '../'

	// Include JS/CSS common for both offline/raw and for Wordpress.
	document.write(
		'<script src="' + path + 'libs/jquery/jquery-2.0.3.js"></script>'
		+ '<link rel="stylesheet" href="' + path + 'css/evo-doc-content.css" media="all" />')

	// Include CSS used only for offline/raw.
	if (raw || protocol == 'file:')
	{
		document.write(
			'<link rel="stylesheet" href="' + path + 'css/evo-doc-raw.css" media="screen" />')
	}

	// Only add Google Analytics if documentation is read online.
	// TODO: Disable if not viewed online in raw mode?
	if (protocol != 'file:')
	{
		enableGoogleAnalytics()
	}
})()
