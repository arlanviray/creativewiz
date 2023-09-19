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
	var _data = {
		"products": [
			{
				"title": "Carrera Calibre 8 Grande Date Automatic 41mm",
				"price": "&pound;2,750",
				"copies": [
					{
						"txt": "COSC certification ensuring the highest standards of accuracy and reliability",
					},
					{
						"txt": "GMT second timezone function, perfect for frequent international travellers",
					}
				],
				"link": "https://shop-uk.tagheuer.com/en/calibre-8-gmt-and-grande-date-automatic-watch-41mm-war5010-fc6266.html",
			},
			{
				"title": "Carrera Calibre 16 Day Date Chronograph 41mm",
				"price": "&pound;3,295",
				"copies": [
					{
						"txt": "A must have chronograph for all those motor racing lovers",
					},
					{
						"txt": "Juan Manuel Fangio caseback inscription paying homage to its racing heritage",
					}
				],
				"link": "https://shop-uk.tagheuer.com/en/calibre-16-day-date-automatic-chronograph-41-mm-cv201ag-fc6266.html",
			},
			{
				"title": "Carrera Calibre 1887 Automatic Chronograph 43mm",
				"price": "&pound;4,095",
				"copies": [
					{
						"txt": "Designed to be the most easily readable chronograph",
					},
					{
						"txt": "Equipped with the TAG Heuer exclusive 1887 in-house movement",
					}
				],
				"link": "https://shop-uk.tagheuer.com/en/calibre-1887-automatic-chronograph-43-mm-car2a10-ba0799.html",
			},
			{
				"title": "Carrera Calibre 1887 Automatic Chronograph 43mm",
				"price": "&pound;4,595",
				"copies": [
					{
						"txt": "High quality polished rose gold numerals, hands, chronograph hands and TAG Heuer logo",
					},
					{
						"txt": "In-house manufacture movement complete with innovative Heuer chronograph system",
					}
				],
				"link": "https://shop-uk.tagheuer.com/en/carrera-calibre-1887-automatic-chronograph-43mm-car2014-fc6235.html",
			},
			{
				"title": "Aquaracer 500m Calibre 16 Automatic Chronograph 43mm",
				"price": "&pound;2,995",
				"copies": [
					{
						"txt": "Automatic helium release valve protects the watch from any depressurisation damage",
					},
					{
						"txt": "Superluminova hour markers and hands gives excellent visibility at any depth",
					}
				],
				"link": "https://shop-uk.tagheuer.com/en/500m-calibre-16-automatic-chronograph-43mm-cak2110-ba0833.html",
			}
		]
	}
	
    // localStorage feature detect
    function supportsLocalStorage()
    {
        return typeof(Storage) !== 'undefined';
        alert('Sorry, but the browser you are using is very old, please update your browser for the best experience!');
    }

    if(supportsLocalStorage())
    {
      	// init
      	if(localStorage.getItem('adTakeoverID') === null){
      		localStorage.setItem('adTakeoverID', 1);
      	}
		
		setInterval(checkStorage, _thisStorageDuration);
		
		$('.buttons .shopnow').on('click', function(){
			if(navigator.appVersion.indexOf('MSIE 9.') != -1){
			
				window.open(_data.products[_thisID - 1].link, '_blank');
				
			} else {
				switch(_thisID)
				{
					case 1:
						ADTECH.click('Carrera Calibre 8 Grande Date Automatic 41mm');
						break;
					case 2:
						ADTECH.click('Carrera Calibre 16 Day Date Chronograph 41mm');
						break;
					case 3:
						ADTECH.click('Carrera Calibre 1887 Chronograph 43mm');
						break;
					case 4:
						ADTECH.click('Carrera Calibre 16 Day-Date Automatic Chronograph 41mm');
						break;
					case 5:
						ADTECH.click('Aquaracer 500m Calibre 16 Automatic Chronograph 43mm');
						break;
				}
			}
		});
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
				
				$('.image img').eq(_thisID - 1).css({opacity:1});
				$('.copies .txtholder').html('<div class="txt txt'+ _thisID +'">'+ getCopies(_thisID) +'</div>')
				_thisInit = false;
				
			} else {
				
				if(_thisID != _thisPrevID){
					TweenMax.to($('.image').find('.img'+ _thisPrevID), 0.5, {css:{opacity:0}});
					TweenMax.to($('.image').find('.img'+ _thisID), 0.5, {css:{opacity:1}});
					
					var currentElem = $('.copies .txtholder').find('.txt'+ _thisPrevID);
					TweenMax.to(currentElem, 0.35, {css:{top:148, opacity:0}, ease:Linear.easeNone, onComplete:function(){
						$(currentElem).remove();
					}});
					
					// next
					$('.copies .txtholder').prepend('<div class="txt txt'+ _thisID +'" style="top:-148px;">'+ getCopies(_thisID) +'</div>');
					TweenMax.to($('.copies .txtholder').find('.txt'+ _thisID), 0.35, {css:{top:0}, ease:Linear.easeNone});
				}
				
			}
			
			_thisPrevID = _thisID;
			_thisStoragePrevID = _thisStorageID;
		} 
    }
    
    function getCopies(id)
    {
    	var id = id - 1;
    	var html = '';
    	$.each(_data.products, function(i, obj){
    		if(id == i){
    			html += '<h2>'+ obj.title +'</h2>';
    			html += '<h3>'+ obj.price +'</h3>';
    			html += '<ul>';
					$.each(obj.copies, function(ci, cobj){
						html += '<li>'+ cobj.txt +'</li>';
					});
    			html += '</ul>';
    		}
    	});
    	
    	return html;
    }
    
});
