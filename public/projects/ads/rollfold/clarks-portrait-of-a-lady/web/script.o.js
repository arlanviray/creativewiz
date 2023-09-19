/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
	
	var _itemID = 1;
	var _itemsTotal = 3;
	var _intervalID;
	var _normDuration = 0.5;
	var _fastDuration = 0.25;
	var _timeline = new TimelineMax({
		'paused':true, 
		onReverseComplete:function(){}, 
		onComplete:function(){}
	});
	var _resetCols = false;
	var _showInfos = false;
	
	$(init);
	function init()
	{
		setContractedInterval();
		$('.expanded .blockinfo .blockitem1 .carousel .item').eq(0).clone().appendTo('.expanded .blockinfo .blockitem1 .carousel');
		$('.expanded .blockinfo .blockitem1 .carousel .item').eq(_itemsTotal - 1).clone().prependTo('.expanded .blockinfo .blockitem1 .carousel');
		$('.expanded .blockinfo .blockitem2 .carousel .item').eq(0).clone().appendTo('.expanded .blockinfo .blockitem2 .carousel');
		$('.expanded .blockinfo .blockitem2 .carousel .item').eq(_itemsTotal - 1).clone().prependTo('.expanded .blockinfo .blockitem2 .carousel');
		$('.expanded .blockinfo .blockitem3 .carousel .item').eq(0).clone().appendTo('.expanded .blockinfo .blockitem3 .carousel');
		$('.expanded .blockinfo .blockitem3 .carousel .item').eq(_itemsTotal - 1).clone().prependTo('.expanded .blockinfo .blockitem3 .carousel');
		
		// mouse events
		$('.contracted').click(adtechExpand);
		
		$('.expanded .row2 .column').hover(
			function(){
				TweenMax.to($(this).find('img'), _normDuration, {opacity:0.5});
			},
			function(){
				TweenMax.to($(this).find('img'), _normDuration, {opacity:1});
			}
		).click(function(){
			if(_resetCols){
				_showInfos = true;
				_itemID = $(this).index() + 1;
				TweenMax.to($(this).find('img'), 0, {opacity:1});
				
				setRow2ZIndex();
				setRow2Columns();
				getBlockInfoItem(true);
			}
		});
		
		$('.expanded .blockinfo .blockitem .carousel .item').hover(
			function(){
				TweenMax.to($(this).find('img'), _normDuration, {opacity:0.5});
				TweenMax.to($(this).find('.info'), _normDuration, {css:{'display':'block', 'opacity':1}});
			},
			function(){
				TweenMax.to($(this).find('img'), _normDuration, {opacity:1});
				TweenMax.to($(this).find('.info'), _normDuration, {css:{'display':'none', 'opacity':0}});
			}
		);
		
		$('.btnInfos .back').click(function(){
			if(!TweenMax.isTweening($('.expanded .row2 .column'))){
				reverseInfos();
			}
		});
		
		$('.btnInfos .prev').click(function(){
			if(!TweenMax.isTweening($('.expanded .row2 .column'))){
				if(_itemID > 0){
					_itemID--;
				}
				getBlockInfoItem();
			}
		});
		
		$('.btnInfos .next').click(function(){
			if(!TweenMax.isTweening($('.expanded .row2 .column'))){
				if(_itemID < _itemsTotal + 1){
					_itemID++;
				}
				getBlockInfoItem();
			}
		});
		
		$('.btnClose').hover(
			function(){
				TweenMax.to($(this).find('img'), _fastDuration, {rotation:90});
			},
			function(){
				TweenMax.to($(this).find('img'), _fastDuration, {rotation:0});
			}
		).click(function(){
			if(!TweenMax.isTweening($('.expanded .row2 .column'))){
				$(this).hide();
				if(_showInfos){
					reverseInfos();
				} else {
					reverseColumns();
				}
			}
			
		});
	}
	
	function adtechExpand()
	{
		ADTECH.expand();
		clearInterval(_intervalID);
		remContractedImages();
	}
	
	function adtechContract()
	{
		ADTECH.contract();
		$('.expanded').fadeOut('slow', function(){
			setContractedInterval();
			_resetCols = false;
		});
		$('.contracted').find('img').css({'opacity':0});
		$('.contracted').find('img.i'+ _itemID).css({'opacity':1});
		$('.contracted').fadeIn();
	}
	
	function setContractedInterval()
	{
		_intervalID = setInterval(function(){
			getContractedImages();
		}, 3 * 1000);
	}
	
	function getContractedImages()
	{
		if(_itemID == _itemsTotal){
			_itemID = 1;
		} else {
			_itemID = _itemID + 1;
		}
		TweenMax.to($('.contracted').find('img'), _normDuration, {css:{'opacity':0}});
		TweenMax.to($('.contracted').find('img.i'+ _itemID), _normDuration, {css:{'opacity':1}});
	}
	
	function remContractedImages()
	{
		setRow2ZIndex();
		$('.expanded').fadeIn();
		$('.contracted').fadeOut('slow', function(){
			revealColumns(true);
		});
	}
	
	function revealColumns(initial)
	{
		if(initial){
			TweenMax.to('.expanded .row2', _fastDuration, {css:{'top':600}});
			TweenMax.to(['.expanded .row1 .col1', '.expanded .row1 .col2', '.expanded .row2 .col1', '.expanded .row2 .col2'], _fastDuration, {css:{'left':300}, delay:_fastDuration});
			TweenMax.to(['.expanded .row1 .col1', '.expanded .row2 .col1'], _fastDuration, {css:{'left':0}, delay:_fastDuration * 2});
			TweenMax.to('.expanded .blockcopy', _fastDuration, {css:{'display':'block', 'opacity':1, 'top':360}, delay:_fastDuration * 3, onComplete:function(){
				_resetCols = true;
				$('.btnClose').show();
			}});
			
		} else {
		
			TweenMax.to('.expanded .row2', _fastDuration, {css:{'top':0}, delay:_fastDuration * 3, onComplete:adtechContract});
			TweenMax.to(['.expanded .row1 .col1', '.expanded .row1 .col2', '.expanded .row2 .col1', '.expanded .row2 .col2'], _fastDuration, {css:{'left':600}, delay:_fastDuration * 2});
			TweenMax.to(['.expanded .row1 .col1', '.expanded .row2 .col1'], _fastDuration, {css:{'left':300}, delay:_fastDuration});
			TweenMax.to('.expanded .blockcopy', _fastDuration, {css:{'display':'none', 'opacity':0, 'top':380}});
		}
	}
	
	function reverseColumns()
	{
		if($('.btnClose').is(':hidden')){
			revealColumns();
		}
	}
	
	function revealInfos(initial)
	{
		if(initial){
			TweenMax.to('.expanded .row2 .column', _fastDuration, {css:{'left':300, 'width':600, 'height':1200}});
			TweenMax.to('.expanded .row2 .column img', _fastDuration, {css:{'width':599, 'height':1200}});
			TweenMax.to('.expanded .blockinfo', _fastDuration, {css:{'left':0}, delay:_fastDuration, onComplete:showBtnInfos});
		
		} else {
		
			var xpos;
			switch(_itemID){
				case 1:
					xpos = 0;
					break;
				case 2:
					xpos = 300;
					break;
				case 3:
					xpos = 600;
					break;
			}
			TweenMax.to('.expanded .row2 .column', _fastDuration, {css:{'left':xpos, 'width':300, 'height':600}, delay:_fastDuration, onComplete:setRow2Columns});
			TweenMax.to('.expanded .row2 .column img', _fastDuration, {css:{'width':299, 'height':600}, delay:_fastDuration});
			TweenMax.to('.expanded .blockinfo', _fastDuration, {css:{'left':-300}});
		}
	}
	
	function reverseInfos()
	{
		_showInfos = false;
		revealInfos();
		hideBtnInfos();
	}
	
	function getBlockInfoItem(initial)
	{
		// carousel
		TweenMax.to('.blockinfo .blockitem1 .carousel', initial ? 0 : _fastDuration, {css:{'top':-(600 * _itemID)}, onComplete:function(){
			if(!initial){
				if(_itemID == 0){
					_itemID = _itemsTotal;
				}
				if(_itemID == _itemsTotal + 1){
					_itemID = 1;
				}
				TweenMax.to('.blockinfo .blockitem1 .carousel', 0, {css:{'top':-(600 * _itemID)}});
			}
		}});
		TweenMax.to('.blockinfo .blockitem2 .carousel', initial ? 0 : _fastDuration, {css:{'left':-getBlockInfoItemXpos()}, onComplete:function(){
			if(!initial){
				if(_itemID == 0){
					_itemID = _itemsTotal;
				}
				if(_itemID == _itemsTotal + 1){
					_itemID = 1;
				}
				TweenMax.to('.blockinfo .blockitem2 .carousel', 0, {css:{'left':-getBlockInfoItemXpos()}});
			}
		}});
		TweenMax.to('.blockinfo .blockitem3 .carousel', initial ? 0 : _fastDuration, {css:{'left':-(300 * _itemID)}, onComplete:function(){
			if(!initial){
				if(_itemID == 0){
					_itemID = _itemsTotal;
				}
				if(_itemID == _itemsTotal + 1){
					_itemID = 1;
				}
				TweenMax.to('.blockinfo .blockitem3 .carousel', 0, {css:{'left':-(300 * _itemID)}});
			}
		}});
		
		// main image
		if(!initial){
			// set all opacity to zero
			TweenMax.to($('.expanded .row2 .column'), _fastDuration, {css:{'opacity':0}});
			// set current column opacity
			TweenMax.to($('.expanded .row2 .col'+ getZIndexID()), _fastDuration, {css:{'opacity':1}, onComplete:function(){
				// reset all columns
				$('.expanded .row2 .column').css({'opacity':1});
				setRow2ZIndex();
			}});
		}
	}
	
	function getBlockInfoItemXpos()
	{
		var xpos;
		switch(_itemID){
			case 0:
				xpos = 1200;
				break;
			case 1:
				xpos = 900;
				break;
			case 2:
				xpos = 600;
				break;
			case 3:
				xpos = 300;
				break;
			case 4:
				xpos = 0;
				break;
		}
		
		return xpos;
	}
	
	function getZIndexID()
	{
		var zid;
		if(_itemID == 0){
			zid = 3;
		} else if(_itemID == 4){
			zid = 1;
		} else {
			zid = _itemID;
		}
		
		return zid;
	}
	
	function showBtnInfos()
	{
		$('.btnInfos').show();
	}
	
	function hideBtnInfos()
	{
		$('.btnInfos').hide();
	}
	
	function setRow2ZIndex()
	{
		$('.expanded .row2 .column').css({'z-index':''});
		$('.expanded .row2 .col'+ getZIndexID()).css({'z-index':1});
	}
	
	function setRow2Columns()
	{
		if(_showInfos){
			TweenMax.to($('.expanded .row2'), _fastDuration, {css:{'top':0, 'height':1200}});
			$('.expanded .row2 .column').css({'pointer-events':'none'});
		} else {
			TweenMax.delayedCall(0.5, function(){
				TweenMax.to($('.expanded .row2'), _fastDuration, {css:{'top':600, 'height':600}});
				$('.expanded .row2 .column').css({'pointer-events':''});
			});
		}
		
		switch(_itemID){
			case 1:
				if(_showInfos){
					TweenMax.to(['.expanded .row2 .col2', '.expanded .row2 .col3'], _fastDuration, {css:{'left':0}, onComplete:function(){
						revealInfos(true);
					}});
				} else {
					TweenMax.to('.expanded .row2 .col2', _fastDuration, {css:{'left':300}});
					TweenMax.to('.expanded .row2 .col3', _fastDuration, {css:{'left':600}, onComplete:reverseColumns});
				}
				break;
			case 2:
				if(_showInfos){
					TweenMax.to(['.expanded .row2 .col1', '.expanded .row2 .col3'], _fastDuration, {css:{'left':300}, onComplete:function(){
						revealInfos(true);
					}});
				} else {
					TweenMax.to('.expanded .row2 .col1', _fastDuration, {css:{'left':0}});
					TweenMax.to('.expanded .row2 .col3', _fastDuration, {css:{'left':600}, onComplete:reverseColumns});
				}
				break;
			case 3:
				if(_showInfos){
					TweenMax.to(['.expanded .row2 .col1', '.expanded .row2 .col2'], _fastDuration, {css:{'left':600}, onComplete:function(){
						revealInfos(true);
					}});
				} else {
					TweenMax.to('.expanded .row2 .col1', _fastDuration, {css:{'left':0}});
					TweenMax.to('.expanded .row2 .col2', _fastDuration, {css:{'left':300}, onComplete:reverseColumns});
				}
				break;
		}
	}

})(jQuery, window);

