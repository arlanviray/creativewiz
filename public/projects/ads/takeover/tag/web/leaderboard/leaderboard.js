/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
$(document).ready(function(){// localStorage feature detect
function e(){return"undefined"!=typeof Storage}function r(){c=parseInt(localStorage.getItem("adTakeoverID"))+(u-1),c!=t&&(clearInterval(i),n?(TweenMax.to($(".carousel .carouselholder .products img"),0,{scaleX:.75,scaleY:.75}),TweenMax.to($(".carousel .carouselholder img").eq(c+2),0,{scaleX:1,scaleY:1}),TweenMax.to($(".carousel .carouselholder"),0,{x:-(166*c)}),o(),n=!1,h&&(l(),h=!1)):(TweenMax.to($(".carousel .carouselholder img"),.5,{scaleX:.75,scaleY:.75}),TweenMax.to($(".carousel .carouselholder img").eq(c+2),.5,{scaleX:1,scaleY:1}),TweenMax.to($(".carousel .carouselholder"),.5,{x:-(166*c),onComplete:function(){o(),(0>=c||c>=2*u)&&(n=!0,localStorage.setItem("adTakeoverID",1)),// no interfence from above local storage setting
h&&!n&&(l(),h=!1)}})),t=c)}function a(e){switch(e){case 2:case-3:// _thisID = 4;
ADTECH.event("Product Display - Carrera Calibre 16 Day-Date Automatic Chronograph 41mm");break;case 3:case-2:// _thisID = 5;
ADTECH.event("Product Display - Aquaracer 500m Calibre 16 Automatic Chronograph 43mm");break;case 4:case-1:// _thisID = 1;
ADTECH.event("Product Display - Carrera Calibre 8 Grande Date Automatic 41mm");break;case 5:case 0:// _thisID = 2;
ADTECH.event("Product Display - Carrera Calibre 16 Day Date Chronograph 41mm");break;default:// _thisID = 3;
ADTECH.event("Product Display - Carrera Calibre 1887 Chronograph 43mm")}}function o(){i=setInterval(function(){l()},1e4)}function l(){"left"==d?$(".arrows .btnArrowLeft").click():$(".arrows .btnArrowRight").click()}var c,t,s=100,n=!0,u=5,i,d,h=!1;e()&&(// init
$(".carousel .carouselholder .products").clone().appendTo(".carousel .carouselholder"),$(".carousel .carouselholder .products").eq(1).clone().prependTo(".carousel .carouselholder"),$(".carousel .carouselholder").append('<div class="clr"></div>'),setInterval(r,s),$(".arrows .btnArrowLeft").click(function(){TweenMax.isTweening($(".carousel .carouselholder"))||(d="left",c=parseInt(localStorage.getItem("adTakeoverID")),c--,// track
a(c),localStorage.setItem("adTakeoverID",c))}),$(".arrows .btnArrowRight").click(function(){TweenMax.isTweening($(".carousel .carouselholder"))||(d="right",c=parseInt(localStorage.getItem("adTakeoverID")),c++,// track
a(c),localStorage.setItem("adTakeoverID",c))}),$(".carousel .carouselholder img").click(function(){if(!TweenMax.isTweening($(".carousel .carouselholder"))){var e=$(".carousel .carouselholder img").eq(c+2).offset().left,r=$(this).offset().left;e>r&&(d="left",e-r>200&&(h=!0),$(".arrows .btnArrowLeft").click()),r>e&&(d="right",r-e>200&&(h=!0),$(".arrows .btnArrowRight").click())}}))});