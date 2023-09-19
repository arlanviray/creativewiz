/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){// localStorage feature detect
function e(){return"undefined"!=typeof Storage}function a(){if(t=parseInt(localStorage.getItem("adTakeoverID")),t!=c){switch(t){case 2:case-3:o=4;break;case 3:case-2:o=5;break;case 4:case-1:o=1;break;case 5:case 0:o=2;break;default:o=3}if(n)// $('.watches').html('<div class="watch watch'+ _thisID +'"><img src="'+ ADTECH.getFileUrl('wallpaper_left_watch_'+ _thisID +'.png') +'" /></div>');
$(".watches").find(".watch"+o).css("left",0),n=!1;else if(o!=i){var e=$(".watches").find(".watch"+i);TweenMax.to(e,.35,{css:{left:-320,opacity:0},ease:Linear.easeNone,onComplete:function(){// $(currentElem).remove();
$(e).css("left",320)}}),// next
// $('.watches').prepend('<div class="watch watch'+ _thisID +'" style="left:320px;"><img src="'+ ADTECH.getFileUrl('wallpaper_left_watch_'+ _thisID +'.png') +'" /></div>');
$(".watches").find(".watch"+o).css("opacity",1),TweenMax.to($(".watches").find(".watch"+o),.35,{css:{left:0},ease:Linear.easeNone})}i=o,c=t}}var t,c,s=100,n=!0,f=5,o=0,i=0;e()&&// init
setInterval(a,s)});