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
	
    // localStorage feature detect
    function supportsLocalStorage()
    {
        return typeof(Storage) !== 'undefined';
        alert('Sorry, but the browser you are using is very old, please update your browser for the best experience!');
    }
	
    if(supportsLocalStorage())
    {
      	// init
      	$.each($('.products .prod'), function(i, obj){
      		TweenMax.from($(obj), 0.5, {css:{'top':100}, delay:i/4, ease:Back.easeOut, onComplete:function(){
      			if((i+1) == $('.products .prod').length){
      				if(localStorage.getItem(_thisStorageName) == null){
      					localStorage.setItem(_thisStorageName, 1);
      				}
      				setInterval(checkStorage, _thisStorageDuration);
      			}
      		}});
      		$(obj).click(function(){
				localStorage.setItem(_thisStorageName, parseInt($(this).index() + 1));
			});
      	});
      	
      	var index = 0;
    	if(localStorage.getItem(_thisStorageName) != null){
      		index = parseInt(localStorage.getItem(_thisStorageName) - 1);
      	}
      	$('.backgrounds .color').not(':eq('+ index +')').hide();
      	console.log('banner - tablets');
    }
    
    function checkStorage()
    {
         if(localStorage.getItem(_thisStorageName) == null) return;
         
        _thisStorageID = parseInt(localStorage.getItem(_thisStorageName));
        
        if(_thisStorageID != _thisStoragePrevID)
        {
        	setTimeout(function(){
        		
        	}, 250);
        	
			if(_thisInit){
				_thisInit = false;
			} else {
				$('.backgrounds .color').fadeOut();
				$('.backgrounds .color').eq(_thisStorageID - 1).fadeIn();
			}
			
			$('.products .prod').removeClass('active');
			$('.products .prod').animate({'top':'-82px'}, 500);
			$('.products .prod'+ _thisStorageID).animate({'top':'-100px'}, 500, function(){
				$('.products .prod'+ _thisStorageID).addClass('active');
			});
			
			trackEventProduct(_thisStorageID);
			_thisStoragePrevID = _thisStorageID;
		}
    }
    
    function trackEventProduct(thisID)
    {
    	switch(thisID){
			case 2:
				ADTECH.event('Banner display colour emerald green');
				break;
			case 3:
				ADTECH.event('Banner display colour raspberry');
				break;
			case 4:
				ADTECH.event('Banner display colour red');
				break;
			case 5:
				ADTECH.event('Banner display colour velvet');
				break;
			default:
				ADTECH.event('Banner display colour blue');
		}
    }
    
});
