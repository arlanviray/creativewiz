/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){
	var quizData = {
		"questions": [
			{
				"txt": "Who is your ultimate style icon?",
			},
			{
				"txt": "You've bagged a second date with a gorgeous guy, but he's asked you to organize the evening - what do you do?",
			},
			{
				"txt": "What is your staple wardrobe item?",
			},
			{
				"txt": "Which era would you like to have lived through?",
			},
			{
				"txt": "Who is your perfect man?",
			}
		],
		"results": [
			{
				"head": "<span>Mostly A's</span> : HIPPY/FOLK",
				"copy": "You're a Glastonbury girl at heart, but one with a penchant for fashion.",
				"desc": "This tee sums up your outlook on life as a carefree, run-with-the-wind kind of gal. Florals are your go-to pattern, but you look for more subtle prints rather than cutesy kitschy flowers. If you're a working girl, this floral mix dress is the perfect injection of office-appropriate folk. Just chilling at home or off to a festival? These leggings will give you flower power! Light your candles and pop them in this birdcage tea light holder for instant hippy-heaven in the comfort of your own home.",
				"links": [
					"http://direct.asda.com/ASDA-Butterfly-Cushion/002096397,default,pd.html",
					"http://direct.asda.com/george/womens-tops/g21-live-laugh-smile-tee/G004411949,default,pd.html",
					"http://direct.asda.com/george/womens-trousers/floral-print-joggers/G004384014,default,pd.html",
					"http://direct.asda.com/george/womens/dresses/floral-mix-dress/G004433675,default,pd.html",
				]
			},
			{
				"head": "<span>Mostly B's</span> : GRUNGE/PUNK",
				"copy": "You're an effortless rock chick and your wardrobe is incomplete without black, leather and tartan.",
				"desc": "You love to make a statement and accessorizing is second nature to you - even your homeware is punky, just like this chain table light. Throw on this jumper dress (an ode to Rolling Stones, naturally) and these biker boots for a no-hassle gig outfit. Winding down? These tartan dungarees and bulldog print sweatshirt are perfect for lounging about in, whilst still retaining your grunge-punk-cool.",
				"links": [
					"http://direct.asda.com/on/demandware.store/Sites-ASDA-Site/default/Search-Show?q=chain+table+lamp",
					"http://direct.asda.com/george/womens/dresses/g21-lips-jumper-dress/G004400735,default,pd.html",
					"http://direct.asda.com/george/womens/playsuits-and-jumpsuits/g21-check-dungarees/G004370575,default,pd.html",
					"http://direct.asda.com/george/womens-knitwear/g21-bulldog-sweatshirt/G004411983,default,pd.html",
					"http://direct.asda.com/george/womens-shoes/leather-look-biker-boots/G004317755,default,pd.html",
				]
			},
			{
				"head": "<span>Mostly C's</span> : GIRLY GIRL",
				"copy": "Your style is truly feminine and you love all things girly - and why not, it's great being a girl!",
				"desc": "You're a fashionista and take pride in your appearance and your style icons hark back to the 50s - which makes this printed cushion perfect for you. But you're not all hearts and flowers - you're conscious of this season's trends. When you go out dancing with the girls, they'll be wowed by this embellished flapper dress, channeling Great Gatsby chic all the way. Pair it with these vintage-inspired block heel ballet shoes. Going somewhere a bit more casual? This punchy pink jacquard tunic is sure to get heads turning.",
				"links": [
					"http://direct.asda.com/ASDA-Modern-50%27s-Lady-Cushion/002090342,default,pd.html",
					"http://direct.asda.com/george/womens-tops/jacquard-tunic/G004422388,default,pd.html",
					"http://direct.asda.com/george/womens/dresses/embellished-flapper-dress/G004281623,default,pd.html",
					"http://direct.asda.com/george/womens-shoes/block-heel-ballet-shoes/G004385771,default,pd.html",
				]
			}
		],
	}
	
	var _contentsID = 0;
	var _quizID = 1;
	var _quizTotal = 5;
	var _quizNumAns = 3;
	var _quizResultArray = [];
	var _quizResultArrayValue = [];
	
	function arraySortDescending(a, b)
	{
    	return b.value - a.value;
	}
	
	function arrayCountValues(item, array) 
	{
    	var count = 0;
    	$.each(array, function(i, v){
    		if(v === item) count++;
    	});
    	
    	return count;
	}
	
	function init()
	{
		setIntro();
		setQuiz();
		
		$('.intro #button').click(function(){
			_contentsID++;
			setContentsPos();
			setQuizCarousel();
		});
	}
	
	function setContentsPos()
	{
		TweenMax.to('#contents', 0.5, {css:{left:-($('#wrapper').width() * _contentsID)}});
	}
	
	function setIntro()
	{
		TweenMax.to('.intro .imgmain', 0, {autoAlpha:0, x:100, y:100});
		TweenMax.to('.intro .imgmain', 1, {autoAlpha:1, x:0, y:0});
		setDeco(true);
	}
	
	function setDeco(reset, hide)
	{
		TweenMax.to('.decoleft img', 0.25, {css:{left:-120}});
		TweenMax.to('.decoright img', 0.25, {css:{right:-120}, 
			onComplete:function(){
				if(!hide){
					var resetID = reset ? 0 : _quizID
					TweenMax.to($('.decoleft .deco'+ resetID), 0.5, {css:{left:0}});
					TweenMax.to($('.decoright .deco'+ resetID), 0.5, {css:{right:0}});
				}
			}
		});
	}
	
	function setQuiz()
	{
		$('.quiz .carousel .arrows .left').click(function(){
			if(_quizID > 1){
				_quizID--;
				setQuizCarousel();
				
				setQuizArrowRightBind();
				
			} else {
				_contentsID--;
				setContentsPos();
				setQuizProgress(true);
				setIntro();
			}
		});
		
		$('.quiz .carousel .arrows .right').click(function(){
			if(_quizResultArray[_quizID - 1] != undefined){
				
				if(_quizID < _quizTotal){
					_quizID++;
					setQuizCarousel();
					
					if(_quizResultArray[_quizID - 1] == undefined){
						setQuizArrowRightUnbind();
					}
					
				} else {
					_contentsID++;
					getResult();
					setContentsPos();
				}
				
			}
		});
		
		setQuizArrowRightUnbind();
		
		// set carousel clicks
		$.each($('.quiz .carousel .carouselpics'), function(index, obj){
			// console.log(index, obj);
			$(obj).find('.pic, .info').click(function(){
			
				var overlay = '<div class="overlay"></div>';
				$(this).parent().parent().find('.pic').empty();
				
				if($(this).hasClass('pic')){
					$(this).html(overlay);
				} else {
					$(this).parent().find('.pic').html(overlay);
				}
				
				var thisIndex = $(this).parent().index();
				_quizResultArray[index] = thisIndex + 1;
				
				setQuizArrowRightBind();
			});
		});
	}
	
	function setQuizArrowRightBind()
	{
		$('.quiz .carousel .arrows .right').find('img').fadeTo(0, 1).css('cursor', 'pointer');
	}
	
	function setQuizArrowRightUnbind()
	{
		$('.quiz .carousel .arrows .right').find('img').fadeTo(0, 0.35).css('cursor', 'auto');
	}
	
	function setQuizCarousel()
	{
		setQuizQuestion();
		setQuizProgress();
		TweenMax.to('.quiz .carousel .carouselcontents', 0.5, {css:{left:-($('.quiz .carousel .carouselpics').width() * (_quizID - 1))}});
		setDeco();
	}
	
	function setQuizQuestion()
	{
		$('.quiz .questions .page h2').empty().html('QUESTION '+ _quizID);
		$('.quiz .questions .ques h3').empty().html(quizData.questions[_quizID - 1].txt);
	}
	
	function setQuizProgress(reset)
	{
		/*if(reset){
			TweenMax.to('.quiz .progress .bar', 0.5, {x:-$('.quiz .progress').width()});
		} else {
			TweenMax.to('.quiz .progress .bar', 0.5, {delay:0.5, x:($('.quiz .progress').width() / _quizTotal) * _quizID});
		}*/
	}
	
	function getResult()
	{
		for(var i = 1; i <= _quizNumAns; i++) 
		{
			_quizResultArrayValue.push({
				'group' : i,
				'value' : arrayCountValues(i, _quizResultArray)
			});
		}
		
		_quizResultArrayValue.sort(arraySortDescending)
		console.log('results: '+ _quizResultArrayValue.sort(arraySortDescending));
		
		// set data to elements
		if(_quizResultArrayValue[0].value == _quizResultArrayValue[1].value){
			var random = Math.ceil(Math.random() * 2);
			var groupIndex = random - 1;
			console.log('groupIndex rand: '+ groupIndex);
		} else {
			var groupIndex = 0;
		}
		
		var groupId = _quizResultArrayValue[ groupIndex ].group - 1;
		console.log('groupId: '+ groupId);
		
		$('.result .header .head h2').empty().append(quizData.results[groupId].head);
		$('.result .header .copy h3').empty().append(quizData.results[groupId].copy);
		$('.result .description .desc').empty().append(quizData.results[groupId].desc);
		var thumb = '';
		$.each(quizData.results[groupId].links, function(index, obj){
			thumb += '<div class="gpics">';
				thumb += '<a href="'+ obj +'" target="_blank">';
					thumb += '<img src="images/thumb_result_'+ (groupId + 1) +'_'+ (index + 1) +'.jpg?'+ Math.floor(Math.random() * 99999) +'" />';
					thumb += '<br /><img src="images/btn_result_buynow.png" class="buynow" />';
				thumb += '</a>';
			thumb += '</div>';
		});
		$('.result .gallery .gcontainer .gcontents').empty().append(thumb);
		
		var resLimit = 4;
		var resGalleryID = 1;
		var thumbLength = quizData.results[groupId].links.length;
		if(thumbLength > resLimit){
			$('.result .gallery .arrows').show();
			
			$('.result .gallery .arrows .left').click(function(){
				if(resGalleryID > 1){
					resGalleryID--;
					setGallery();
				}
			});
			
			$('.result .gallery .arrows .right').click(function(){
				if(resGalleryID < (thumbLength - resLimit) + 1){
					resGalleryID++;
					setGallery();
				}
			});
		} else {
			$('.result .gallery .arrows').hide();
		}
		
		var setGallery = function(){
			TweenMax.to('.result .gallery .gcontainer .gcontents', 0.5, {css:{left:-(125 * (resGalleryID - 1))}});
		};
		
		// reset
		$('.result #button').click(function(){
			_contentsID = 0;
			_quizID = 1;
			_quizResultArray.length = 0;
			_quizResultArrayValue.length = 0;
			
			$('.quiz .carousel .carouselpics .pic').empty();
			setContentsPos();
			setQuizCarousel();
			setQuizArrowRightUnbind();
			setIntro();
			
			resGalleryID = 1;
			setGallery();
		});
		
		// set deco
		setDeco(null, true);
		
		// safari only
		var ua = navigator.userAgent.toLowerCase(); 
		if (ua.indexOf('safari') != -1){ 
			if(ua.indexOf('chrome')  > -1){
				// chrome
			} else {
				setTimeout(function(){
					var winW = $(window).width();
					var winH = $(window).height();
					window.resizeTo((winW - 1), winH);
				}, 500);
			}
		}
	}
	
	init();
	
});