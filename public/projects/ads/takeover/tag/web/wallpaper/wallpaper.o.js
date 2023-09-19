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
	var _thisID = 0;
	var _thisPrevID = 0;
	
    // localStorage feature detect
    function supportsLocalStorage()
    {
        return typeof(Storage) !== 'undefined';
        alert('Sorry, but the browser you are using is very old, please update your browser for the best experience!');
    }
    
    if(supportsLocalStorage())
    {
    	// init
    	setInterval(checkStorage, _thisStorageDuration);
    }
    
    function checkStorage()
    {
        _thisStorageID = parseInt(localStorage.getItem('adTakeoverID'));
        if(_thisStorageID != _thisStoragePrevID)
        {
			switch(_thisStorageID){
				case 2: case -3:
					_thisID = 4;
					break;
				case 3: case -2:
					_thisID = 5;
					break;
				case 4: case -1:
					_thisID = 1;
					break;
				case 5: case 0:
					_thisID = 2;
					break;
				default:
					_thisID = 3;
			}
			
			if(_thisInit){
				
				// $('.watches').html('<div class="watch watch'+ _thisID +'"><img src="'+ ADTECH.getFileUrl('wallpaper_left_watch_'+ _thisID +'.png') +'" /></div>');
				$('.watches').find('.watch'+ _thisID).css('left', 0);
				_thisInit = false;
				
			} else {
				
				if(_thisID != _thisPrevID){
					var currentElem = $('.watches').find('.watch'+ _thisPrevID);
					TweenMax.to(currentElem, 0.35, {css:{left:-320, opacity:0}, ease:Linear.easeNone, onComplete:function(){
						// $(currentElem).remove();
						$(currentElem).css('left', 320);
					}});
					
					// next
					// $('.watches').prepend('<div class="watch watch'+ _thisID +'" style="left:320px;"><img src="'+ ADTECH.getFileUrl('wallpaper_left_watch_'+ _thisID +'.png') +'" /></div>');
					$('.watches').find('.watch'+ _thisID).css('opacity', 1);
					TweenMax.to($('.watches').find('.watch'+ _thisID), 0.35, {css:{left:0}, ease:Linear.easeNone});
				}
				
			}
			
			_thisPrevID = _thisID;
			_thisStoragePrevID = _thisStorageID;
		} 
    }
    
});
