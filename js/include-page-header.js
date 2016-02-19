;(function()
{
	var path = evothings.doc.getLibPath()

	// Header/menu bar.
	document.write(
		'<div class="evo-page-header">'
		+	'<div class="evo-page-header-menu">'
		+		'<a href="https://evothings.com">'
		+			'<img class="evo-page-header-menu-logo" '
		+				'src="' + path + 'images/evothings-logo.png" />'
		+		'</a>'
		+		'<div class="evo-page-header-top-buttons">'
		+			'<a href="https://evothings.com/download">Download</a>'
		+		'</div>'
		// Not used.
		//+		'<div class="evo-page-header-spacer">'
		//+		'</div>'
		+		'<div class="evo-page-header-menu-buttons">'
		+			'<a href="' + path + 'index.html">Start</a>'
		+			'<a href="' + path + 'studio/evothings-studio-overview.html">Studio</a>'
		+			'<a href="' + path + 'api/api-overview.html">API</a>'
		+			'<a href="' + path + 'tutorials/tutorials.html">Tutorials</a>'
		+			'<a href="' + path + 'examples/examples.html">Examples</a>'
		+			'<a href="' + path + 'build/build-overview.html">Build</a>'
		+		'</div>'
		+	'</div><!-- evo-page-header-menu -->'
		+ '</div><!-- evo-page-header -->')
})()
