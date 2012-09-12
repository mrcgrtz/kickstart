		</div>

		<!-- JavaScript at the bottom for fast page loading: http://developer.yahoo.com/performance/rules.html#js_bottom -->

		<!-- Latest jQuery 1.8 -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>

		<!-- Scripts concatenated and minified via build script -->
		<script src="/js/default.min.js"></script>

		<?php if ($_SERVER['HTTP_DNT'] != 1): ?>
			<!-- Asynchronous Google Analytics snippet: https://gist.github.com/1251641 -->
			<script>//var _gaq=[['_setAccount','UA-XXXXX-X'],['_gat._anonymizeIp'],['_trackPageview'],['_trackPageLoadTime']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src='//www.google-analytics.com/ga.js';s.parentNode.insertBefore(g,s)}(document,'script'))</script>
		<?php endif; ?>

	</body>
</html>
