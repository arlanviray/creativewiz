/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
!function(e,a,t){function o(){//TweenMax.from($('.logo'), 2, {css:{y:-100}, ease:Bounce.easeOut});
s()}function s(){TweenMax.to(e(".frame1 .txt1"),l,{css:{opacity:1}}),TweenMax.from(e(".frame1 .txt1"),l,{css:{left:-184}}),TweenMax.to(e(".frame1 .txt2"),l,{css:{opacity:1},delay:i}),TweenMax.from(e(".frame1 .txt2"),l,{css:{left:-184},delay:i,onComplete:function(){TweenMax.delayedCall(p,function(){TweenMax.to(e(".frame1 .txt1"),i,{css:{opacity:0,top:290},delay:i}),TweenMax.to(e(".frame1 .txt2"),i,{css:{opacity:0,top:290},onComplete:c})})}})}function c(){TweenMax.to(e(".backg .bg2"),l,{css:{opacity:1}}),TweenMax.to(e(".frame2 .item3"),l,{css:{opacity:1}}),TweenMax.from(e(".frame2 .item3"),l,{css:{left:970}}),TweenMax.to(e(".frame2 .item1"),8,{css:{rotation:360},repeat:-1,ease:Linear.easeNone}),TweenMax.to(e(".frame2 .item1"),i,{css:{opacity:1},delay:i}),TweenMax.from(e(".frame2 .item1"),i,{css:{scaleX:.5,scaleY:.5},delay:i}),TweenMax.to(e(".frame2 .item2"),8,{css:{rotation:-360},repeat:-1,ease:Linear.easeNone}),TweenMax.to(e(".frame2 .item2"),i,{css:{opacity:1},delay:l}),TweenMax.from(e(".frame2 .item2"),i,{css:{scaleX:.5,scaleY:.5},delay:l}),TweenMax.to(e(".frame2 .txt1"),l,{css:{opacity:1},delay:i}),TweenMax.from(e(".frame2 .txt1"),l,{css:{left:-184},delay:i}),TweenMax.to(e(".frame2 .txt2"),l,{css:{opacity:1},delay:l}),TweenMax.from(e(".frame2 .txt2"),l,{css:{left:-184},delay:l,onComplete:function(){TweenMax.delayedCall(p,function(){TweenMax.to(e(".frame2"),i,{css:{opacity:0,top:-350}}),n()})}})}function n(){TweenMax.to(e(".backg .bg3, .backg .overlay"),l,{css:{opacity:1}}),TweenMax.from(e(".backg .overlay"),l,{css:{top:250}}),TweenMax.to(e(".frame3 .item1"),8,{css:{rotation:360},repeat:-1,ease:Linear.easeNone}),TweenMax.to(e(".frame3 .item1"),i,{css:{opacity:1},delay:i}),TweenMax.from(e(".frame3 .item1"),i,{css:{top:300},delay:i}),TweenMax.to(e(".frame3 .item3"),8,{css:{rotation:360},repeat:-1,ease:Linear.easeNone}),TweenMax.to(e(".frame3 .item3"),i,{css:{opacity:1},delay:l}),TweenMax.from(e(".frame3 .item3"),i,{css:{top:300},delay:l}),TweenMax.to(e(".frame3 .item4"),i,{css:{opacity:1},delay:.75}),TweenMax.from(e(".frame3 .item4"),i,{css:{top:300},delay:.75}),TweenMax.to(e(".frame3 .txt1"),i,{css:{opacity:1},delay:.75}),TweenMax.from(e(".frame3 .txt1"),i,{css:{left:500},delay:.75}),TweenMax.to(e(".frame3 .txt2"),i,{css:{opacity:1},delay:1}),TweenMax.from(e(".frame3 .txt2"),i,{css:{left:500},delay:1,onComplete:function(){TweenMax.delayedCall(p,function(){TweenMax.to(e(".frame3"),i,{css:{opacity:0,left:1e3}}),r()})}})}function r(){TweenMax.to(e(".backg .bg4"),l,{css:{opacity:1}}),TweenMax.to(e(".frame4 .txt1"),l,{css:{opacity:1}}),TweenMax.from(e(".frame4 .txt1"),l,{css:{rotation:360,scaleX:.25,scaleY:.25}}),TweenMax.to(e(".frame4 .txt2"),l,{css:{opacity:1},delay:.5}),TweenMax.from(e(".frame4 .txt2"),l,{css:{rotation:360,scaleX:.25,scaleY:.25},delay:.5}),TweenMax.to(e(".frame4 .txt3"),l,{css:{opacity:1},delay:1}),TweenMax.from(e(".frame4 .txt3"),l,{css:{rotation:360,scaleX:.25,scaleY:.25},delay:1,onComplete:function(){TweenMax.delayedCall(p,function(){TweenMax.to(e(".backg .overlay"),l,{css:{top:250}}),TweenMax.to(e(".frame4 .txt1"),i,{css:{opacity:0,scaleX:1.5,scaleY:1.5}}),TweenMax.to(e(".frame4 .txt2"),i,{css:{opacity:0,scaleX:1.5,scaleY:1.5},delay:i,onComplete:m}),TweenMax.to(e(".frame4 .txt3"),i,{css:{opacity:0,scaleX:1.5,scaleY:1.5},delay:l,onComplete:function(){TweenMax.to(e(".frame4 .txt1, .frame4 .txt2, .frame4 .txt3"),0,{css:{scaleX:1,scaleY:1}})}})})}})}function m(){TweenMax.to(e(".backg .bg5"),l,{css:{opacity:1}}),TweenMax.to(e(".frame5 .txt1"),i,{css:{opacity:1},delay:l}),TweenMax.from(e(".frame5 .txt1"),i,{css:{top:-60},delay:l}),TweenMax.to(e(".frame5 .txt2"),i,{css:{opacity:1},delay:i}),TweenMax.from(e(".frame5 .txt2"),i,{css:{top:-60},delay:i}),TweenMax.to(e(".frame5 .txt3"),i,{css:{opacity:1}}),TweenMax.from(e(".frame5 .txt3"),i,{css:{top:-60}}),TweenMax.to(e(".frame5 .cta"),i,{css:{opacity:1}}),TweenMax.from(e(".frame5 .cta"),i,{css:{top:260}}),TweenMax.to(e(".frame5 .items"),i,{css:{opacity:1},delay:i}),TweenMax.from(e(".frame5 .items"),i,{css:{top:970},delay:i}),TweenMax.to(e(".frame5 .logo"),l,{css:{opacity:1},delay:1}),TweenMax.from(e(".frame5 .logo"),l,{css:{scaleX:.25,scaleY:.25},delay:1}),5>=w&&(f(),TweenMax.delayedCall(4,function(){TweenMax.to(e(".backg .bg5"),l,{css:{opacity:0}}),TweenMax.to(e(".frame5"),i,{css:{opacity:0,top:250},onComplete:function(){e(".frame5").removeAttr("style"),e(".frame5 img").css({opacity:0})}}),s()})),w++}function f(){e(".frame1 .txt1, .frame1 .txt2").removeAttr("style"),e(".frame1 .txt1").css({top:parseInt(e(".frame1 .txt1").css("top").replace("px","")),left:parseInt(e(".frame1 .txt1").css("left").replace("px",""))}),e(".frame1 .txt2").css({top:parseInt(e(".frame1 .txt2").css("top").replace("px","")),left:parseInt(e(".frame1 .txt2").css("left").replace("px",""))}),e(".frame2").removeAttr("style"),e(".frame2 img").css({opacity:0}),e(".frame3").removeAttr("style"),e(".frame3 img").css({opacity:0}),e(".backg .bg2, .backg .bg3, .backg .bg4").css({opacity:0}),e(".backg .overlay").removeAttr("style")}var x=!1,l=.5,i=.25,y=new TimelineMax({paused:!0,onReverseComplete:function(){},onComplete:function(){}}),p=2,w=0;e(o)}(jQuery,window);