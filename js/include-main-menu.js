;(function()
{
	var path =
		((window.location.href.indexOf('index.html') > -1) ||
		 (window.location.href.indexOf('.html') == -1))
			 ? ''
			 : '../'

	// Documentation menu bar.
	document.write(
		'<div class="hyper-main-menu btn-group btn-group-justified">'
		+	'<a href="' + path + 'index.html" type="button" '
		+		'class="btn btn-lg  btn-primary et-btn-red">Studio</a>'
		+	'<a href="' + path + 'studio/workbench.html" type="button" '
		+		'class="btn btn-lg et-btn-yellow">Workbench</a>'
		+	'<a href="' + path + 'studio/mobile-app.html" type="button" '
		+		'class="btn btn-lg et-btn-green">Client</a>'
		+	'<a href="' + path + 'examples/examples.html" type="button" '
		+		'class="btn btn-lg et-btn-blue">Examples</a>'
		+	'<a href="' + path + 'build/build-overview.html" type="button" '
		+		' class="btn btn-lg et-btn-indigo">Build</a>'
		+ '</div>')
})()
