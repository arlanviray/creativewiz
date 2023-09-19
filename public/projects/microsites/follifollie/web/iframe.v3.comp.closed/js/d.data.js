/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
var _this = {
	init: true,
	project: 'FOLLI FOLLIE Desktop',
	animDurationNorm: 0.5,
    animDurationFast: 0.25,
    animTimeline: new TimelineMax({'paused': true}),
    url: "http://www.elleuk.com/promotion/follifollie",
	urlpath: "/promotion/follifollie",
	imgdir: "http://www.elleuk.com/commercial/follifollie/images/",
	imgloaded: false,
	clientTracking: '?utm_source=Elle_SS14&utm_medium=Media&utm_campaign=Summer_state_of_mind',
	gotoWin: false,
	id: {
		curr: null,
		prev: null,
		hash: null,
	},
	obj: {
		intro: {
			tween: new TimelineMax({
				'paused': true,
				onReverseComplete:function(){
					$('#contents .panel-intro').insertBefore('#contents .row-main');
					$('#contents .panel-intro .takeout').remove();
				}
			}),
			images: 15,
			anim: [
				{elem: '.copy', obj: {'opacity':0, y:'-40'}},
				{elem: '.img1', obj: {'opacity':0}},
				{elem: '.img2', obj: {'opacity':0}},
				{elem: '.img3', obj: {'opacity':0}},
				{elem: '.img4', obj: {'opacity':0}},
				{elem: '.img5', obj: {'opacity':0}},
				{elem: '.img6', obj: {'opacity':0, rotation:25}},
				{elem: '.img7', obj: {'opacity':0, rotation:-25}},
				{elem: '.img8', obj: {'opacity':0, scale:0.5}},
				{elem: '.img9', obj: {'opacity':0, scale:0.5}},
				{elem: '.img10', obj: {'opacity':0, rotation:25}},
				{elem: '.img11', obj: {'opacity':0, y:'-40'}},
				{elem: '.img12', obj: {'opacity':0, y:'+40'}},
				{elem: '.img13', obj: {'opacity':0, y:'+40'}},
				{elem: '.img14', obj: {'opacity':0, y:'-40'}},
				{elem: '.img15', obj: {'opacity':0, y:'+40'}},
				//{elem: '.head1', obj: {'opacity':0, scale:2}},
				//{elem: '.head2', obj: {'opacity':0, scale:2.5}},
				{elem: '.btnEnter', obj: {'opacity':0, y:'+80'}}
			]
		},
		
		/*
		 * in-page rows
		 */
		main: {
			elem: $('.row-main'),
			width: $('.row-main').css('width').replace('px', ''),
			height: $('.row-main').css('height').replace('px', ''),
			balloon: {
				id: 0,
				size: 300,
				scale: [],
				tween: [],
				reset: false,
				scaling: false,
				posPrev: [],
				panel: {
					id: 0,
					itemsMin: 0,
					itemsMax: 0,
					itemsPosX: 36,
				},
				items: {
					id: 0,
					url: null,
					results: [],
					selections: [],
					categoryTotal: 4,
					categoryValues: [],
					categoryResults: [],
					categoryOutcome: null,
					categoryTitles:[
						{
							title: 'Luxe Summer',
							link: 'http://www.follifollie.co.uk/gb-en/online-shop/luxesummer',
						},
						{
							title: 'Summer Reveller',
							link: 'http://www.follifollie.co.uk/gb-en/online-shop/summerreveller',
						},
						{
							title: 'Cultural Summer',
							link: 'http://www.follifollie.co.uk/gb-en/online-shop/summeradventurer',
						},
						{
							title: 'Summer Adventurer',
							link: 'http://www.follifollie.co.uk/gb-en/online-shop/culturalsummer',
						},
					],
					products: [
						{
							limitMin: 3,
							limitMax: 3,
							arrayValues: [],
							arrayResults: [],
							contents: [
								{title: 'backg 01', cat:0},
								{title: 'backg 02', cat:0},
								{title: 'backg 03', cat:0},
								{title: 'backg 04', cat:0},
								{title: 'backg 05', cat:0},
								{title: 'backg 06', cat:0},
								{title: 'backg 07', cat:0},
								{title: 'backg 08', cat:0},
								{title: 'backg 09', cat:0},
								{title: 'backg 10', cat:0},
								{title: 'backg 11', cat:0},
								{title: 'backg 12', cat:0},
								{title: 'backg 13', cat:0},
								{title: 'backg 14', cat:0},
								{title: 'backg 15', cat:0},
								{title: 'backg 16', cat:0},
								{title: 'backg 17', cat:0},
								{title: 'backg 18', cat:0},
								{title: 'backg 19', cat:0},
								{title: 'backg 20', cat:0},
							],
							moodboard:[
								{
									pos: [
										{x:-146, y:-82, s:450},
										{x:324, y:-18, s:450},
										{x:98, y:84, s:450},
									]
								} 
							]
						},
						{
							limitMin: 5,
							limitMax: 10,
							arrayValues: [],
							arrayResults: [],
							contents: [
								{title: 'location 01', cat:1},
								{title: 'location 02', cat:1},
								{title: 'location 03', cat:1},
								{title: 'location 04', cat:1},
								{title: 'location 05', cat:1},
								{title: 'location 06', cat:2},
								{title: 'location 07', cat:2},
								{title: 'location 08', cat:2},
								{title: 'location 09', cat:2},
								{title: 'location 10', cat:2},
								{title: 'location 11', cat:3},
								{title: 'location 12', cat:3},
								{title: 'location 13', cat:3},
								{title: 'location 14', cat:3},
								{title: 'location 15', cat:3},
								{title: 'location 16', cat:4},
								{title: 'location 17', cat:4},
								{title: 'location 18', cat:4},
								{title: 'location 19', cat:4},
								{title: 'location 20', cat:4},
							],
							moodboard:[
								{
									pos: [
										{x:8, y:154, s:180},
										{x:152, y:36, s:202},
										{x:218, y:124, s:300},
										{x:473, y:30, s:144},
										{x:473, y:296, s:180},
									]
								},
								{ 
									pos: [
										{x:8, y:154, s:180},
										{x:152, y:36, s:202},
										{x:218, y:124, s:300},
										{x:473, y:30, s:144},
										{x:473, y:296, s:180},
										
										{x:50, y:284, s:212},
									]
								}, 
								{ 
									pos: [
										{x:8, y:154, s:180},
										{x:152, y:36, s:202},
										{x:218, y:124, s:300},
										{x:473, y:30, s:144},
										{x:473, y:296, s:180},	
										{x:50, y:284, s:212},
										
										{x:240, y:352, s:150},
									]
								},
								{ 
									pos: [
										{x:8, y:154, s:180},
										{x:152, y:36, s:202},
										{x:218, y:124, s:300},
										{x:473, y:30, s:144},
										{x:473, y:296, s:180},	
										{x:50, y:284, s:212},
										{x:240, y:352, s:150},
										
										{x:-38, y:294, s:148},
									]
								},
								{ 
									pos: [
										{x:8, y:154, s:180},
										{x:152, y:36, s:202},
										{x:218, y:124, s:300},
										{x:473, y:30, s:144},
										{x:473, y:296, s:180},	
										{x:50, y:284, s:212},
										{x:240, y:352, s:150},
										{x:-38, y:294, s:148},
										
										{x:-12, y:10, s:176},
									]
								}, 
								{ 
									pos: [
										{x:8, y:154, s:180},
										{x:152, y:36, s:202},
										{x:218, y:124, s:300},
										{x:473, y:30, s:144},
										{x:473, y:296, s:180},	
										{x:50, y:284, s:212},
										{x:240, y:352, s:150},
										{x:-38, y:294, s:148},
										{x:-12, y:10, s:176},
										
										{x:492, y:164, s:176},
									]
								}, 
							]
						},
						{
							limitMin: 3,
							limitMax: 5,
							arrayValues: [],
							arrayResults: [],
							contents: [
								{
									title: 'OVERSIZED SUNGLASSES £55', cat:1, 
									pos: [{x:154, y:134}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/accessories/sunglasses/sg1b007wlu-oversized-sunglasses'
								},
								{
									title: 'DAY DREAM WATCH £120', cat:1, 
									pos: [{x:138, y:94}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/watches/leather/wf1a006sts_cb-day-dream-watch'
								},
								{
									title: 'MATCH & DAZZLE RING £30', cat:1, 
									pos: [{x:138, y:104}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/rings/1r0f010-match-&-dazzle-ring'
								},
								{
									title: 'CARMA NECKLACE £50', cat:1, 
									pos: [{x:132, y:84}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/necklaces/1n13f004-carma-necklace'
								},
								{
									title: 'REFLECTIONS SHOULDER BAG £190', cat:1, 
									pos: [{x:140, y:118}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/bags/shoulderbags/sb13p092wa-reflections-shoulderbag'
								},
								{
									title: 'SUNGLASSES £70', cat:2, 
									pos: [{x:140, y:130}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/accessories/sunglasses/sg13b011wb-sunglasses'
								},
								{
									title: 'DONATTELA WATCH £130', cat:2, 
									pos: [{x:166, y:100}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/watches/leather/wf1b005sps_wh-donattela-watch'
								},
								{
									title: 'FOLIAGE SHOULDER BAG £165', cat:2, 
									pos: [{x:120, y:144}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/bags/shoulderbags/sb14p015sf-foliage-shoulderbag'
								},
								{
									title: 'K VINTAGE EARRINGS £75', cat:2, 
									pos: [{x:120, y:98}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/earrings/4e2t008r-k-vintage-earrings'
								},
								{
									title: 'DAZZLING BRACELET £80', cat:2, 
									pos: [{x:110, y:112}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/bracelets/3b13t004ris-dazzling-bracelet'
								},
								{
									title: 'HEART4HEART WATCH £250', cat:3, 
									pos: [{x:160, y:100}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/watches/leather/wf13r003ssz_wh-heart4heart-watch'
								},
								{
									title: 'AVIATOR SUNGLASSES £50', cat:3, 
									pos: [{x:154, y:138}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/accessories/sunglasses/sg1t014wg-aviator-sunglasses'
								},
								{
									title: 'HEART4HEART SHOULDER BAG £165', cat:3, 
									pos: [{x:122, y:144}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/bags/shoulderbags/sb13p002slg-heart4heart-shoulderbag'
								},
								{
									title: 'DAZZLING RING £50', cat:3, 
									pos: [{x:154, y:106}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/rings/3r13t004rc-dazzling-ring'
								},
								{
									title: 'HEART4HEART WIN NECKLACE £75', cat:3, 
									pos: [{x:136, y:68}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/necklaces/3n13t043rc-heart4heart-win-necklace'
								},
								{
									title: 'SUNGLASSES £80', cat:4, 
									pos: [{x:140, y:160}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/accessories/sunglasses/sg13b012wb-sunglasses'
								},
								{
									title: 'HEART4HEART RING £75', cat:4, 
									pos: [{x:150, y:156}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/rings/3r0f064c-heart4heart-ring'
								},
								{
									title: 'ROC HAPPY NUGGET BRACELET £60', cat:4, 
									pos: [{x:152, y:66}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/bracelets/3b13t007roc-happy-nugget-bracelet'
								},
								{
									title: 'CARMA BRACELET £40', cat:4, 
									pos: [{x:126, y:102}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/jewellery/bracelets/1b13f006-carma-bracelet'
								},
								{
									title: 'FLOWER BALL SHOULDER BAG £200', cat:4, 
									pos: [{x:142, y:132}], 
									link: 'http://www.follifollie.co.uk/gb-en/online-shop/bags/shoulderbags/sb13p019sc-flower-ball-shoulderbag'
								},
							],
							moodboard:[
								{
									pos: [
										{x:8, y:42, s:260, scale:0.87},
										{x:98, y:210, s:260, scale:0.87},
										{x:346, y:32, s:260, scale:0.87},
									]
								}, 
								{
									pos: [
										{x:8, y:42, s:220, scale:0.73},
										{x:98, y:210, s:220, scale:0.73},
										{x:346, y:32, s:220, scale:0.73},
										
										{x:214, y:24, s:220, scale:0.73},
									]
								},
								{
									pos: [
										{x:8, y:42, s:200, scale:0.66},
										{x:98, y:210, s:200, scale:0.66},
										{x:346, y:32, s:200, scale:0.66},
										{x:214, y:24, s:200, scale:0.66},
										
										{x:342, y:198, s:200, scale:0.66},
									]
								},
							]
						}
					]
				},
			},
		},
		timer: {
			elem: $('.row-timer'),
			tween: new TimelineMax({
				'paused': true,
				onReverseComplete:function(){
					TweenMax.delayedCall(1.5, function(){
						_this.obj.timer.tween.timeScale(1);
						_this.obj.timer.tween.play();
					});
				}
			}),
			complete: false,
			endgame: false,
			duration: 60,
			timeCompletion: 0,
			timeCompletionArray: [],
		},
		footer: {
			elem: $('.row-footer'),
		},
	},
};
