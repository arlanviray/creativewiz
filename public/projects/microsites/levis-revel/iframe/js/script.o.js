/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){
	init();
	function init()
	{
		sectionHome();
		sectionEvents();
		switch(_this.phase){
			case 3:
				$('.section-builder').remove();
				sectionDenim();
				break;
			case 2:
				$('.section-builder, .section-denim').remove();
				break;
			default:
				sectionBuilder();
				sectionDenim();
		}
		sectionGallery();
		getNavigation();
		
		if(isSafari()){
			$('.contcol').css({'position':'absolute'});
		}
		
		if(oldIE()){
			$('.back').hide();
		} else {
			TweenMax.set('.cardwrapper', {perspective:2000});
			TweenMax.set('.card', {transformStyle:'preserve-3d'});
			TweenMax.set('.back', {rotationY:-180});
			TweenMax.set(['.back', '.front'], {backfaceVisibility:'hidden'});
		}
		
		$('#wrapper').append('<div id="loader"><div><h3>Loading...</h3><p></p></div></div>').find('img').batchImageLoad({
			loadingCompleteCallback:imageLoadingComplete,
			imageLoadedCallback:imageLoaded
		});
		
		_this.section.init = true;
	}
	
	function getNavigation()
	{
		$('#wrapper').append('<div id="logo"></div><div id="navigation"></div>');
		
		var html = '';
		$.each(_this.section.navigation[_this.phase - 1].name, function(i, obj){
			if(_this.phase > 3 && i == 2){
				html += '<li>WIN</li>';
			} else {
				html += '<li>'+ obj +'</li>';
			}
			_this.section.navArray.push(obj.replace(/\s+/g, '-').replace("'", '').replace('®', '').replace('™', '').toLowerCase());
		});
		$('#navigation').empty().html('<ul>'+ html +'</ul>');
		
		// events
		$('#navigation li').click(function(){
			if(!_this.imgloaded) return;
			_this.section.id = $(this).index();
			moveCarousel();
		});
		
		setSocialIcons();
		setCarousel();
		
		// exit
		/*$(window).on('beforeunload', function(){
    		_gaq.push(['_trackPageview', _this.urlpath + '#exit']);
		});*/
	}
	
	function setNavigation(show)
	{
		return show ? $('#logo, #navigation, #shareicons').show() : $('#logo, #navigation, #shareicons').hide();
	}
	
	function setCustomUrl(subId)
	{
		var url;
		if(subId){
			url = _this.section.navArray[_this.section.id] +'/'+ subId;
		} else {
			url = _this.section.navArray[_this.section.id];
		}
		
		return window.parent.location.hash = url;
	}

	function setCarousel()
	{
		$.each(_this.section.navArray, function(i, obj){
			if(window.parent.location.hash.split('/')[0] === ('#'+ obj.split('/')[0])){
				_this.section.id = i;
			}
		});
		
		moveCarousel();
	}
	
	function moveCarousel()
	{
		if(isSafari()){
			$('.contcol').hide();
			if(_this.section.init){
				$('.contcol').eq(_this.section.id).fadeIn();
			} else {
				$('.contcol').eq(_this.section.id).show();
			}
		} else {
			TweenMax.to('#contents', _this.section.init ? _this.animDurationFast : 0, {css:{'left':-(980 * _this.section.id)}});
		}
		
		$('body').removeClass().addClass(_this.section.navArray[_this.section.id].replace(/\d+/g, 'num'));
		if(window.parent.location.hash.split('/')[1]){
			//
		} else {
			setCustomUrl();
		}
		
		if(window.parent.location.hash.split('/')[0] === '#outfit-builder'){
			$('#logo').removeClass().addClass('logoblack');	
			// if(!_this.builder.init){
				if($('.section-builder .overlayintro').length > 0){
					$('.section-builder .overlayintro').remove();
				}
				$('.section-builder .carousels').after(
					'<div class="overlayintro">'+
						'<div class="intro">'+
							'<h5>Want to win £100 to spend in-store at Levi’s®?</h5>'+
							'<p>With revolutionary technology that lifts, shapes and lengthens, Levi’s® Revel™ jeans are your ultimate wardrobe essential. Click on individual items to build your perfect denim look and you could win £100 to spend in-store.</p>'+
						'</div>'+
						'<div class="borderwhite">START</div>'+
					'</div>'
				);
				$('.section-builder .borderwhite').click(function(){
					$(this).parent().remove();
				});
				
				// _this.builder.init = true;
			// }
		} else {
			$('#logo').removeClass().addClass('logowhite');
		}
		$('#logo').click(function(){
			var exlink = 'http://www.levi.com/GB/en_GB/category/women/clothing/collections/levi-collections-revel';
			window.open(exlink, '_blank');
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_logo '+ exlink);
		});
		
		$('#navigation li').removeClass('active');
		$('#navigation li').eq(_this.section.id).addClass('active');
		
		// tracking
		if(_this.section.init){
			setGATracking('User_Initiated_Section_View', _this.section.navigation[_this.phase - 1].name[_this.section.id]);
		} else {
			// initial
			setGATracking('Initial_Section_View', _this.section.navigation[_this.phase - 1].name[_this.section.id]);
		}
		// _gaq.push(['_trackPageview', _this.urlpath + window.parent.location.hash]);
	}
	
	function sectionHome()
	{
		$('.section-home').empty().html(
			'<div class="row row1">'+
				'<div class="col col1 boxout"><h2>Style <span>REVEL</span>ution</h2><p>ELLE and Levi’s® have joined forces to celebrate the revolutionary style and fit of the Levi’s® Revel™ jean. The result? A style REVELution like no other. Fashion, music, and more. Join the REVELution today</p></div>'+
				'<div class="col col2 cardwrapper">'+
					'<div class="card">'+
						'<div class="cardface front"></div>'+
						'<div class="cardface back">'+
							'<div class="info">'+
								'<h2>KEEPS ITS SHAPE</h2>'+
								'<p>&amp; SHOWS OFF YOURS<br />WITH PREMIUM FOUR-WAY<br />STRETCH MEMORY</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="clear-fix"></div>'+
			'</div>'+
			'<div class="row row2">'+
				'<div class="col col1"><img src="images/homepage_row2_col1.jpg" class="'+ (_this.phase > 3 ? 'imgblock' : 'inactive') +'" /><p class="copy">Outfit Builder<br />'+ (_this.phase > 3 ? '<span style="font-size:15px; font-style:normal; line-height:16px;">Create your Levi® Revel™ look<br />for the chance to win £100<br />to spend in store.</span>' : '<span>Coming soon</span>') +'</p><div class="obutton" '+ (_this.phase > 3 ? 'id="section2"' : '') +'></div></div>'+
				'<div class="col col2"><img src="images/homepage_row2_col2.jpg" class="imgblock" /><p class="copy">LEVI’S® REVEL™<br />Fashion weekend</p><div class="obutton" id="section1"></div></div>'+
				'<div class="col col3 boxout">'+
					'<h2>Vodafone London<br />Fashion Weekend</h2>'+
					'<p>Somerset House was the centre of the fashion universe one fabulous February weekend. See all the highlights from the Levi’s® Revel™ Room here</p>'+
					'<div class="borderwhite">LEVIS’S® REVEL™ STUDIOS</div>'+
					'<div class="obutton" id="section1"></div>'+
				'</div>'+
				'<div class="clear-fix"></div>'+
			'</div>'+
			'<div class="row row3">'+
				'<div class="col col1">'+
					'<div class="crow crow1"><img src="images/homepage_row3_crow1_col1.jpg" class="imgblock" /><p class="copy">#ELLEFASHIONCUPBOARD<br />Styling video<br /><!--span>Coming soon</span--></p><div class="obutton" id="video1"></div></div>'+
					'<div class="crow crow2"><img src="images/homepage_row3_crow2_col1.jpg" class="imgblock" /><p class="copy">LEVI’S® REVEL™<br />Product Gallery</p><div class="obutton" id="section4"></div></div>'+
				'</div>'+
				'<div class="col col2">'+
					'<div class="crow crow1"><img src="images/homepage_row3_crow1_col2.jpg" class="imgblock" /><p class="copy">#ELLEFASHIONCUPBOARD<br />Exclusive music<br />performance<br /><!--span>Coming soon</span--></p><div class="obutton" id="video2"></div></div>'+
					'<div class="crow crow2"><img src="images/homepage_row3_crow2_col2.jpg" class="'+ (_this.phase == 2 ? 'inactive' : 'imgblock') +'" /><p class="copy">The Art of Denim<br />'+ (_this.phase == 2 ? '<span>Coming soon</span>' : '') +'</p><div class="obutton" '+ (_this.phase == 2 ? '' : 'id="section3') +'"></div></div>'+
				'</div>'+
				'<div class="col col3 cardwrapper">'+
					'<div class="card">'+
						'<div class="cardface front"></div>'+
						'<div class="cardface back">'+
							'<div class="info">'+
								'<h2>FEELS AMAZING</h2>'+
								'<p>WITH SUPER-SOFT FABRIC<br />YOU WILL WANT TO LIVE IN</p>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="clear-fix"></div>'+
			'</div>'+
			'<div class="popupholder"></div>'
		);
		$('.section-home .cardwrapper').append('<div class="cbutton" style="background:url(images/btn_circle_black.png) no-repeat;"></div>');
		$('.section-home .cbutton').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active').fadeOut(100, function(){
					TweenMax.to($(this), 0, {rotation:0});
				});
				if(oldIE()){
					$(this).parent().find('.back').fadeOut();
				} else {
					TweenMax.to($(this).parent().find('.card'), _this.animDurationNorm, {rotationY:0, ease:Back.easeOut});
				}
			} else {
				$(this).addClass('active').fadeOut(100, function(){
					TweenMax.to($(this), 0, {rotation:-45});
				});
				if(oldIE()){
					$(this).parent().find('.back').fadeIn();
				} else {
					TweenMax.to($(this).parent().find('.card'), _this.animDurationNorm, {rotationY:180, ease:Back.easeOut});
				}
				
				// tracking
				setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Flip_Card_'+ $(this).parent().parent().index());
			}
			
			$(this).delay(750).fadeIn();
		});
		
		// videos
		$('.section-home .popupholder').append('<div class="popup videos"><div id="video"></div><img src="images/btn_next.png" class="btnNext" /></div>');
		
		$('.section-home .obutton').hover(
			function(){
				TweenMax.to($(this).parent().find('.copy'), _this.animDurationNorm, {css:{opacity:1}});
				TweenMax.to($(this).parent().find('.imgblock'), _this.animDurationFast, {css:{opacity:0.2}});
			},
			function(){
				TweenMax.to($(this).parent().find('.copy'), _this.animDurationNorm, {css:{opacity:0}});
				TweenMax.to($(this).parent().find('.imgblock'), _this.animDurationFast, {css:{opacity:1}});
			}
		).click(function(){
			if($(this).attr('id')){
				if($(this).attr('id') === 'video1' || $(this).attr('id') === 'video2'){
					var videoId = $(this).attr('id').replace('video', '');
					_this.home.popupVideo.id = videoId;
					
					popupReveal($('.section-home'), $('.videos'));
					popupVideo($('.section-home'), _this.home.popupVideo.data[_this.home.popupVideo.id - 1]);
					// tracking
					setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_video'+ videoId);
					
				} else {
					
					var sectionId = $(this).attr('id').replace('section', '');
					if(_this.phase == 3 && sectionId > 2){
						sectionId = sectionId - 1;
					}
					if(_this.phase == 2 && sectionId > _this.section.navigation[_this.phase - 1].name.length){
						sectionId = sectionId - 2;
					}
					// tracking
					setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_to_view_'+ _this.section.navigation[_this.phase - 1].name[sectionId]);
					
					_this.section.id = sectionId;
					moveCarousel();
				}
			}
		});
		
		$('.section-home .videos .btnNext').click(function(){
			if(_this.home.popupVideo.id > _this.home.popupVideo.data.length - 1){
				_this.home.popupVideo.id = 1;
			} else {
				_this.home.popupVideo.id++;
			}
			
			popupVideo($('.section-home'), _this.home.popupVideo.data[_this.home.popupVideo.id - 1]);
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_next_video'+ _this.home.popupVideo.id);
		});
	}
	
	function sectionEvents()
	{
		$('.section-events').empty().html(
			'<div class="row row1">'+
				'<div class="col col1"><h2 style="font-size:22px; line-height:26px;">#ELLEFASHIONCUPBOARD<br />Styling session</h2><div class="obutton"></div></div>'+
				'<div class="col col2">'+
					'<div class="row crow1">'+
						'<div class="col ccol1">'+
							'<div class="vbutton" id="video1">'+
								'<div class="vinfo"><div class="blurb">Laura Welsh performs<br />‘Break The Fall’ @ VLFW</div><div class="icon"></div></div>'+
							'</div>'+
						'</div>'+
						'<div class="col ccol2"><h2><span>Street style</h2><div class="obutton"></div></div>'+
						'<div class="clear-fix"></div>'+
					'</div>'+
					'<div class="row crow2">'+
						'<div class="col ccol1 quotes">'+
							'<div class="quote q1">Fashion in 2014 is about marrying old and new techniques and technologies together.<br /><br />Patricia Campbell, <span>ELLE contributor</span></div>'+
							'<div class="quote q2">Want to work in fashion? I recommend you just get in there and do it yourself.<br /><br />Lara Ferros, <span>ELLE picture editor</span></div>'+
						'</div>'+
						'<div class="col ccol2">'+
							'<div class="vbutton" id="video2">'+
								'<div class="vinfo"><div class="blurb">ELLE’s Patricia Campbell talks<br />’Fashion & Technology’@ VLFW</div><div class="icon"></div></div>'+
							'</div>'+
						'</div>'+
						'<div class="clear-fix"></div>'+
					'</div>'+
				'</div>'+
				'<div class="clear-fix"></div>'+
			'</div>'+
			'<div class="row row2">'+
				'<div class="col col1 quotes">'+
					'<div class="quote q1">Digital innovations and social media have shifted the power from traditional media outlets to the consumer.<br /><br />Patricia Campbell, <span>ELLE contributor</span></div>'+
					'<div class="quote q2">I am never bored at work. I am always mental busy, but I am never bored.<br /><br />Lara Ferros, <span>ELLE picture editor</span></div>'+
				'</div>'+
				'<div class="col col2">'+
					'<div class="vbutton" id="video3">'+
						'<div class="vinfo"><div class="blurb">Eliza Shaddad performs<br />‘Waters’ @ VLFW</div><div class="icon"></div></div>'+
					'</div>'+
				'</div>'+
				'<div class="col col3"><h2>The Art of Denim<br />'+ (_this.phase == 2 ? '<span style="font-size:14px; font-style:italic;">Coming soon</span>' : '') +'</h2>'+ (_this.phase == 2 ? '' : '<div class="obutton"></div>') +'</div>'+
				'<div class="clear-fix"></div>'+
			'</div>'+
			'<div class="row row3">'+
				'<div class="col col1">'+
					'<div class="vbutton" id="video4">'+
						'<div class="vinfo"><div class="blurb">‘Behind the Lens’ with ELLE’s<br />Picture Editor,<br />Lara Ferros @ VLFW</div><div class="icon"></div></div>'+
					'</div>'+
				'</div>'+
				'<div class="col col2"><h2>Instagram</h2><div class="obutton"></div></div>'+
				'<div class="col col3">'+
					// '<h5>Coming soon</h5>'+
					'<div class="vbutton" id="video5">'+
						'<div class="vinfo"><div class="blurb">Indiana performs<br />‘Solo Dancing’ @ VLFW</div><div class="icon"></div></div>'+
					'</div>'+
				'</div>'+
				'<div class="clear-fix"></div>'+
			'</div>'+
			'<div class="popupholder"></div>'
		);
		
		sectionEventsQuotesOne(1);
		sectionEventsQuotesTwo(1);
		
		// setup
		// popupStyle1
		var popone = '';
		$.each(_this.events.popupOne.data, function(i, obj){
			popone += '<li><img src="images/events_style1_'+ (i + 1) +'.jpg" /></li>';
		});
		$('.section-events .popupholder').append('<div class="popup popgeneral popupStyle1">'+ sectionEventsPopGeneral(popone) +'</div>');
		$('.section-events .popupStyle1 ul li').eq(0).clone().appendTo('.section-events .popupStyle1 ul');
		$('.section-events .popupStyle1 ul li').eq(1).clone().appendTo('.section-events .popupStyle1 ul');
		$('.section-events .popupStyle1 ul li').eq(_this.events.popupOne.data.length - 1).clone().prependTo('.section-events .popupStyle1 ul').parent().append('<div class="clear-fix"></div>');
		$('.section-events .popupStyle1 .arrowLeft, .section-events .popupStyle1 .arrowRight').click(function(){
			if(!TweenMax.isTweening($('.section-events .popupStyle1 ul'))){
				if($(this).hasClass('arrowLeft')){
					if(_this.events.popupOne.id > 0){
						_this.events.popupOne.id--;
					}
				} else {
					if(_this.events.popupOne.id < _this.events.popupOne.data.length + 1){
						_this.events.popupOne.id++;
					}
				}
				
				sectionEventsPopupOne();
			}
		});
		sectionEventsPopupOne();
		
		// popupStyle2
		var poptwo = '';
		$.each(_this.events.popupTwo.data, function(i, obj){
			poptwo += '<li><img src="images/events_style2_'+ (i + 1) +'.jpg" /></li>';
		});
		$('.section-events .popupholder').append('<div class="popup popgeneral popupStyle2">'+ sectionEventsPopGeneral(poptwo) +'</div>');
		$('.section-events .popupStyle2 ul li').eq(0).clone().appendTo('.section-events .popupStyle2 ul');
		$('.section-events .popupStyle2 ul li').eq(1).clone().appendTo('.section-events .popupStyle2 ul');
		$('.section-events .popupStyle2 ul li').eq(_this.events.popupTwo.data.length - 1).clone().prependTo('.section-events .popupStyle2 ul').parent().append('<div class="clear-fix"></div>');
		$('.section-events .popupStyle2 .arrowLeft, .section-events .popupStyle2 .arrowRight').click(function(){
			if(!TweenMax.isTweening($('.section-events .popupStyle2 ul'))){
				if($(this).hasClass('arrowLeft')){
					if(_this.events.popupTwo.id > 0){
						_this.events.popupTwo.id--;
					}
				} else {
					if(_this.events.popupTwo.id < _this.events.popupTwo.data.length + 1){
						_this.events.popupTwo.id++;
					}
				}
				
				sectionEventsPopupTwo();
			}
		});
		sectionEventsPopupTwo();
		
		// instagram
		var popinstagram = '';
		$.each(_this.events.popupInstagram.data, function(i, obj){
			popinstagram += '<li><img src="images/events_instagram_'+ (i + 1) +'.jpg" /></li>';
		});
		$('.section-events .popupholder').append('<div class="popup instagram">'+ sectionEventsPopGeneral(popinstagram, true) +'</div>');
		$('.section-events .instagram ul li').eq(0).clone().appendTo('.section-events .instagram ul');
		$('.section-events .instagram ul li').eq(1).clone().appendTo('.section-events .instagram ul');
		$('.section-events .instagram ul li').eq(_this.events.popupInstagram.data.length - 1).clone().prependTo('.section-events .instagram ul').parent().append('<div class="clear-fix"></div>');
		$('.section-events .instagram .arrowLeft, .section-events .instagram .arrowRight').click(function(){
			if(!TweenMax.isTweening($('.section-events .instagram ul'))){
				if($(this).hasClass('arrowLeft')){
					if(_this.events.popupInstagram.id > 0){
						_this.events.popupInstagram.id--;
					}
				} else {
					if(_this.events.popupInstagram.id < _this.events.popupInstagram.data.length + 1){
						_this.events.popupInstagram.id++;
					}
				}
				
				sectionEventsPopupInstagram();
			}
		});
		sectionEventsPopupInstagram();
		
		// videos
		$('.section-events .popupholder').append('<div class="popup videos"><div id="video"></div><img src="images/btn_next.png" class="btnNext" /></div>');
		
		// events
		$('.section-events .row1 .col1 .obutton').click(function(){
			popupReveal($('.section-events'), $('.popupStyle1'));
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_popupStyle1');
		});
		
		$('.section-events .row1 .crow1 .ccol2 .obutton').click(function(){
			popupReveal($('.section-events'), $('.popupStyle2'));
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_popupStyle2');
		});
		
		$('.section-events .row2 .col3 .obutton').click(function(){
			if(_this.phase == 3){
				_this.section.id = 2;
			} else {
				_this.section.id = 3;
			}
			moveCarousel();
		});
		
		$('.section-events .row3 .col2 .obutton').click(function(){
			popupReveal($('.section-events'), $('.instagram'));
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_instagram');
		});
		
		$('.section-events .vbutton').click(function(){
			var id = $(this).attr('id').replace('video', '');
			_this.events.popupVideo.id = id;
			
			popupReveal($('.section-events'), $('.videos'));
			popupVideo($('.section-events'), _this.events.popupVideo.data[_this.events.popupVideo.id - 1]);
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_video'+ id);
		});
		
		$('.section-events .videos .btnNext').click(function(){
			if(_this.events.popupVideo.id > _this.events.popupVideo.data.length - 1){
				_this.events.popupVideo.id = 1;
			} else {
				_this.events.popupVideo.id++;
			}
			
			popupVideo($('.section-events'), _this.events.popupVideo.data[_this.events.popupVideo.id - 1]);
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_next_video'+ _this.events.popupVideo.id);
		});
	}
	
	function sectionEventsQuotesOne(id)
	{
		TweenMax.to($('.section-events .row1 .quote'), _this.animDurationNorm, {opacity:0});
		TweenMax.to($('.section-events .row1 .q'+ id), _this.animDurationNorm, {opacity:1});
		TweenMax.delayedCall(3, sectionEventsQuotesOne, [id == $('.section-events .row1 .quote').length ? 1 : (id + 1)]);
	}
	
	function sectionEventsQuotesTwo(id)
	{
		TweenMax.to($('.section-events .row2 .quote'), _this.animDurationNorm, {opacity:0});
		TweenMax.to($('.section-events .row2 .q'+ id), _this.animDurationNorm, {opacity:1});
		TweenMax.delayedCall(3, sectionEventsQuotesTwo, [id == $('.section-events .row2 .quote').length ? 1 : (id + 1)]);
	}
	
	function sectionEventsPopGeneral(items, insta)
	{
		var html = '';
		if(insta){
			html += '<div class="col infos"><h5></h5><p class="summary"></p></div>';
		} else {
			html += '<div class="col infos"><h2></h2><p class="header"></p><p class="copies"></p><p class="name"></p><p class="desc"></p></div>';
		}
		html += '<div class="col carousel"><ul>'+ items +'</ul></div>';
		html += '<div class="clear-fix"></div>';
		html += '<div class="pages"></div>';
		html += '<div class="arrows"><img src="images/btn_arrow_left.png" class="arrowLeft" /><img src="images/btn_arrow_right.png" class="arrowRight" /></div>';
		
		return html;
	}
	
	function sectionEventsPopupOne()
	{
		var sliderWidth = $('.section-events .popupStyle1 ul li').width();
		
		TweenMax.to($('.section-events .popupStyle1 ul li img'), _this.animDurationNorm, {css:{opacity:0.5, 'border':'18px solid #232323', scaleX:0.7, scaleY:0.7}});
		TweenMax.to($('.section-events .popupStyle1 ul li').eq(_this.events.popupOne.id).find('img'), _this.animDurationNorm, {css:{opacity:1, 'border':'18px solid #fff', scaleX:1, scaleY:1}});
		TweenMax.to('.section-events .popupStyle1 ul', _this.animDurationNorm, {css:{'left':-(sliderWidth * _this.events.popupOne.id)}, onComplete:function(){
			if(_this.events.popupOne.id == 0){
				_this.events.popupOne.id = _this.events.popupOne.data.length;
			}
			if(_this.events.popupOne.id == _this.events.popupOne.data.length + 1){
				_this.events.popupOne.id = 1;
			}
			
			$('.section-events .popupStyle1 .infos h2').empty().html(_this.events.popupOne.data[0].title);
			$('.section-events .popupStyle1 .infos .header').empty().html(_this.events.popupOne.data[0].header);
			$('.section-events .popupStyle1 .infos .copies').empty().html(_this.events.popupOne.data[0].copies);
			// $('.section-events .popupStyle1 .infos .name').empty().html(_this.events.popupOne.data[_this.events.popupOne.id - 1].name +' wears:');
			// $('.section-events .popupStyle1 .infos .desc').empty().html(_this.events.popupOne.data[_this.events.popupOne.id - 1].desc);
			$('.section-events .popupStyle1 .pages').empty().html(_this.events.popupOne.id +'/'+ _this.events.popupOne.data.length);
			
			TweenMax.to($('.section-events .popupStyle1 ul li').eq(_this.events.popupOne.id).find('img'), 0, {css:{opacity:1, 'border':'18px solid #fff', scaleX:1, scaleY:1}});
			TweenMax.to('.section-events .popupStyle1 ul', 0, {css:{'left':-(sliderWidth * _this.events.popupOne.id)}});
		}});
	}
	
	function sectionEventsPopupTwo()
	{
		var sliderWidth = $('.section-events .popupStyle2 ul li').width();
		
		TweenMax.to($('.section-events .popupStyle2 ul li img'), _this.animDurationNorm, {css:{opacity:0.5, 'border':'18px solid #232323', scaleX:0.7, scaleY:0.7}});
		TweenMax.to($('.section-events .popupStyle2 ul li').eq(_this.events.popupTwo.id).find('img'), _this.animDurationNorm, {css:{opacity:1, 'border':'18px solid #fff', scaleX:1, scaleY:1}});
		TweenMax.to('.section-events .popupStyle2 ul', _this.animDurationNorm, {css:{'left':-(sliderWidth * _this.events.popupTwo.id)}, onComplete:function(){
			if(_this.events.popupTwo.id == 0){
				_this.events.popupTwo.id = _this.events.popupTwo.data.length;
			}
			if(_this.events.popupTwo.id == _this.events.popupTwo.data.length + 1){
				_this.events.popupTwo.id = 1;
			}
			
			$('.section-events .popupStyle2 .infos h2').empty().html(_this.events.popupTwo.data[0].title);
			$('.section-events .popupStyle2 .infos .header').empty().html(_this.events.popupTwo.data[0].header);
			$('.section-events .popupStyle2 .infos .copies').empty().html(_this.events.popupTwo.data[0].copies);
			// $('.section-events .popupStyle2 .infos .name').empty().html(_this.events.popupTwo.data[_this.events.popupTwo.id - 1].name +' wears:');
			// $('.section-events .popupStyle2 .infos .desc').empty().html(_this.events.popupTwo.data[_this.events.popupTwo.id - 1].desc);
			$('.section-events .popupStyle2 .pages').empty().html(_this.events.popupTwo.id +'/'+ _this.events.popupTwo.data.length);
			
			TweenMax.to($('.section-events .popupStyle2 ul li').eq(_this.events.popupTwo.id).find('img'), 0, {css:{opacity:1, 'border':'18px solid #fff', scaleX:1, scaleY:1}});
			TweenMax.to('.section-events .popupStyle2 ul', 0, {css:{'left':-(sliderWidth * _this.events.popupTwo.id)}});
		}});
	}
	
	function sectionEventsPopupInstagram()
	{
		var sliderWidth = $('.section-events .instagram ul li').width();
		
		TweenMax.to($('.section-events .instagram ul li img'), _this.animDurationNorm, {css:{opacity:0.5, 'border':'18px solid #232323'}});
		TweenMax.to($('.section-events .instagram ul li').eq(_this.events.popupInstagram.id).find('img'), _this.animDurationNorm, {css:{opacity:1, 'border':'18px solid #232323'}});
		TweenMax.to('.section-events .instagram ul', _this.animDurationNorm, {css:{'left':-(sliderWidth * _this.events.popupInstagram.id)}, onComplete:function(){
			if(_this.events.popupInstagram.id == 0){
				_this.events.popupInstagram.id = _this.events.popupInstagram.data.length;
			}
			if(_this.events.popupInstagram.id == _this.events.popupInstagram.data.length + 1){
				_this.events.popupInstagram.id = 1;
			}
			
			$('.section-events .instagram .infos h5').empty().html('Instagram:<br /><span><a href="'+ _this.events.popupInstagram.data[0].link +'" target="_blank">'+ _this.events.popupInstagram.data[0].name +'</a></span>');
			$('.section-events .instagram .infos .summary').empty().html(_this.events.popupInstagram.data[0].summary);
			$('.section-events .instagram .pages').empty().html(_this.events.popupInstagram.id +'/0'+ _this.events.popupInstagram.data.length);
			
			TweenMax.to($('.section-events .instagram ul li').eq(_this.events.popupInstagram.id).find('img'), 0, {css:{opacity:1, 'border':'18px solid #232323'}});
			TweenMax.to('.section-events .instagram ul', 0, {css:{'left':-(sliderWidth * _this.events.popupInstagram.id)}});
		}});
	}
	
	function sectionBuilder()
	{
		var jackets = jeans = imgcache = '';
		$.each(_this.builder.data, function(i, obj){
			jackets += '<li><img src="images/builder_jacket'+ (i + 1) +'.png" /></li>';
			jeans += '<li><img src="images/builder_jeans'+ (i + 1) +'.png" /></li>';
			for(var x = 1; x <= _this.builder.data.length; x++){
				imgcache += '<img src="images/builder_result_'+ (i + 1) +''+ x +'_back.jpg" /><img src="images/builder_result_'+ (i + 1) +''+ x +'_front.jpg" />';
			}
		});
		$('.section-builder').empty().html(
			'<div class="carousels">'+
				'<div class="jackets"></div>'+
				'<div class="jacketsArrow jacketsArrowLeft"></div><div class="jacketsArrow jacketsArrowRight"></div>'+
				'<div class="jeans"></div>'+
				'<div class="jeansArrow jeansArrowLeft"></div><div class="jeansArrow jeansArrowRight"></div>'+
				'<div class="btnSeeOutfit borderblack">SEE OUTFIT</div>'+
			'</div>'+
			'<div class="outfit">'+
				'<div class="cardwrapper">'+
					'<div class="card">'+
						'<div class="cardface front"></div>'+
						'<div class="cardface back"></div>'+
					'</div>'+
				'</div>'+
				'<div class="info">'+
					'<div class="infoboxholder">'+
						'<div class="infobox">'+
							'<div class="infoboxcopies"></div>'+
							'<div class="btnBuynow">Buy now</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="panel panelleft">'+
					'<div class="row row1">'+
						'<div class="buttontop"><img src="images/btn_close.png" class="btnClose" /><br /><img src="images/btn_180.png" class="btn180" /></div>'+
						'<div class="copies"><h2></h2><p></p></div>'+
						'<div class="shareicons"></div>'+
					'</div>'+
					'<div class="row row2">'+
						'<div class="buttonbottom"><img src="images/btn_curve_id.png" /><div class="borderwhite">CHECK YOUR<br />LEVI’S® CURVE ID</div><div class="btnCurveId"></div></div>'+
					'</div>'+
				'</div>'+
				'<div class="panel panelbottom">'+
					'<div class="left col1"><h1>Want to win £100 to spend in-store at Levi’s®?</h1>It’s easy. You’ve created your perfect Levi’s® Revel™ look, now simply forward it to two friends and you’ll be entered into a draw to win one of 10 vouchers worth £100 each to spend in-store at Levi’s®. Good luck!</div>'+
					'<div class="left col2 form"></div>'+
					'<div class="clear-fix"></div>'+
					'<div class="termsandconditions">'+
						'<h3>Terms and Conditions:</h3>'+
						'<p>Open to UK residents aged 18 and over. To enter share your selected Levi’s® outfit with at least two friends and submit your details for the chance of winning £100 to spend in store at Levi’s® (UK Only – excludes levi.com & Levi’s® factory outlets). This competition opens on March 13th 2014 and closes at 6pm on April 2nd 2014. Answers received after the closing date will not be considered. The prize is 10 x £100 to spend at any Levi’s® store in the UK only. The winners will be randomly selected from the entries received by Hearst and prize fulfilled by Levi ‘s®. Hearst & Levi’s® reserves the right to amend the terms and conditions for this competition at any time without notice. See website for full <a href="http://www.hearst.co.uk/magazines/Terms-and-Conditions.html" target="_blank">terms and conditions</a></p>'+
						'<img src="images/btn_close.png" class="btntandc" />'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div style="display:none;">'+ imgcache +'</div>'
		);
		
		$('.section-builder .jackets').empty().html('<ul>'+ jackets +'</ul>');
		$('.section-builder .jackets ul li').eq(0).clone().appendTo('.section-builder .jackets ul');
		$('.section-builder .jackets ul li').eq(1).clone().appendTo('.section-builder .jackets ul');
		$('.section-builder .jackets ul li').eq(2).clone().appendTo('.section-builder .jackets ul');
		$('.section-builder .jackets ul li').eq(_this.builder.data.length - 1).clone().prependTo('.section-builder .jackets ul').parent().append('<div class="clear-fix"></div>');
		$('.section-builder .jeans').empty().html('<ul>'+ jeans +'</ul>');
		$('.section-builder .jeans ul li').eq(0).clone().appendTo('.section-builder .jeans ul');
		$('.section-builder .jeans ul li').eq(1).clone().appendTo('.section-builder .jeans ul');
		$('.section-builder .jeans ul li').eq(2).clone().appendTo('.section-builder .jeans ul');
		$('.section-builder .jeans ul li').eq(_this.builder.data.length - 1).clone().prependTo('.section-builder .jeans ul').parent().append('<div class="clear-fix"></div>');
		
		// events
		$('.section-builder .jacketsArrowLeft, .section-builder .jacketsArrowRight').click(function(){
			if(!TweenMax.isTweening($('.section-builder .jackets ul'))){
				if($(this).hasClass('jacketsArrowLeft')){
					if(_this.builder.jacketsId > 0){
						_this.builder.jacketsId--;
					}
					sectionBuilderJackets();
				} else {
					if(_this.builder.jacketsId < _this.builder.data.length + 1){
						_this.builder.jacketsId++;
					}
					sectionBuilderJackets(true);
				}
			}
		});
		
		$('.section-builder .jeansArrowLeft, .section-builder .jeansArrowRight').click(function(){
			if(!TweenMax.isTweening($('.section-builder .jeans ul'))){
				if($(this).hasClass('jeansArrowLeft')){
					if(_this.builder.jeansId > 0){
						_this.builder.jeansId--;
					}
					sectionBuilderJeans();
				} else {
					if(_this.builder.jeansId < _this.builder.data.length + 1){
						_this.builder.jeansId++;
					}
					sectionBuilderJeans(true);
				}
			}
		});
		
		$('.section-builder .btnSeeOutfit').click(function(){
			sectionBuilderResults();
		});
		
		$('.section-builder .btnClose').click(function(){
			$('.section-builder .outfit').fadeOut(function(){
				setNavigation(true);
				$('.section-builder .btn180').addClass('active').click();
			});
			
			setCustomUrl();
		});
		
		$('.section-builder .btn180').click(function(){
			var jacketsId = _this.builder.jacketsId > _this.builder.data.length - 1 ? 0 : _this.builder.jacketsId;
			var jeansId = _this.builder.jeansId > _this.builder.data.length - 1 ? 0 : _this.builder.jeansId;
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				if(oldIE()){
					$('.section-builder .back').fadeOut();
				} else {
					TweenMax.to($('.section-builder .card'), _this.animDurationNorm, {rotationY:0, ease:Back.easeOut});
				}
				// tracking
				setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Rotate_View_Front '+ _this.builder.data[jacketsId].results[jeansId].title);
			} else {
				$(this).addClass('active');
				if(oldIE()){
					$('.section-builder .back').fadeIn();
				} else {
					TweenMax.to($('.section-builder .card'), _this.animDurationNorm, {rotationY:180, ease:Back.easeOut});
				}
				// tracking
				setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Rotate_View_Back '+ _this.builder.data[jacketsId].results[jeansId].title);
			}
			
			$('.section-builder .info').hide().delay(500).fadeIn();
		});
		
		$('.section-builder .infoboxholder').hover(
			function(){
				//
			},
			function(){
				_this.builder.hotspothover = false;
				$('.section-builder .infoboxholder').fadeOut();
			}
		);
		
		$('.section-builder .btnCurveId').click(function(){
			window.open('http://www.levi.com/GB/en_GB/women/fit-guides/curve-id-tool', '_blank');
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Check_Your_Levis_Curve_Id');
		});
		
		$('.section-builder .btnBuynow').click(function(){
			var jacketsId = _this.builder.jacketsId > _this.builder.data.length - 1 ? 0 : _this.builder.jacketsId;
			var jeansId = _this.builder.jeansId > _this.builder.data.length - 1 ? 0 : _this.builder.jeansId;
			var exlink = _this.builder.data[jacketsId].results[jeansId].hotspots[_this.builder.hotspotId].link;
			// console.log(jacketsId, jeansId, _this.builder.hotspotId);
			window.open(exlink, '_blank');
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_To_Buy '+ exlink);
		});
	}
	
	function sectionBuilderJackets(dright)
	{
		var sliderWidth = $('.section-builder .jackets ul li').width();
		
		TweenMax.to('.section-builder .jackets ul img', _this.animDurationNorm, {rotation:dright ? 5 : -5, transformOrigin:"center top"});
		TweenMax.to('.section-builder .jackets ul', _this.animDurationNorm, {css:{'left':-(sliderWidth * _this.builder.jacketsId)}, onComplete:function(){
			if(_this.builder.jacketsId == 0){
				_this.builder.jacketsId = _this.builder.data.length;
			}
			if(_this.builder.jacketsId == _this.builder.data.length + 1){
				_this.builder.jacketsId = 1;
			}
			
			TweenMax.to('.section-builder .jackets ul img', _this.animDurationFast, {rotation:0});
			TweenMax.to('.section-builder .jackets ul', 0, {css:{'left':-(sliderWidth * _this.builder.jacketsId)}});
		}});
	}
	
	function sectionBuilderJeans(dright)
	{
		var sliderWidth = $('.section-builder .jeans ul li').width();
		
		TweenMax.to('.section-builder .jeans ul img', _this.animDurationNorm, {rotation:dright ? 5 : -5, transformOrigin:"center top"});
		TweenMax.to('.section-builder .jeans ul', _this.animDurationNorm, {css:{'left':-(sliderWidth * _this.builder.jeansId)}, onComplete:function(){
			if(_this.builder.jeansId == 0){
				_this.builder.jeansId = _this.builder.data.length;
			}
			if(_this.builder.jeansId == _this.builder.data.length + 1){
				_this.builder.jeansId = 1;
			}
			
			TweenMax.to('.section-builder .jeans ul img', _this.animDurationFast, {rotation:0});
			TweenMax.to('.section-builder .jeans ul', 0, {css:{'left':-(sliderWidth * _this.builder.jeansId)}});
		}});
	}
	
	function sectionBuilderResults()
	{
		setNavigation();
		
		_this.builder.hotspothover = false;
		
		var jacketsId = _this.builder.jacketsId > _this.builder.data.length - 1 ? 0 : _this.builder.jacketsId;
		var jeansId = _this.builder.jeansId > _this.builder.data.length - 1 ? 0 : _this.builder.jeansId;
		var imgNo = String(jacketsId + 1) + String(jeansId + 1);
		
		$('.section-builder .outfit').fadeIn();
		$('.section-builder .cardwrapper .front').css({'background':'url(images/builder_result_'+ imgNo +'_front.jpg)'});
		$('.section-builder .cardwrapper .back').css({'background':'url(images/builder_result_'+ imgNo +'_back.jpg)'});
		// $('.section-builder .panelleft .copies h2').empty().html(_this.builder.data[jacketsId].results[jeansId].title);
		$('.section-builder .panelleft .copies p').empty().html(_this.builder.data[jacketsId].results[jeansId].summary);
		
		var hotspot = '';
		$.each(_this.builder.data[jacketsId].results[jeansId].hotspots, function(i, obj){
			hotspot += '<div class="hotspot" id="spot'+ i +'" style="top:'+ obj.pos.split(',')[0] +'px; left:'+ obj.pos.split(',')[1] +'px;"></div>';
		});
		// remove hotspots to reset
		if($('.section-builder .info .hotspot').length > 0){
			$('.section-builder .info .hotspot').remove();
		}
		// recall hotspots
		$('.section-builder .info').prepend(hotspot);
		$('.section-builder .info .hotspot').hover(
			function(){
				_this.builder.hotspotId = $(this).attr('id').replace('spot', '');
				
				var product = _this.builder.data[jacketsId].results[jeansId].hotspots[_this.builder.hotspotId].product;
				var price = _this.builder.data[jacketsId].results[jeansId].hotspots[_this.builder.hotspotId].price;
				$('.section-builder .infoboxholder .infoboxcopies').empty().html(product +'<br />&pound;'+ price);
				
				var top = $(this).css('top');
				var left = parseInt($(this).css('left').replace('px', '') - parseInt($('.section-builder .infoboxholder').width() / 2));
				if(_this.builder.hotspothover){
				
					// TweenMax.to('.section-builder .infoboxholder', _this.animDurationFast, {css:{'top':top, 'left':left}});
					TweenMax.to('.section-builder .infoboxholder', 0.25, {css:{'opacity':0}, onComplete:function(){
						TweenMax.to('.section-builder .infoboxholder', _this.animDurationFast, {css:{'opacity':1}});
						$('.section-builder .infoboxholder').css({'top':top, 'left':left});
					}});
					
				} else {
					$('.section-builder .infoboxholder').css({'top':top, 'left':left}).fadeIn();
				}
				
				_this.builder.hotspothover = true;
			},
			function(){
				//
			}
		);
		
		var hashSubUrl = parseInt(jacketsId + 1) +'-'+ parseInt(jeansId + 1);
		setCustomUrl(hashSubUrl);
		sectionBuilderForm();
		
		var shareName = encodeURIComponent("LEVI'S® REVEL™ Outfit Builder");
		var shareCaption = encodeURIComponent("Hey – check out the Levi’s® outfit I put together on elleUK.com.");
		var shareDescription = encodeURIComponent("Follow the link to build your own and you could win £100 voucher to spend in-store. Levi’s® Revel™ is the pinnacle of denim innovation that shapes, lifts and lengthens.");
		var shareUrl = encodeURIComponent(_this.url);
		
		$('.section-builder .shareicons').empty().html(getSocialIcons());
		
		$('.section-builder .shareicons .facebook').click(function(){
			var fullUrl = shareUrl +'%23'+ _this.section.navArray[_this.section.id] +'/'+ hashSubUrl;
			var shareImage = encodeURIComponent(_this.imgdir +"/builder_result_"+ imgNo +"_front.jpg");
			window.open('https://www.facebook.com/dialog/feed?app_id=145634995501895&display=page&name='+ shareName +'&caption='+ shareCaption +'&description='+ shareDescription +'&picture='+ shareImage +'&link='+ fullUrl +'&redirect_uri=https://www.facebook.com/', '_blank');
			// tracking
			setGATracking('Share_section_to_FACEBOOK', fullUrl);
		});
		
		$('.section-builder .shareicons .twitter').click(function(){
			var fullUrl = shareUrl +'%23'+ _this.section.navArray[_this.section.id] +'/'+ hashSubUrl;
			window.open('https://twitter.com/share?url='+ fullUrl +'&text='+ shareCaption, '_blank');
			// tracking
			setGATracking('Share_section_to_TWITTER', fullUrl);
		});
		
		$('.section-builder .shareicons .googleplus').click(function(){
			var fullUrl = shareUrl +'%23'+ _this.section.navArray[_this.section.id] +'/'+ hashSubUrl;
			window.open('https://plus.google.com/share?hl=en-GB&url='+ fullUrl, '_blank');
			// tracking
			setGATracking('Share_section_to_GOOGLEPLUS', fullUrl);
		});
		
		// tracking
		setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'See_Outfit '+ _this.builder.data[jacketsId].results[jeansId].title);
	}
	
	function sectionBuilderForm()
	{
		$('.section-builder .form').empty().html(
			'<form id="formCompetition" method="POST" action="js/post.competition.php">'+
				'<ul>'+
					'<li><div class="left">Your email:</div><input type="text" class="field fieldHighlight" name="uEmail"></li>'+
					'<li><div class="left">Friend No 1 email:</div><input type="text" class="field fieldHighlight" name="uFriend1"></li>'+
					'<li><div class="left">Friend No 2 email:</div><input type="text" class="field fieldHighlight" name="uFriend2"></li>'+
					'<li class="cbox cbox1">'+
						'<div class="cboxholder">'+
							'<input type="checkbox" class="left" id="optSubscribe" name="optSubscribe" value="yes"><label for="optSubscribe">Please tick here if you wish to<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;receive info and offers from Levi’s®</label>'+
						'</div>'+
					'</li>'+
					'<li class="cbox cbox2">'+
						'<div class="cboxholder">'+
							'<input type="checkbox" class="left" id="optAgree" name="optAgree" value="yes"><label for="optAgree">Please tick to confirm you have<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read our</label> <a href="#" id="tandc">terms and conditions</a>'+
						'</div>'+
					'</li>'+
				'</ul>'+
				'<div class="btnsubmit">'+
					'<span class="submitloading">submitting data...</span><input type="submit" name="submit" class="submit" value="SHARE">'+
				'</div>'+
			'</form>'
		);
		
		var errorEmailVal = 'Invalid email address...';
		var email = $('#formCompetition input[name=uEmail]');
		var friend1 = $('#formCompetition input[name=uFriend1]');
		var friend2 = $('#formCompetition input[name=uFriend2]');
		var subscribe = $('#formCompetition input[name=optSubscribe]');
		var agree = $('#formCompetition input[name=optAgree]');
		var cboxholder = $('#formCompetition .cbox2 .cboxholder');
		 
		email.val('').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		friend1.val('').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		friend2.val('').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		cboxholder.removeClass('fieldHighlightError');
		 
		$('#formCompetition').submit(function(e){
			e.preventDefault();
			
			if(!isValidEmailAddress(email.val())){
				email.val(errorEmailVal).addClass('fieldHighlightError');
				return false;
			} else {
				email.removeClass('fieldHighlightError');
			}
			
			if(!isValidEmailAddress(friend1.val())){
				friend1.val(errorEmailVal).addClass('fieldHighlightError');
				return false;
			} else {
				friend1.removeClass('fieldHighlightError');
			}
			
			if(friend2.val() !== ''){
				if(!isValidEmailAddress(friend2.val())){
					friend2.val(errorEmailVal).addClass('fieldHighlightError');
					return false;
				} else {
					friend2.removeClass('fieldHighlightError');
				}
			} else {
				friend2.removeClass('fieldHighlightError');
			}
			
			if(!agree[0].checked) {
				cboxholder.addClass('fieldHighlightError')
				return false;
			} else {
				cboxholder.removeClass('fieldHighlightError');
			}
			
			var data =	'email='+ email.val() +
						'&friend1='+ friend1.val() +
						'&friend2='+ friend2.val() +
						'&urlhash='+ window.parent.location.hash +
						'&subscribe='+ (subscribe[0].checked ? 'yes' : 'no') +
						'&agree='+ (agree[0].checked ? 'yes' : 'no');
					
			$.ajax({
				url: $(this).attr('action'),
				type: $(this).attr('method'),
				data: data,
				cache: false,
				success: function(success) {
					console.log("Data Saved: " + success);
					if(success === 'Server Error' || success === 'Error'){
						if(success === 'Server Error'){
							sectionBuilderFormResult('<div class="error">Server Error!<br />Please try again later.</div>');
						} else {
							sectionBuilderFormResult('<div class="error">Ooops! Something gone wrong.<br />Please try again.</div>');
						}
						
						// tracking
						setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Form_Error');
						
					} else {
						$('#formCompetition .field, #formCompetition .submit').attr('disabled', 'true');
						$('#formCompetition .submitloading').show();
						sectionBuilderFormResult('<div class="success">Thank you!<br />for entering our competition.</div>');
						
						// tracking
						setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Form_Successful');
					}
				},
				error: function(request, status, error) {
					alert(request.responseText);
				}
			});
		});
		
		$('#formCompetition #tandc').click(function(e){
			e.preventDefault();
			$('.section-builder .termsandconditions').fadeIn();
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Form_View_TermsAndConditions');
		});
		
		$('.section-builder .termsandconditions .btntandc').click(function(){
			$(this).parent().fadeOut();
		});
	}
	
	function sectionBuilderFormResult(str)
	{
		$('.section-builder .panelbottom .col2').empty().html(str);
	}
	
	function sectionDenim()
	{
		var tlist = clist = infos = '';
		var thisDate = _this.denim.date.split('-');
		var dateSet = new Date(parseInt(thisDate[0]), parseInt(thisDate[1])-1, parseInt(thisDate[2]));
		var dateNow = new Date();
		
		_this.denim.dateDiff = parseInt(((dateNow) - dateSet) / (1000 * 60 * 60 * 24));
		if(_this.denim.dateDiff > _this.denim.data.length){
			_this.denim.dateDiff = _this.denim.data.length;
		}
		
		$('.section-denim').empty().html(
			'<div class="holder">'+
				'<div class="row row1"></div>'+
				'<div class="row row2">'+
					'<div class="carousel"></div>'+
					'<div class="arrow arrowLeft"></div>'+
					'<div class="arrow arrowRight"></div>'+
				'</div>'+
				'<div class="row row3"></div>'+
			'</div>'
		);
		
		$.each(_this.denim.data, function(i, obj){
			tlist += '<li class="left thumb'+ (i + 1) +'">';
				tlist += '<img src="images/denim_thumb'+ (i + 1) +'.jpg" class="'+ (i < _this.denim.dateDiff ? 'active' : '') +'" />';
				if(i < _this.denim.dateDiff){
					tlist += '<h2>'+ obj.name +'</h2>';
					tlist += '<div class="btnThumb"></div>';
				}
			tlist += '</li>';
			if(i < _this.denim.dateDiff){
				clist += '<li class="left"><img src="images/denim_img'+ (i + 1) +'_1.jpg" /></li>';
				infos += '<div class="infos info'+ (i + 1) +'">';
					infos += '<div class="left col col1">';
						infos += '<div class="crow crow1">';
							infos += '<div class="ccol ccol1"><h2 class="left">'+ obj.name +'</h2><div class="left">'+ obj.copies +'</div></div>';
						infos += '</div>';
						infos += '<div class="crow crow2">';
							infos += '<div class="left ccol ccol1">';
								infos += '<img src="images/denim_img'+ (i + 1) +'_3.jpg" />';
								if(obj.captions[0] != ''){
									infos += '<h5>'+ obj.captions[0] +'</h5>';
									infos += '<div class="btnInfo"></div>';
								}
							infos += '</div>';
							infos += '<div class="left ccol ccol2">';
								infos += '<img src="images/denim_img'+ (i + 1) +'_4.jpg" />';
								if(obj.captions[1] != ''){
									infos += '<h5>'+ obj.captions[1] +'</h5>';
									infos += '<div class="btnInfo"></div>';
								}
							infos += '</div>';
							infos += '<div class="clear-fix"></div>';
						infos += '</div>';
					infos += '</div>';
					infos += '<div class="left col col2">';
						infos += '<img src="images/denim_img'+ (i + 1) +'_2.jpg" />';
						if(obj.captions[2] != ''){
							infos += '<h5>'+ obj.captions[2] +'</h5>';
							infos += '<div class="btnInfo"></div>';
						}
					infos += '</div>';
					infos += '<div class="clear-fix"></div>';
				infos += '</div>';
			}
		});
		
		$('.section-denim .row1').empty().html('<ul>'+ tlist +'<div class="clear-fix"></div></ul>');
		$('.section-denim .row1 .btnThumb').click(function(){
			if(!TweenMax.isTweening($('.section-denim .carousel ul'))){
				_this.denim.id = $(this).parent().index() + 1;
				sectionDenimCarousel();
			}
		});
		$('.section-denim .carousel').empty().html('<ul>'+ clist +'</ul>');
		$('.section-denim .carousel ul li').eq(0).clone().appendTo('.section-denim .carousel ul');
		$('.section-denim .carousel ul li').eq(_this.denim.dateDiff - 1).clone().prependTo('.section-denim .carousel ul').parent().append('<div class="clear-fix"></div>');
		$('.section-denim .arrow').click(function(){
			if(!TweenMax.isTweening($('.section-denim .carousel ul'))){
				if($(this).attr('class') == 'arrow arrowLeft'){
					if(_this.denim.id > 0){
						_this.denim.id--;
					}
				} else {
					if(_this.denim.id < _this.denim.dateDiff + 1){
						_this.denim.id++;
					}
				}
				sectionDenimCarousel();
			}
		});
		$('.section-denim .row3').empty().html(infos);
		$('.section-denim .btnInfo').hover(
			function(){
				$(this).parent().find('h5').css({'display':'block'});
				TweenMax.to($(this).parent().find('h5'), _this.animDurationFast, {css:{'opacity':1}});
				TweenMax.to($(this).parent().find('img'), _this.animDurationFast, {css:{'opacity':0.2}});
			},
			function(){
				$(this).parent().find('h5').css({'display':'none'});
				TweenMax.to($(this).parent().find('h5'), _this.animDurationFast, {css:{'opacity':0}});
				TweenMax.to($(this).parent().find('img'), _this.animDurationFast, {css:{'opacity':1}});
			}
		);
		
		sectionDenimCarousel();
	}
	
	function sectionDenimCarousel()
	{
		var sliderWidth = $('.section-denim .carousel ul li').width();
		var infoId = _this.denim.id;
		if(_this.denim.id == 0){
			infoId = _this.denim.dateDiff;
		}
		if(_this.denim.id == _this.denim.dateDiff + 1){
			infoId = 1;
		}
		$('.section-denim .row1 li img').css({'opacity':0.25});
		TweenMax.to($('.section-denim .row1 li.thumb'+ infoId +' img'), _this.animDurationFast, {css:{'opacity':1}});
		$('.section-denim .infos').css({'z-index':0});
		$('.section-denim .info'+ infoId).css({'z-index':1});
		TweenMax.to($('.section-denim .info'+ infoId), _this.animDurationFast, {css:{'top':0}});
		TweenMax.to('.section-denim .carousel ul', _this.animDurationNorm, {css:{'left':-(sliderWidth * _this.denim.id)}, onComplete:function(){
			if(_this.denim.id == 0){
				_this.denim.id = _this.denim.dateDiff;
			}
			if(_this.denim.id == _this.denim.dateDiff + 1){
				_this.denim.id = 1;
			}
			
			$('.section-denim .infos').not('.section-denim .info'+ _this.denim.id).css({'top':-$('.section-denim .infos').height()});
			TweenMax.to('.section-denim .carousel ul', 0, {css:{'left':-(sliderWidth * _this.denim.id)}});
		}});
		
		if(_this.section.init){
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'View_Person '+ _this.denim.data[infoId - 1].name);
		}
	}
	
	function sectionGallery()
	{
		$('.section-gallery').empty().html(
			'<div class="holder">'+
				'<div class="col col1">'+
					'<div class="row row1"><h2>Get ready to Revel™</h2><p>Style and technology come together to create a fit like no other in Levi’s® Revel™ jeans. Cleverly designed to lift and flatter in a range of colours and effects, looking good is your only option. So how will you wear yours?</p></div>'+
					'<div class="row row2 campaign">'+
						'<div class="carouselwrapper">'+
							'<div class="carousel"></div>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="col col2">'+
					'<div class="row row1 main">'+
						'<div class="carouselwrapper">'+
							'<div class="carousel"></div>'+
						'</div>'+
					'</div>'+
					'<div class="row row2"></div>'+
					'<div class="infodata">'+
						'<div class="left">'+
							'<div class="borderblack btnBuy">CLICK TO BUY</div>'+
							'<div class="borderblack btnCheck">CHECK YOUR LEVI’S® CURVE ID</div>'+
						'</div>'+
						'<div class="right info"></div>'+
					'</div>'+
				'</div>'+
				'<div class="arrows">'+
					'<div class="up"></div>'+
					'<div class="down"></div>'+
				'</div>'+
			'</div>'
		);
		
		var galleryMain = $('.section-gallery .main .carousel');
		var galleryCampaign = $('.section-gallery .campaign .carousel');
		var galleryTotal = _this.gallery.data.length;
		
		var imgcache = '';		
		for(var x = 1; x <= galleryTotal; x++){
			imgcache += '<img src="images/gallery_campaign'+ x +'.jpg" /><img src="images/gallery_main'+ x +'.jpg" />';
		}
		$('.section-gallery').append('<div style="display:none;">'+ imgcache +'</div>');
		
		// initial
		sectionGalleryInfo();
		$(galleryMain).html('<div class="items item'+ _this.gallery.id +'" style="background:url(images/gallery_main'+ _this.gallery.id +'.jpg) no-repeat;"></div>');
		$(galleryCampaign).html('<div class="items item'+ _this.gallery.id +'" style="background:url(images/gallery_campaign'+ _this.gallery.id +'.jpg) no-repeat;"></div>');
		
		$('.section-gallery .arrows .up').click(function(){
			if(!_this.gallery.animating) 
			{
				var currentMain = $(galleryMain).find('.item'+ _this.gallery.id);
				TweenMax.to(currentMain, _this.animDurationFast, {css:{'top':974}, ease:Linear.easeNone, onComplete:function(){
					$(currentMain).remove();
					_this.gallery.animating = false;
				}});
				
				var currentCampaign = $(galleryCampaign).find('.item'+ _this.gallery.id);
				TweenMax.to(currentCampaign, _this.animDurationFast, {css:{'top':-588}, ease:Linear.easeNone, onComplete:function(){
					$(currentCampaign).remove();
				}});
				
				if(_this.gallery.id > 1){
					_this.gallery.id--;
				} else {
					_this.gallery.id = galleryTotal;
				}
				
				$(galleryMain).prepend('<div class="items item'+ _this.gallery.id +'" style="top:-974px; background:url(images/gallery_main'+ _this.gallery.id +'.jpg) no-repeat;"></div>');
				TweenMax.to($(galleryMain).find('.item'+ _this.gallery.id), _this.animDurationFast, {css:{'top':0}, ease:Linear.easeNone});
				
				$(galleryCampaign).prepend('<div class="items item'+ _this.gallery.id +'" style="top:588px; background:url(images/gallery_campaign'+ _this.gallery.id +'.jpg) no-repeat;"></div>');
				TweenMax.to($(galleryCampaign).find('.item'+ _this.gallery.id), _this.animDurationFast, {css:{'top':0}, ease:Linear.easeNone});
				
				sectionGalleryInfo();
				
				// tracking
				setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_Arrow_Up '+ _this.gallery.data[_this.gallery.id - 1].type);
			}
			
			_this.gallery.animating = true;
		});
		
		$('.section-gallery .arrows .down').click(function(){
			if(!_this.gallery.animating) 
			{
				var currentMain = $(galleryMain).find('.item'+ _this.gallery.id);
				TweenMax.to(currentMain, _this.animDurationFast, {css:{'top':-974}, ease:Linear.easeNone, onComplete:function(){
					$(currentMain).remove();
					_this.gallery.animating = false;
				}});
				
				var currentCampaign = $(galleryCampaign).find('.item'+ _this.gallery.id);
				TweenMax.to(currentCampaign, _this.animDurationFast, {css:{'top':588}, ease:Linear.easeNone, onComplete:function(){
					$(currentCampaign).remove();
				}});
				
				if(_this.gallery.id < galleryTotal) 
				{
					_this.gallery.id++;
				} else {
					_this.gallery.id = 1;
				}
				
				$(galleryMain).append('<div class="items item'+ _this.gallery.id +'" style="top:974px; background:url(images/gallery_main'+ _this.gallery.id +'.jpg) no-repeat;"></div>');
				TweenMax.to($(galleryMain).find('.item'+ _this.gallery.id), _this.animDurationFast, {css:{'top':0}, ease:Linear.easeNone});
				
				$(galleryCampaign).append('<div class="items item'+ _this.gallery.id +'" style="top:-588px; background:url(images/gallery_campaign'+ _this.gallery.id +'.jpg) no-repeat;"></div>');
				TweenMax.to($(galleryCampaign).find('.item'+ _this.gallery.id), _this.animDurationFast, {css:{'top':0}, ease:Linear.easeNone});
				
				sectionGalleryInfo();
				
				// tracking
				setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_Arrow_Down '+ _this.gallery.data[_this.gallery.id - 1].type);
			}
			
			_this.gallery.animating = true;
		});
		
		$('.section-gallery .infodata .btnBuy').click(function(){
			var exlink = _this.gallery.data[_this.gallery.id - 1].link;
			window.open(exlink, '_blank');
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Click_To_Buy '+ exlink);
		});
		
		$('.section-gallery .infodata .btnCheck').click(function(){
			window.open('http://www.levi.com/GB/en_GB/women/fit-guides/curve-id-tool', '_blank');
			// tracking
			setGATracking(_this.section.navigation[_this.phase - 1].name[_this.section.id], 'Check_Your_Levis_Curve_Id');
		});
	}
	
	function sectionGalleryInfo()
	{
		var thisId = parseInt(_this.gallery.id - 1);
		$('.section-gallery .infodata .info').empty().html(_this.gallery.data[thisId].type +'<br />&pound;'+ _this.gallery.data[thisId].price);
	}
	
	function getSocialIcons()
	{
		html = '<ul>';
			html += '<li><img src="images/share_facebook.png" class="facebook" alt="Share on Facebook" /></li>';
			html += '<li><img src="images/share_twitter.png" class="twitter" alt="Share on Twitter" /></li>';
			html += '<li><img src="images/share_googleplus.png" class="googleplus" alt="Share on Googleplus" /></li>';
		html += '</ul>';
		
		return html;
	}
	
	function setSocialIcons()
	{
		$('#wrapper').append('<div id="shareicons"></div>');
		$('#shareicons').empty().html(getSocialIcons());
		
		var shareName = encodeURIComponent("LEVI'S® REVEL™");
		var shareCaptionGeneral = encodeURIComponent("ELLE and Levi’s® have joined forces to celebrate the style revelution.");
		var shareCaptionGallery = encodeURIComponent("Get ready to Revel™. Style and technology come together to create a fit like no other in Levi’s® Revel™ jeans.");
		var shareDescription = encodeURIComponent("Discover music, fashion and more here.");
		var shareImage = encodeURIComponent(_this.imgdir +"logo_white.jpg");
		var shareUrl = encodeURIComponent(_this.url);
		
		$('#shareicons .facebook').click(function(){
			var fullUrl = shareUrl +'%23'+ _this.section.navArray[_this.section.id];
			var shareCaption;
			if(_this.section.id == _this.section.navigation[_this.phase - 1].name.length - 1){
				shareCaption = shareCaptionGallery;
			} else {
				shareCaption = shareCaptionGeneral;
			}
			window.open('https://www.facebook.com/dialog/feed?app_id=145634995501895&display=page&name='+ shareName +'&caption='+ shareCaption +'&description='+ shareDescription +'&picture='+ shareImage +'&link='+ fullUrl +'&redirect_uri=https://www.facebook.com/', '_blank');
			// tracking
			setGATracking('Share_section_to_FACEBOOK', fullUrl);
		});
		
		$('#shareicons .twitter').click(function(){
			var fullUrl = shareUrl +'%23'+ _this.section.navArray[_this.section.id];
			var shareCaption;
			if(_this.section.id == _this.section.navigation[_this.phase - 1].name.length - 1){
				shareCaption = shareCaptionGallery;
			} else {
				shareCaption = shareCaptionGeneral;
			}
			window.open('https://twitter.com/share?url='+ fullUrl +'&text='+ shareCaption, '_blank');
			// tracking
			setGATracking('Share_section_to_TWITTER', fullUrl);
		});
		
		$('#shareicons .googleplus').click(function(){
			var fullUrl = shareUrl +'%23'+ _this.section.navArray[_this.section.id];
			window.open('https://plus.google.com/share?hl=en-GB&url='+ fullUrl, '_blank');
			// tracking
			setGATracking('Share_section_to_GOOGLEPLUS', fullUrl);
		});
	}
	
	function imageLoadingComplete()
	{
		$('#loader').delay(250).fadeOut(function(){
			var subId = window.parent.location.hash.split('/')[1];
			if(subId){
				_this.builder.jacketsId = parseInt(subId.split('-')[0]) - 1;
				_this.builder.jeansId = parseInt(subId.split('-')[1]) - 1;
				sectionBuilderJackets();
				sectionBuilderJeans();
				TweenMax.delayedCall(1, function(){
					$('.section-builder .btnSeeOutfit').click();
					_this.imgloaded = true;
				});
			} else {
				_this.imgloaded = true;
			}
		});
	}
			
	function imageLoaded(elementsLoadedCount, totalImagesCount)
	{
		var percent = Math.round((elementsLoadedCount / totalImagesCount) * 100);
		$('#loader p').empty().html(percent +'%');
	}
	
	function isValidEmailAddress(email)
	{
    	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    	return pattern.test(email);
	}

	function isValidPhoneNumber(phone)
	{
	   var pattern = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/i);
	   return pattern.test(phone); 
	}
	
	function oldIE()
	{
		if(navigator.appVersion.indexOf('MSIE 10.') != -1 || navigator.appVersion.indexOf('MSIE 9.') != -1 || navigator.appVersion.indexOf('MSIE 8.') != -1){
			return true;
		} else {
			return false;
		}
	}
	
	function isSafari()
	{
		if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
			return true;
		} else {
			return false;
		}
	}
	
	function scrollTop()
	{
		parent.postMessage('AVLevisRevelScrollUp', '*');
	}
	
	function popupReveal(elem, childElem)
	{
		setNavigation();
		scrollTop();
		
		$(elem).find('.popupholder').fadeIn();
		$(elem).find('.popupholder .popup').hide();
		$(elem).find('.popupholder').find(childElem).fadeIn();
		$(elem).append('<img src="images/btn_close.png" class="btnClose" />');
		$(elem).find('.btnClose').fadeIn().click(function(){
			$(this).remove();
			setNavigation(true);
			$(elem).find('.popupholder').fadeOut();
			$(elem).find('.popupholder .popup').hide();
			$(elem).find('#video').empty();
		});
	}
	
	function popupVideo(elem, id)
	{
		$(elem).find('#video').empty().html(
			'<div style="display:none"></div>'+
			'<object id="myExperience" class="BrightcoveExperience">'+
				'<param name="wmode" value="transparent" />'+
				'<param name="width" value="980" />'+
				'<param name="height" value="550" />'+
				'<param name="playerID" value="1174938201001" />'+
				'<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDjMpoBoiFF9EF1-FPk0PWET" />'+
				'<param name="isVid" value="true" />'+
				'<param name="isUI" value="true" />'+
				'<param name="dynamicStreaming" value="true" />'+
				'<param name="autoStart" value="true" />'+
				'<param name="includeAPI" value="true" />'+
				'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
				'<param name="templateReadyHandler" value="onTemplateReady" />'+
				'<param name="@videoPlayer" value="'+ id +'" />'+
			'</object>'+
			'<script type="text/javascript">brightcove.createExperiences();</script>'
		);
	}
	
	function setGATracking(event, desc)
	{
		// tracking
		var aTitle = 'LEVIS REVEL PHASE '+ _this.phase;
		_gaq.push(['_trackEvent', aTitle, event, desc]);
		console.log('TrackEvent: '+ aTitle +' >> '+ event +' >> '+ desc);
	}
});

var onTemplateLoaded, onTemplateReady, player, modVP, modExp, modCon;

function onTemplateLoaded(experienceID)
{
	player = brightcove.api.getExperience(experienceID);
	modVP = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
}

function onTemplateReady(evt) 
{
	modVP.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, function(){
		// $('.section-home .video').hide();
	});
}

