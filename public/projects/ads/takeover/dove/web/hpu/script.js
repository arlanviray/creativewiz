/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
!function(t,e,o){function n(){l.from(".txt1",f,{opacity:0,left:"-=100"}),l.from(".txt2",f,{opacity:0,left:"-=100"}),l.from(".txt3",f,{opacity:0,left:"-=100"}),l.from(".txt4",f,{opacity:0,left:"-=100"}),l.from(".txt5",f,{opacity:0,left:"-=100"}),l.from(".cta",f,{opacity:0,top:"+=40"})}var a=!1,f=.5,i=.25,l=new TimelineMax({paused:!1,onReverseComplete:function(){TweenMax.delayedCall(1,function(){l.play()})},onComplete:function(){TweenMax.delayedCall(5,function(){l.reverse()})}});t(n)}(jQuery,window);