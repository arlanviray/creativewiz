/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
!function(e,n,a){function t(){r(),u=e(".btnContainer").css("top"),v=e(".btnContainer a").html(),// mouse events
e(".btnVideo").click(o),e(".btnClose").hover(function(){TweenMax.to(e(this).find("img"),d,{rotation:90})},function(){TweenMax.to(e(this).find("img"),d,{rotation:0})}).click(function(){i()})}function o(){ADTECH.expand(),p=!0,s.play(),m()}function i(){ADTECH.contract(),p=!1,s.reverse(),m()}function r(){s.add(TweenMax.to("#contents",l,{css:{width:600}})),s.insert(TweenMax.to([".picContainer .pic1",".picContainer .pic2"],d,{css:{width:200}}))}function m(){p?e(".btnVideo").hide():(e(".btnClose").hide(),e(".videoContainer").hide(),e(".videoContainer .video").empty()),TweenMax.to(".btnContainer",d,{css:{top:620},onComplete:function(){var n;n=p?"GET THE LOOK":v,e(".btnContainer a").html(n),TweenMax.to(".btnContainer",l,{css:{top:u}}),TweenMax.to(".btnContainer .btnGetthelook",.75,{css:{width:p?140:180}})}})}function c(){e(".videoContainer .video").empty().html('<div style="display:none"></div><object id="myExperience" class="BrightcoveExperience"><param name="wmode" value="transparent" /><param name="width" value="600" /><param name="height" value="339" /><param name="playerID" value="1174938201001" /><param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDjMpoBoiFF9EF1-FPk0PWET" /><param name="isVid" value="true" /><param name="isUI" value="true" /><param name="dynamicStreaming" value="true" /><param name="autoStart" value="true" /><param name="includeAPI" value="true" /><param name="templateLoadHandler" value="onTemplateLoaded" /><param name="templateReadyHandler" value="onTemplateReady" /><param name="@videoPlayer" value="3384279487001" /></object><script type="text/javascript">brightcove.createExperiences();</script>')}var p=!1,l=.5,d=.25,s=new TimelineMax({paused:!0,onReverseComplete:function(){e(".btnVideo").show()},onComplete:function(){e(".btnClose").show(),e(".videoContainer").show(),TweenMax.delayedCall(l,c)}}),u,v;e(t)}(jQuery,window);