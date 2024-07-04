/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
var _this = {
	init: true,
	project: 'FOLLI FOLLIE Mobile',
	animDurationNorm: 0.5,
    animDurationFast: 0.25,
    animTimeline: new TimelineMax({'paused': true}),
    url: "http://www.elleuk.com/promotion/follifollie",
	urlpath: "/promotion/follifollie",
	imgdir: "http://www.elleuk.com/commercial/follifollie/images/",
	imgloaded: false,
	clientTracking: '?utm_source=Elle_SS14&utm_medium=Media&utm_campaign=Summer_state_of_mind',
	winWidth: 0, 
	winHeight: 0,
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
			images: 12,
			anim: [
				{elem: '.copy', obj: {'opacity':0, y:'-40'}},
				{elem: '.img1', obj: {'opacity':0}},
				{elem: '.img2', obj: {'opacity':0}},
				{elem: '.img3', obj: {'opacity':0}},
				{elem: '.img4', obj: {'opacity':0, rotation:25}},
				{elem: '.img5', obj: {'opacity':0, scale:0.5}},
				{elem: '.img6', obj: {'opacity':0, rotation:25}},
				{elem: '.img7', obj: {'opacity':0, scale:0.5}},
				{elem: '.img8', obj: {'opacity':0, y:'-40'}},
				{elem: '.img9', obj: {'opacity':0, y:'+40'}},
				{elem: '.img10', obj: {'opacity':0, y:'+40'}},
				{elem: '.img11', obj: {'opacity':0, y:'-40'}},
				{elem: '.img12', obj: {'opacity':0, y:'+40'}},
				{elem: '.head1', obj: {'opacity':0, scale:2}},
				{elem: '.head2', obj: {'opacity':0, scale:2.5}},
				{elem: '.btnPlaynow', obj: {'opacity':0, y:'+80'}}
			]
		},
		main: {
			elem: $('.row-main'),
			items: {
				contentId: 0,
				quizId: 1,
				quizEnd: false,
				quizNumAns: 4,
				quizResultArray: [],
				quizResultArrayValue: [],
				quizCategoryResults: [],
				quizCategoryValues: [],
				quizCategoryOutcome: null,
				categoryTitles:[
					{
						title: 'Luxe Summer',
						link: 'http://www.follifollie.co.uk/gb-en/online-shop/luxesummer',
						copy: 'Cocktails at a cool, in-the-know summer pop-up, a fabulous party with an A-list guest list - for you summer (just like any other season, frankly) must be done in style. Don your best sunglasses - and attitude - and you\'re good to go',
						bullets:[
							'Gourmet picnicking at a pop-up outdoor cinema screening of a classic film',
							'Drawing up a deckchair at one of Ibiza\'s exclusive members\'-only beach resorts',
							'A luxury tour and tasting of England\'s boutique wineries and vineyards',
						],
					},
					{
						title: 'Summer Reveller',
						link: 'http://www.follifollie.co.uk/gb-en/online-shop/summerreveller',
						copy: 'If your ideal summer can summed up in a single word, that word would be ‘party\'. Whether its a festival with a cast of thousands or a barbeque with a select group of friends, it\'s all about celebrating the season. Salut!',
						bullets:[
							'Joining the crowd at a Full Moon party off the coast of southern Thailand',
							'Throwing an impromptu garden party for friends - complete with surprise silent disco',
							'Setting yourself a challenge – to attend at least five festivals in 50 days',
						],
					},
					{
						title: 'Cultural Summer',
						link: 'http://www.follifollie.co.uk/gb-en/online-shop/summeradventurer',
						copy: 'Forget spending summer lounging in a park or by the pool. You need to stimulate your mind as well as your other senses, whether that\'s exploring ancient ruins or soaking up the culture on a city break.',
						bullets:[
							'Touring one of Europe\'s great historic cities, such as Rome, Paris or London',
							'Walking the Lake District in the footsteps of the Romantic poets',
							'Exploring the UK\'s most eccentric festivals - cheese rolling in Gloucester, anyone?',
						],
					},
					{
						title: 'Summer Adventurer',
						link: 'http://www.follifollie.co.uk/gb-en/online-shop/culturalsummer',
						copy: 'For you, making the most of the summer is all about horizons – whether literal or metaphorical, you want to broaden yours. Whether staying at home or hitting the road, get ready to spread your wings.',
						bullets:[
							'Taking on a summer challenge, such as scaling Mt Snowden or learning to surf',
							'Puffin (or other wildlife) watching on a remote Scottish island',
							'Hiring a canal boat with friends and exploring England\'s waterways',
						],
					},
				],
				products: [
					{
						pos: {x:400, y:560, s:290, z:2},
						ques: 'Choose the drink you’d reach for on a hot day?',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q1_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q1_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q1_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q1_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:-212, y:198, s:550, z:1},
						ques: 'Pick a colour to set your summer state of mind',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q2_X1.png',
								category: 0,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q2_X2.png',
								category: 0,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q2_X3.png',
								category: 0,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q2_X4.png',
								category: 0,
							},
						],
					},
					{
						pos: {x:138, y:94, s:316, z:3},
						ques: 'Which pair of sunglasses best reflects your style?',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q3_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q3_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q3_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q3_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:424, y:184, s:186, z:2},
						ques: 'Select the location you’d like to hang out in',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q4_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q4_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q4_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q4_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:36, y:460, s:444, z:3},
						ques: 'High-end, slouchy or something else? Pick a bag...',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q5_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q5_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q5_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q5_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:234, y:180, s:650, z:1},
						ques: 'Choose your hue, pretty in pink or bright blue?',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q6_X1.png',
								category: 0,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q6_X2.png',
								category: 0,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q6_X3.png',
								category: 0,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q6_X4.png',
								category: 0,
							},
						],
					},
					{
						pos: {x:100, y:340, s:260, z:2},
						ques: 'Which one of these gets your tastebuds tingling?',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q7_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q7_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q7_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q7_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:300, y:340, s:292, z:3},
						ques: 'Choose the watch or jewellery you’d most like to wear',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q8_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q8_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q8_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q8_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:-70, y:184, s:284, z:2},
						ques: 'Which of these accessories would you choose?',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q9_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q9_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q9_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q9_4.png',
								category: 4,
							},
						],
					},
					{
						pos: {x:502, y:326, s:150, z:2},
						ques: 'Pick an experience you’d like to have',
						quiz: [
							{
								imgpath: 'images/mobile_images/Mob_Q10_1.png',
								category: 1,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q10_2.png',
								category: 2,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q10_3.png',
								category: 3,
							},
							{
								imgpath: 'images/mobile_images/Mob_Q10_4.png',
								category: 4,
							},
						],
					},
				]
			}
		},
		progressbar: {
			elem: $('.row-progressbar'),
		},
		navigation: {
			elem: $('.row-navigation'),
		},
		footer: {
			elem: $('.row-footer'),
		},
	},
};
