<script type="text/javascript">
    var players = [];
    var player, videoPlayer, experienceModule;
    var onTemplateLoaded = function(id){
    	// console.log('onTemplateLoaded');
        players.push(id);
    }
    var onTemplateReady = function(event){
    	// console.log('onTemplateReady');
        player = brightcove.api.getExperience(event.target.experience.id);
        videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
        experienceModule = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
        
        onVideoRotation();
    }
    var onVideoRotation = function(){
        if(experienceModule.experience.type == 'html'){
            // window.addEventListener('resize', function(event){
            $(window).resize(function(){
                var html = '';
                for (var i = 0; i < players.length; i++) {
                    var $resizeWrapper = $('#video.video'+ (i + 1)).find('.video-block');
                    if($resizeWrapper.css('display') == 'block'){
                        var resizeWidth = $resizeWrapper.width();
                        var resizeHeight = $resizeWrapper.height();
                        experienceModule.setSize(resizeWidth, resizeHeight);
                        html += resizeWidth +' x '+ resizeHeight +' > video'+ (i + 1);
                    }
                    
                }
                
                $('#videolog').html(html);

            }).resize();
        }
    }
</script>