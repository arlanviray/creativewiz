/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){

	var _thisStorageID,
		_thisStoragePrevID,
		_thisStorageDuration = 100,
		_thisStorageName = 'adTakeoverID-Revlon';
	var _thisInit = true;
	var _thisIntervalID;
	var _this = {
		carousel: {
			id: null,
			init: true,
			total: null,
			byArrow: false,
		},
		video: {
			id: 3653492416001,
			playerID: '1719536881001',
			playerKey: 'AQ~~,AAAAABn4dxs~,AY7gyox5PDi_PE120JWsev9MDwmlXCJp',
		},
	};
	
	// localStorage feature detect
    function supportsLocalStorage()
    {
        return typeof(Storage) !== 'undefined';
        alert('Sorry, but the browser you are using is very old, please update your browser for the best experience!');
    }
    
    if(supportsLocalStorage())
    {
    	// init
    	if(localStorage.getItem(_thisStorageName) == null){
      		_this.carousel.id = 1;
      	} else {
      		_this.carousel.id = parseInt(localStorage.getItem(_thisStorageName));
      	}
    	
    	_this.carousel.total = $('.carousel ul > li').size();
    	$('.carousel ul li').eq(0).clone().appendTo('.carousel ul');
    	$('.carousel ul li').eq(_this.carousel.total - 1).clone().prependTo('.carousel ul').parent().append('<div class="clr"></div>');
    	$('.carousel .arrow.left, .carousel .arrow.right').click(function(){
			if(!TweenMax.isTweening($('.carousel ul'))){
			
				_this.carousel.byArrow = true;
				
				if($(this).hasClass('left')){
					if(_this.carousel.id > 0){
						_this.carousel.id--;
					}
				} else {
					if(_this.carousel.id < _this.carousel.total + 1){
						_this.carousel.id++;
					}
				}
				setCarousel();
			}
		});
		
		$('.btnVideo').click(function(){
			clearInterval(_thisIntervalID);
			ADTECH.event('Clicked Video');
			setButtons(this);
			getVideo();
		});
		
		$('.btnGallery').click(function(){
			ADTECH.event('Clicked Shoot Gallery');
			setButtons(this);
			$('#video').empty();
		});
		
		setIntervalChange();
    	
    	var index = 0;
    	if(localStorage.getItem(_thisStorageName) != null){
      		index = parseInt(localStorage.getItem(_thisStorageName) - 1);
      	}
      	$('.backgrounds .color').not(':eq('+ index +')').hide();
		
      	setInterval(checkStorage, _thisStorageDuration);
    }
    
    function checkStorage()
    {
        if(localStorage.getItem(_thisStorageName) == null) return;
        
        _thisStorageID = parseInt(localStorage.getItem(_thisStorageName));
        
        if(_thisStorageID != _thisStoragePrevID)
        {
        	if(_thisInit){
				_thisInit = false;
			} else {
				$('.backgrounds .color').fadeOut();
				$('.backgrounds .color').eq(_thisStorageID - 1).fadeIn();
			}
			
			if(!_this.carousel.byArrow){
				_this.carousel.id = _thisStorageID;
				setCarousel();
				
				setButtons('.btnGallery');
				$('#video').empty();
			}
			_this.carousel.byArrow = false;
			
			trackEventProduct(_thisStorageID);
			_thisStoragePrevID = _thisStorageID;
		}
    }
    
    function trackEventProduct(thisID)
    {
    	switch(thisID){
			case 2:
				ADTECH.event('HPU display colour blue');
				break;
			case 3:
				ADTECH.event('HPU display colour red');
				break;
			case 4:
				ADTECH.event('HPU display colour black');
				break;
			default:
				ADTECH.event('HPU display colour green');
		}
    }
    
    function setButtons(elem)
    {
    	$('.line').hide();
		$(elem).find('.line').show();
		$('.btn').removeClass('inactive');
		$(elem).addClass('inactive');
    }
    
    function setCarousel()
	{		
		var carouselWidth = $('.carousel ul li').width();
		TweenMax.to('.carousel ul', (_this.carousel.init ? 0 : 0.35), {css:{'left':-(carouselWidth * _this.carousel.id)}, 
			onStart:function(){
				if(_this.carousel.id == 0){
					_this.carousel.id = _this.carousel.total;
				}
				if(_this.carousel.id == _this.carousel.total + 1){
					_this.carousel.id = 1;
				}
				localStorage.setItem(_thisStorageName, _this.carousel.id);
			}, 
			onComplete:function(){
				clearInterval(_thisIntervalID);
				setIntervalChange();
				TweenMax.to('.carousel ul', 0, {css:{'left':-(carouselWidth * _this.carousel.id)}});
			}
		});
		
		_this.carousel.init = false;
	}
	
	function setIntervalChange()
	{
		_thisIntervalID = setInterval(function(){
			/*
			if(_this.carousel.id < _this.carousel.total + 1){
				_this.carousel.id++;
			}
			setCarousel();
			*/
		}, 15 * 1000);
	}
	
	function getVideo()
	{
		$('#video').empty().html(
			'<div style="display:none"></div>'+
			'<object id="myExperience'+ _this.video.id +'" class="BrightcoveExperience">'+
				'<param name="wmode" value="transparent" />'+
				'<param name="width" value="261" />'+
				'<param name="height" value="326" />'+
				'<param name="playerID" value="'+ _this.video.playerID +'" />'+
				'<param name="playerKey" value="'+ _this.video.playerKey +'" />'+
				'<param name="isVid" value="true" />'+
				'<param name="isUI" value="true" />'+
				'<param name="dynamicStreaming" value="true" />'+
				'<param name="autoStart" value="true" />'+
				'<param name="includeAPI" value="true" />'+
				'<param name="templateLoadHandler" value="onTemplateLoaded" />'+
				'<param name="templateReadyHandler" value="onTemplateReady" />'+
				'<param name="@videoPlayer" value="'+ _this.video.id +'" />'+
			'</object>'+
			'<script type="text/javascript">brightcove.createExperiences();</script>'
		);
	}
    
});
