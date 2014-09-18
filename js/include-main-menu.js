;(function()
{
	var path =
		((window.location.href.indexOf('index.html') > -1) ||
		 (window.location.href.indexOf('.html') == -1))
			 ? ''
			 : '../'

	// Here we insert the documentation menu bar.

/*
	// Experiment with vertical layout.
	document.write(
		'<div class="hyper-main-menu evo-btn-group-vertical">'
		+	'<button type="button"'
		+		'class="evo-btn evo-btn-lg evo-btn-red">Studio</button>'
		+	'<button type="button" '
		+		'class="evo-btn evo-btn-lg evo-btn-yellow">Workbench</button>'
		+	'<button type="button" '
		+		'class="evo-btn evo-btn-lg evo-btn-green">Client</button>'
		+ '</div>')
*/

	// The wide menu. Visibility set in CSS.
	document.write(
		'<div id="main-menu-wide" '
		+	'class="hyper-main-menu evo-btn-group evo-btn-group-justified">'
		+	'<a href="' + path + 'index.html" type="button" '
		+		'class="evo-btn evo-btn-lg evo-btn-red">Studio</a>'
		+	'<a href="' + path + 'studio/workbench.html" type="button" '
		+		'class="evo-btn evo-btn-lg evo-btn-yellow">Workbench</a>'
		+	'<a href="' + path + 'studio/mobile-app.html" type="button" '
		+		'class="evo-btn evo-btn-lg evo-btn-green">Client</a>'
		+	'<a href="' + path + 'examples/examples.html" type="button" '
		+		'class="evo-btn evo-btn-lg evo-btn-blue">Examples</a>'
		+	'<a href="' + path + 'build/build-overview.html" type="button" '
		+		' class="evo-btn evo-btn-lg evo-btn-indigo">Build</a>'
		+ '</div>')

	// The narrow menu. Visibility set in CSS.
	document.write(
		'<div id="main-menu-narrow">'
		+	'<div class="hyper-main-menu evo-btn-group evo-btn-group-justified">'
		+		'<a href="' + path + 'index.html" type="button" '
		+			'style="border-bottom-left-radius: 0px;" '
		+			'class="evo-btn evo-btn-lg evo-btn-red">Studio</a>'
		+		'<a href="' + path + 'studio/workbench.html" type="button" '
		+			'class="evo-btn evo-btn-lg evo-btn-yellow">Workbench</a>'
		+		'<a href="' + path + 'studio/mobile-app.html" type="button" '
		+			'style="border-bottom-right-radius: 0px;" '
		+			'class="evo-btn evo-btn-lg evo-btn-green">Client</a>'
		+ 	'</div>'
		+	'<div class="hyper-main-menu evo-btn-group evo-btn-group-justified">'
		+		'<a href="' + path + 'examples/examples.html" type="button" '
		+			'style="border-top-left-radius: 0px;" '
		+			'class="evo-btn evo-btn-lg evo-btn-blue">Examples</a>'
		+		'<a href="' + path + 'build/build-overview.html" type="button" '
		+			'style="border-top-right-radius: 0px;" '
		+			' class="evo-btn evo-btn-lg evo-btn-indigo">Build</a>'
		+ 	'</div>'
		+ '</div>')
})()
