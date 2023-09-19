/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
!function(e,a,t){function o(){TweenMax.set(".txt",{opacity:0}),n()}function n(){TweenMax.to(".char .txt1",r,{opacity:1,delay:.5}),TweenMax.to(".char .txt2",r,{opacity:1,delay:1}),TweenMax.to(".char .head",r,{rotation:-10,delay:1.5}),TweenMax.to(".char .head",r,{rotation:0,delay:1.75}),TweenMax.to(".char .head",r,{rotation:-10,delay:2}),TweenMax.to(".char .head",r,{rotation:0,delay:2.25}),TweenMax.to(".char .txt",r,{opacity:0,delay:5,onComplete:n})}var c=!1,i=.5,r=.25,d=new TimelineMax({paused:!0,onReverseComplete:function(){},onComplete:function(){}});e(o)}(jQuery,window);