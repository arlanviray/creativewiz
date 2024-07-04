<section class="contents">
	<div class="maxwidth">
		<div id="video" class="videomain video video1">
			<div class="video-block" style="display: block;">
				<div class="video-container">
					<div style="display:none"></div>
					<object id="myExperience4172037964001" class="BrightcoveExperience">
						<param name="bgcolor" value="#000000" />
						<param name="width" value="100%" />
						<param name="height" value="100%" />
						<param name="playerID" value="3689307474001" />
						<param name="playerKey" value="AQ~~,AAAACUnXLEE~,CSRrSILcGTf-z4gr4QCSRxFV6ztL_0uj" />
						<param name="isVid" value="true" />
						<param name="isUI" value="true" />
						<param name="dynamicStreaming" value="true" />
						<param name="autoStart" value="true" />
						<param name="@videoPlayer" value="4172037964001" />
						<param name="includeAPI" value="true" />
						<param name="templateLoadHandler" value="onTemplateLoaded" />
						<param name="templateReadyHandler" value="onTemplateReady" />
					</object>
					<script type="text/javascript">brightcove.createExperiences();</script>
				</div>
			</div>
		</div>
	</div>
</section>
<script type="text/javascript">
var players = [];
onTemplateLoaded = function(id) {
	console.log('onTemplateLoaded');
    players.push(id);
}
onTemplateReady = function(event) {
	console.log('onTemplateReady');
    var player = brightcove.api.getExperience(event.target.experience.id);
    var videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    var experienceModule = player.getModule(brightcove.api.modules.APIModules.EXPERIENCE);

    if (experienceModule.experience.type == "html") {
        window.addEventListener("resize", function(event) {
            for (var i = 0; i < players.length; i++) {
                var resizeWrapper = $('.video-block');
                var resizeWidth = resizeWrapper.innerWidth();
                var resizeHeight = resizeWrapper.innerHeight();
                experienceModule.setSize(resizeWidth, resizeHeight);
            }
        })
    }
}
</script>