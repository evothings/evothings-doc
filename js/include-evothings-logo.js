;(function()
{
	var path =
		((window.location.href.indexOf('index.html') > -1) ||
		 (window.location.href.indexOf('.html') == -1))
			 ? ''
			 : '../'

	document.write(
		'<a href="http://evothings.com"><img src="' + path +
			'images/evothings_logo_outline.svg" width="100%" /></a><br/>')
})()
