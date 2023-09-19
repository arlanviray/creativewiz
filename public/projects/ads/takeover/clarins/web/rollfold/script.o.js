/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){

	var _normDuration = 1;
  	var _fastDuration = 0.5;
  	var _fasterDuration = 0.25;
  	var _thisInit = true;
  	var _timelineInitial = new TimelineMax({
  		'paused':true, 
  		onComplete:function(){
  			_timelineInitial.restart();
  		}
  	});
	var _timelineExpand = new TimelineMax({'paused':true, onReverseComplete:adtechContract});
	var _currSlider = 
		_prevSlider = 
		_percentageSlider = 0;
	var _movingSlider;
	var _timelineSlider = new TimelineMax({onUpdate:updateSlider});
	var _productId = _carouselId = _carouselTotal = 0;
	var _productData = [
		{
			title: 'BB Skin Perfecting Cream SPF 25',
			bodycopy: 'Warm the product in your hands then apply using the fingertips, gently smoothing over the skin working from the middle of the face outwards.',
			price: '30.00',
		},
		{
			title: 'Multi-Blush',
			bodycopy: 'Use your fingertips to apply to the cheeks and blend up to the temples. The cream turns into a powder leaving a soft, natural glow.',
			price: '18.00',
		},
		{
			title: 'Instant Light Natural Lip Perfector',
			bodycopy: 'Apply this soft balm to nourish and enhance your lips, for an instant plumping effect.',
			price: '18.00',
		},
		{
			title: 'Be Long Mascara',
			bodycopy: 'For instantly wide-awake eyes, apply from the root of the lashes out to the tip, using gentle pressure to enhance a natural curl.',
			price: '21.00',
		},
		
		{
			title: 'Instant Light Radiance Boosting Complexion Base',
			bodycopy: 'Gently smooth on this base from the middle of the face outwards for an instantly radiant, smoothed complexion. Applying BB Cream over the top.',
			price: '26.00',
		},
		{
			title: 'Instant Concealer',
			bodycopy: 'Warm the product on the fingertips and gently pat under the eyes working from the inner corner outward to instantly brighten and diminish dark circles.',
			price: '21.00',
		},
		{
			title: 'Ombre Min&eacute;rale Eye Shadow',
			bodycopy: 'A soft wash of colour on the lid instantly freshens the eye. Gently press Ombre Min&eacute;rale over eyelids and blend outwards to soften.',
			price: '17.00',
		},
		{
			title: 'Crayon Kh&ocirc;l Eyeliner Pencil',
			bodycopy: 'Define the eyes by drawing along the upper lash line and gently blend the line using the brush tip.',
			price: '17.00',
		},
		
		{
			title: 'Instant Smooth Perfecting Touch',
			bodycopy: 'For instant flawless-looking results, apply Instant Smooth Perfecting Touch with the fingertips to the whole face or just to areas where pores and wrinkles are visible.',
			price: '26.00',
		},
		{
			title: 'Skin Illusion Natural Radiance Foundation SPF 10',
			bodycopy: 'For fuller coverage substitute your BB cream for Skin Illusion Foundation. Warm the foundation in your hands and apply for a naturally radiant complexion.',
			price: '27.00',
		},
		{
			title: 'Instant Light Brush-On Perfector',
			bodycopy: 'Highlight skin by sweeping Instant Light Brush-On Perfector on the shadowy areas of the face to brighten and minimise signs of fatigue.',
			price: '25.00',
		},
		{
			title: 'Eyebrow Pencil',
			bodycopy: 'Enhance and define the natural curve of your brows with this brow pencil.',
			price: '17.00',
		},
		{
			title: '3-Dot Liner',
			bodycopy: 'Apply liner dot by dot along the lash line, filling in the area for a naturally fuller-looking effect.',
			price: '20.00',
		},
		{
			title: 'Rouge Eclat Lipstick',
			bodycopy: 'This nourishing formula provides instant comfort and intense colour with a satin finish.',
			price: '19.50',
		},
	];
	
	$(init);
	function init()
	{
		_timelineExpand.to('#contents', _fastDuration, {css:{height:800}});
		_timelineExpand.to('#contents', _normDuration, {css:{width:900}});
		
		// events
		$('.contract .btnExpand').click(function(){
			ADTECH.event('Expand');
			adtechExpand();
		});
		setTimeout(function(){
			$('.contract .btnExpand').click();
		}, 3000);
		
		$('.expand .btnContract').click(function(){
			ADTECH.event('Contract');
			_timelineExpand.reverse();
		});
		
		_carouselTotal = $('.carousel ul > li').size();
		$('.arrow.up, .arrow.down').click(function(){
			if(!TweenMax.isTweening($('.carousel ul'))){
				if($(this).hasClass('up')){
					ADTECH.event('Carousel clicked arrow up');
					if(_carouselId > 0){
						_carouselId--;
					}
				} else {
					ADTECH.event('Carousel clicked arrow down');
					if(_carouselId < _carouselTotal - 1){
						_carouselId++;
					}
				}
				setCarousel();
			}
		});
		$('.carousel .prod').click(function(){
			_productId = $(this).attr('class').replace('prod prod', '');
			ADTECH.event('Product '+ _productId +' clicked');
			setMidInfo();
			remCarouselProductClass();
			$(this).addClass('active');
		});
		
		$('.midinfo .btnShopthelook').click(function(){
			ADTECH.click('Product_Exit_'+ _productId);
		});
		
		$('.midinfo .btnClose').click(function(){
			ADTECH.event('Close info panel');
			remCarouselProductClass();
			setMidInfo(true);
		});
		
		contractPanel();
		expandPanel();
		
		_thisInit = false;
	}
	
	function contractPanel()
	{
		TweenMax.to('.contract .hand', 0, {rotation:30});
		TweenMax.to('.contract .prod1', 0, {opacity:1});
		_timelineInitial.to('.contract .hand', 5, {rotation:60});
		_timelineInitial.to('.contract .prod1', _normDuration, {opacity:0}, '-=2.5');
		_timelineInitial.to('.contract .prod2', _normDuration, {opacity:1}, '-=2.5');
		_timelineInitial.to('.contract .hand', 5, {rotation:90});
		_timelineInitial.to('.contract .prod2', _normDuration, {opacity:0}, '-=2.5');
		_timelineInitial.to('.contract .prod3', _normDuration, {opacity:1}, '-=2.5');
		_timelineInitial.to('.contract .prod3', _normDuration, {opacity:0}, '+=0.5');
		_timelineInitial.to('.contract .prod1', _normDuration, {opacity:1}, '-=0.5');
		_timelineInitial.to('.contract .hand', _normDuration, {rotation:30}, '-=1');
		TweenMax.from('.contract .copy', _normDuration, {opacity:0, top:'-100', onComplete:function(){
			_timelineInitial.play();
		}});
	}
	
	function expandPanel()
	{
		_timelineSlider.to('.midcontents .girl1', _fastDuration, {opacity:1});
		_timelineSlider.to('.ccontainer .hand', _fastDuration, {rotation:30}, '-=0.5');
		_timelineSlider.to('.midcontents .girl2', _fastDuration, {opacity:1});
		_timelineSlider.to(['.ccontainer2 .hand', '.ccontainer3 .hand'], _fastDuration, {rotation:60}, '-=0.5');
		_timelineSlider.to('.midcontents .girl3', _fastDuration, {opacity:1});
		_timelineSlider.to('.ccontainer3 .hand', _fastDuration, {rotation:90}, '-=0.5');
		_timelineSlider.pause();
		$('#slider').slider({
			range: false,
			min: 0,
			max: 96.6,
			step: .1,
			slide: function(event, ui){
				_timelineSlider.progress(ui.value/100).pause();
			}
		});
		
		$('.ccontainer .clock').click(function(){
			if(_percentageSlider < 24){
				_currSlider = _prevSlider = 0;
			}
			_currSlider = parseInt($(this).parent().index() + 1);
			switch(_currSlider){
				case 1:
					ADTECH.event('Clock clicked 5 mins');
					break;
				case 2:
					ADTECH.event('Clock clicked 10 mins');
					break;
				case 3:
					ADTECH.event('Clock clicked 15 mins');
					break;
			}
			if(_currSlider > _prevSlider){
				_timelineSlider.play();
			} else {
				_timelineSlider.reverse();
			}
			_prevSlider = _currSlider;
		});
	}
	
	function updateSlider()
	{
		_percentageSlider = _timelineSlider.progress() * 100;
		$('#slider').slider('value', _percentageSlider);
		
		_movingSlider = true;
		$('.ccontainer .clock, .ccontainer p').addClass('black');
		switch(true){
			case _percentageSlider < 4:
				_prevSlider = 0;
				_movingSlider = false;
				break;
			case _percentageSlider > 24 && _percentageSlider < 28:
				var elem = $('.ccontainer1');
				_prevSlider = 1;
				_movingSlider = false;
				break;
			case _percentageSlider > 60 && _percentageSlider < 64:
				var elem = $('.ccontainer2');
				_prevSlider = 2;
				_movingSlider = false;
				break;
			case _percentageSlider > 96:
				var elem = $('.ccontainer3');
				_prevSlider = 3;
				_movingSlider = false;
				break;
		}
		$(elem).find('.clock, p').removeClass('black');
		
		if(_currSlider == 1){
			if(_percentageSlider > 24 && _percentageSlider < 26){
				_timelineSlider.pause();
			}	
		}
		if(_currSlider == 2){
			if(_percentageSlider > 60 && _percentageSlider < 62){
				_timelineSlider.pause();
			}	
		}
		if(_currSlider == 3){
			if(_percentageSlider > 96.5){
				_timelineSlider.pause();
			}	
		}
		
		setInfosAndProducts();
	}
	
	function setCarousel(durZero)
	{
		var sliderHeight = $('.carousel').height();
		TweenMax.to('.carousel ul', (durZero ? 0 : _fastDuration), {css:{'top':-(sliderHeight * _carouselId)}});
		setCarouselArrows();
	}
	
	function setCarouselArrows()
	{
		$('.arrow').removeClass('inactive');
		if(_prevSlider == 1 || _carouselId == 0){
			$('.arrow.up').addClass('inactive');
		}
		var minus = _prevSlider == 2 ? 3 : 1;
		if(_prevSlider == 1 || _carouselId == _carouselTotal - minus){
			$('.arrow.down').addClass('inactive');
		}
	}
	
	function remCarouselProductClass()
	{
		$('.carousel .prod').removeClass('active');
	}
	
	function setInfosAndProducts()
	{
		if(_thisInit) return;
		TweenMax.to('.midcontents .info', 0, {autoAlpha:0});
		TweenMax.to('.midcontents .products', _fastDuration, {right:-300});
		if(!_movingSlider){
			TweenMax.to('.midcontents .info'+ _prevSlider, _fastDuration, {autoAlpha:1});
			TweenMax.to('.midcontents .product', 0, {autoAlpha:0});
			TweenMax.to('.midcontents .product'+ parseInt(_prevSlider == 0 ? 0 : 1), 0, {autoAlpha:1});
			TweenMax.to('.midcontents .products', _fastDuration, {right:0});
			
			_carouselId = _prevSlider - 1;
			setCarousel(true);
			remCarouselProductClass();
			setMidInfo(true);
			
			if(_percentageSlider < 24){
				$('.clocks .zeromin').show();
			} else {
				$('.clocks .zeromin').hide();
			}
		}
	}
	
	function setMidInfo(reset)
	{
		var elem = $('.midinfo');
		var resposx = -650;
		if(reset){
			TweenMax.to(elem, _fastDuration, {css:{'left':resposx}});
		} else {
			TweenMax.to(elem, _fastDuration, {css:{'left':resposx}, onComplete:function(){
				$.each(_productData, function(i){
					$(elem).find('.image').removeClass('prod'+ (i + 1));
				});
				$(elem).find('.image').addClass('prod'+ _productId);
				$(elem).find('.title').html(_productData[_productId - 1]['title']);
				$(elem).find('.bodycopy').html(_productData[_productId - 1]['bodycopy']);
				$(elem).find('.price span').html(_productData[_productId - 1]['price']);
				TweenMax.to(elem, _fastDuration, {css:{'left':0}});
			}});
		}
	}
	
	function adtechContract()
	{
		ADTECH.contract();
		_timelineInitial.restart();
		$('.contract').fadeIn();
	}
	
	function adtechExpand()
	{
		ADTECH.expand();
		_timelineExpand.play();
		$('.contract').fadeOut();
	}
	
	function registerExits()
	{
		ADTECH.click('Product_Exit_1');
		ADTECH.click('Product_Exit_2');
		ADTECH.click('Product_Exit_3');
		ADTECH.click('Product_Exit_4');
		ADTECH.click('Product_Exit_5');
		ADTECH.click('Product_Exit_6');
		ADTECH.click('Product_Exit_7');
		ADTECH.click('Product_Exit_8');
		ADTECH.click('Product_Exit_9');
		ADTECH.click('Product_Exit_10');
		ADTECH.click('Product_Exit_11');
		ADTECH.click('Product_Exit_12');
		ADTECH.click('Product_Exit_13');
		ADTECH.click('Product_Exit_14');
	}

})(jQuery, window);

