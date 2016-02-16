;(function()
{
	function highliteCurrentMenuButton()
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

	function enableGoogleAnalytics()
	{
		// Google Analytics script.
		document.write(
			'<script type="text/javascript">'
			+ "var _gaq = _gaq || [];"
			+ "_gaq.push(['_setAccount', 'UA-44159401-1']);"
			+ "_gaq.push(['_gat._forceSSL']);"
			+ "_gaq.push(['_trackPageview']);"
			+ "(function () {"
			+ "var ga = document.createElement('script');"
			+ "ga.type = 'text/javascript';"
			+ "ga.async = true;"
			+ "ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"
			+ "var s = document.getElementsByTagName('script')[0];"
			+ "s.parentNode.insertBefore(ga, s);"
			+ "})();"
			+ "</script>")
	}

	function includeFooter()
	{
		// Insert page footer element.
		document.write(
			'<div class="evo-box" style="margin-top:25px;font-size:90%;">'
			+	'<p>Copyright &copy; 2013-2016 Evothings AB</p>'
			+ '</div>')

		// Include scripts.
		var path = evothings.doc.getLibPath()
		document.write('<script src="' + path + 'libs/jquery/jquery-2.1.1.js"></script>')

		// Only enable Google Analytics if documentation is accessed online.
		if (window.location.protocol != 'file:')
		{
			enableGoogleAnalytics()
		}

		// Highlight current menu section when page has loaded.
		document.addEventListener('DOMContentLoaded', highliteCurrentMenuButton)
	}

	// Call main function that includes page footer code.
	includeFooter()
})()
