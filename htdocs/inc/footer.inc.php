		</div>

		<!-- footer -->
		<footer role="contentinfo">
		</footer>

		<!-- JavaScript at the bottom for fast page loading: http://developer.yahoo.com/performance/rules.html#js_bottom -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
		<script src="/js/default.min.js"></script>

		<?php if (isset($_SERVER['HTTP_DNT']) and $_SERVER['HTTP_DNT'] != 1): ?>
			<!-- asynchronous Google Analytics snippet: https://gist.github.com/1251641 -->
			<script>//var _gaq=[['_setAccount','<?php print $config['google']['analytics'] ?>'],['_gat._anonymizeIp'],['_trackPageview'],['_trackPageLoadTime']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='//www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'))</script>
		<?php endif; ?>

	</body>
</html>
