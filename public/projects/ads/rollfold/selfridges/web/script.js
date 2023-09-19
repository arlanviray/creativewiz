/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
  
	var holderContents = new TimelineMax({'paused':true, onComplete:setBtnClose});
	var duration = 0.5;
	var carouselInit = true;
	var mainWidth = 600;
	var mainArrowID = mainCarouselID = 0;
	var thumbWidth = 174;
	var thumbArrowID = thumbID = 0;
	var infoCopyVisible = false;
	
	$(init);
  
	function init()
	{
		TweenMax.to('.header img', 0.5, {scaleX:0.9, scaleY:0.9, marginTop:20});
		TweenMax.to($('.contents .intro img:eq(0), .contents .intro img:eq(1), .contents .intro img:eq(2)'), 0, {scaleX:0.75, scaleY:0.75});
		TweenMax.to($('.contents .intro img:eq(0)'), 0, {top:-30, left:-50});
		TweenMax.to($('.contents .intro img:eq(1)'), 0, {top:120, left:0});
		TweenMax.to($('.contents .intro img:eq(2)'), 0, {top:124, left:80});
		TweenMax.to($('.contents .intro img:eq(3)'), 0, {autoAlpha:0});
		TweenMax.from('.contents .copy', 1, {right:-110});
		TweenMax.to('.contents .copy .ctext2, .footer .fcarousel', 0, {autoAlpha:0});
		
		animHolderContents();
		
		$('#btnOverlay').on('click', function(){
			ADTECH.expand();
			$(this).hide();
			// $('#mainWrapper').css('background-color', 'rgba(2555, 2555, 2555, 0.75)');
			holderContents.play();
		});
		
		$('.contents #arrowDown').on('click', getCarouselMain);
	}
  
	function animHolderContents()
	{
		holderContents.add(TweenMax.to('#holderContents', duration, {width:600, height:1200}));
		
		// header
		holderContents.insert(TweenMax.to('.header', duration, {height:190, borderBottom:0}));
		holderContents.insert(TweenMax.to('.header img', duration, {scaleX:1, scaleY:1}));
		
		// contents
		holderContents.insert(TweenMax.to('.contents, .contents .introcopy, .contents .intro', duration, {height:710}));
		holderContents.insert(TweenMax.to('.contents .copy', duration, {width:366, height:516, top:110, left:112}));
		holderContents.insert(TweenMax.to('.contents .copy .ctext1, .footer .ftext', 0.25, {autoAlpha:0}));
		holderContents.insert(TweenMax.to('.contents .copy .ctext2, .footer .fcarousel', duration, {autoAlpha:1, delay:duration}));
		holderContents.insert(TweenMax.to($('.contents .intro img:eq(0), .contents .intro img:eq(1), .contents .intro img:eq(2)'), duration, {scaleX:1, scaleY:1}));
		holderContents.insert(TweenMax.to($('.contents .intro img:eq(0)'), duration, {top:0, left:274}));
		holderContents.insert(TweenMax.to($('.contents .intro img:eq(1)'), duration, {top:110, left:0, borderBottom:'15px solid #ffde00'}));
		holderContents.insert(TweenMax.to($('.contents .intro img:eq(2)'), duration, {top:358, left:334, borderTop:'15px solid #ffde00'}));
		holderContents.insert(TweenMax.to($('.contents .intro img:eq(3)'), duration, {top:544, autoAlpha:1}));
		
		// footer
		holderContents.insert(TweenMax.to('.footer', duration, {height:302}));
		holderContents.insert(TweenMax.to('.footer .fcarousel', duration, {height:284, onComplete:getCarouselThumbs}));
	}
  
	function setBtnClose(e)
	{
		$('#btnClose').show().hover(
			function(){
				$(this).attr('src', 'btn_close_over.png');
			},
			function(){
				$(this).attr('src', 'btn_close.png');
			}
		).on('click', function(){
			$(this).hide();
			// $('#mainWrapper').css('background-color', 'rgba(2555, 2555, 2555, 0)');
			TweenMax.to($('.contents .introcopy, #carouselMainContainer'), duration, {y:0, onComplete:function(){
			holderContents.reverse();
			TweenLite.delayedCall(0.35, removeCarousels);
			TweenLite.delayedCall(1, function(){
				ADTECH.contract();
				$('#btnOverlay').show();
			});
			setBtnRoundel();
			}});
		});
	}
  
	function getCarouselThumbs(e)
	{
		$('.footer .fcarousel').append('<div id="carouselThumbs"></div><div id="carouselThumbsArrows"><img src="btn_arrow_left.png" class="arrowLeft" /><img src="btn_arrow_right.png" class="arrowRight" /></div>');
		$.each(carouselData.data, function(index, obj){
			var index = index + 1;
			$('#carouselThumbs').append('<img src="carousel_thumb_'+ index +'.jpg" data-id="'+ index +'" />');
		});
		$('#carouselThumbs').css({width:(thumbWidth * carouselData.data.length)});
		$('#carouselThumbs img').on('click', getCarouselMain);
		
		// arrows
		$('#carouselThumbsArrows .arrowLeft').hover(
			function(){
				$(this).attr('src', 'btn_arrow_left_over.png');
			},
			function(){
				$(this).attr('src', 'btn_arrow_left.png');
			}
		).on('click', function(){
			posCarouselThumbLeft();
		});
		
		$('#carouselThumbsArrows .arrowRight').hover(
			function(){
				$(this).attr('src', 'btn_arrow_right_over.png');
			},
			function(){
				$(this).attr('src', 'btn_arrow_right.png');
			}
		).on('click', function(){
			posCarouselThumbRight();
		});
	}
  
	function posCarouselThumbLeft()
	{
		if(thumbArrowID > 0) 
		{
			thumbArrowID--;
		} else {
			thumbArrowID = 0;
		}
		
		TweenMax.to($('#carouselThumbs'), duration, {x:-thumbWidth * thumbArrowID});
	}
	
	function posCarouselThumbRight()
	{
		var xpos;
		if(thumbArrowID < (carouselData.data.length - 4)) 
		{
			thumbArrowID++;
			xpos = thumbWidth * thumbArrowID;
		} else {
			thumbArrowID = (carouselData.data.length - 3);
			xpos = (thumbWidth * carouselData.data.length) - 600;
		}
	
		TweenMax.to($('#carouselThumbs'), duration, {x:-xpos});
	}
  
	function setCarouselThumbAlpha()
	{
		$('#carouselThumbs img').css({opacity:1}); //border:0
		$('#carouselThumbs img:eq('+ mainCarouselID +')').css({opacity:0.25}); //'border-bottom':'solid 10px #e96417' 
	}
  
	function getCarouselMain(e)
	{
		if($(e.target).data('id') == undefined) 
		{
			mainCarouselID = mainCarouselID;
		} else {
			mainCarouselID = $(e.target).data('id') - 1;
		}
	
		if(carouselInit) 
		{
			$('.contents').append(
				'<div id="carouselMainContainer">'+
					'<div id="carouselMain"></div>'+
					'<div id="carouselMainArrows">'+
						'<img src="btn_arrow_left.png" class="arrowLeft" />'+
						'<img src="btn_arrow_right.png" class="arrowRight" />'+
					'</div>'+
				'</div>'
			);
			$.each(carouselData.data, function(index, obj){
				var index = index + 1;
				var html = '';
				html += '<div class="carouselImage">';
					html += '<img src="carousel_main_'+ index +'.jpg" class="mainImage" />';
					html += '<div class="carouselText">';
						html += '<div class="title"><em>'+ obj.name +'</em></div>';
						html += '<div>'+ obj.desc +'</div>';
						html += '<div><a href="#"><span>SHOP NOW<img src="arrow_shopnow.png" id="arrowShopNow" /></span></a></div>';
					html += '</div>';
					$.each(obj.info, function(iCnt, iObj){
					
						var xbox = iObj.xbox == 'left' ? 'left:'+ iObj.xbtn : 'right:'+ iObj.xbtn;
					
						html += '<div class="carouselInfo" style="top:'+ iObj.ybtn +'px; '+ xbox +'px;">';
							html += '<div class="carouselInfoHolder">';
								var infoCopy = iObj.xbox == 'left' ? 'infoCopyLeft' : 'infoCopyRight';
								var infoBtn = iObj.xbox == 'left' ? 'infoBtnLeft' : 'infoBtnRight';
								html += '<div class="infoCopy '+ infoCopy +'">'+ iObj.copy +'<p><a href="#"><span>SHOP NOW<img src="arrow_shopnow.png" id="arrowShopNow" /></span></a></p></div>';
								html += '<img src="btn_plus.png" class="infoBtn '+ infoBtn +'" />';
							html += '</div>';
						html += '</div>';
					});
				html += '</div>';
				$('#carouselMain').append(html);
			});
		  
			// shop now event
			$('#carouselMain .carouselImage a').on('click', function(e){
				e.preventDefault();
				// window.open(carouselData.data[mainCarouselID].link, '_blank');
				
				// not working passing varible on ADTECH.click
				var name = carouselData.data[mainCarouselID].name.toString();
				
				// hard coded string value
				switch(mainCarouselID)
				{
					case 0:
						ADTECH.click('SKIN THERAPY');
						break;
					case 1:
						ADTECH.click('FIRM AND SCULPT');
						break;
					case 2:
						ADTECH.click('PERFECT HAIR');
						break;
					case 3:
						ADTECH.click('FANTASY MAKE-UP');
						break;
					case 4:
						ADTECH.click('INSTANT TAN');
						break;
					case 5:
						ADTECH.click('ORGANIC REMEDIES');
						break;
					case 6:
						ADTECH.click('ALL IN ONE');
						break;
					case 7:
						ADTECH.click('INSPIRED BY YOU');
						break;
					case 8:
						ADTECH.click('SELFRIDGES EXCLUSIVE');
						break;
					case 9:
						ADTECH.click('NAIL ART');
						break;
					case 10:
						ADTECH.click('RADIANT SKIN');
						break;
					case 11:
						ADTECH.click('POWER SERUM');
						break;
					case 12:
						ADTECH.click('BARE MINERALS');
						break;
				}
			});
		  
			// set position
			$('#carouselMain').css({width:(mainWidth * carouselData.data.length)});
			TweenMax.to($('#carouselMain'), 0, {x:-(mainWidth * mainCarouselID)});
			setCarouselMain(true);
		  
			// arrows
			$('#carouselMainArrows .arrowLeft').hover(
				function(){
					$(this).attr('src', 'btn_arrow_left_over.png');
				},
				function(){
					$(this).attr('src', 'btn_arrow_left.png');
				}
			).on('click', function(){
				if(mainCarouselID > 0) 
				{
					mainCarouselID--;
				} else {
					mainCarouselID = 0;
				}
				
				posCarouselMain();
				
				thumbArrowID = mainCarouselID - 1;
				setCarouselThumbAlpha();
				posCarouselThumbLeft();
			});
		  
			$('#carouselMainArrows .arrowRight').hover(
				function(){
					$(this).attr('src', 'btn_arrow_right_over.png');
				},
				function(){
					$(this).attr('src', 'btn_arrow_right.png');
				}
			).on('click', function(){
				if(mainCarouselID < carouselData.data.length - 1) 
				{
					mainCarouselID++;
				} else {
					mainCarouselID = carouselData.data.length - 1;
				}
				
				posCarouselMain();
				
				thumbArrowID = mainCarouselID - 1;
				setCarouselThumbAlpha();
				posCarouselThumbRight();
			});
		  
		  	// hide info copy
			TweenMax.to('#carouselMain .infoCopy', 0, {autoAlpha:0});
		  
			// set button event
			$('#carouselMain .infoBtn').hover(
				function(){
					infoCopyVisible = true;
					TweenMax.to($(this), duration, {rotation:135});
					TweenMax.to($(this).parent().find('.infoCopy'), duration, {autoAlpha:1});
				},
				function(){
					// reset to mainImage hover event
				}
			);
			$('#carouselMain .mainImage').hover(
				function(){
					if(infoCopyVisible)
					{
						infoCopyVisible = false;
						TweenMax.to($('#carouselMain .infoBtn'), duration, {rotation:0});
						TweenMax.to($('#carouselMain .infoBtn').parent().find('.infoCopy'), duration, {autoAlpha:0});
					}
				}
			);
		  
			// set header arrow
			$('.header #arrowDown').show().on('click', function(){
				$(this).hide();
				setCarouselMain();
			});
		  
			carouselInit = false;
		  
		} else {
		  
			posCarouselMain();
		  
		}
	
		setCarouselThumbAlpha();
	}
  
	function posCarouselMain()
	{
		TweenMax.to($('#carouselMain'), duration, {x:-mainWidth * mainCarouselID});
	}
  
	function setCarouselMain(show)
	{
		if(show) 
		{
			TweenMax.to($('.contents .introcopy, #carouselMainContainer'), duration, {y:-710});
			setBtnRoundel(true);
		} else {
			setBtnRoundel(false);
			TweenMax.to($('.contents .introcopy, #carouselMainContainer'), duration, {y:0, onComplete:function(){
				$('#carouselThumbs img').css({opacity:1}); //border:0
				$('#carouselMainContainer').remove();
				carouselInit = true;
			}});
		}
	}
  
	function setBtnRoundel(show)
	{
		if(show) 
		{
			$('#holderContents').append('<div id="btnRoundel"><a href="http://www.selfridges.com" target="_blank"><img src="btn_roundel.png"></a></div>');
		} else {
			$('#btnRoundel').remove();
		}
	}
  
	function removeCarousels() 
	{
		$('.header #arrowDown').hide();
		$('#carouselMainContainer').remove();
		$('#carouselThumbs, #carouselThumbsArrows').remove();
		
		// reset variable
		carouselInit = true;
		mainArrowID = 
		mainCarouselID = 
		thumbArrowID = 0;
	}
  
})(jQuery, window);
