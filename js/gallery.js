$(window).load(function() {
	var TheCarousels = function () {
		this._init();
	};

	TheCarousels.prototype._init = function () {
		this.carousels = $('.carousel');

		for (var i = 0, len = this.carousels.length; i < len; i = i + 1) {
			var items = this.carousels[i].getElementsByTagName('li'),
			    totalWidth = this.calculateImageWidths(items);
			
			this.carousels[i].style.width = totalWidth + 'px !important';
			
			if (items.length > 1 && totalWidth > 800) {
				$(this.carousels[i]).jcarousel({
					scroll:1
				});
			}
		}
	};

	TheCarousels.prototype.calculateImageWidths = function (items) {
		var totalWidth = 0;

		for (var i = 0, len = items.length; i < len; i = i + 1) {
			var image = items[i].getElementsByTagName('img'),
			    iframe = items[i].getElementsByTagName('iframe');

			if (image[0]) {
				contentWidth = image[0].width;
			}

			if (iframe[0]) {
				contentWidth = iframe[0].width;
			}
			
			totalWidth = totalWidth + contentWidth;
		}

		return totalWidth;
	};

	new TheCarousels();
	$(".fancybox").fancybox();
});