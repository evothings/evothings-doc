;(function()
{
	// Insert page footer element.
	document.write(
		'<div class="evo-box">'
		+	'<p>Copyright &copy; 2013-2016 Evothings AB</p>'
		+ '</div>')

	// Include scripts.
	var path = evothings.doc.getLibPath()
	document.write('<script src="' + path + 'libs/jquery/jquery-2.1.1.js"></script>')

	function highliteCurrentMenuButton(event)
	{
		highliteMenuButtonIfPageIs('/index.html', 1) ||
		highliteMenuButtonIfPageIs('/studio/', 2) ||
		highliteMenuButtonIfPageIs('/api/', 3) ||
		highliteMenuButtonIfPageIs('/tutorials/', 4) ||
		highliteMenuButtonIfPageIs('/examples/', 5) ||
		highliteMenuButtonIfPageIs('/build/', 6)
	}

	function highliteMenuButtonIfPageIs(pageFragment, menuButtonIndex)
	{
		if (0 < window.location.pathname.indexOf(pageFragment))
		{
			var selector = '.evo-page-header-menu-buttons a:nth-child(' + menuButtonIndex + ')'
			$(selector).css('color', '#CE2029')
			return true
		}
		else
		{
			return false
		}
	}

	// Highlight current menu section. Use path to highlight.
	document.addEventListener('DOMContentLoaded', highliteCurrentMenuButton)
})()
