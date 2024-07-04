/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){
	
	init();
	function init()
	{
		var cookie = $.cookie('follifollie-cookie');
		var itemsMax = itemsMin = 0;
		_this.id.hash = window.parent.location.hash;
		if((_this.id.hash !== '' && base64Decode(_this.id.hash.replace('#', '')).split('/').length < 5) || (ltIE10() && cookie == undefined)){
			
			// error with hash url
			var message = '';
			if(ltIE10()){
				message = "If you are experiencing issues with your IE9 browser, please refresh and try again. Alternatively, use either Chrome or Firefox.";
			} else {
				message = "This wasn't created on desktop, click below to scrapbook your own summer";
			}
			$('#contents').append(
				'<div class="panel-error-hash messagepanel">'+
					'<div class="panel">'+
						'<h4>OOPS...</h4>'+
						'<div class="col col1"><h5></h5>'+ message +'</div>'+
						'<div class="absolute cursor btnContinue">CONTINUE</div>'+
					'</div>'+
				'</div>'
			);
			$('.panel-error-hash').find('.btnContinue').click(function(){
				window.parent.location.hash = '';
				$('.panel-error-hash').remove();
				init();
			});
			
		} else {
			
			$.each(_this.obj.main.balloon.items.products, function(i, obj){
				itemsMin+= obj.limitMin;
				itemsMax+= obj.limitMax;
			});
			_this.obj.main.balloon.panel.itemsMin = parseInt(itemsMin);
			_this.obj.main.balloon.panel.itemsMax = parseInt(itemsMax);
			
			if(_this.id.hash !== ''){
				getMoodboard();
				// tracking
				_gaTrackingPageview(_this.urlpath + window.parent.location.hash);
			} else {
				getInitial();
				// tracking
				_gaTrackingPageview(_this.urlpath);
			}
			
		}
		getFooter();
		
		if(ltIE10()){
			$.cookie('follifollie-cookie', 1, {expires:1});
		}
	}
	
	function getInitial()
	{
		getIntro();
		getInfo();
		getRestart();
		getError();
		getTimeup()
	}
	
	function getIntro()
	{
		var html = '';
		for(var i = 1; i <= _this.obj.intro.images; i++){
			html+= '<img src="images/intro_'+ i +'.png" class="absolute takeout img'+ i +'" />';
		}
		$('#contents').append(
			'<div class="panel-intro">'+
				'<div class="absolute unselectable takeout copy">What\'s your summer personality?<br />Find out with Folli Follie</div>'+
				html+
				'<div class="absolute unselectable head1">Summer</div>'+
				'<div class="absolute unselectable head2">State of mind</div>'+
				'<div class="absolute takeout cursor btnEnter">PLAY</div>'+
				//'<img src="images/btn_win.png" class="absolute takeout cursor" id="btnWin" />'+
			'</div>'
		);
		
		$.each(_this.obj.intro.anim, function(i, obj){
			_this.obj.intro.tween.from($('.panel-intro').find(_this.obj.intro.anim[i].elem), _this.animDurationFast, {css:_this.obj.intro.anim[i].obj});
		});
		_this.obj.intro.tween.play();
		
		TweenMax.from($('.panel-intro').find('.head1'), _this.animDurationFast, {delay:4.0, css:{'opacity':0, scale:2}});
		TweenMax.from($('.panel-intro').find('.head2'), _this.animDurationFast, {delay:4.5, css:{'opacity':0, scale:2}});
		
		// win button
		$('.panel-intro').find('#btnWin').delay(3500).fadeIn();
		TweenMax.from($('.panel-intro').find('#btnWin'), _this.animDurationFast, {delay:3.5, css:{scale:0.5}});
		$('#btnWin').click(function(){
			_this.gotoWin = true;
			// tracking
			_gaTrackingEvent('Clicked', 'Intro Win');
			getMoodboard();
		});
		
		$('.panel-intro .btnEnter').click(function(){
			_this.obj.intro.tween.timeScale(2);
			_this.obj.intro.tween.reverse();
			TweenMax.delayedCall(2.5, function(){
				getInfo();
			});
			
			// tracking
			_gaTrackingEvent('Clicked', 'Intro button enter', 1, true);
		});
		
		// tracking
		_gaTrackingEvent('Display panel', 'Intro');
	}
	
	function getInfo()
	{
		var elem = $('.panel-info');
		if($(elem).length < 1){
			$('#contents').append(
				'<div class="panel-info messagepanel">'+
					'<div class="panel">'+
						'<h4>HOW IT WORKS...</h4>'+
						'<div class="col col1"><h5>Tick Tock...</h5>To reveal your summer character you\'ve got to work fast - you have 180 seconds to scrapbook your ideal summer, and three categories to choose from</div>'+
						'<div class="col col2"><h5>Take your pick</h5>Start with your backdrops - choose three to move on. Next, it\'s travel and style (select at least five). Pick three or more accessories to finish</div>'+
						'<div class="col col3"><h5>The Trick...</h5>Click an image for a closer look, double-click to save it or click on another to move on. Remember, the clock is ticking...</div>'+
						'<div class="absolute cursor btnClose"><p>Got it!</p></div>'+
						'<div class="absolute cursor btnPlay">PLAY NOW</div>'+
					'</div>'+
				'</div>'
			);
			$('.panel-info').find('.btnPlay, .btnClose').click(function(){
				getInfo();
				if(_this.init){
					getMain();
					getTimer();
				} else {
					playTimer();
				}
				_this.init = false;
				
				// tracking
				if($(this).hasClass('btnPlay')){
					_gaTrackingEvent('Clicked', 'Info button play');
				} else {
					_gaTrackingEvent('Clicked', 'Info button close');
				}
			});
		} else {
			if($(elem).is(':hidden')){
				if(TweenMax.isTweening($(_this.obj.timer.elem).find('div')) || _this.init){
					pauseTimer();
					panelReveal(elem, true);
				}
				if(!_this.init){
					// tracking
					_gaTrackingEvent('Clicked', 'Info button icon');
				}
			} else {
				panelReveal(elem, false);
			}
		}
	}
	
	function getRestart()
	{
		var elem = $('.panel-restart');
		if($(elem).length < 1){
			$('#contents').append(
				'<div class="panel-restart messagepanel">'+
					'<div class="panel">'+
						'<h4>RESTART...</h4>'+
						'<div class="col col1"><h5></h5>Are you sure you want to start again. If so click the link below and you can scrapbook your summer again</div>'+
						'<div class="absolute cursor btnClose"><p>Carry on playing</p></div>'+
						'<div class="absolute cursor btnRestart">YES PLEASE</div>'+
					'</div>'+
				'</div>'
			);
			$('.panel-restart').find('.btnClose').click(function(){
				playTimer();
				getRestart();
				// tracking
				_gaTrackingEvent('Clicked', 'Restart button close');
			});
			$('.panel-restart').find('.btnRestart').click(function(){
				_this.obj.main.balloon.reset = true;
				removeBalloons();
				getRestart();
				// tracking
				_gaTrackingEvent('Clicked', 'Restart button');
			});
		} else {
			if($(elem).is(':hidden')){
				if(TweenMax.isTweening($(_this.obj.timer.elem).find('div')) || _this.init){
					pauseTimer();
					resetBalloons();
					panelReveal(elem, true);
				}
				// tracking
				_gaTrackingEvent('Clicked', 'Restart button icon');
			} else {
				panelReveal(elem, false);
			}
		}
	}
	
	function getError()
	{
		var elem = $('.panel-error');
		if($(elem).length < 1){
			$('#contents').append(
				'<div class="panel-error messagepanel">'+
					'<div class="panel">'+
						'<h4>OOPS...</h4>'+
						'<div class="col col1"><h5></h5>You haven\'t chosen enough images or something has gone wrong. You\'ll have to start again.</div>'+
						'<div class="absolute cursor btnClose"><p>Carry on playing</p></div>'+
						'<div class="absolute cursor btnRestart">TRY AGAIN</div>'+
					'</div>'+
				'</div>'
			);
			$('.panel-error').find('.btnRestart, .btnClose').click(function(){
				_this.obj.main.balloon.reset = true;
				removeBalloons();
				getError();
				
				// tracking
				if($(this).hasClass('btnRestart')){
					_gaTrackingEvent('Clicked', 'Error button restart');
				} else {
					_gaTrackingEvent('Clicked', 'Error button close');
				}
			});
		} else {
			if($(elem).is(':hidden')){
				resetBalloons();
				pauseTimer();
				panelReveal(elem, true);
				// tracking
				_gaTrackingEvent('Timeout', 'Rate in secs', parseInt(_this.obj.timer.duration + timeCompletionTotal()));
				_gaTrackingEvent('Timeout', parseInt(_this.obj.timer.duration + timeCompletionTotal()) +' secs');
				_gaTrackingEvent('Timeout', 'Stage'+ (_this.obj.main.balloon.items.id + 1) +' '+ parseInt(_this.obj.timer.duration + timeCompletionTotal()) +' secs');
			} else {
				panelReveal(elem, false);
			}
		}
	}
	
	function getTimeup()
	{
		var elem = $('.panel-timeup');
		if($(elem).length < 1){
			$('#contents').append(
				'<div class="panel-timeup messagepanel">'+
					'<div class="panel">'+
						'<h4>TIME\'S UP...</h4>'+
						'<div class="col col1"><h5></h5>That\'s it! In just a few moments your moodboard - and your summer state of mind – will be revealed</div>'+
						'<div class="absolute cursor btnView">VIEW NOW</div>'+
					'</div>'+
				'</div>'
			);
			$('.panel-timeup').find('.btnView').click(function(){
				getTimeup();
				// tracking
				_gaTrackingEvent('Clicked', 'Timeup button view');
			});
		} else {
			if($(elem).is(':hidden')){
				_this.obj.timer.endgame = true;
				endTimer();
				panelReveal(elem, true);
				timeCompletion();
				// tracking
				_gaTrackingEvent('Completion', 'Rate in secs', _this.obj.timer.timeCompletion);
				_gaTrackingEvent('Completion', _this.obj.timer.timeCompletion +' secs');
				
			} else {
				panelReveal(elem, false);
				
				// set url
				var hashUrl = base64Encode(_this.obj.main.balloon.items.url + _this.obj.main.balloon.items.categoryOutcome +'/'+ (isMobile.any() ? 'mobile' : 'others'));
				window.parent.location.hash = hashUrl;
				// tracking
				_gaTrackingEvent('Moodboard url', hashUrl);
				
				// end task of the game
				removeBalloons();
				var balloonsPanel = $(_this.obj.main.elem).find('.balloonsPanel');
				TweenMax.to($(balloonsPanel), _this.animDurationNorm, {delay:1, css:{'bottom':-($(balloonsPanel).css('height').replace('px', '') + 10)}, onComplete:function(){
					// set elements
					$('.icons-container, .messagepanel').remove();
					TweenMax.to($('.panel-intro .head1'), _this.animDurationFast, {css:{'opacity':0, x:'-200'}, onComplete:function(){
						$('.panel-intro').remove();
						$(_this.obj.main.elem).empty();
					}});
					TweenMax.to($('.panel-intro .head2'), _this.animDurationFast, {css:{'opacity':0, x:'+200'}, onComplete:getMoodboard});
				}});
			}
		}
	}
	
	function panelReveal(elem, show)
	{
		if(show){
			TweenMax.from($(elem), _this.animDurationFast, {css:{y:'+20'}});
			$(elem).fadeIn();
		} else {
			$(elem).fadeOut();
		}
	}
	
	function topIcons()
	{
		var elem = $('.icons-container');
		if($(elem).is(':hidden'))
			$(elem).fadeIn();
		else
			$(elem).fadeOut();
	}
	
	// main
	function getMain()
	{
		// reset values
		if(_this.obj.main.balloon.reset){
			_this.obj.main.balloon.reset = false;
			
			// empty all arrays
			_this.obj.main.balloon.items.results = [];
			_this.obj.main.balloon.items.selections = [];
			_this.obj.main.balloon.items.categoryValues = [];
			_this.obj.main.balloon.items.categoryResults = [];
			$.each(_this.obj.main.balloon.items.products, function(i, arr){
				arr.arrayValues = [];
				arr.arrayResults = [];
			});
			
			// set original values
			_this.obj.main.height = 650;
			_this.obj.main.balloon.items.id = 0;
			$(_this.obj.main.elem).find('.balloonsPanel').remove();
		}
		
		// create new
		$.each(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].contents, function(i, obj){
			_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayValues.push(i + 1);
		});
		if($('.balloons').length < 1){
			$(_this.obj.main.elem).empty().html('<div class="balloons"></div>');
			// icons
			$('#contents').append('<div class="icons-container"><div class="icon iconRestart"></div><div class="icon iconInfo"></div><!--div class="icon iconWin"></div--><div class="clear-fix"></div></div>');
			$('.icons-container .iconRestart').click(getRestart);
			$('.icons-container .iconInfo').click(getInfo);
			
			// win button
			$('.icons-container .iconWin').click(function(){
				_this.gotoWin = true;
				// tracking
				_gaTrackingEvent('Clicked', 'Icon Win');
				pauseTimer();
				getMoodboard();
			});
		}
		
		// console.log('--- getMain()');
		// console.log(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayValues.length);
		// console.log(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayValues);
		
		getBalloons();
	}
	
	function getBalloons()
	{
		var html = '';
		$.each(arrayShuffle(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayValues), function(i, obj){
			html+= '<div class="item" id="i'+ obj +'" style="background:url(images/balloons'+ _this.obj.main.balloon.items.id +'/b_'+ obj +'.png) no-repeat center center; background-color:#fff; background-size:contain;"></div>';
		});
		
		$(_this.obj.main.elem).find('.balloons').empty().html('<div class="itembg"></div>'+ html);
		
		$.each($(_this.obj.main.elem).find('.balloons .item'), function(i, obj){
			var id = $(obj).attr('id').replace('i', '');
			var randsize = randomNum(40, 110);
			TweenMax.to($(obj), 0, {css:{'width':randsize, 'height':randsize}});
			$(obj).css({'top':randomNum(0, _this.obj.main.height - $(obj).height())});
			$(obj).css({'left':randomNum(0, _this.obj.main.width - $(obj).width())});
			
			_this.obj.main.balloon.scale[id] = {'width':randsize, 'height':randsize};
			_this.obj.main.balloon.tween[id] = TweenMax.to($(obj), randomNum(8, 16), {css:setBalloonPosition($(obj)), ease:Linear.EaseNone, onComplete:setBalloonAnimation, onCompleteParams:[id]});
			
			TweenMax.from($(obj), _this.animDurationFast, {css:{'opacity':0}, delay:i/20});
			
			// select item
			$(obj).click(function(){
				
				_this.id.curr = $(this).attr('id').replace('i', '');
				
				if(!_this.obj.main.balloon.scaling && _this.id.curr != _this.id.prev){
					_this.obj.main.balloon.scaling = true;
					
					resetBalloons();
					setBalloonButton($(this));
					$(this).css('z-index', 1).addClass('active');
					_this.obj.main.balloon.tween[_this.id.curr].pause();
					
					var posx = $(this).css('left').replace('px', '');
					var posy = $(this).css('top').replace('px', '');
					var size = _this.obj.main.balloon.size;
					
					if(posx > (_this.obj.main.width - size) && posy > (_this.obj.main.height - size)){
						TweenMax.to($(this), _this.animDurationNorm, {css:{'width':size, 'height':size, 'left':(_this.obj.main.width - size), 'top':(_this.obj.main.height - size)}});
					} else if(posx > (_this.obj.main.width - size)){
						TweenMax.to($(this), _this.animDurationNorm, {css:{'width':size, 'height':size, 'left':(_this.obj.main.width - size)}});
					} else if(posy > (_this.obj.main.height - size)){
						TweenMax.to($(this), _this.animDurationNorm, {css:{'width':size, 'height':size, 'top':(_this.obj.main.height - size)}});
					} else {
						TweenMax.to($(this), _this.animDurationNorm, {css:{'width':size, 'height':size}});
					}
					
					// tracking
					if(_this.obj.main.balloon.items.id < 1){
						_gaTrackingEvent('Item clicked', 'Stage'+ (_this.obj.main.balloon.items.id + 1) +' item'+ _this.id.curr);
					} else {
						var category = _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].contents[_this.id.curr - 1].cat;
						_gaTrackingEvent('Item clicked', 'Stage'+ (_this.obj.main.balloon.items.id + 1) +' item'+ _this.id.curr +' - '+ _this.obj.main.balloon.items.categoryTitles[category - 1].title);
					}
					
					TweenMax.delayedCall(_this.animDurationNorm, function(){ 
						_this.obj.main.balloon.scaling = false;
					});
					
					if($(obj).hasClass('transparent'))
						TweenMax.to($(this).find('.bimg'), _this.animDurationNorm, {css:{'opacity':1}});
					
					_this.id.prev = _this.id.curr;
				}
			});
		});
		
		// events
		$(_this.obj.main.elem).find('.balloons .itembg').click(function(){
			if(!_this.obj.main.balloon.scaling && _this.id.prev != null)
				resetBalloons();
		});
		
		// console.log('--- getBalloons()');
	}
	
	function newBalloons()
	{
		if(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.products.length - 1].arrayResults.length != _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.products.length - 1].limitMax){
			_this.obj.main.balloon.items.id++;
			removeBalloons();
			timeCompletion();
		}
	}
	
	function removeBalloons()
	{
		if(!_this.obj.timer.endgame){
			if(_this.obj.timer.complete && _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.products.length - 1].arrayResults.length >= _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.products.length - 1].limitMin){
				getEndResults(); 
				return;
			}
			restartTimer();
		}
			
		$.each($(_this.obj.main.elem).find('.balloons .item'), function(i, obj){
			TweenMax.to($(obj), _this.animDurationFast, {css:{'opacity':0}, delay:i/20, onComplete:function(){
				$(obj).remove();
				// clear all
				if($(_this.obj.main.elem).find('.balloons .item').length < 5 && !_this.obj.timer.endgame)
					getMain();
			}});
		});
		
		_this.id.prev = null;
		
		// console.log('--- removeBalloons()');
	}
	
	function resetBalloons()
	{
		setBalloonOpacity();
		
		$.each($(_this.obj.main.elem).find('.balloons .item'), function(i, obj){
			var id = $(obj).attr('id').replace('i', '');
			if(_this.id.prev == id){
				$(obj).css('z-index', '').removeClass('active');
				$(obj).find('.bbtn').remove();
				
				var posx = $(obj).css('left').replace('px', '');
				var posy = $(obj).css('top').replace('px', '');
				TweenMax.to($(obj), _this.animDurationNorm, {
					css:{
						// 'opacity':$(obj).hasClass('transparent') ? 0.5 : 1, 
						'width':_this.obj.main.balloon.scale[id].width, 
						'height':_this.obj.main.balloon.scale[id].height,
						'left':(parseInt(posx) + parseInt(_this.obj.main.balloon.scale[id].width / 2)), 
						'top':(parseInt(posy) + parseInt(_this.obj.main.balloon.scale[id].height / 2))
					}, 
					onComplete:setBalloonAnimation, 
					onCompleteParams:[id]
				});
				if($(obj).hasClass('transparent'))
					TweenMax.to($(obj).find('.bimg'), _this.animDurationNorm, {css:{'opacity':0}});
				
				_this.id.prev = null;
			}
		});
		
		// console.log('--- resetBalloons()');
	}
	
	function setBalloonOpacity()
	{
		if(_this.obj.main.balloon.scaling){
			$.each($(_this.obj.main.elem).find('.balloons .item'), function(i, obj){
				$(obj).css({'opacity':0.5});
				if(_this.id.curr == $(obj).attr('id').replace('i', ''))
					$(obj).css({'opacity':1});
			});
		} else {
			$(_this.obj.main.elem).find('.balloons .item').css({'opacity':1});
		}
	}
	
	function setBalloonButton(obj)
	{
		TweenMax.delayedCall(_this.animDurationNorm, function(){
			$(obj).append('<img src="images/balloon_btn.png" class="bbtn" />');
			$(obj).find('.bbtn').click(function(){
				_this.obj.main.balloon.id = parseInt($(obj).attr('id').replace('i', ''));
				
				_this.obj.main.balloon.items.selections.push(_this.obj.main.balloon.id);
				_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayResults.push(_this.obj.main.balloon.id);
				
				removeArrayItem(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayValues, _this.obj.main.balloon.id);
				// console.log('--- setBalloonButton()');
				
				$(this).remove();
				setBalloonOpacity();
				setBalloonPanelSelection();
			});
		});
	}
	
	function setBalloonPanelSelection()
	{
		var posx;
		var limit = _this.obj.main.balloon.panel.itemsMax;
		var resultsLength = _this.obj.main.balloon.items.selections.length;
		
		if($(_this.obj.main.elem).find('.balloonsPanel').length < 1){
			var html = '';
			for(var i = 1; i <= limit ; i++){
				html+= '<li class="item'+ i +'"></li>';
			}
			$(_this.obj.main.elem).append(
				'<div class="balloonsPanel">'+
					'<div class="carousel">'+
						'<ul>'+ html +'<div class="clear-fix"></div></ul>'+
						'<div class="panelbg"></div>'+
					'</div>'+
					'<img src="images/balloon_panel_arrow_left.png" class="arrow aleft" /><img src="images/balloon_panel_arrow_right.png" class="arrow aright" />'+
				'</div>'
			);
			TweenMax.to($(_this.obj.main.elem).find('.balloonsPanel'), _this.animDurationNorm, {css:{'bottom':0}});
			_this.obj.main.height = _this.obj.main.height - $(_this.obj.main.elem).find('.balloonsPanel').height();
			
			// events
			$(_this.obj.main.elem).find('.balloonsPanel .aleft, .balloonsPanel .aright').hover(
				function(){
					if($(this).hasClass('aleft'))
						$(this).attr('src', 'images/balloon_panel_arrow_left_o.png');
					else
						$(this).attr('src', 'images/balloon_panel_arrow_right_o.png');
				},
				function(){
					if($(this).hasClass('aleft'))
						$(this).attr('src', 'images/balloon_panel_arrow_left.png');
					else
						$(this).attr('src', 'images/balloon_panel_arrow_right.png');
				}
			).click(function(){
				if($(this).hasClass('aleft')){
					if(_this.obj.main.balloon.panel.id > 0)
						_this.obj.main.balloon.panel.id--;
				} else {
					if(_this.obj.main.balloon.panel.id < resultsLength + 1)
						_this.obj.main.balloon.panel.id++;
				}
				
				setBalloonPanelPosition();
			});
		}
		
		if(resultsLength < 2 || resultsLength == (limit / 2) + 1){
			posx = _this.obj.main.balloon.panel.itemsPosX;
		} else {
			if(resultsLength > limit / 2)
				posx = _this.obj.main.balloon.panel.itemsPosX + (100 * ((resultsLength - 1) - limit / 2));
			else
				posx = _this.obj.main.balloon.panel.itemsPosX + (100 * (resultsLength - 1));
		}
		
		// remove mouse event
		if(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayResults.length == _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].limitMax)
			$(_this.obj.main.elem).find('.balloons .item, .balloons .itembg').addClass('void');
		
		// place in panel
		TweenMax.to($(_this.obj.main.elem).find('.balloons #i'+ _this.obj.main.balloon.id), _this.animDurationNorm, {
			css:{'top':556, 'left':posx, 'width':78, 'height':78}, 
			onComplete:function(){
				$(_this.obj.main.elem).find('.balloonsPanel .item'+ resultsLength).css({'background':'url(images/balloons'+ _this.obj.main.balloon.items.id +'/b_'+ _this.obj.main.balloon.id +'.png) no-repeat center center', 'background-size':'contain'});
				$(_this.obj.main.elem).find('.balloons #i'+ _this.obj.main.balloon.id).remove();
				if(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayResults.length == _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].limitMax)
					newBalloons();
			}
		});
		
		if(resultsLength > limit / 2){
			_this.obj.main.balloon.panel.id = 1;
			setBalloonPanelPosition();
		}
		
		if(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.products.length - 1].arrayResults.length == _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.products.length - 1].limitMax)
			getEndResults();
		
		// tracking
		if(_this.obj.main.balloon.items.id < 1){
			_gaTrackingEvent('Item selected', 'Stage'+ (_this.obj.main.balloon.items.id + 1) +' item'+ _this.obj.main.balloon.id);
		} else {
			var category = _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].contents[_this.obj.main.balloon.id - 1].cat;
			_gaTrackingEvent('Item selected', 'Stage'+ (_this.obj.main.balloon.items.id + 1) +' item'+ _this.obj.main.balloon.id +' - '+ _this.obj.main.balloon.items.categoryTitles[category - 1].title);
		}
		// console.log('--- setBalloonPanelSelection()');
	}
	
	function setBalloonPanelPosition()
	{
		$(_this.obj.main.elem).find('.balloonsPanel .arrow').hide();
		TweenMax.to($(_this.obj.main.elem).find('.balloonsPanel .carousel'), _this.animDurationNorm, {css:{'left':-(_this.obj.main.width * _this.obj.main.balloon.panel.id)}, 
			onComplete:function(){
				if(_this.obj.main.balloon.panel.id > 0)
					$(_this.obj.main.elem).find('.balloonsPanel .aleft').delay(500).show();
				else
					$(_this.obj.main.elem).find('.balloonsPanel .aright').delay(500).show();
			}
		});
		
		// console.log('--- setBalloonPanelPosition()');
	}
	
	function setBalloonAnimation(index)
	{
		$.each($(_this.obj.main.elem).find('.balloons .item'), function(i, obj){
			var id = $(obj).attr('id').replace('i', '');
			if(index == id) _this.obj.main.balloon.tween[id] = TweenMax.to($(obj), randomNum(8, 16), {css:setBalloonPosition($(obj)), ease:Linear.EaseNone, onComplete:setBalloonAnimation, onCompleteParams:[id]});
		});
		
		// console.log('--- setBalloonAnimation()');
	}
	
	function setBalloonPosition(obj)
	{
		var posx;
		var posy;
		var rand = randomNum(1, 4);
		var size = $(obj).width();
		var padd = 4;
		
		rand = reshuffleBalloonPosition(_this.obj.main.balloon.posPrev[obj.attr('id').replace('i', '')]);
		
		switch(rand){
			case 1://t
				posx = randomNum(padd, (_this.obj.main.width - size) - padd);
				posy = padd;
				break;
			case 2://r
				posx = (_this.obj.main.width - size) - padd;
				posy = randomNum(padd, (_this.obj.main.height - size) - padd);
				break;
			case 3://b
				posx = randomNum(padd, (_this.obj.main.width - size) - padd);
				posy = (_this.obj.main.height - size) - padd;
				break;
			case 4://l
				posx = padd;
				posy = randomNum(padd, (_this.obj.main.height - size) - padd);
				break;
		}
		
		_this.obj.main.balloon.posPrev[obj.attr('id').replace('i', '')] = rand;
		
		return {'top':posy, 'left':posx};
	}
	
	function reshuffleBalloonPosition(id)
	{
		var arrNumbers = [];
		for(var i = 1; i <= 4; i++){
			if(i != id){
				arrNumbers.push(i);
			}
		}
		
		return arrayShuffle(arrNumbers)[0];
	}
	
	// results
	function getEndResults()
	{
		// console.log('Results:');
		// console.log(_this.obj.main.balloon.items.selections);
		
		$.each(_this.obj.main.balloon.items.products, function(i, arr){
			_this.obj.main.balloon.items.results.push(arr.arrayResults);
		});
		
		var url = '';
		$.each(_this.obj.main.balloon.items.results, function(index, arr){
			$.each(arr, function(i, num){
				url+= num;
				if(i < arr.length - 1)
					url+= '-';
				if(index > 0)
					_this.obj.main.balloon.items.categoryValues.push(_this.obj.main.balloon.items.products[index].contents[num - 1].cat);
			});
			url+= '/';
		});
		_this.obj.main.balloon.items.url = url;
		
		// console.log(_this.obj.main.balloon.items.results);
		// console.log(_this.obj.main.balloon.items.url);
		// console.log(_this.obj.main.balloon.items.categoryValues);
		
		for (var i = 1; i <= _this.obj.main.balloon.items.categoryTotal; i++) {
			_this.obj.main.balloon.items.categoryResults.push({
				'group': i,
				'value': arrayCountValues(i, _this.obj.main.balloon.items.categoryValues)
			});
        }
        
        _this.obj.main.balloon.items.categoryResults.sort(arraySortDescending);
        // console.log(_this.obj.main.balloon.items.categoryResults);
        
        // get results by group.
        // outcome should have a max of 3 the same values.
        var groupIndex;
        if(_this.obj.main.balloon.items.categoryResults[0].value == _this.obj.main.balloon.items.categoryResults[1].value && _this.obj.main.balloon.items.categoryResults[0].value == _this.obj.main.balloon.items.categoryResults[2].value){
            groupIndex = Math.ceil(Math.random() * 3) - 1;
        } else if(_this.obj.main.balloon.items.categoryResults[0].value == _this.obj.main.balloon.items.categoryResults[1].value){
            groupIndex = Math.ceil(Math.random() * 2) - 1;
        } else {
        	groupIndex = 0;
        }
        
        _this.obj.main.balloon.items.categoryOutcome = _this.obj.main.balloon.items.categoryResults[groupIndex].group;
        // console.log('User result category: '+ _this.obj.main.balloon.items.categoryOutcome);
        
        getTimeup();
	}
	
	function getHashUrl()
	{
		var hashUrl = window.parent.location.hash.replace('#', '');
		return base64Decode(hashUrl).split('/');
	}
	
	function getMoodboardImages()
	{
		var hashUrlArr = getHashUrl();
		var backgrounds = locations = products = '';
		$.each(hashUrlArr[0].split('-'), function(i, num){
			backgrounds+= '<img src="images/balloons0/b_'+ parseInt(num) +'_res.png" class="absolute" style="top:'+ _this.obj.main.balloon.items.products[0].moodboard[0].pos[i].y +'px; left:'+ _this.obj.main.balloon.items.products[0].moodboard[0].pos[i].x +'px; width:'+ _this.obj.main.balloon.items.products[0].moodboard[0].pos[i].s +'px; height:'+ _this.obj.main.balloon.items.products[0].moodboard[0].pos[i].s +'px;" />';
		});
		var loclength = hashUrlArr[1].split('-').length - _this.obj.main.balloon.items.products[1].limitMin;
		$.each(hashUrlArr[1].split('-'), function(i, num){
			locations+= '<img src="images/balloons1/b_'+ parseInt(num) +'.png" class="absolute background" style="top:'+ _this.obj.main.balloon.items.products[1].moodboard[loclength].pos[i].y +'px; left:'+ _this.obj.main.balloon.items.products[1].moodboard[loclength].pos[i].x +'px; width:'+ _this.obj.main.balloon.items.products[1].moodboard[loclength].pos[i].s +'px; height:'+ _this.obj.main.balloon.items.products[1].moodboard[loclength].pos[i].s +'px;" />';
		});
		var prolength = hashUrlArr[2].split('-').length - _this.obj.main.balloon.items.products[2].limitMin;
		$.each(hashUrlArr[2].split('-'), function(i, num){
			var top = _this.obj.main.balloon.items.products[2].moodboard[prolength].pos[i].y;
			var left = _this.obj.main.balloon.items.products[2].moodboard[prolength].pos[i].x;
			var size = _this.obj.main.balloon.items.products[2].moodboard[prolength].pos[i].s;
			products+= '<div class="absolute products" style="background:url(images/balloons2/b_'+ parseInt(num) +'.png) no-repeat; background-size:cover; top:'+ top +'px; left:'+ left +'px; width:300px; height:300px;">';
				products+= '<img src="images/btn_circle.png" id="cir'+ i +'" class="absolute cursor btnCircle" style="top:'+ _this.obj.main.balloon.items.products[2].contents[num - 1].pos[0].y +'px; left:'+ _this.obj.main.balloon.items.products[2].contents[num - 1].pos[0].x +'px; z-index:'+ num +'" />';
				products+= '<div id="cap'+ i +'" class="absolute capholder" style="top:'+ (_this.obj.main.balloon.items.products[2].contents[num - 1].pos[0].y) +'px; left:'+ ((_this.obj.main.balloon.items.products[2].contents[num - 1].pos[0].x - 120) + 25) +'px; z-index:'+ (num + 1) +'">';
					products+= '<div class="caption"><p>'+ _this.obj.main.balloon.items.products[2].contents[num - 1].title +'</p><div class="cursor btnBuynow" id="'+ (num - 1) +'">BUY NOW</div></div>';
				products+= '</div>';
			products+= '</div>';
		});
		
		$('.panel-moodboard .cardwrapper .front').html(backgrounds + locations + products);
		
		// events
		var elem = $('.panel-moodboard');
		$(elem).find('.front .btnCircle').hover(
			function(){
				$(elem).find('.front #cap'+ $(this).attr('id').replace('cir', '')).delay(250).fadeIn();
			},
			function(){}
		);
		$(elem).find('.front .capholder').hover(
			function(){},
			function(){
				$(this).fadeOut();
			}
		);
		$(elem).find('.front .btnBuynow').click(function(){
			var url = _this.obj.main.balloon.items.products[2].contents[$(this).attr('id')].link;
			windowOpen(url);
			// tracking
			_gaTrackingEvent('Clicked buynow', url);
		});
	}
	
	function getMoodboard()
	{
		console.log(window.parent.location.hash);
		var hashUrlArr = getHashUrl();
		
		if(!_this.gotoWin){
			// tracking
			_gaTrackingEvent('Moodboard outcome', _this.obj.main.balloon.items.categoryTitles[parseInt(hashUrlArr[3]) - 1].title);
		}
		
		var html = '';
		html+= '<div class="panel-moodboard" style="'+ (hashUrlArr[3] ? '' : 'background-color:rgba(0, 0, 0, 0.8);') +' z-index:999;">';
			html+= '<div class="header">'+ (hashUrlArr[3] ? '<span>Your</span> Summer' : '<span>Holiday to</span> Santorini') +'</div>';
			html+= '<div class="panel">';
				html+= '<div class="cardwrapper">';
					html+= '<div class="card">';
						html+= '<div class="cardface front"></div>';
						html+= '<div class="cardface back">';
							html+= '<ul>';
								html+= '<li class="l1" style="'+ (hashUrlArr[3] ? 'background:url(images/category_outcome'+ hashUrlArr[3] +'.jpg) no-repeat;' : '') +'"><div class="absolute cursor btnRevealOverlay"></div></li>';
								html+= '<li class="l2">';
									html+= '<div class="win">';
										html+= '<h2 style="margin-top:110px;"><span>Competition</span><br />is now closed...</h2>';
										/*
										html+= '<h2><span>WIN</span> a holiday</h2>';
										html+= '<p>for two to the gorgeous Greek island of Santorini – just enter your details below</p>';
										html+= '<div class="form">';
											html+= '<div class="row row1"><input type="text" class="field" name="uName"></div>';
											html+= '<div class="row row2"><input type="text" class="field" name="uEmail"></div>';
											html+= '<div class="row row3"><input type="checkbox" class="left checkbox" id="optSubscribe" name="optSubscribe" value="yes"><label for="optSubscribe">Please tick here if you wish to<br />receive info and offers from<br />Folli Follie&reg;</label></div>';
											html+= '<div class="row row4"><input type="checkbox" class="left checkbox" id="optAgree" name="optAgree" value="yes"><label for="optAgree">Please tick to confirm you have<br />read our</label> <a href="#" id="tandc">terms and conditions</a></div>';
										html+= '</div>';
										html+= '<div class="absolute cursor btnSubmit">SUBMIT</div>';
										*/
									html+= '</div>';
									/*
									html+= '<div class="termsandconditions">';
										html+= '<h2><span>TERMS AND CONDITIONS</span></h2>';
										html+= '<p>Open to UK residents\' aged 18 and over. To enter submit your name and email address. Prize is a 7-night stay for two in Santorini with accommodation valid for stays from 1st May 2014 - 31st October 2014, subject to availability. The prize is to be booked with Thomas Cook. Flights are return economy tickets from London to Santorini, airline chosen by Thomas Cook. The competition opens May 6th 2014 and will end on 13th June 2014. Answers received after the closing date will not be considered. Hearst will choose the winner via prize draw from all eligible entries made during the entry period. Folli Follie will notify the winner via email within 14 days after the close date. Hearst reserves the right to amend the terms and conditions for this competition at any time without notice.<br /><br />See website for <a href="http://www.hearst.co.uk/magazines/Terms-and-Conditions.html" target="_blank" style="text-decoration:underline;">full terms and conditions</a></p>';
										html+= '<div class="absolute cursor btnClose"><p>Read it!</p></div>';
									html+= '</div>';
									*/
								html+= '</li>';
								html+= '<li class="l3">';
									html+= '<h2><span>THANKS</span><br />Share your summer!</h2>';
									html+= '<p>Click below to share your <strong>#summerstateofmind</strong> with friends and invite them to play<br />to win</p>';
									html+= '<div class="shares">';
										html+= '<img src="images/share_outcome_twitter.png" class="shareTwitter" />';
										html+= '<img src="images/share_outcome_facebook.png" class="shareFacebook" />';
										html+= '<img src="images/share_outcome_mail.png" class="shareMail" />';
									html+= '</div>';
								html+= '</li>';
								html+= '<div class="clear-fix"></div>';
							html+= '</ul>';
						html+= '</div>';
					html+= '</div>';
				html+= '</div>';
			html+= '</div>';
			html+= '<div class="buttons">';
				html+= '<div class="btn btn1"><p>'+ (_this.obj.timer.endgame ? 'REVEAL' : 'PLAY') +'</p></div>';
				html+= '<div class="btn btn2"><p>WIN</p></div>';
				html+= '<div class="btn btn3"><p>SHARE</p></div>';
				html+= '<div class="btn btn4"><p>SHOP</p></div>';
			html+= '</div>';
			html+= '<div class="absolute cursor btnBack"><p>BACK</p></div>';
		html+= '</div>';
		$('#contents').append(html);
		
		if(!_this.gotoWin){
			getMoodboardImages();
		}
		
		var elem = $('.panel-moodboard');
		$(elem).find('.back .btnRevealOverlay').click(function(){
			var url = _this.obj.main.balloon.items.categoryTitles[hashUrlArr[3] - 1].link;
			windowOpen(url);
			// tracking
			_gaTrackingEvent('Clicked reveal', url);
		});
		TweenMax.from($(elem).find('.header'), _this.animDurationNorm, {delay:_this.animDurationFast, css:{'opacity':0, y:'-40'}, ease:Back.easeOut});
		TweenMax.from($(elem).find('.panel'), _this.animDurationNorm, {delay:_this.animDurationNorm, css:{'opacity':0, scale:0.5}, ease:Back.easeOut});
		TweenMax.from($(elem).find('.buttons'), _this.animDurationNorm, {delay:1, css:{'opacity':0}});
		
		if(!_this.gotoWin){
			var firstclick = true;
			$.each($(elem).find('.btn'), function(i, obj){
				$(obj).click(function(){
					if(TweenMax.isTweening($(elem).find('ul'))) return;
					$(elem).find('.btn').removeClass('active');
					$(this).addClass('active');
					
					if(i > 0){
						if(i == $(elem).find('.btn').length - 1){
							windowOpen('http://www.follifollie.co.uk/summerstateofmind');
						} else {
							setMoodboardPanel(i);
						}
					} else {
						if(_this.obj.timer.endgame){
							if(firstclick){
								firstclick = false;
								
								// display back button
								$(elem).find('.btnBack').show();
								
								// empty moodboard
								$(elem).find('.front').empty();
								
								// flip
								if(oldIE()){
									$(elem).find('.back').fadeIn();
								} else {
									TweenMax.to($(elem).find('.card'), _this.animDurationNorm, {rotationY:180, ease:Back.easeOut});
								}
								
								TweenMax.to($(this), _this.animDurationNorm, {css:{'left':0}});
								$(elem).find('.btn').delay(600).fadeIn();
								
								// reset panel
								setMoodboardPanel(0);
							} else {
								setMoodboardPanel(i);
							}
						} else {
							window.parent.location.hash = '';
							$(elem).remove();
							getInitial();
						}
					}
					
					// tracking
					_gaTrackingEvent('Clicked', $(this).find('p').text());
				});
			});
		}
		
		$(elem).find('ul').css({'width':parseInt($(elem).find('ul li').length) * parseInt($(elem).find('ul li').css('width').replace('px', ''))});
		
		// back button
		$(elem).find('.btnBack').click(function(){
			firstclick = true;
			$(this).hide();
			
			// get images
			getMoodboardImages();
			// flip
			if(oldIE()){
				$(elem).find('.back').fadeOut();
			} else {
				TweenMax.to($(elem).find('.card'), _this.animDurationNorm, {rotationY:0, ease:Back.easeOut});
			}
			
			TweenMax.to($(elem).find('.btn1'), _this.animDurationNorm, {css:{'left':178}, delay:_this.animDurationNorm});
			$(elem).find('.btn2, .btn3, .btn4').fadeOut();
			$(elem).find('.btn').removeClass('active');
		});
		
		// win
		setMoodboardWin();
		$('#tandc').click(function(){
			if($('ul .termsandconditions').is(':hidden')){
				$('ul .termsandconditions').fadeIn();
				// tracking
				_gaTrackingEvent('Clicked', 'Terms and Conditions');
			} else {
				$('ul .termsandconditions').fadeOut();
			}
		});
		$('ul .termsandconditions .btnClose').click(function(){
			$('#tandc').click();
		});
		
		// sharing
		var shareName = encodeURIComponent("FolliFollie");
		var shareCaption = encodeURIComponent("I've discovered my #summerstateofmind.");
		var shareDescription = encodeURIComponent("Find yours for the chance to win a holiday to Santorini with Folli Follie.");
		var shareUrl = encodeURIComponent(_this.url);
		
		$(elem).find('.shareTwitter').click(function(){
			console.log(window.parent.location.hash);
			var fullUrl = shareUrl +'%23'+ window.parent.location.hash.replace('#', '');
			var shareDescription = encodeURIComponent("Find yours for the chance to win a holiday to Santorini with @FolliFollie_UK");
			windowOpen('https://twitter.com/share?url='+ fullUrl +'&text='+ shareCaption +' '+ shareDescription, true);
			// tracking
			_gaTrackingEvent('Clicked', 'Moodboard Twitter');
		});
		$(elem).find('.shareFacebook').click(function(){
			var fullUrl = shareUrl +'%23'+ window.parent.location.hash.replace('#', '');
			var shareImage = encodeURIComponent(_this.imgdir +'mobile/icon-196x196.png');
			windowOpen('https://www.facebook.com/dialog/feed?app_id=145634995501895&display=page&name='+ shareName +'&caption='+ shareCaption +'&description='+ shareDescription +'&picture='+ shareImage +'&link='+ fullUrl +'&redirect_uri=https://www.facebook.com/', true);
			// tracking
			_gaTrackingEvent('Clicked', 'Moodboard Facebook');
		});
		$(elem).find('.shareMail').click(function(){
			var fullUrl = shareUrl +'%23'+ window.parent.location.hash.replace('#', '');
			var subject = encodeURIComponent("Summer State of Mind");
			windowLocation('mailto:?subject='+ shareName +' '+ subject +'&body='+ shareCaption +' '+ shareDescription +'%0D%0A%0D%0A'+ fullUrl);
			// tracking
			_gaTrackingEvent('Clicked', 'Moodboard Mail');
		});
		
		// setter for card
		if(oldIE()){
			$('.back').hide();
		} else {
			TweenMax.set('.cardwrapper', {perspective:2000});
			TweenMax.set('.card', {transformStyle:'preserve-3d'});
			TweenMax.set('.back', {rotationY:-180});
			TweenMax.set(['.back', '.front'], {backfaceVisibility:'hidden'});
		}
		
		if(_this.gotoWin){
			// flip
			if(oldIE()){
				$(elem).find('.back').fadeIn();
			} else {
				TweenMax.to($(elem).find('.card'), _this.animDurationNorm, {rotationY:180, ease:Back.easeOut});
			}
			
			setMoodboardPanel(1);
			
			$(elem).find('.btn1').click(function(){
				_this.gotoWin = false;
				if(_this.obj.timer.tween.pause()){
					playTimer();
				}
				$(elem).remove();
			});
		}	
	}
	
	function setMoodboardPanel(id)
	{
		TweenMax.to($('.panel-moodboard ul'), _this.animDurationNorm, {css:{'left':-(parseInt($('.panel-moodboard li').css('width').replace('px', '')) * id)}, ease:Back.easeOut});
	}
	
	function setMoodboardWin()
	{
		var elem = $('.panel-moodboard .win');
		var errEmailValue = 'INVALID EMAIL';
		var name = $(elem).find('input[name=uName]');
		var email = $(elem).find('input[name=uEmail]');
		var subscribe = $(elem).find('input[name=optSubscribe]');
		var agree = $(elem).find('input[name=optAgree]');
		var cboxholder = $(elem).find('.row4');
		
		name.val('YOUR NAME').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		email.val('YOUR EMAIL').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		cboxholder.removeClass('fieldHighlightError');
		
		$(elem).find('.btnSubmit').click(function(){
			if(name.val() === '' || name.val() === 'YOUR NAME'){
				name.addClass('fieldHighlightError');
				return false;
			} else {
				name.removeClass('fieldHighlightError');
			}
			
			if(!isValidEmailAddress(email.val())){
				email.val(errEmailValue).addClass('fieldHighlightError');
				return false;
			} else {
				email.removeClass('fieldHighlightError');
			}
			
			if(!agree[0].checked) {
				cboxholder.addClass('fieldHighlightError')
				return false;
			} else {
				cboxholder.removeClass('fieldHighlightError');
			}
			
			// thank you
			$(elem).find('.form').empty().html('<div class="thankyou">Thank you for entering the competition...</div>');
			$(this).remove();
			
			// tracking - send to ga
			var data = base64Encode(name.val() +'***'+ email.val() +'***'+ (subscribe[0].checked ? 'yes' : 'no') +'***'+ (agree[0].checked ? 'yes' : 'no'));
			_gaTrackingEvent('Win a holiday', data);
		});
	}
	
	// timer
	function getTimer()
	{
		$(_this.obj.timer.elem).empty().html('<div></div>');
		setTimer();
		TweenMax.delayedCall(1, function(){
			playTimer();
		});
	}
	
	function setTimer()
	{
		_this.obj.timer.tween.to($(_this.obj.timer.elem).find('div'), _this.obj.timer.duration, {css:{'left':_this.obj.main.width}});
		_this.obj.timer.tween.call(completeTimer);
	}
	
	function restartTimer()
	{
		if(_this.obj.timer.complete){
			_this.obj.timer.complete = false;
			TweenMax.to($(_this.obj.timer.elem).find('div'), 0.5, {css:{'left':0}, onComplete:function(){
				TweenMax.delayedCall(1.5, function(){
					_this.obj.timer.tween.restart();
				});
			}});
		} else {
			_this.obj.timer.tween.timeScale(_this.obj.timer.duration);
			_this.obj.timer.tween.reverse();
		}
	}
	
	function pauseTimer()
	{
		_this.obj.timer.tween.pause();
	}
	
	function playTimer()
	{
		_this.obj.timer.tween.play();
	}
	
	function endTimer()
	{
		TweenMax.to($(_this.obj.timer.elem).find('div'), _this.animDurationFast, {css:{'left':_this.obj.main.width}});
	}
	
	function completeTimer()
	{
		console.log('Time is up...');
		_this.obj.timer.complete = true;
		if(_this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].arrayResults.length < _this.obj.main.balloon.items.products[_this.obj.main.balloon.items.id].limitMin)
			getError();
		else
			newBalloons();
	}
	
	function timeCompletion()
	{
		_this.obj.timer.timeCompletionArray.push(Math.round(_this.obj.timer.tween.totalProgress() * 10) / 10);
		if(_this.obj.timer.endgame)
			_this.obj.timer.timeCompletion = timeCompletionTotal();
	}
	
	function timeCompletionTotal()
	{
		var total = 0;
		$.each(_this.obj.timer.timeCompletionArray, function() {
			total += this;
		});
		return (total * 2) * 10;
	}
	
	// footer
	function getFooter()
	{
		$(_this.obj.footer.elem).empty().html(
			'<div class="left col col1">'+
				(isMobile.iPad() ? '<img src="images/logo_elle.png" class="absolute" style="left:100px;" />' : '') + '<div class="left">In association with</div><img src="images/logo.png" class="left logo" />'+
			'</div>'+
			'<div class="left col col2">'+
				'<img src="images/share_icon_twitter.png" class="left shareTwitter" />'+
				'<img src="images/share_icon_facebook.png" class="left shareFacebook" />'+
				'<div class="clear-fix"></div>'+
			'</div>'
		);
		
		$(_this.obj.footer.elem).find('.logo').click(function(){
			windowOpen('http://www.follifollie.co.uk/summerstateofmind');
			// tracking
			_gaTrackingEvent('Footer', 'Logo');
		});
		
		$(_this.obj.footer.elem).find('.shareTwitter').click(function(){
			windowOpen('https://twitter.com/FolliFollie_UK');
			// tracking
			_gaTrackingEvent('Footer', 'Twitter');
		});
		
		$(_this.obj.footer.elem).find('.shareFacebook').click(function(){
			windowOpen('https://www.facebook.com/FolliFollieWorld');
			// tracking
			_gaTrackingEvent('Footer', 'Facebook');
		});
	}
	
});

