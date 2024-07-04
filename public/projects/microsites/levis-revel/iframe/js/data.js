/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
var _this = {
	animDurationFast: 0.5,
	animDurationNorm: 0.75,
	animTimeline: new TimelineMax({'paused':true}),
	url: "http://www.elleuk.com/promotion/levis-revel",
	urlpath: "/promotion/levis-revel",
	imgdir: "http://www.elleuk.com/commercial/levis-phase2-updates/images/",
	imgloaded: false,
	phase: 4,
	section: {
		id: 0,
		init: false,
		navArray: [],
		navigation: [
			{name: []},
			{name: ["HOME", "LEVI'S® REVEL™ STUDIOS", "GALLERY"]},
			{name: ["HOME", "LEVI'S® REVEL™ STUDIOS", "THE ART OF DENIM", "GALLERY"]},
			{name: ["HOME", "LEVI'S® REVEL™ STUDIOS", "OUTFIT BUILDER", "THE ART OF DENIM", "GALLERY"]},
		],
	},
	home: {
		popupVideo: {
			id: 0,
			data: ["3323406478001", "3323417754001"]
		},
	},
	events: {
		popupOne: {
			id: 1,
			data: [
				{
					"title": "♯ELLEFASHIONCUPBOARD",
					"header": "Styling session",
					"copies": "See what happened when the Style REVELution hit the ELLE Fashion Cupboard. We share the hottest ways to wear your Levi’s® Revel™ Jeans in our styling session and street style shoot. Plus indie-pop talent Spark gets a REVELutionary makeover.",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 02",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 03",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 04",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 05",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 06",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 07",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 08",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 09",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 10",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 11",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 12",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 13",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 14",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 15",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
			]
		},
		popupTwo: {
			id: 1,
			data: [
				/* for fashion weekend - 12 images in totals
				{
					"title": "Inside the Levi’s® Revel™ Room",
					"header": "Fashion Weekend",
					"copies": "From the first glass of fizz poured at the launch party until the final dressing-room curtain was drawn, there was only one place to be at the recent Vodafone London Fashion Weekend – the Levi’s® Revel™ Room.",
					"name": "",
					"desc": "",
				},
				*/
				{
					"title": "Vodafone London Fashion Weekend 2014",
					"header": "Street Style",
					"copies": "How would you wear yours? Be inspired by fashionistas who took part in the ELLE street style workshop with Levi’s® at VLFW. Those in denim took our style REVELution challenge, dressing up their Levi’s® Revel™ jeans, and our photographer snapped the best as well as revealing his best kept street style tips. Check out our favourite pictures from the session.",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 02",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 03",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 04",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 05",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 06",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 07",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 08",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 09",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
				{
					"title": "Title 10",
					"header": "",
					"copies": "",
					"name": "",
					"desc": "",
				},
			]
		},
		popupInstagram: {
			id: 1,
			data: [
				{
					"name": "#Levis",
					"link": "http://instagram.com/levis",
					"summary": "#ELLE #StyleRevelution",
				},
				{
					"name": "Person 02",
					"link": "",
					"summary": "",
				},
				{
					"name": "Person 03",
					"link": "",
					"summary": "",
				},
				{
					"name": "Person 04",
					"link": "",
					"summary": "",
				},
				{
					"name": "Person 05",
					"link": "",
					"summary": "",
				},
				{
					"name": "Person 06",
					"link": "",
					"summary": "",
				},
				{
					"name": "Person 07",
					"link": "",
					"summary": "",
				},
				{
					"name": "Person 08",
					"link": "",
					"summary": "",
				},
			]
		},
		popupVideo: {
			id: 0,
			data: ["3290261608001", "3289772631001", "3289740318001", "3289772633001", "3329164340001"]
		},
	},
	builder: {
		init: false,
		jacketsId: 1,
		jeansId: 1,
		hotspotId: 0,
		hotspothover: false,
		data: [
			{
				"results": [
					{
						"title": "Title 01 - 1",
						"summary": "Worn over the shoulders and dressed up with a pair of exotic pumps, the bomber is no longer confined to daywear. Team with a vintage silk cami and a clutch, and add a hit of shine with layers of vintage gold jewellery.",
						"hotspots": [
							{
								"product": "Suede Baseball Jacket",
								"price": "325.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/324810001",
								"pos": "280, 580",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Pressed Dark",
								"price": "85.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201980001",
								"pos": "600, 510",
							},
						],
					},
					{
						"title": "Title 01 - 2",
						"summary": "Channel the catwalks’ sporting style by pairing a Levi’s bomber and silk-sleeve sweatshirt. Team with rubber-soled sandals similar to those seen and complement with layers of gold necklaces for a subtle injection of metallic cool.",
						"hotspots": [
							{
								"product": "Suede Baseball Jacket",
								"price": "325.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/324810001",
								"pos": "280, 540",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Black Belt",
								"price": "95.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360002",
								"pos": "600, 180",
							},
						],
					},
					{
						"title": "Title 01 - 3",
						"summary": "This sporty jacket worn with a light-wash denim shirt and rolled-up grey jeans presents a relaxed yet on-trend approach to casualwear. Be sure to play with proportions – a skinny jean balances out the jacket’s over-sized qualities – an ideal choice for trans-seasonal dressing.",
						"hotspots": [
							{
								"product": "Suede Baseball Jacket",
								"price": "325.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/324810001",
								"pos": "400, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Grey",
								"price": "100.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360006",
								"pos": "750, 130",
							},
						],
					},
					{
						"title": "Title 01 - 4",
						"summary": "Layering denim is a great way to get this season’s trend for tonal dressing. Give your buttoned-up denim jacket and matching skinny jeans a sporty twist by adding vintage accessories. And to finish? A must-have baseball jacket slung casually over your shoulders for an of-the-moment off-duty look.",
						"hotspots": [
							{
								"product": "Suede Baseball Jacket",
								"price": "325.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/324810001",
								"pos": "280, 140",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Sundown",
								"price": "90.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154430001?productid=154430001&brand=LEVI&newSession=false",
								"pos": "600, 520",
							},
						],
					},
					{
						"title": "Title 01 - 5",
						"summary": "Dressing up the baseball jacket for night is easy when you follow these steps: first, team with a pair of red-hot skinny jeans and statement-making courts for a feminine twist and, second, push up the sleeves and unbutton slightly for an edgy look that’s full of attitude.",
						"hotspots": [
							{
								"product": "Suede Baseball Jacket",
								"price": "325.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/324810001",
								"pos": "280, 580",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Red Diamond",
								"price": "100",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890012",
								"pos": "560, 560",
							},
						],
					},
				],
			},
			{
				"results": [
					{
						"title": "Title 02 - 1",
						"summary": "Levi’s loosely cut quilted sweater should be the cornerstone of any chic sports-luxe look this season. Complement its sportiness by styling with two of s/s 2014’s biggest accessory trends: a vintage leather backpack and a pair of pool-slides – perfectly offset with an of-the-moment large turn-up on your jeans.",
						"hotspots": [
							{
								"product": "Quilted Pleated Back Fleece",
								"price": "60.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/325020001",
								"pos": "280, 180",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Pressed Dark",
								"price": "85.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201980001",
								"pos": "600, 510",
							},
						],
					},
					{
						"title": "Title 02 - 2",
						"summary": "The cut of this loose-fitting gathered sweater makes it perfect for layering so elevate your off-duty repertoire by wearing a chic tailored black blouse underneath. Rolled jeans will show off a great pair of ankle boots and add a hit of colour with a daytime clutch.",
						"hotspots": [
							{
								"product": "Quilted Pleated Back Fleece",
								"price": "60.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/325020001",
								"pos": "280, 510",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Black Belt",
								"price": "95.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360002",
								"pos": "580, 200",
							},
						],
					},
					{
						"title": "Title 02 - 3",
						"summary": "A grey sweater – and other fail-safe classics, such as the military parka – is a mainstay of any urban off-duty wardrobe. Roll the jeans to show off your favourite pair Chelsea boots, while a simple yet bold embellished collar necklace will inject a final, fashionable edge.",
						"hotspots": [
							{
								"product": "Quilted Pleated Back Fleece",
								"price": "60.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/325020001",
								"pos": "280, 180",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Grey",
								"price": "100.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360006",
								"pos": "700, 200",
							},
						],
					},
					{
						"title": "Title 02 - 4",
						"summary": "A palette of grey, white and blue is the ultimate in chic spring dressing. Add a fresh twist by borrowing from the boys with an oversized men’s Levi’s jacket – and contrast with a pair of statement ankle boots to add a pretty feminine touch.",
						"hotspots": [
							{
								"product": "Quilted Pleated Back Fleece",
								"price": "60.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/325020001",
								"pos": "280, 180",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Sundown",
								"price": "90.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154430001?productid=154430001&brand=LEVI&newSession=false",
								"pos": "600, 560",
							},
						],
					},
					{
						"title": "Title 02 - 5",
						"summary": "Sporty-goes-surfer with this season’s must-have pool-slides and a nower-than-now white Levi’s cap. Keep the look fresh and ready for summer with a pristine white vintage belt, and team a light-wash denim shirt over the sporty sweater for a vibe that ticks new-season boxes.",
						"hotspots": [
							{
								"product": "Quilted Pleated Back Fleece",
								"price": "60.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/325020001",
								"pos": "280, 550",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Red Diamond",
								"price": "100",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890012",
								"pos": "600, 520",
							},
						],
					},
				],
			},
			{
				"results": [
					{
						"title": "Title 03 - 1",
						"summary": "For an off-duty look with a difference, wear your Levi’s white denim jacket loosely buttoned up and add a nonchalant edge with turned-up sleeves. A vintage pair of skater shoes and a slouchy Levi’s tote used as a clutch perfectly complement the cool downtime vibe.",
						"hotspots": [
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Pressed Dark",
								"price": "85.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201980001",
								"pos": "600, 530",
							},
						],
					},
					{
						"title": "Title 03 - 2",
						"summary": "Add an on-trend twist to your new-season wardrobe by pairing distressed black jeans and a men’s slogan tee with a jacket slung oh-so casually over the shoulder. Rolled-up jeans revealing a pair of stand-out vintage boots top off a look that is pure rock ’n’ roll.",
						"hotspots": [
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Black Belt",
								"price": "95.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360002",
								"pos": "600, 180",
							},
						],
					},
					{
						"title": "Title 03 - 3",
						"summary": "Let a white denim jacket smartened with a clean-cut white shirt usher a purist mood into your new-season wardrobe. Play with high-low dressing by adding a small roll-up on the jeans and a chunky soled vintage shoe for a statement-making yet clean-cut look.",
						"hotspots": [
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Grey",
								"price": "100.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360006",
								"pos": "700, 200",
							},
						],
					},
					{
						"title": "Title 03 - 4",
						"summary": "Cool-girl dressing is all about mixing and matching. Team a printed men’s Levi’s T-shirt with your favourite pair of killer printed pumps, and layer vintage gold jewellery for a luxe touch. Turn up the sleeves of the subtly frayed and studded denim jacket and wear lose for a grunge-meets-polished look.",
						"hotspots": [
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Sundown",
								"price": "90.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154430001?productid=154430001&brand=LEVI&newSession=false",
								"pos": "600, 540",
							},
						],
					},
					{
						"title": "Title 03 - 5",
						"summary": "Easy luxury is epitomised by classic leather accessories, tailored denim and go-anywhere styling. Tie your jacket at the waist, roll up your trusty denim shirtsleeves and add a sleek Levi’s tote for perfect, just-enough polish. Work an ankle-grazing jean to showcase a pair of statement flats.",
						"hotspots": [
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Red Diamond",
								"price": "100",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890012",
								"pos": "560, 560",
							},
						],
					},
				],
			},
			{
				"results": [
					{
						"title": "Title 04 - 1",
						"summary": "Introduce the 1990s denim revival into your wardrobe by layering a pale-blue biker vest under a dark denim jacket and leave unbuttoned to reveal an oh-so-cool vintage crop top. Rolled-up jeans add a casual twist, while luxe leather boots bridge day to night with finesse.",
						"hotspots": [
							{
								"product": "Moto Trucker Vest",
								"price": "75.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/799840002",
								"pos": "280, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Pressed Dark",
								"price": "85.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201980001",
								"pos": "600, 200",
							},
						],
					},
					{
						"title": "Title 04 - 2",
						"summary": "Denim vests are big news this season, making this light-denim biker style the ultimate cool-girl pick. Score scissors along the knees of your to create subtle rips and wear with a cut-up white T-shirt and pin-thin heels for understated rock-chick chic.",
						"hotspots": [
							{
								"product": "Moto Trucker Vest",
								"price": "75.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/799840002",
								"pos": "280, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Black Belt",
								"price": "95.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360002",
								"pos": "600, 510",
							},
						],
					},
					{
						"title": "Title 04 - 3",
						"summary": "The multi-functional denim vest takes failsafe staples – from shirts to printed tees – into a whole new dimension. Accessories in classic Western colours, and a jean that can be tucked into Levi’s ankle boots create an effortlessly chic, timeless look for now and seasons to come.",
						"hotspots": [
							{
								"product": "Moto Trucker Vest",
								"price": "75.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/799840002",
								"pos": "280, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Grey",
								"price": "100.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360006",
								"pos": "700, 200",
							},
						],
					},
					{
						"title": "Title 04 - 4",
						"summary": "Strike the balance between masculine and feminine by layering a versatile denim biker vest with a classic sweatshirt. A Levi’s black leather carry-all is the perfect addition to this hard-working and effortless look, while vintage loafers paired with a sleek jean makes for a sophisticated, seasonless look.",
						"hotspots": [
							{
								"product": "Moto Trucker Vest",
								"price": "75.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/799840002",
								"pos": "280, 530",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Sundown",
								"price": "90.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154430001?productid=154430001&brand=LEVI&newSession=false",
								"pos": "580, 560",
							},
						],
					},
					{
						"title": "Title 04 - 5",
						"summary": "Lend new-season looks an androgynous edge by rolling colour-popping red jeans above a pair of chunky-soled flats. And for a little edge to your staple sweater? Simply layer it up with that brilliant multitasker, the Levi’s vest.",
						"hotspots": [
							{
								"product": "Moto Trucker Vest",
								"price": "75.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-jackets-vests/p/799840002",
								"pos": "340, 540",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Red Diamond",
								"price": "100",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890012",
								"pos": "560, 610",
							},
						],
					},
				],
			},
			{
				"results": [
					{
						"title": "Title 05 - 1",
						"summary": "This season is big on pretty pastel hues – work it from head-to-toe with accessories such as this on-trend mini vintage bag and blue Levi’s belt. Leave the shirt undone to reveal a crisp white tee to really make the colours pop.",
						"hotspots": [
							{
								"product": "Tailored Vine Sawtooth Western Shirt",
								"price": "65.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/508700002",
								"pos": "260, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Pressed Dark",
								"price": "85.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201980001",
								"pos": "600, 550",
							},
						],
					},
					{
						"title": "Title 05 - 2",
						"summary": "Tune into this season’s New Femininity by teaming an on-trend purple shirt with an ever-so pretty embroidered vest top by Levi’s. Simply tuck in and unbutton to reveal a hint of the delicate top beneath – a ladylike black court adds the finishing touch.",
						"hotspots": [
							{
								"product": "Tailored Vine Sawtooth Western Shirt",
								"price": "65.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/508700002",
								"pos": "260, 150",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Black Belt",
								"price": "95.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360002",
								"pos": "600, 530",
							},
						],
					},
					{
						"title": "Title 05 - 3",
						"summary": "Reference s/s 2014’s surfer-girl vibe by tying – not buttoning – your Levi’s Western shirt over a tie-dye printed tee. An oversized vintage Levi’s jacket references a boyfriend-style fit, while on-trend shoes in an exotic print gives this retro look a modern spin.",
						"hotspots": [
							{
								"product": "Tailored Vine Sawtooth Western Shirt",
								"price": "65.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/508700002",
								"pos": "260, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Jeans Grey",
								"price": "100.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360006",
								"pos": "600, 180",
							},
						],
					},
					{
						"title": "Title 05 - 4",
						"summary": "A classic Western shirt loosely unbuttoned and nonchalantly tucked into a pair of rolled-up skinny Revel blue jeans is the epitome of understated cool. Style with a season-defining pair of patent pool-slides and you’ve got a look that embodies s/s 2014’s catwalk-endorsed surfer girl vibe.",
						"hotspots": [
							{
								"product": "Tailored Vine Sawtooth Western Shirt",
								"price": "65.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/508700002",
								"pos": "260, 200",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Sundown",
								"price": "90.00",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154430001?productid=154430001&brand=LEVI&newSession=false",
								"pos": "600, 200",
							},
						],
					},
					{
						"title": "Title 05 - 5",
						"summary": "Perfecting off-duty style is as easy as one, two, three. To start, button the shirt and tuck into Revel jeans for a crisp, clean silhouette. Next, add a dark-denim jacket for a formal edge. Finish with a sleek day clutch and must-own vintage sneakers and you’re done!",
						"hotspots": [
							{
								"product": "Tailored Vine Sawtooth Western Shirt",
								"price": "65.00",
								"link": "http://www.levi.com/GB/en_GB/women-clothing-tops/p/508700002",
								"pos": "260, 140",
							},
							{
								"product": "Levi's® Revel™ Demi Curve Skinny Red Diamond",
								"price": "100",
								"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890012",
								"pos": "600, 200",
							},
						],
					},
				],
			},
		],
	},
	denim: {
		id: 1,
		date: "2014-3-10",
		dateDiff: 0,
		data: [
			{
				"name": "Eliza",
				"copies": "London-based singer-songwriter Eliza Shaddad’s blends intricate guitar patterns with breathtaking vocals to create a musical style is as eclectic as her Sudanese-Scottish heritage. The result is a musical fusion of blues, folk and jazz influences, wrapped up in the distinctive sound that has made Shaddad one of the most talked-about acts on London’s live music scene.",
				"captions": [
					"",
					"",
					"Eliza wears Levi's® Revel™ Demi Curve Skinny Jeans in Black Belt",
				],
			},
			{
				"name": "Findlay",
				"copies": "Alt-rocker Findlay may be best known for her towering rock performances and kick-ass attitude, but as her acoustic set in the Levi’s® Revel™ Room revealed, she is also one soulful crooner (and, we were later tickled to learn, a resident on the London Evening Standard’s Power 1,000 list). Check out her newest EP, Greasy Love, for a true taste of the rock chick that resides within.",
				"captions": [
					"",
					"",
					"Findlay wears Levi's® Revel™ Demi Curve Skinny Jeans in Grey",
				],
			},
			{
				"name": "Indiana",
				"copies": "Nottingham singer-songwriter Indiana has been much in demand since her first-ever gig two years ago. And it doesn’t look as if the hype is set to stop – her soon-to-be-released single Solo Dancing became the world’s most blogged-about track, picking up over 100,000 plays in a week, after being tipped by Zane Lowe on Radio 1. Style and substance – we like!",
				"captions": [
					"",
					"",
					"Indiana wears Revel™ Demi Curve Skinny Jeans, Pressed Dark and Resort Trucker Jacket Aztec",
				],
			},
			{
				"name": "Spark",
				"copies": "Jess Morgan, aka Spark, isn’t afraid of pursuing her own path – the singer-songwriter cut ties with her label in 2012 to avoid ‘trying to fulfil someone else’s vision of who I was’. It’s paying off – the infectious indie-pop of newly-released album, First, has been winning over fans, not least those who caught her in the Levi’s® Revel™ Room.",
				"captions": [
					"",
					"",
					"Spark wears Revel™ Demi Curve Skinny Jeans, Contrast Indigo and Authentic Trucker Jacket, Moonshine",
				],
			},
			{
				"name": "Laura",
				"copies": "Selected as one of Virgin Media Music’s Tips for 2014, Laura Welsh has been winning plaudits for her slick, techno-tinged pop since moving to London just a few short years ago. We were enchanted by her soaring vocals in the Levi’s® Revel™ Room – with latest EP release Cold Front busy making waves, it surely won’t be long until you are, too.",
				"captions": [
					"",
					"",
					"Laura wears Revel™ Demi Curve Skinny Jeans, Red Diamond",
				],
			},
			{
				"name": "Marie",
				"copies": "Mellow guitar riffs and witty wordplay are at the heart of 21-year-old Marie Naffah’s musical style – all wrapped up in the powerfully distinctive vocals that saw the singer-songwriter named MTV’s Unsigned Artist of 2014. With a personal style as individual as her music, we were delighted to let Naffah’s folk musings light up the Levi’s® Revel™ Room.",
				"captions": [
					"",
					"",
					"Marie wears Revel™ Demi Curve Skinny Jeans, Black Belt",
				],
			},
			/*{
				"name": "Lara",
				"copies": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"captions": [
					"",
					"",
					"",
				],
			},
			{
				"name": "Patricia",
				"copies": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"captions": [
					"",
					"",
					"",
				],
			},*/
		]
	},
	gallery: {
		id: 1,
		animating: false,
		data: [
			{
				"type": "HIGH LOW",
				"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201980006",
				"price": "95",
			},
			{
				"type": "RED DIAMOND",
				"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890012",
				"price": "90",
			},
			{
				"type": "PRESSED DARK",
				"link": "http://www.levi.com/GB/en_GB/women-jeans/p/201890001",
				"price": "85",
			},
			{
				"type": "SUN DOWN",
				"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154420001",
				"price": "95",
			},
			{
				"type": "DOWNFALL",
				"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154390001",
				"price": "100",
			},
			{
				"type": "BLACK BELT",
				"link": "http://www.levi.com/GB/en_GB/women-jeans/p/154360002",
				"price": "95",
			},
		]
	}
};