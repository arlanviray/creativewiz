/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){

	$(init);
	function init()
	{
		var _expiryDate = new Date(2025, 5-1, 5, 00, 00);
		var _newDate = new Date();
		var _currentDate = new Date(_newDate.getFullYear(), _newDate.getMonth(), _newDate.getDate(), _newDate.getHours(), _newDate.getMinutes());
	  	if(_expiryDate <= _currentDate){
			timerComplete();
		}
	  
		$('#timer').countdown({
			// Use this code to countdown from 10 seconds to test expiry event works
			// until: '+0d +0h +0m +10s',
			until: _expiryDate,
			format: 'DHMS',
			onExpiry: function(){
				timerComplete();
			}
		});
	}
	
	function timerComplete()
	{
		$('#timer').remove();
	}
	
})(jQuery, window);


