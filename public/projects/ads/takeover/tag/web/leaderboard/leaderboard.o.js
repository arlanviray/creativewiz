/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){
	
	var _thisStorageID,
		_thisStoragePrevID,
		_thisStorageDuration = 100;
	var _thisInit = true;
	var _thisTotal = 5;
	var _thisIntervalID;
	var _thisMovementX;
	var _thisRepeat= false;
	
    // localStorage feature detect
    function supportsLocalStorage()
    {
        return typeof(Storage) !== 'undefined';
        alert('Sorry, but the browser you are using is very old, please update your browser for the best experience!');
    }
	
    if(supportsLocalStorage())
    {
      	// init
      	$('.carousel .carouselholder .products').clone().appendTo('.carousel .carouselholder');
      	$('.carousel .carouselholder .products').eq(1).clone().prependTo('.carousel .carouselholder');
      	$('.carousel .carouselholder').append('<div class="clr"></div>');
      	
      	setInterval(checkStorage, _thisStorageDuration);
      	
      	$('.arrows .btnArrowLeft').click(function(){
      		if(!TweenMax.isTweening($('.carousel .carouselholder'))){
      			_thisMovementX = 'left';
      			_thisStorageID = parseInt(localStorage.getItem('adTakeoverID'));
      			_thisStorageID--;
				
				// track
      			trackEventProduct(_thisStorageID);
      			
      			localStorage.setItem('adTakeoverID', _thisStorageID);
      		}
      	});
      	
      	$('.arrows .btnArrowRight').click(function(){
      		if(!TweenMax.isTweening($('.carousel .carouselholder'))){
      			_thisMovementX = 'right';
      			_thisStorageID = parseInt(localStorage.getItem('adTakeoverID'));
      			_thisStorageID++;
      			
      			// track
      			trackEventProduct(_thisStorageID);
      			
      			localStorage.setItem('adTakeoverID', _thisStorageID);
      		}
      	});
      	
      	$('.carousel .carouselholder img').click(function(){
      		if(!TweenMax.isTweening($('.carousel .carouselholder'))){
      			
      			var currProdX = $('.carousel .carouselholder img').eq(_thisStorageID + 2).offset().left;
      			var thisProdX = $(this).offset().left;
      			
      			if(thisProdX < currProdX){
      				_thisMovementX = 'left';
      				if(currProdX - thisProdX > 200){
      					_thisRepeat = true;
      				}
      				$('.arrows .btnArrowLeft').click();
      			}
      			
      			if(thisProdX > currProdX){
      				_thisMovementX = 'right';
      				if(thisProdX - currProdX > 200){
      					_thisRepeat = true;
      				}
      				$('.arrows .btnArrowRight').click();
      			}
      		}
      	})
    }
    
    function checkStorage()
    {
        _thisStorageID = parseInt(localStorage.getItem('adTakeoverID')) + (_thisTotal - 1);
        if(_thisStorageID != _thisStoragePrevID)
        {
			
			clearInterval(_thisIntervalID);
			
			if(_thisInit){
				
				TweenMax.to($('.carousel .carouselholder .products img'), 0, {scaleX:0.75, scaleY:0.75});
				TweenMax.to($('.carousel .carouselholder img').eq(_thisStorageID + 2), 0, {scaleX:1, scaleY:1});
				TweenMax.to($('.carousel .carouselholder'), 0, {x:-(166 * _thisStorageID)});
				setIntervalCarousel();
				_thisInit = false;
				
				if(_thisRepeat){
					setMovementX();
					_thisRepeat = false;
				}
				
			} else {
				
				TweenMax.to($('.carousel .carouselholder img'), 0.5, {scaleX:0.75, scaleY:0.75});
				TweenMax.to($('.carousel .carouselholder img').eq(_thisStorageID + 2), 0.5, {scaleX:1, scaleY:1});
				TweenMax.to($('.carousel .carouselholder'), 0.5, {x:-(166 * _thisStorageID), onComplete:function(){
					
					setIntervalCarousel();
					if(_thisStorageID <= 0 || _thisStorageID >= _thisTotal * 2){
						_thisInit = true;
						localStorage.setItem('adTakeoverID', 1);
					}
					
					// no interfence from above local storage setting
					if(_thisRepeat && !_thisInit){
						setMovementX();
						_thisRepeat = false;
					}
					
				}});
				
			}
			
			_thisStoragePrevID = _thisStorageID;
		} 
    }
    
    function trackEventProduct(thisID)
    {
    	switch(thisID){
			case 2: case -3:
				// _thisID = 4;
				ADTECH.event('Product Display - Carrera Calibre 16 Day-Date Automatic Chronograph 41mm');
				break;
			case 3: case -2:
				// _thisID = 5;
				ADTECH.event('Product Display - Aquaracer 500m Calibre 16 Automatic Chronograph 43mm');
				break;
			case 4: case -1:
				// _thisID = 1;
				ADTECH.event('Product Display - Carrera Calibre 8 Grande Date Automatic 41mm');
				break;
			case 5: case 0:
				// _thisID = 2;
				ADTECH.event('Product Display - Carrera Calibre 16 Day Date Chronograph 41mm');
				break;
			default:
				// _thisID = 3;
				ADTECH.event('Product Display - Carrera Calibre 1887 Chronograph 43mm');
		}
    }
    
    function setIntervalCarousel()
	{
		_thisIntervalID = setInterval(function(){
			setMovementX();
		}, 10 * 1000);
	}
	
	function setMovementX()
	{
		if(_thisMovementX == 'left'){
			$('.arrows .btnArrowLeft').click();
		} else {
			$('.arrows .btnArrowRight').click();
		}
	}
    
});
