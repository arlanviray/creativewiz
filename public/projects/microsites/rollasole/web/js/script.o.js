/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){
	var quizQuestions = {
		"data": [
			{
				"qtop": "Who is your major",
				"qbot": "style crush?",
			},
			{
				"qtop": "What is the one makeup essential",
				"qbot": "you couldn't live without?",
			},
			{
				"qtop": "You've just booked your next holiday - where",
				"qbot": "are you and your passport heading?",
			},
			{
				"qtop": "When it comes to your bag, which of these",
				"qbot": "reflects the arm candy you love?",
			},
			{
				"qtop": "You've got a massive night out planned - ",
				"qbot": "where will you be heading?",
			}
		]
	}
	
	var quizResults = {
		"data": [
			{
				"title1": "MOSTLY A'S",
				"title2": "MODERN VINTAGE",
				"txt1": "You never know what you're going to wear until minutes before you leave the house and that's what makes you wonderful!  Little imaginative additions make a big difference to your inimitable style. Whether its big glasses, little trinkets or innovative nails, every stylish flair has got a little story that makes you you.",
				"txt2": "Discovering new music, new people and new food makes you happiest and the occasional retail therapy session also helps you smile! Pop a pair of the 'Dotty For You' Rollasoles in your bag to add some vintage rock-a-billy fun to your next adventure.",
				"quote": "Fashions fade, style is eternal.",
				"quoteby": "Yves Saint-Laurent",
				"link": "http://www.rollasole.com/Dotty-For-You-p/dty.htm",
			},
			{
				"title1": "MOSTLY B'S",
				"title2": "POLISHED CHIC",
				"txt1": "All style and even more substance! Whether its designer threads, High St styles or vintage chic you have THE eye for putting the outfit together that will look stunning on you and every one of your friends.",
				"txt2": "Every outfit has an effortless style that breathes a confidence and sassiness that can't be ignored . You love fine food, fine cocktails and a fine man to help you enjoy it all even more. Don't be caught out on your next night on the tiles and slip some Parisian Chic Rollasoles in your clutch and you can slip in and out of your heels, whilst never looking anything less than fabulous!",
				"quote": "Elegance is the only beauty that never fades",
				"quoteby": "Audrey Hepburn",
				"link": "http://www.rollasole.com/Parisian-Chic-p/pch.htm",
			},
			{
				"title1": "MOSTLY C'S",
				"title2": "PARTY GIRL",
				"txt1": "You're the head turning, candle burning, giggle a minute to all your friends - and you always make sure you never look anything else than amazing!",
				"txt2": "Too many friends, too many parties and never enough time to get ready! But hot make up, traffic-stopping style and statement heels are all part of your look - just because you're always last on the dance floor doesn't mean that you have to compromise on style. When the heels start to pinch break out the Leopard Print Rollasoles from your clutch and keep dancing until you see the sun!",
				"quote": "Give a girl the right shoes, and she can conquer the world.",
				"quoteby": "Marilyn Monroe",
				"link": "http://www.rollasole.com/Leopard-Print-p/lpt.htm",
			},
		]
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
		TweenMax.to('#contents', 0.5, {css:{left:-(944 * _contentsID)}});
	}
	
	function setIntro()
	{
		TweenMax.from('.intro .imgtop img', 2, {autoAlpha:0, x:630});
		
		var tl = new TimelineMax();
		tl.add(TweenMax.from('.imgbottom .img1', 0.35, {autoAlpha:0, delay:0.5}));
		tl.add(TweenMax.from('.imgbottom .img2', 0.35, {autoAlpha:0}));
		tl.add(TweenMax.from('.imgbottom .img3', 0.35, {autoAlpha:0}));
		tl.add(TweenMax.from('.imgbottom .img4', 0.35, {autoAlpha:0}));
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
			
				var overlay = '<img src="images/thumb_overlay.png" />';
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
		$('.quiz .carousel .arrows .right').find('img').fadeTo(0, 0.1).css('cursor', 'auto');
	}
	
	function setQuizCarousel()
	{
		setQuizQuestion();
		setQuizProgress();
		TweenMax.to('.quiz .carousel .carouselcontents', 0.5, {css:{left:-($('.quiz .carousel .carouselpics').width() * (_quizID - 1))}});
	}
	
	function setQuizQuestion()
	{
		$('.quiz .questions .page img').attr('src', 'images/page_'+ _quizID +'_of_5.png');
		$('.quiz .questions .ques').html(
			'<span>'+ quizQuestions.data[_quizID - 1].qtop +'</span>'+
			'<div class="clr spacer"></div>'+
			'<span>'+ quizQuestions.data[_quizID - 1].qbot +'</span>'
		);
	}
	
	function setQuizProgress(reset)
	{
		if(reset){
			TweenMax.to('.quiz .progress .bar', 0.5, {x:-$('.quiz .progress').width()});
		} else {
			TweenMax.to('.quiz .progress .bar', 0.5, {delay:0.5, x:($('.quiz .progress').width() / _quizTotal) * _quizID});
		}
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
		
		$('.result .copies .title1').append(quizResults.data[groupId].title1);
		$('.result .copies .title2').append(quizResults.data[groupId].title2);
		$('.result .copies .txt1 strong').append(quizResults.data[groupId].txt1);
		$('.result .copies .txt2').append(quizResults.data[groupId].txt2);
		$('.result .imgmain .quote').append(quizResults.data[groupId].quote);
		$('.result .imgmain .quoteby strong').append(quizResults.data[groupId].quoteby);
		
		$('.result #button').click(function(){
			window.open(quizResults.data[groupId].link, '_blank');
		});
		
		// animate
		TweenMax.to('.result .imgmain img', 0, {autoAlpha:0, css:{top:468}});
		TweenMax.to($('.result .imgmain img').eq(groupId), 0.5, {delay:0.5, autoAlpha:1, css:{top:0}});
		TweenMax.from('.result .imgmain .qholder', 0.5, {delay:1, autoAlpha:0, scaleX:0, scaleY:0});
	}
	
	init();
	
});