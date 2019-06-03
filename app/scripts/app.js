import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import slick from 'slick-carousel';
import 'stupid-table-plugin';

(function ($) {

	svg4everybody();

	$(function () {

		var styles = [
			'padding: 2px 9px',
			'background: #82B93C',
			'color: #fff',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.56',
			'text-align: left',
			'font-size: 16px',
			'font-weight: 400'
		].join(';');

		console.log('%c developed by igor gorlov https://webjeb.ru', styles);


		// const $factsSlider = $('.facts__slider');

		// if( $factsSlider.length > 0 ) {
		// 	$factsSlider.slick({
		// 		dots: true,
		// 		arrows: true,
		// 		infinite: true,
		// 		slidesToShow: 1,
		// 		speed: 500,
		// 		adaptiveHeight: false,
		// 	});
		// }

		const $sidenavLink = $('.sidenav__link');

		$sidenavLink.on('click', function () {
			const $sidenavItem = $('.sidenav__item');
			$sidenavItem.siblings().removeClass('sidenav__item_active');
			$(this).parent().toggleClass('sidenav__item_active');
		});



		const $dropdown = $('.dropdown-w__dropdown');
		const $dropdownWrapper = $('.dropdown-w');

		$dropdown.on('click', function (e) {
			e.stopPropagation();
			$(this).parent().toggleClass('dropdown-w_active');


			$(document).on('click', function(e) {
				if (!$(e.target).closest('.dropdown-w').length) {
					$dropdownWrapper.removeClass('dropdown-w_active');
				}
			});



		});



		// Sortable table

		const $mainTable = $('.main__table');

		$mainTable.stupidtable();



		const $tableRow = $('.table__body .table__row');


		$tableRow.on('click', function () {
			$(this).siblings().removeClass('table__row_active');
			$(this).siblings().children('.table__cell').removeClass('table__cell_active');

			$(this).children('.table__cell').toggleClass('table__cell_active');
			$(this).toggleClass('table__row_active');

		});


		function pageWidget(pages) {
			const widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
			widgetWrap.prependTo("body");

			for (let i = 0; i < pages.length; i++) {
				$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
			}

			const widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
			widgetStilization.prependTo(".widget_wrap");
		}

		pageWidget([
			'index',
			'users_2',
			'view_user',
			'view_user_2',
			'view_user_3',
			'view_user_4'


		]);


	});


})(jQuery);
