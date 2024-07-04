/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPod/i);
	},
	iPad: function() {
		return navigator.userAgent.match(/iPad/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

function _gaTrackingEvent(action, label, value, noninteraction)
{
	// tracking
	var category = _this.project;
	if(value){
		if(noninteraction){
			_gaq.push(['_trackEvent', category, action, label, value, noninteraction]);
			_gaq.push(['pmTracker._trackEvent', category, action, label, value, noninteraction]);
			console.log('TrackEvent: '+ category +' >> '+ action +' >> '+ label +' >> '+ value +' >> '+ noninteraction);
		} else {
			_gaq.push(['_trackEvent', category, action, label, value]);
			_gaq.push(['pmTracker._trackEvent', category, action, label, value]);
			console.log('TrackEvent: '+ category +' >> '+ action +' >> '+ label +' >> '+ value);
		}
	} else {
		_gaq.push(['_trackEvent', category, action, label]);
		_gaq.push(['pmTracker._trackEvent', category, action, label]);
		console.log('TrackEvent: '+ category +' >> '+ action +' >> '+ label);
	}
}

function _gaTrackingPageview(pageview)
{
	_gaq.push(['_trackPageview', pageview]); 
	_gaq.push(['pmTracker._trackPageview', pageview]);
	console.log('TrackPageview: '+ pageview);
}

function windowOpen(url, notracking)
{
	if(notracking){
		window.open(url);
	} else {
		window.open(url + _this.clientTracking);
	}
}

function windowLocation(url)
{
	window.location.href = url;
}

function base64Encode(str)
{
	return base64_encode(str);
}

function base64Decode(str)
{
	return base64_decode(str);
}

function randomNum(minVal, maxVal, floatVal)
{
	var randVal = minVal + (Math.random() * (maxVal - minVal));
	return typeof floatVal=='undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
}

function removeArrayItem(arr, item) {
	var remCounter = 0;
	for(var index = 0; index < arr.length; index++){
		if(arr[index] === item){
			arr.splice(index, 1);
			remCounter++;
			index--;
		}
	}
	
	return remCounter;
}

function arrayShuffle(o)
{
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

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

function isValidEmailAddress(email)
{
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
}

function isValidPhoneNumber(phone)
{
   var pattern = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/i);
   return pattern.test(phone); 
}

function oldIE()
{
	if(navigator.appVersion.indexOf('MSIE 10.') != -1 || navigator.appVersion.indexOf('MSIE 9.') != -1 || navigator.appVersion.indexOf('MSIE 8.') != -1)
		return true;
	else
		return false;
}

function ltIE10()
{
	if(navigator.appVersion.indexOf('MSIE 9.') != -1 || navigator.appVersion.indexOf('MSIE 8.') != -1)
		return true;
	else
		return false;
}
