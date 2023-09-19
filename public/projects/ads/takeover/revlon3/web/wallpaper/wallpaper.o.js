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
    	var index = 0;
    	if(localStorage.getItem(_thisStorageName) != null){
      		index = parseInt(localStorage.getItem(_thisStorageName) - 1);
      	}
      	$('.col.col1 .backgrounds .color').not(':eq('+ index +')').hide();
		$('.col.col2 .backgrounds .color').not(':eq('+ index +')').hide();
		$('.col.col1 .pics .pic').not(':eq('+ index +')').hide();
		$('.col.col2 .pics .pic').not(':eq('+ index +')').hide();
		TweenMax.to($('.col.col1 .pics'), 0.5, {delay:0.5, css:{'left':94}});
		TweenMax.to($('.col.col2 .pics'), 0.5, {delay:0.5, css:{'right':94}});
		$('.col.col1 .products .prod').not(':eq('+ index +')').hide();
		$('.col.col2 .products .prod').not(':eq('+ index +')').hide();
		
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
				$('.col.col1 .backgrounds .color, .col.col2 .backgrounds .color').fadeOut();
				$('.col.col1 .backgrounds .color').eq(_thisStorageID - 1).fadeIn();
				$('.col.col2 .backgrounds .color').eq(_thisStorageID - 1).fadeIn();
				TweenMax.to($('.col.col1 .pics'), 0.25, {css:{'left':304}, onComplete:function(){
					$('.col.col1 .pics .pic').hide().eq(_thisStorageID - 1).show();
					$('.col.col1 .products .prod').not(':eq('+ (_thisStorageID - 1) +')').hide();
					TweenMax.to($('.col.col1 .pics'), 0.5, {css:{'left':94}});
				}});
				TweenMax.to($('.col.col2 .pics'), 0.25, {css:{'right':304}, onComplete:function(){
					$('.col.col2 .pics .pic').hide().eq(_thisStorageID - 1).show();
					TweenMax.to($('.col.col2 .pics'), 0.5, {css:{'right':94}});
				}});
				$('.col.col1 .products .prod, .col.col2 .products .prod').fadeOut();
				$('.col.col1 .products .prod').eq(_thisStorageID - 1).fadeIn();
				$('.col.col2 .products .prod').eq(_thisStorageID - 1).fadeIn();
			}
			
			trackEventProduct(_thisStorageID);
			_thisStoragePrevID = _thisStorageID;
		}
    }
    
    function trackEventProduct(thisID)
    {
    	switch(thisID){
			case 2:
				ADTECH.event('Wallpaper display colour emerald green');
				break;
			case 3:
				ADTECH.event('Wallpaper display colour raspberry');
				break;
			case 4:
				ADTECH.event('Wallpaper display colour red');
				break;
			case 5:
				ADTECH.event('Wallpaper display colour velvet');
				break;
			default:
				ADTECH.event('Wallpaper display colour blue');
		}
    }
    
});
