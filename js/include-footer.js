;(function()
{
	// Insert page footer element.
	document.write(
		'<div class="evo-box">'
		+	'<p>Copyright &copy; 2013-2014 Evothings AB</p>'
		+ '</div>')


	// When browsing documentation online we call a script
	// to rewrite links to work with the website layout.
	var protocol = window.location.protocol
	if (protocol != 'file:')
	{
		document.write(
			'<scr'+'ipt type="text/javascript" '
			+	'src="http://www.evothings.com/doc/doc-links.js" ></scr'+'ipt>')
	}
})()
