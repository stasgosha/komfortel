

// TODO: ↓↓↓ remove this script ↓↓↓
// Current menu item highlithing
$(function () {
	var location = window.location.href;
	var cur_url = location.split('/').pop();

	$('.top-nav li, .panel-nav li, .footer-nav li').each(function () {
		var link = $(this).find('a').attr('href');

		// console.log(link);

		if (cur_url == '') {
			cur_url = 'index.html';
		}

		if (cur_url == link)
		{
			$(this).addClass('current-menu-item');
			$(this).parents('li').addClass('current-menu-parent');
		}
	});
});

document.addEventListener('DOMContentLoaded', function(){
	// Sliders
	function equalSlideHeight(slider){
		$(slider).on('setPosition', function () {
			$(this).find('.slick-slide').height('auto');
			var slickTrack = $(this).find('.slick-track');
			var slickTrackHeight = $(slickTrack).height();
			$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
		});
	}

	let arrowsButtons = {
		prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущие"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 28"><path d="M37 12h4v4h-4v-4zM61 12h4v4h-4v-4zM85 12h4v4h-4v-4z" fill="#213A39"/><path d="M0 12h4v4H0v-4zM4 16h4v4H4v-4zM8 20h4v4H8v-4zM12 24h4v4h-4v-4zM4 8h4v4H4V8zM8 4h4v4H8V4zM12 0h4v4h-4V0z" fill="#6AD3B1"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next" aria-label="Следующие"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 28"><path d="M52 16h-4v-4h4v4zM28 16h-4v-4h4v4zM4 16H0v-4h4v4z" fill="#213A39"/><path d="M89 16h-4v-4h4v4zM85 12h-4V8h4v4zM81 8h-4V4h4v4zM77 4h-4V0h4v4zM85 20h-4v-4h4v4zM81 24h-4v-4h4v4zM77 28h-4v-4h4v4z" fill="#6AD3B1"/></svg></button>'
	}

	function typeWriter(text, elem, n = 0) {
		if (n < (text.length)) {
			$(elem).html(text.substring(0, n+1));
			n++;
			setTimeout(function() {
				typeWriter(text, elem, n)
			}, 50);
		}
	}

	// Battery component
	$('.battery-component').each(function(i, el){
		let currentStep = 1;

		let percentsEl = $(el).find('.block-percents .block-text');

		function setStep(index){
			let item = $(el).find('.battery-block .block-division:nth-last-child('+index+')');

			item.addClass('charging').siblings().removeClass('charging');

			let percents = item.data('percents');
			percentsEl.html(percents+'<sup>%</sup>');
		}

		function init(){
			setStep(1);

			$(el).find('.terms-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущие"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 433"><path d="M1 208h16v16H1v-16zM17 192h16v16H17v-16zM33 176h16v16H33v-16zM49 160h16v16H49v-16zM65 144h16v16H65v-16zM81 128h16v16H81v-16zM97 112h16v16H97v-16zM113 96h16v16h-16V96zM129 80h16v16h-16V80zM145 64h16v16h-16V64zM161 48h16v16h-16V48zM177 32h16v16h-16V32zM193 16h16v16h-16V16zM209 0h16v16h-16V0zM225 416h-16v16h16v-16zM209 400h-16v16h16v-16zM193 384h-16v16h16v-16zM177 368h-16v16h16v-16zM161 352h-16v16h16v-16zM145 336h-16v16h16v-16zM129 320h-16v16h16v-16zM113 304H97v16h16v-16zM97 288H81v16h16v-16zM81 272H65v16h16v-16zM65 256H49v16h16v-16zM49 240H33v16h16v-16zM33 224H17v16h16v-16z"/></svg></button>',
				nextArrow: '<button type="button" class="slick-next" aria-label="Следующие"><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 433"><path d="M225 208h-16v16h16v-16zM209 192h-16v16h16v-16zM193 176h-16v16h16v-16zM177 160h-16v16h16v-16zM161 144h-16v16h16v-16zM145 128h-16v16h16v-16zM129 112h-16v16h16v-16zM113 96H97v16h16V96zM97 80H81v16h16V80zM81 64H65v16h16V64zM65 48H49v16h16V48zM49 32H33v16h16V32zM33 16H17v16h16V16zM17 0H1v16h16V0zM1 416h16v16H1v-16zM17 400h16v16H17v-16zM33 384h16v16H33v-16zM49 368h16v16H49v-16zM65 352h16v16H65v-16zM81 336h16v16H81v-16zM97 320h16v16H97v-16zM113 304h16v16h-16v-16zM129 288h16v16h-16v-16zM145 272h16v16h-16v-16zM161 256h16v16h-16v-16zM177 240h16v16h-16v-16zM193 224h16v16h-16v-16z"/></svg></button>',
				appendArrows: $(el).find('.terms-slider-nav'),
				dots: false,
				infinite: false,
				speed: 600
			});

			$(el).find('.terms-slider').on('beforeChange', function(e, s, current, next){
				setStep(next+1);
			});
		}

		init();
	});

	// Scroll to anchor
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80
		}, 500);
	});

	// Additional blocks
	$('.project-card').prepend('<div class="card-bg"></div>');
	$('.timeline-card .card-caption').prepend('<div class="card-line"></div>');
	$('.advantages-sphere-block .block-items li').prepend('<div class="item-line"></div>');

	// Menu opener
	$('.menu-opener').click(function(e){
		e.preventDefault();

		$(this).toggleClass('active');
		$('.panel').toggleClass('opened');
		// $('.header').toggleClass('nav-opened');
	});

	$('.panel-close').click(function(e){
		e.preventDefault();

		$('.panel').removeClass('opened');
		$('.menu-opener').removeClass('active');
	});

	// Sticky Header
	function stickyHeader(){
		let header = document.querySelector('.header');

		if (!!header) {
			window.scrollY > 0
				? header.classList.add('sticky')
				: header.classList.remove('sticky');
		};
	}

	window.addEventListener('scroll', function(){
		stickyHeader();
	});

	stickyHeader();



	// Stages
	if ($(window).width() >= 992) {
		$('.stages-list .item').hover(function(){
			$(this).addClass('opened').siblings().removeClass('opened');
			$(this).find('.card-hidden-content').stop().slideDown(300);
			$(this).siblings().find('.card-hidden-content').stop().slideUp(300);
		}, function(){

		});

		$('.stages-list').hover(function(){}, function(){
			$('.stages-list .item').removeClass('opened').find('.card-hidden-content').stop().slideUp(300);
			$('.stages-list .item:nth-child(2)').addClass('opened');
			$('.stages-list .item:nth-child(2)').find('.card-hidden-content').stop().slideDown(300);
		});

		$('.stages-list .item:nth-child(2)').trigger('click');
		$('.stages-list .item:nth-child(2)').find('.card-hidden-content').stop().slideDown(300);
		$('.stages-list .item:nth-child(2)').siblings().find('.card-hidden-content').stop().slideUp(300);
	} else{
		$('.stages-list').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $('#stages-list-nav'),
			appendDots: $('#stages-list-nav'),
			infinite: false,
			speed: 600,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		equalSlideHeight('.stages-list');
	}

	if ($(window).width() < 992){
		$('.team-list').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $('#team-list-nav'),
			appendDots: $('#team-list-nav'),
			infinite: false,
			speed: 600,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		equalSlideHeight('.team-list');
	}

	if ($(window).width() < 992){
		$('.solutions-list').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $('#solutions-list-nav'),
			appendDots: $('#solutions-list-nav'),
			infinite: false,
			speed: 600,
			responsive: [
				{
					breakpoint: 460,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		equalSlideHeight('.solutions-list');
	}

	if ($(window).width() < 576){
		$('.advantages-sphere-block .block-items').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			...arrowsButtons,
			dots: true,
			appendArrows: $('#advantages-sphere-nav'),
			appendDots: $('#advantages-sphere-nav'),
			infinite: true,
			speed: 600,
			// fade: true
		});

		equalSlideHeight('.solutions-list');
	}

	$('.timeline-block .show-more').click(function(e){
		e.preventDefault();

		$(this).slideUp(300);
		$('.timeline-block .item:nth-child(n + 3)').slideDown(300);
		$('.timeline-block .block-footer').slideDown(300);
		$('.timeline-block').addClass('opened');
	});

	$('.accordion').each(function(i, el){
		if ( !$(el).is('.xs-accordion') ) {
			$(el).find('.ac-header').click(function(e){
				e.preventDefault();
				e.stopPropagation();

				$(this).siblings('.ac-content').stop().slideToggle(300);
				$(this).parent().toggleClass('opened');
			});
		} else{
			if ($(window).width() < 576) {
				$(el).find('.ac-header').click(function(e){
					e.preventDefault();
					e.stopPropagation();

					$(this).siblings('.ac-content').stop().slideToggle(300);
					$(this).parent().toggleClass('opened');
				});
			}
		}
	});

	// Modals
	$('.modal').css('display','block');

	function getScrollWidth(){
		// create element with scroll
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';

		document.body.append(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	}

	$('.modal-dialog').click(e => e.stopPropagation());
	$('.modal').click(function(e){
		hideModal( $(this) );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('.modal-close').click(function(e){
		e.preventDefault();

		hideModal( $(this).closest('.modal') );
		$('.video-modal .modal-video').html('<div id="modal-video-iframe"></div>');
	});

	$('[data-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		hideModal('.modal');

		showModal( $(this).data('modal') );
	});

	$('[data-video-modal]').click(function(e){
		e.preventDefault();
		e.stopPropagation();

		let videoId = $(this).data('video-modal');
		let videoType = $(this).data('video-type');

		if (videoType == 'youtube') {
			$('#modal-video-iframe').append('<div class="video-iframe" id="'+videoId+'"></div>');
			createVideo(videoId, videoId);
		} else if(videoType == 'vimeo'){
			$('#modal-video-iframe').html('<iframe class="video-iframe" src="https://player.vimeo.com/video/'+videoId+'?playsinline=0&autoplay=1&transparent=0&app_id=122963">');
		}

		hideModal('.modal');

		showModal( "#video-modal" );
	});

	// Video
	$('.video-block:not([data-video-modal])').on('click', function () {
		$(this).addClass('playing');

		var $videoId = $(this).data('video-id');
		$(this).append('<div class="video-iframe" id="'+$videoId+'"></div>');
		createVideo($videoId, $videoId);
	});

	var player;
	function createVideo(videoBlockId, videoId) {
		player = new YT.Player(videoBlockId, {
			videoId: videoId,
			playerVars: {
				'autohide': 1,
				'showinfo' : 0,
				'rel': 0,
				'loop': 1
			},
			events: {
				'onReady': function (e) {
					// e.target.mute();
					e.target.playVideo();
				}
			}
		});
	}

	let bodyScrolled = 0;
	function showModal(modal, ){
		$(modal).addClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').addClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', getScrollWidth());

		$('[data-src]').each( (i, el) => {
			$(el).attr('src', $(el).data('src'));
			el.removeAttribute('data-scr');
		} );
	}

	function hideModal(modal){
		$(modal).removeClass('visible');
		bodyScrolled = $(window).scrollTop();
		$('body').removeClass('modal-visible')
				 .scrollTop(bodyScrolled)
				 .css('padding-right', 0);

		$('#modal-video .video-iframe').hide();
	}

	// Tabs
	function goToTab(tabId, handler){
		if (handler == undefined) {
			handler = false;
		}

		let dest = $( tabId );
		dest.stop().fadeIn(300).siblings().hide(0);

		if (handler != false) {
			$(handler).addClass('current').siblings().removeClass('current');
		}
	}

	$("[data-tab]").click(function(e){
		e.preventDefault();
		let dest = $( $(this).data('tab') );

		goToTab(dest, $(this));

		dest.find('.slick-slider').slick('setPosition');
	});

	$("[data-tab]:first-child").trigger('click');


	// Questions
	$('.questions-component').each(function(i, el){
		$(el).find('.answers').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			speed: 600,
			swipe: false
		});

		$(el).find('.questions li').append('<div class="item-line"></div>');

		equalSlideHeight($(el).find('.answers'));

		$(el).find('.questions button').click(function(e){
			e.preventDefault();

			let slideIndex = parseInt( $(this).closest('li').data('slide') );

			$(this).closest('li').addClass('current').siblings().removeClass("current");

			$(el).find('.answers').slick('slickGoTo', slideIndex);
		});

		$(el).find('.questions button').eq(0).trigger('click');
	});
});

// SVG use polyfill
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});

svg4everybody();