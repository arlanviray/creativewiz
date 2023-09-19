/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
  
  var _reset = false;
  var _normDuration = 0.5;
  var _fastDuration = 0.25;
  var _timeline = new TimelineMax({
    'paused':true, 
    onReverseComplete:function(){
      ADTECH.contract();
    }, 
    onComplete:function(){}
  });
  var _sliderTipID = 1;
  var _sliderTipTotal;
  var _sliderProductID = 1;
  var _sliderProductTotal;
  var _videoID;
  var _videoIDArray = {
    "data": [
      {
        "videoId": "3264603521001",
        "title": "<span class=\"italic\">Prepare</span> TO BARE",
      },
      {
        "videoId": "3355675267001",//3264595046001
        "title": "<span class=\"italic\">Walk</span> TALLER",//Fashion NEWS
      }
    ]
  }
  
  $(init);
  function init()
  {
    setExpand();
    TweenMax.to('#logo', 0, {scaleX:0.8, scaleY:0.8});
    _sliderTipTotal = $('.sliderTip ul > li').size();
    _sliderProductTotal = $('.sliderProduct ul > li').size();
    
    $('.sliderTip ul li').eq(0).clone().appendTo('.sliderTip ul');
    $('.sliderTip ul li').eq(_sliderTipTotal - 1).clone().prependTo('.sliderTip ul').parent().append('<div class="clr"></div>');
    $('.sliderProduct ul li').eq(0).clone().appendTo('.sliderProduct ul');
    $('.sliderProduct ul li').eq(_sliderProductTotal - 1).clone().prependTo('.sliderProduct ul').parent().append('<div class="clr"></div>');
    
    // mouse events
    $('#hpu').click(adtechExpand);//$('#hpu').click();
    $('.btnBuy').hide();
    $('.btnCloseContract, .btnCloseRead, .btnCloseVideo').hover(
      function(){
        TweenMax.to($(this).find('img'), _fastDuration, {rotation:-90});
      },
      function(){
        TweenMax.to($(this).find('img'), _fastDuration, {rotation:0});
      }
    );
    
    $('.btnCloseContract').click(adtechContract);
    
    $('.btnRead').click(function(e){
      e.preventDefault();
      ADTECH.event('Read more');
      $(this).hide();
      $('.btnCloseRead, .btnBuy').show();
      $('.panelBottom .col2 .row1 .bodycopy').slideDown(350);
      TweenMax.to('.panelBottom .col2 .row1', _fastDuration, {css:{'height':600}});
    });
    
    $('.btnCloseRead').click(function(){
      $('.btnCloseRead, .btnBuy').hide();
      $('.btnRead').show();
      $('.panelBottom .col2 .row1 .bodycopy').slideUp(150);
      TweenMax.to('.panelBottom .col2 .row1', _fastDuration, {css:{'height':300}});
    });
    
    $('.videoThumb .thumb').click(function(){
      if($(this).hasClass('video1')){
        ADTECH.event('Watched video1');
        $('.overlay .content h2').html(_videoIDArray.data[0].title);
        _videoID = 1;
      } else {
        ADTECH.event('Watched video2');
        $('.overlay .content h2').html(_videoIDArray.data[1].title);
        _videoID = 2;
      }
      getVideo();
    });
    
    $('.btnCloseVideo').click(function(){
    	$(this).hide();
      	$('.overlay').hide();
      	$('.overlay .content').removeAttr('style');
      	$('.videoContainer .video').empty();
    });
    
    $('.sliderTip .left, .sliderTip .right').click(function(){
      if(!TweenMax.isTweening($('.sliderTip ul'))){
        if($(this).hasClass('left')){
          ADTECH.event('SliederTip clicked arrow left');
          if(_sliderTipID > 0){
            _sliderTipID--;
          }
        } else {
          ADTECH.event('SliederTip clicked arrow right');
          if(_sliderTipID < _sliderTipTotal + 1){
            _sliderTipID++;
          }
        }
        getSliderTip();
      }
    });
    
    $('.sliderProduct .left, .sliderProduct .right').click(function(){
      if(!TweenMax.isTweening($('.sliderProduct ul'))){
        if($(this).hasClass('left')){
          ADTECH.event('SliederProduct clicked arrow left');
          if(_sliderProductID > 0){
            _sliderProductID--;
          }
        } else {
          ADTECH.event('SliederProduct clicked arrow right');
          if(_sliderProductID < _sliderProductTotal + 1){
            _sliderProductID++;
          }
        }
        getSliderProduct();
      }
    });
  }
  
  function adtechExpand()
  {
    ADTECH.expand();
    _reset = true;
    _timeline.play();
    setEvents();
    TweenMax.from($('.panelTop .mainImage img'), _normDuration, {opacity:0, skewX:'45deg', delay:1.5});
    TweenMax.from($('.panelTop .videoThumb'), _normDuration, {css:{'top':0}, delay:1.5});
    TweenMax.from($('.panelTop .videoThumb .thumb'), _normDuration, {rotation:-10, delay:2, onComplete:function(){
      $('.btnCloseContract').show()
    }});
    TweenMax.from($('.panelTop .videoThumb .title'), _normDuration, {css:{'bottom':-40, 'opacity':0}, delay:2.5, ease:Back.easeOut});
  }
  
  function adtechContract()
  {
    _reset = false;
    _timeline.reverse();
    setEvents();
  }
  
  function setExpand()
  {
    _timeline.add(TweenMax.to('#logo', _fastDuration, {css:{'opacity':0}}));
    _timeline.add(TweenMax.to('#hpu', _normDuration, {css:{'right':-600}, delay:_fastDuration}));
    _timeline.add(TweenMax.to('#expand', _normDuration, {css:{'left':0}}));
    _timeline.add(TweenMax.to('#logo', _fastDuration, {css:{'top':64, 'left':22, 'opacity':1, scaleX:1, scaleY:1}}));
    _timeline.add(TweenMax.to('.panelBottom', _fastDuration, {css:{'top':600}}));
    _timeline.add(TweenMax.to('.panelBottom .footerProduct', _fastDuration, {css:{'bottom':0}, delay:_normDuration}));
  }
  
  function setEvents()
  {
    if(_reset){
      
    } else {
      $('.btnCloseContract').hide();
    }
  }
  
  function getSliderTip()
  {
    var sliderWidth = $('.sliderTip ul li').width();
    TweenMax.to('.sliderTip ul', _normDuration, {css:{'left':-(sliderWidth * _sliderTipID)}, onComplete:function(){
      if(_sliderTipID == 0){
        _sliderTipID = _sliderTipTotal;
      }
      if(_sliderTipID == _sliderTipTotal + 1){
        _sliderTipID = 1;
      }
      TweenMax.to('.sliderTip ul', 0, {css:{'left':-(sliderWidth * _sliderTipID)}});
    }});
  }
  
  function getSliderProduct()
  {
    var sliderWidth = $('.sliderProduct ul li').width();
    TweenMax.to('.sliderProduct ul li img', _normDuration, {css:{'opacity':0, scaleX:0.25, scaleY:0.25}});
    TweenMax.to($('.sliderProduct ul li').eq(_sliderProductID).find('img'), _normDuration, {css:{'opacity':1, scaleX:1, scaleY:1}});
    TweenMax.to('.sliderProduct ul', _normDuration, {css:{'left':-(sliderWidth * _sliderProductID)}, onComplete:function(){
      if(_sliderProductID == 0){
        _sliderProductID = _sliderProductTotal;
      }
      if(_sliderProductID == _sliderProductTotal + 1){
        _sliderProductID = 1;
      }
      TweenMax.to('.sliderProduct ul', 0, {css:{'left':-(sliderWidth * _sliderProductID)}});
      TweenMax.to($('.sliderProduct ul li').eq(_sliderProductID).find('img'), 0, {css:{'opacity':1, scaleX:1, scaleY:1}});
    }});
  }
  
  function getVideo()
  {
    $('.overlay').show();
    TweenMax.to('.overlay .content', _normDuration, {css:{'top':_videoID > 1 ? 682 : 82}, onComplete:function(){
    	$('.btnCloseVideo').show();
    }});
    $('.videoContainer .video').empty().html(
      '<div style="display:none"></div>'+
      '<object id="myExperience'+ _videoIDArray.data[_videoID - 1].videoId +'" class="BrightcoveExperience">'+
        '<param name="wmode" value="transparent" />'+
        '<param name="width" value="652" />'+
        '<param name="height" value="392" />'+
        '<param name="playerID" value="1399413291001" />'+
        '<param name="playerKey" value="AQ~~,AAABMJhs0DE~,tyhXkY_sqh75vLfxSKUmgqP84i9vDUhP" />'+
        '<param name="isVid" value="true" />'+
        '<param name="isUI" value="true" />'+
        '<param name="dynamicStreaming" value="true" />'+
        '<param name="autoStart" value="true" />'+
        '<param name="includeAPI" value="true" />'+
        '<param name="templateLoadHandler" value="onTemplateLoaded" />'+
        '<param name="templateReadyHandler" value="onTemplateReady" />'+
        '<param name="@videoPlayer" value="'+ _videoIDArray.data[_videoID - 1].videoId +'" />'+
      '</object>'+
      '<script type="text/javascript">brightcove.createExperiences();</script>'
    );
  }

})(jQuery, window);

