;(function()
{
	// Insert page footer element.
	document.write(
		'<div class="evo-box">'
		+	'<p>Copyright &copy; 2013-2014 Evothings AB</p>'
		+ '</div>')

	// Insert link to raw HTML page, but only if browsing online.
	var protocol = window.location.protocol
	if (protocol != 'file:')
	{
		var raw = window.location.href.indexOf('/raw') > -1
		var href = window.location.href
		var url = raw ?
			href.replace('/doc/raw/', '/doc/') :
			href.replace('/doc/', '/doc/raw/')
		var urlText = raw ?
			'View documentation in Wordpress' :
			'View documentation in plain mode'
		document.write(
			'<div class="evo-box">'
			+	'<p><a href="' + url + '">' + urlText + '</a></p>'
			+ '</div>')
	}

	// When browsing documentation online we call this script to
	// to rewrite links to work inside an iframe (currently an iframe
	// is not used, this is kept just in case, the logic that detects
	// the iframe is in doc-links.js).
	/*
	var protocol = window.location.protocol
	if (protocol != 'file:')
	{
		document.write(
			'<scr'+'ipt type="text/javascript" '
			+	'src="http://www.evothings.com/doc/doc-links.js" ></scr'+'ipt>')
	}
	*/
})()
