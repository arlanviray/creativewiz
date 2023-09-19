/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
!function(t,o,e){function n(){c()}function c(){for(var t=1;2>=t;t++)a.from(".gp"+t+".txt1",f,{css:{opacity:0,left:-300}}),a.from(".gp"+t+".txt2",f,{css:{opacity:0,left:300}}),a.from(".gp"+t+".txt3",f,{css:{opacity:0,top:524}}),a.from(".gp"+t,f,{css:{opacity:1},delay:2});a.play()}var p=!1,f=.5,i=.25,a=new TimelineMax({paused:!0,onReverseComplete:function(){},onComplete:function(){a.restart()}});t(n)}(jQuery,window);