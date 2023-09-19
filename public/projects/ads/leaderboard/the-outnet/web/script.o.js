/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
(function($, window, undefined){
  
  var _reset = true;
  var _init = true;
  var _auto = true;
  var _itemID = 1;
  var _itemsTotal;
  var _landingHide = false;
  var _productID;
  var _normDuration = 0.5;
  var _fastDuration = 0.25;
  var _timeline = new TimelineMax({'paused':true});
  var _scale = 0.92;
  var _ypointer = [66, 210, 356];
  var product = {};
  product.Details = false;
  
  $(init);
  function init()
  {
    _itemsTotal = $('.expanded .carousel .products-container .products').size();
    setLogo();
    setEvents();
    setExpand();
    setLanding();
    setNavigation();
    $('.expanded .carousel .products-container .products').eq(0).clone().appendTo('.expanded .carousel .products-container');
    $('.expanded .carousel .products-container .products').eq(_itemsTotal - 1).clone().prependTo('.expanded .carousel .products-container');
    $('.expanded .carousel .products-container').append('<div class="clr"></div>');
    TweenMax.to('.expanded .landing .col img', 0, {scaleX:1, scaleY:1});
    
    _init = false;
// auto expand
    if(_auto){
      setTimeout(function(){
       $('.contracted .btnExpand').click();        
      }, 1000);
    }    
  }
  
  function thisExpand()
  {
    ADTECH.expand();
    TweenLite.delayedCall(1, function(){
      parent.postMessage('resize', '*');
      _timeline.play();
    });
    _reset = false;
  }
  
  function btnExpand()
  {
    TweenMax.to('.contracted .btnExpand .text', _normDuration, {delay:1, opacity:0, onComplete:function(){
      TweenMax.to('.contracted .btnExpand .text', _normDuration, {opacity:1, onComplete:btnExpand});
    }});
  }
  function setLogo()
  {
    if(_init){
      TweenMax.to('.logo', 0, {css:{scaleX:0.8, scaleY:0.8}});
      if(!_auto){
        TweenMax.from('.bpic', _normDuration, {css:{'right':-420}, delay:_normDuration});
      }
    } else {
      if(_reset){
        TweenMax.to('.bpic', _normDuration, {css:{'right':0}});
      } else {
        TweenMax.to('.bpic', _normDuration, {css:{'right':-420}});
      }
    }
  }
  
  function setEvents()
  {
    $(".text .btnDetails").click(function() {
      $(this).toggleClass("activeArrow");
      var pannel = $(this).parent();  
      if (!product.Details) {
        TweenMax.to(pannel, 0.25, {top:252});
        product.Details = true;
        
      }
      else {
        TweenMax.to(pannel, 0.25, {top:367});
        product.Details = false;
      }
      
      
    });
    $('.contracted .btnExpand').click(function(){
      thisExpand();
      setLogo();
    });//btnExpand();
    
    $('.expanded .btnClose').click(function(){
      _timeline.reverse();
      TweenLite.delayedCall(1, function(){
        ADTECH.contract();
        parent.postMessage('resize', '*');
        setLanding();
        setNavigation();
        $('.expanded .buttons a').removeClass('active');
        _itemID = 1;
        _reset = true;
        _landingHide = false;
        setLogo();
      });
    });
    
    $('.expanded .buttons .btnVideo').click(function(e){
      e.preventDefault();
      ADTECH.event('View video');
      _productID = 0;
      if(!_landingHide){
        _landingHide = true;
        setContents();
      } else {
        setCarouselVideo();
      }
    });
    
    $('.expanded .buttons .btnProducts').click(function(e){
      e.preventDefault();
      ADTECH.event('View products');
      _productID = 1;
      if(!_landingHide){
        _landingHide = true;
        setContents();
      } else {
        setCarouselVideo();
      }
    });
    
    $('.expanded .carousel .btnShopnow').hover(
      function(){
        TweenMax.to($('.expanded .carousel .products-container .products:eq('+ (_itemID) +') .circle'), _fastDuration, {scaleX:0.96, scaleY:0.96, rotation:-360});
      },
      function(){
        TweenMax.to($('.expanded .carousel .products-container .products:eq('+ (_itemID) +') .circle'), _fastDuration, {scaleX:1, scaleY:1, rotation:0});
      }
    );
    
    $('.expanded .landing .col').hover(
      function(){
        TweenMax.to($(this).find('img'), _normDuration, {css:{opacity:0.7, scaleX:1.1, scaleY:1.1}});
        $(this).find('.box .text').addClass('active');
        $(this).find('h5').addClass('activeh5');
        $('.expanded .buttons a').eq($(this).index()).addClass('active');
      },
      function(){
        TweenMax.to($(this).find('img'), _normDuration, {css:{opacity:1, scaleX:1, scaleY:1}});
        if(!_landingHide){
          $(this).find('.box .text').removeClass('active');
           $(this).find('h5').removeClass('activeh5');
          $('.expanded .buttons a').removeClass('active');
        }
      }
    ).click(function(){
      _productID = $(this).index();
      _landingHide = true;
      setContents();
    });
    
    var list = '';
    for(var i = 1; i <= _itemsTotal; i++){
      list += '<li></li>';
    }
    $('.expanded .carousel .products-navigation').append('<ul>'+ list +'<div class="clr"></div></ul>');
    $('.expanded .carousel .products-navigation ul').width($('.expanded .carousel .products-navigation li').width() * _itemsTotal);
    $.each($('.expanded .carousel .products-navigation li'), function(index, obj){
      $(obj).click(function(){
        if(!TweenMax.isTweening($('.expanded .carousel .products-container'))){
          if(_itemID == $(this).index() + 1) 
            return false;
          _itemID = $(this).index() + 1;
          setCarousel();
        }
      });
    });
    
    $('.expanded .arrows .btnArrowLeft').click(function(){
      if(!TweenMax.isTweening($('.expanded .carousel .products-container'))){
        if(_itemID > 0){
          _itemID--;
        }
        
        setCarousel();
      }
    });
    
    $('.expanded .arrows .btnArrowRight').click(function(){
      if(!TweenMax.isTweening($('.expanded .carousel .products-container'))){
        if(_itemID < _itemsTotal + 1){
          _itemID++;
        }
        
        setCarousel();
      }
    });
    
    $.each($('.expanded .products-container .products'), function(i, obj){
      $(obj).find('.main img').not(':eq(0)').css({'opacity':0});
      $(obj).find('.thumbs img').click(function(){
        var id = $(this).parent().index();
        // console.log(i, id, obj);
        TweenMax.to($(obj).find('.main img'), 0, {opacity:0});
        TweenMax.to($(obj).find('.main img').eq(id), 0, {opacity:1});
        TweenMax.to($(obj).find('.thumbs .apointer'), _fastDuration, {css:{'top':_ypointer[id]}});
        if(i == 0){
          $('.expanded .products-container .products:eq('+ (_itemsTotal + 1) +')').find('.main img').css({'opacity':0});
          $('.expanded .products-container .products:eq('+ (_itemsTotal + 1) +')').find('.main .prod'+ (id + 1)).css({'opacity':1});
          $('.expanded .products-container .products:eq('+ (_itemsTotal + 1) +')').find('.thumbs .apointer').css({'top':_ypointer[id]});
        }
        if(i == (_itemsTotal - 1)){
          $('.expanded .products-container .products:eq(0)').find('.main img').css({'opacity':0});
          $('.expanded .products-container .products:eq(0)').find('.main .prod'+ (id + 1)).css({'opacity':1});
          $('.expanded .products-container .products:eq(0)').find('.thumbs .apointer').css({'top':_ypointer[id]});
        }
      });
    });
  }
  
  function setExpand()
  {
    _timeline.add(TweenMax.to('.contracted', _fastDuration, {autoAlpha:0}));
    _timeline.add(TweenMax.to('#contents', 0.75, {height:606, onComplete:setLanding, onCompleteParams:[true]}));
  }
  
  function setLanding(show)
  {
    if(show){
      TweenMax.to('.expanded .landing .colleft, .expanded .landing .colright', _normDuration, {x:0});
      TweenMax.from('.expanded .landing .copies', _normDuration, {autoAlpha:0, y:30, delay:0.5});
    } else {
      TweenMax.to('.expanded .landing .colleft', _reset ? 0 : _normDuration, {x:-490});
      TweenMax.to('.expanded .landing .colright', _reset ? 0 : _normDuration, {x:490, onComplete:function(){
        if(!_reset){
          $('.expanded .landing').hide();
        }
      }});
    }
  }
  
  function setNavigation(show)
  {
    if(show){
      //$('.expanded .buttons .navigation').show();
      $('.expanded .vc-holder').show();
    } else {
      //$('.expanded .buttons .navigation').hide();
      $('.expanded .vc-holder').hide();
      $('.expanded .arrows').hide();
      $('.expanded .landing').show();
    }
  }
  
  function setCarousel()
  {
    TweenMax.to($(".infos .text"), 0.25, {top:367});
    product.Details = false;
    // reset circles
    $('.expanded .carousel .products-container .products .circle').css('opacity', 0);
    console.log('>> '+ _itemID);
    if(_itemID == 0 || _itemID == _itemsTotal){
      $('#contents .expanded .aright').addClass('aremovebg');
    } else {
      $('#contents .expanded .aright').removeClass('aremovebg');
    }
    TweenMax.to($('.expanded .carousel .products-container'), _normDuration, {css:{'left':-(980 * _itemID)}, onComplete:function(){
      if(_itemID == 0){
        _itemID = _itemsTotal;
      }
      if(_itemID == _itemsTotal + 1){
        _itemID = 1;
      }
      TweenMax.to($('.expanded .carousel .products-container'), 0, {css:{'left':-(980 * _itemID)}});
      
      // specified circle
      TweenMax.to($('.expanded .carousel .products-container .products:eq('+ (_itemID) +') .circle'), _fastDuration, {css:{'opacity':1}});
      TweenMax.from($('.expanded .carousel .products-container .products:eq('+ (_itemID) +') .circle'), _normDuration, {y:-200, scaleX:0, scaleY:0, ease:Back.easeOut});
      
      $('.expanded .carousel .products-navigation li').removeClass('active');
      $('.expanded .carousel .products-navigation li').eq(_itemID - 1).addClass('active');
    }});
  }
  function playVid() {
      $('.expanded .videoholder .video').empty().html(
        '<div style="display:none"></div>'+
        '<object id="myExperience" class="BrightcoveExperience">'+
          '<param name="bgcolor" value="#000000" />'+
          '<param name="width" value="700" />'+
          '<param name="height" value="435" />'+
          '<param name="playerID" value="3284085785001" />'+
          '<param name="playerKey" value="AQ~~,AAAAABn4dxs~,AY7gyox5PDhmG5sJcEwE3gfM2daCBG3r" />'+
          '<param name="isVid" value="true" />'+
          '<param name="isUI" value="true" />'+
          '<param name="dynamicStreaming" value="true" />'+
          '<param name="autoStart" value="true" />'+
          '<param name="includeAPI" value="true" />'+
          '<param name="templateLoadHandler" value="onTemplateLoaded" />'+
          '<param name="templateReadyHandler" value="onTemplateReady" />'+
          '<param name="@videoPlayer" value="3505606862001" />'+
        '</object>'+
        '<script type="text/javascript">brightcove.createExperiences();</script>'
      );
    }

  function setCarouselVideo(init)
  {
    
    $('.expanded .buttons a').removeClass('active');
    if(_productID > 0){
      $('.expanded .buttons .btnProducts').addClass('active');
      $('.expanded .arrows').show();
      $('.expanded .videoholder .video').empty(); 
    } else {
      $('.expanded .buttons .btnVideo').addClass('active');
      $('.expanded .arrows').hide();
      $('.expanded .videoholder .video').empty().html(
        '<img src="'+ADTECH.getFileUrl("poster.jpg")+'" class="play-vid" style="position:absolute; left:25px; top:0; width:700px; height:435px; cursor:pointer; opacity:0.7;" />'+
        '<script>$(".play-vid").hover(function(){TweenMax.to($(this), 1, {opacity:1}); }, function(){TweenMax.to($(this), 1, {opacity:0.7});});</script><span class="play-vid">PLAY</span>'
      );
      $('.play-vid').click(function(){
        playVid();
      });
    }
    
    TweenMax.to('.expanded .vc-holder .vc-contents', init ? 0 : _normDuration, {y:-(474 * _productID)});
  }
  
  function setContents()
  {
    setLanding();
    setNavigation(true);
    setCarouselVideo(true);
    TweenMax.to($('.expanded .carousel .products-container'), 0, {css:{'left':-980}});
    $('.expanded .carousel .products-navigation li').eq(0).addClass('active');
  }
  
})(jQuery, window);
