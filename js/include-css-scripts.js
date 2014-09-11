// Include scripts and CSS-files.
;(function()
{
	var path =
		((window.location.href.indexOf('index.html') > -1) ||
		 (window.location.href.indexOf('.html') == -1))
			 ? ''
			 : '../'

	document.write(
		'<script src="' + path + 'libs/jquery/jquery-2.0.3.js"></script>'
		+ '<link rel="stylesheet" href="' + path + 'css/hyper.css" media="screen" />')

	// Only add Google Analytics if documentation is read online.
	var protocol = window.location.protocol
	if (protocol != 'file:')
	{
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-44159401-1', 'auto');
		ga('send', 'pageview');
	}
})()
