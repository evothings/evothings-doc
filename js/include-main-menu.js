;(function()
{
	var path = (window.location.href.indexOf('index.html') > -1) ? '' : '../'

	// Documentation menu bar.
	document.write(
		'<div class="hyper-main-menu btn-group btn-group-justified">'
		+	'<a href="' + path + 'index.html" type="button" '
		+		'class="btn btn-lg btn-primary">Studio</a>'
		+	'<a href="' + path + 'studio/workbench.html" type="button" '
		+		'class="btn btn-lg btn-primary">Workbench</a>'
		+	'<a href="' + path + 'studio/mobile-app.html" type="button" class="btn btn-lg '
		+		'btn-primary">Client</a>'
		+	'<a href="' + path + 'examples/examples.html" type="button" class="btn btn-lg '
		+		'btn-primary">Examples</a>'
		+	'<a href="' + path + 'build/build-overview.html" type="button" class="btn btn-lg '
		+		'btn-primary">Build</a>'
		+ '</div>')
})()
