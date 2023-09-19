/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){
	
	var _iScroll;
	var _clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
	
	init();
	function init()
	{
		_this.id.hash = window.location.hash;
		if(_this.id.hash !== '' && base64Decode(_this.id.hash.replace('#', '')).split('/').length > 3){
			// error with hash url
			$('#contents').append(
				'<div class="errorhash" style="width:'+ $(window).width() +'px; height:'+ $(window).height() +'px;">'+
					'<h2>OOPS...</h2>'+
					'<p>This moodboard wasn\'t created on mobile, click below to scrapbook your own summer</p>'+
					'<div class="absolute cursor btnContinue">CONTINUE</div>'+
				'</div>'
			);
			$('.btnContinue').bind(_clickHandler, function(e){
				window.location.hash = '';
				$('.errorhash').remove();
				init();
			});
		} else {
			getInitial();
		
			if(_this.id.hash !== ''){
				setToMoodboard(parseInt($(_this.obj.main.elem).find('li').length - 2));
				// tracking
				_gaTrackingPageview(_this.urlpath + window.location.hash);
			} else {
				_this.obj.intro.tween.play();
				// tracking
				_gaTrackingPageview(_this.urlpath);
			}
			
			setNavigation();
			
			$(window).resize( function(){
				_this.winWidth = $(window).width(); 
				_this.winHeight = $(window).height();
				if(_this.winWidth > _this.winHeight){
					// landscape
				} else {
					$('#contents, .row-main li.listmain').css({'width':_this.winWidth, 'height':_this.winHeight});
				}
			}).resize();
			
			// events
			$('#landscapeMessage').bind('touchmove', function(e){
				e.preventDefault();
			});
			$('.btnBack').bind(_clickHandler, function(e){
				setBtnBack();
			});
		}
		
		getFooter();
	}
	
	function getInitial()
	{
		var html ='';
		html+= '<ul class="carousel">';
			html+= '<li class="listmain listintro"></li>';
			$.each(_this.obj.main.items.products, function(i, obj){
				html+= '<li class="listmain listquiz listquiz'+ i +'">';
					html+= '<div class="imgholder">';
						$.each(obj.quiz, function(index, img){
							html+= '<div class="col col'+ (index) +'" style="background:url('+ img.imgpath +') center center no-repeat; background-color:#fff; background-size:contain;">';
								html+= '<div class="ansoverlay"></div>';
							html+= '</div>';
						});
						html+= '<div class="clear-fix"></div>';
					html+= '</div>';
				html+= '</li>';
			});
			html+= '<li class="listmain listmoodboard"></li>';
			html+= '<li class="listmain listresults"></li>';
			html+= '<div class="clear-fix"></div>';
		html+= '</ul>';
		html+= '<div class="quiz header"><h2></h2><p></p></div>';
		html+= '<div class="quiz arrows">';
			html+= '<div class="btn back">BACK</div>';
			html+= '<div class="btn next">NEXT</div>';
		html+= '</div>';
		$(_this.obj.main.elem).empty().html(html);
		
		setIntro();
		setQuiz();
	}
	
	function setContentsPos()
	{
		setQuizAnsOverlay();
		TweenMax.to($(_this.obj.main.elem).find('ul.carousel'), _this.animDurationFast, {css:{'left':-(_this.winWidth * _this.obj.main.items.contentId)}, onComplete:setQuizAnsOverlay, onCompleteParams:[true]});
	}
	
	function setIntro()
	{
		if($(_this.obj.main.elem).find('.listintro .intro').length < 1){
			var html = images = '';
			for(var i = 1; i <= _this.obj.intro.images; i++){
				images+= '<img src="images/mobile_intro_'+ i +'.png" class="absolute img'+ i +'" />';
			}
			html+= '<div class="intro">';
				html+= images;
				html+= '<div class="absolute unselectable copy">What\'s your summer personality?<br />Find out with Folli Follie</div>';
				html+= '<div class="absolute unselectable head1">Summer</div>';
				html+= '<div class="absolute unselectable head2">State of mind</div>';
				html+= '<div class="absolute cursor btnPlaynow">PLAY NOW</div>';
			html+= '</div>';
			$(_this.obj.main.elem).find('.listintro').empty().html(html);
			
			// events
			$(_this.obj.main.elem).find('.btnPlaynow').bind(_clickHandler, function(e){
				_this.obj.main.items.contentId++;
				setContentsPos();
				setQuizCarousel();
				setQuizElements(true);
				// tracking
				_gaTrackingEvent('Clicked', 'Intro button enter');
			});
			
			// anim
			$.each(_this.obj.intro.anim, function(i, obj){
				if(i > 0)
					_this.obj.intro.tween.add(TweenMax.from($('.intro').find(_this.obj.intro.anim[i].elem), _this.animDurationFast, {css:_this.obj.intro.anim[i].obj}));
				else
					_this.obj.intro.tween.add(TweenMax.from($('.intro').find(_this.obj.intro.anim[i].elem), _this.animDurationFast, {css:_this.obj.intro.anim[i].obj, delay:0.25}));
			});
		}
		
		setQuizElements();
		setQuizProgress(true);
	}
	
	function setQuiz()
	{
		$(_this.obj.main.elem).find('.arrows .back').bind(_clickHandler, function(e){
			_this.obj.main.items.contentId--;
			if(_this.obj.main.items.contentId > 0){
				setQuizCarousel();
				setQuizArrowRight();
				// tracking
				_gaTrackingEvent('Clicked', 'Arrow back to Q'+ _this.obj.main.items.contentId);
			} else {
				setContentsPos();
				setIntro();
				_this.obj.intro.tween.restart();
				// tracking
				_gaTrackingEvent('Clicked', 'Arrow back to start');
			}
		});
		
		$(_this.obj.main.elem).find('.arrows .next').bind(_clickHandler, function(e){
			if(_this.obj.main.items.quizResultArray[_this.obj.main.items.contentId - 1] != undefined){
				_this.obj.main.items.contentId++;
				if(_this.obj.main.items.contentId <= _this.obj.main.items.products.length){
					setQuizCarousel();
					setQuizArrowRight();
					// tracking
					_gaTrackingEvent('Clicked', 'Arrow right to Q'+ _this.obj.main.items.contentId);
				} else {
					getResult();
					setContentsPos();
					// tracking
					_gaTrackingEvent('Clicked', 'Arrow right to moodboard');
				}
			}
		});
		
		// set carousel clicks
		$.each($(_this.obj.main.elem).find('ul li.listquiz'), function(index, obj){
			$(obj).find('.ansoverlay').bind(_clickHandler, function(e){
				$(obj).find('.ansoverlay').removeClass('selected');
				$(this).addClass('selected');
				_this.obj.main.items.quizResultArray[index] = parseInt($(this).parent().index() + 1);
				setQuizArrowRight();
				// console.log(_this.obj.main.items.quizResultArray);
				// tracking
				_gaTrackingEvent('Clicked', 'Q'+ (index + 1) +' selected image'+ ($(this).parent().index() + 1));
			});
		});
	}
	
	function setQuizElements(active)
	{
		if(active){
			setTimeout(function(){
				$(_this.obj.main.elem).find('.header, .arrows').show();
				$(_this.obj.progressbar.elem).show();
				setQuizArrowRight();
			}, 250);
		} else {
			$(_this.obj.main.elem).find('.header, .arrows').hide();
			$(_this.obj.progressbar.elem).hide();
		}
	}
	
	function setQuizAnsOverlay(active)
	{
		if(_this.obj.main.items.quizEnd) 
			return;
		if(active){
			TweenMax.delayedCall(_this.animDurationFast, function(){
				$(_this.obj.main.elem).find('ul li.listquiz .ansoverlay').css({'pointer-events':'auto'});
			});
		} else {
			$(_this.obj.main.elem).find('ul li.listquiz .ansoverlay').css({'pointer-events':'none'});
		}
	}
	
	function setQuizArrowRight()
	{
		if(_this.obj.main.items.quizResultArray[_this.obj.main.items.contentId - 1] == undefined)
			$(_this.obj.main.elem).find('.arrows .next').fadeTo(0, 0.25).css({'pointer-events':'none'});
		else
			$(_this.obj.main.elem).find('.arrows .next').fadeTo(0, 1).css({'pointer-events':'auto'});
	}
	
	function setQuizCarousel()
	{
		setContentsPos();
		setQuizQuestion();
		setQuizProgress();
	}
	
	function setQuizQuestion()
	{
		$(_this.obj.main.elem).find('.header h2').empty().html(_this.obj.main.items.contentId +' OF 10...');
		$(_this.obj.main.elem).find('.header p').empty().html(_this.obj.main.items.products[_this.obj.main.items.contentId - 1].ques);
	}
	
	function setQuizProgress(init)
	{
		if(init)
			TweenMax.to($(_this.obj.progressbar.elem), 0, {css:{'left':-$(window).width()}});
		else
			TweenMax.to($(_this.obj.progressbar.elem), _this.animDurationFast, {css:{'left':-($(window).width() - ($(window).width() / _this.obj.main.items.products.length) * _this.obj.main.items.contentId)}});
	}
	
	function getResult()
	{
		console.log('End quiz...');
		_this.obj.main.items.quizEnd = true;
		
		var url = '';
		$.each(_this.obj.main.items.quizResultArray, function(i, num){
			url+= num;
			if(i < _this.obj.main.items.quizResultArray.length - 1)
				url+= '-';
			_this.obj.main.items.quizCategoryValues.push(_this.obj.main.items.products[i].quiz[num - 1].category);
		});
		
		// console.log(url);
		// console.log(_this.obj.main.items.quizCategoryArray);
		for (var i = 1; i <= _this.obj.main.items.quizNumAns; i++) {
			_this.obj.main.items.quizCategoryResults.push({
				'group': i,
				'value': arrayCountValues(i, _this.obj.main.items.quizCategoryValues)
			});
        }
        
        _this.obj.main.items.quizCategoryResults.sort(arraySortDescending);
        
        // get results by group.
        var groupIndex;
        if(_this.obj.main.items.quizCategoryResults[0].value == _this.obj.main.items.quizCategoryResults[1].value && _this.obj.main.items.quizCategoryResults[0].value == _this.obj.main.items.quizCategoryResults[2].value){
            groupIndex = Math.ceil(Math.random() * 3) - 1;
        } else if(_this.obj.main.items.quizCategoryResults[0].value == _this.obj.main.items.quizCategoryResults[1].value){
            groupIndex = Math.ceil(Math.random() * 2) - 1;
        } else {
        	groupIndex = 0;
        }
        
        _this.obj.main.items.quizCategoryOutcome = _this.obj.main.items.quizCategoryResults[groupIndex].group;
		
		// set url
		var hashUrl = base64Encode(url +'/'+ _this.obj.main.items.quizCategoryOutcome +'/'+ (isMobile.any() ? 'mobile' : 'others'));
		window.location.hash = hashUrl;
		
		setQuizElements();
		setNavigation();
		getMoodboard();
	}
	
	function setToMoodboard(id)
	{
		_this.obj.main.items.contentId = (id ? id : 0);
		TweenMax.to($(_this.obj.main.elem).find('ul.carousel'), 0, {css:{'left':-($(window).width() * _this.obj.main.items.contentId)}});
		if(id){
			setNavigation();
			getMoodboard();
		}
	}
	
	function getMoodboardUrl()
	{
		var hashUrl = window.location.hash.replace('#', '');
		return base64Decode(hashUrl).split('/');
	}
	
	function getMoodboard()
	{
		var hashUrlArr = getMoodboardUrl();
		var html = backgrounds = locations = products = '';
		$.each(hashUrlArr[0].split('-'), function(i, num){
			if(_this.obj.main.items.products[i].pos.z == 1)
				backgrounds+= '<img src="'+ _this.obj.main.items.products[i].quiz[num - 1].imgpath +'" class="absolute" style="top:'+ _this.obj.main.items.products[i].pos.y +'px; left:'+ _this.obj.main.items.products[i].pos.x +'px; width:'+ _this.obj.main.items.products[i].pos.s +'px; height:'+ _this.obj.main.items.products[i].pos.s +'px" />';
			if(_this.obj.main.items.products[i].pos.z == 2)
				locations+= '<img src="'+ _this.obj.main.items.products[i].quiz[num - 1].imgpath +'" class="absolute locations" style="top:'+ _this.obj.main.items.products[i].pos.y +'px; left:'+ _this.obj.main.items.products[i].pos.x +'px; width:'+ _this.obj.main.items.products[i].pos.s +'px; height:'+ _this.obj.main.items.products[i].pos.s +'px" />';
			if(_this.obj.main.items.products[i].pos.z == 3)
				products+= '<img src="'+ _this.obj.main.items.products[i].quiz[num - 1].imgpath +'" class="absolute products" style="top:'+ _this.obj.main.items.products[i].pos.y +'px; left:'+ _this.obj.main.items.products[i].pos.x +'px; width:'+ _this.obj.main.items.products[i].pos.s +'px; height:'+ _this.obj.main.items.products[i].pos.s +'px" />';
		});
		html+= '<div class="moodboard">';
			html+= backgrounds + locations + products;
			html+= '<div class="thisheader"><span>Your</span>Summer</div>';
		html+= '</div>';
		$(_this.obj.main.elem).find('.listmoodboard').empty().html(html);
		
		getFinalColum();
	}
	
	function getFinalColum()
	{
		var hashUrlArr = getMoodboardUrl();
		
		// tracking
		_gaTrackingEvent('Moodboard outcome', _this.obj.main.items.categoryTitles[parseInt(hashUrlArr[1]) - 1].title);
		
		var title = _this.obj.main.items.categoryTitles[hashUrlArr[1] - 1].title.split(' ');
		var html = '';
		html+= '<div id="scrollerwrapper">';
			html+= '<div id="scroller" class="finalcolum">';
				html+= '<div class="fcol results">';
					html+= '<div class="thisheader"><span>'+ title[0] +'</span><br />'+ title[1] +'</div>';
					html+= '<div class="info">';
						html+= _this.obj.main.items.categoryTitles[hashUrlArr[1] - 1].copy;
						html+= '<img src="images/mobile_outcome'+ hashUrlArr[1] +'.png" />';
						html+= '<strong>WHY NOT TRY...</strong>';
						html+= '<ul>';
						$.each(_this.obj.main.items.categoryTitles[hashUrlArr[1] - 1].bullets, function(i, txt){
							html+= '<li>'+ txt +'</li>';
						});
						html+= '</ul>';
					html+= '</div>';
				html+= '</div>';
				html+= '<div class="fcol win">';
					html+= '<h2 style="padding-top:280px;"><span>Competition</span><br />is now closed...</h2>';
					/*
					html+= '<h2><span>WIN</span> a holiday</h2>';
					html+= '<p>for two to the gorgeous Greek island of Santorini – just enter your details below</p>';
					html+= '<div class="form">';
						html+= '<div class="row row1"><input type="text" class="field" name="uName"></div>';
						html+= '<div class="row row2"><input type="text" class="field" name="uEmail"></div>';
						html+= '<div class="row row3"><div class="checkbox"></div>Please tick here if you wish to receive info and offers from Folli Follie&reg;</div>';
						html+= '<div class="row row4"><div class="checkbox"></div>Please tick to confirm you have read our <a href="#" id="tandc">terms and conditions</a></div>';
					html+= '</div>';
					html+= '<div class="absolute cursor btnSubmit">SUBMIT</div>';
					html+= '<div class="termsandconditions">';
						html+= '<h2><span>TERMS AND CONDITIONS</span></h2>';
						html+= '<p>Open to UK residents\' aged 18 and over. To enter submit your name and email address. Prize is a 7-night stay for two in Santorini with accommodation valid for stays from 1st May 2014 - 31st October 2014, subject to availability. The prize is to be booked with Thomas Cook. Flights are return economy tickets from London to Santorini, airline chosen by Thomas Cook. The competition opens May 6th 2014 and will end on 13th June 2014. Answers received after the closing date will not be considered. Hearst will choose the winner via prize draw from all eligible entries made during the entry period. Folli Follie will notify the winner via email within 14 days after the close date. Hearst reserves the right to amend the terms and conditions for this competition at any time without notice.<br /><br />See website for<br /><a href="http://www.hearst.co.uk/magazines/Terms-and-Conditions.html" target="_blank" style="text-decoration:underline;">full terms and conditions</a></p>';
						html+= '<div class="absolute cursor btnClose"></div>';
					html+= '</div>';
					*/
				html+= '</div>';
				html+= '<div class="fcol share">';
					html+= '<h2><span>THANKS</span><br />Share your summer!</h2>';
					html+= '<p>Click below to share your <strong>#summerstateofmind</strong> with friends and invite them to play to win</p>';
					html+= '<div class="icons">';
						html+= '<img src="images/share_outcome_twitter.png" class="shareTwitter" />';
						html+= '<img src="images/share_outcome_facebook.png" class="shareFacebook" />';
						html+= '<img src="images/share_outcome_mail.png" class="shareMail" />';
					html+= '</div>';
				html+= '</div>';
				html+= '<div style="padding-bottom:340px;"></div>';
			html+= '</div>';
		html+= '</div>';
		$(_this.obj.main.elem).find('.listresults').empty().html(html);
		$('#scrollerwrapper').css({'height':$(window).height()});
		setTimeout(function(){
			_iScroll = new IScroll('#scrollerwrapper', {click:true});
			_iScroll.on('scrollEnd', function(){
				$(_this.obj.navigation.elem).find('.circle').removeClass('active');
				if(this.y > -1200){
					$(_this.obj.navigation.elem).find('.btnReveal').addClass('active');
				}
				if(this.y > -2300 && this.y < -1200){
					$(_this.obj.navigation.elem).find('.btnWin').addClass('active');
				}
				if(this.y < -2300){
					$(_this.obj.navigation.elem).find('.btnShare').addClass('active');
				}
			});
		}, 1500);
		
		// sharing
		var elem = $('#scrollerwrapper .share');
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
		
		// win
		setMoodboardWin();
		$('#tandc').bind(_clickHandler, function(e){
			if($('.termsandconditions').is(':hidden')){
				$('.termsandconditions').fadeIn();
				// tracking
				_gaTrackingEvent('Clicked', 'Terms and Conditions');
			} else {
				$('.termsandconditions').fadeOut();
			}
		});
		$('.termsandconditions .btnClose').bind(_clickHandler, function(e){
			$('.termsandconditions').fadeOut();
		});
		
		// checkbox
		$('#scrollerwrapper .form .row3, #scrollerwrapper .form .row4').bind(_clickHandler, function(e){
			if($(this).find('.checkbox').hasClass('active'))
				$(this).find('.checkbox').removeClass('active');
			else
				$(this).find('.checkbox').addClass('active');
		});
	}
	
	function setMoodboardWin()
	{
		var elem = $('#scrollerwrapper .win');
		var errEmailValue = 'INVALID EMAIL';
		var name = $(elem).find('input[name=uName]');
		var email = $(elem).find('input[name=uEmail]');
		var subscribe = $(elem).find('.row3 .checkbox');
		var agree = $(elem).find('.row4 .checkbox');
		var cboxholder = $(elem).find('.row4');
		
		name.val('YOUR NAME').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		email.val('YOUR EMAIL').removeClass('fieldHighlightError').focus(function(){$(this).val('')});
		cboxholder.removeClass('fieldHighlightError');
		
		$(elem).find('.btnSubmit').bind(_clickHandler, function(e){
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
			
			if(!$(agree).hasClass('active')) {
				cboxholder.addClass('fieldHighlightError')
				return false;
			} else {
				cboxholder.removeClass('fieldHighlightError');
			}
			
			// thank you
			$(elem).find('.form').empty().html('<div class="thankyou">Thank you for entering the competition...</div>');
			$(this).remove();
			
			// tracking - send to ga
			var data = base64Encode(name.val() +'***'+ email.val() +'***'+ ($(subscribe).hasClass('active') ? 'yes' : 'no') +'***'+ ($(agree).hasClass('active') ? 'yes' : 'no'));
			_gaTrackingEvent('Win a holiday', data);
		});
	}
	
	function setBtnBack()
	{
		if($('.btnBack').is(':hidden')){
			$('.btnBack').show();
			_this.obj.main.items.contentId++;
			TweenMax.to($(_this.obj.navigation.elem).find('.btnReveal'), _this.animDurationFast, {css:{'left':'5.5%'}});
			$(_this.obj.navigation.elem).find('.circle').fadeIn();
		} else {
			$('.btnBack').hide();
			_this.obj.main.items.contentId--;
			TweenMax.to($(_this.obj.navigation.elem).find('.btnReveal'), _this.animDurationFast, {css:{'left':'41.5%'}, delay:_this.animDurationNorm});
			$(_this.obj.navigation.elem).find('.btnWin, .btnShare, .btnShop').fadeOut();
			$(_this.obj.navigation.elem).find('.circle').removeClass('active');
		}
		
		setContentsPos();
	}
	
	// navigation
	function setNavigation(reset)
	{
		if($(_this.obj.navigation.elem).find('.circle').length < 1){
			var html = '';
			html+= '<div class="circle btnReveal"><p></p></div>';
			html+= '<div class="circle btnWin"><p>WIN</p></div>';
			html+= '<div class="circle btnShare"><p>SHARE</p></div>';
			html+= '<div class="circle btnShop"><p>SHOP</p></div>';
			$(_this.obj.navigation.elem).empty().html(html);
			
			$.each($(_this.obj.navigation.elem).find('.circle'), function(i, obj){
				$(obj).bind(_clickHandler, function(e){
					if($(obj).find('p').text() === 'PLAY'){
						setToMoodboard();
						setNavigation(true);
						window.location.hash = '';
						_this.obj.intro.tween.play();
					} else {
						if($(this).hasClass('btnShop')){
							// do nothing
						} else {
							$(_this.obj.navigation.elem).find('.circle').removeClass('active');
							$(this).addClass('active');
						}
						if(_this.obj.main.items.contentId < $(_this.obj.main.elem).find('ul.carousel li.listmain').length - 1){
							setBtnBack();
							_iScroll.scrollToElement(document.querySelector('#scroller .fcol:nth-child(1)'));
						} else {
							if($(this).hasClass('btnShop')){
								windowOpen('http://www.follifollie.co.uk/summerstateofmind');
							} else {
								_iScroll.scrollToElement(document.querySelector('#scroller .fcol:nth-child('+ (i + 1) +')'));
							}
						}
					}
					
					// tracking
					_gaTrackingEvent('Clicked', $(this).find('p').text());
				});
			});
		} else {
			if(reset)
				TweenMax.to($(_this.obj.navigation.elem), _this.animDurationFast, {css:{'bottom':-164}});
			else
				TweenMax.to($(_this.obj.navigation.elem), _this.animDurationNorm, {css:{'bottom':90}});
		}
		
		$(_this.obj.navigation.elem).find('.btnReveal p').empty().html(_this.obj.main.items.quizEnd ? 'REVEAL' : 'PLAY');
		
	}
	
	// footer
	function getFooter()
	{
		setTimeout(function(){
			$(_this.obj.footer.elem).empty().html(
				'<div class="row">'+
					'<img src="images/logo_elle.png" class="elle" />'+
					'<span>In association with</span>'+
					'<img src="images/logo.png" class="logo" />'+
				'</div>'
			);
			$(_this.obj.footer.elem).find('.elle').bind(_clickHandler, function(e){
				var url = 'http://www.elleuk.com/';
				windowOpen(url);
				// tracking
				_gaTrackingEvent('Clicked', 'Logo Elle');
			});
			$(_this.obj.footer.elem).find('.logo').bind(_clickHandler, function(e){
				windowOpen('http://www.follifollie.co.uk/summerstateofmind');
				// tracking
				_gaTrackingEvent('Clicked', 'Logo FolliFollie');
			});
		}, 250);
	}
	
});

