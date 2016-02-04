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
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-44159401-1', 'auto');
		ga('send', 'pageview');
	}

	function pageHasLoaded()
	{
		// Highlight current menu section. Use path to highlight.
		highliteCurrentMenuButton()

		// Only enable Google Analytics if documentation is accessed online.
		if (window.location.protocol != 'file:')
		{
			enableGoogleAnalytics()
		}
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

		// Call function when page has loaded.
		document.addEventListener('DOMContentLoaded', pageHasLoaded)
	}

	// Call main function that includes page footer code.
	includeFooter()
})()
