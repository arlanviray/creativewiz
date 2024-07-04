<?php
	$dataQuiz = array(
		array(
			'question' => 'What’s your perfect Saturday night?',
			'answers'  => array(
				'A cool new gig',
				'Dinner with friends',
				'Going clubbing with the girls',
				'A girlie night in with a rom-com',
			),
		),

		array(
			'question' => 'What’s your favourite nail colour?',
			'answers'  => array(
				'Something vampy like dark red',
				'Nude or pale pink',
				'Anything with glitter on!',
				'A bright coral or blue',
			),
		),

		array(
			'question' => 'Which of these hairstyles is more you?',
			'answers'  => array(
				'Blonde with pink ombre',
				'Glam, wavy hair',
				'Trendy updo',
				'Messy, bedhead hair',
			),
		),

		array(
			'question' => 'What’s your go-to outfit for a night out?',
			'answers'  => array(
				'A cute vintage number',
				'A sexy dress and heels',
				'Co-ords all the way',
				'Skinny jeans and a sparkly top',
			),
		),

		array(
			'question' => 'At the weekend, you’re likely to wear:',
			'answers'  => array(
				'Buttoned-up, black jeans and biker boots',
				'A maxi dress and flip-flops',
				'A cute playsuit and heels',
				'Ripped jeans and a fedora hat',
			),
		),

		array(
			'question' => 'What’s your handbag of choice?',
			'answers'  => array(
				'Black Mulberry Alexa<br />(or generic satchel)',
				'Louis Vuitton tote',
				'Red Hermes Birkin<br />(or generic colourful bag)',
				'Embellished clutch bag',
			),
		),
	);
?>

<div class="rows">
	<div class="row qresult">
		<div class="container"></div>
	</div>
	<div class="thequiz">
		<div class="row row1">
			<div class="container">
				<h2>Style icon quiz</h2>
				<p>Is your fashion sense more red carpet or street style? Take this quiz to find out<br />which celebrity is your style twin. And don’t forget to share your answers!<p>
			</div>
		</div>
		<?php
			foreach ($dataQuiz as $key => $quiz) {
				$rid = $key + 2;
				if(($key + 1) % 2 == 0){
					$cls = 'odd';
				} else {
					$cls = 'even';
				}
				echo '<div class="row row'. $rid .' qpanel '. $cls .'">';
					echo '<div class="container">';
						echo '<h2>'. $quiz['question'] .'</h2>';
						echo '<div class="answers answers'. ($key + 1) .'">';
							$col1 = $col2 = '';
							foreach ($quiz['answers'] as $quizkey => $ans) {
								if(($quizkey + 1) > 2){
									$col2.= '<div class="ans ans'. ($quizkey + 1) .'">';
										$col2.= '<div class="box">';
											$col2.= $thisObj->getImage('/images/quiz_box_ans.png', 'resp');
											$col2.= '<div class="copy"><p>'. $ans .'</p></div>';
											$col2.= '<div class="cursor checkbox" data-id="'. ($key + 1) .'" data-val="'. ($quizkey + 1) .'"></div>';
										$col2.= '</div>';
									$col2.= '</div>';

								} else {

									$col1.= '<div class="ans ans'. ($quizkey + 1) .'">';
										$col1.= '<div class="box">';
											$col1.= $thisObj->getImage('/images/quiz_box_ans.png', 'resp');
											$col1.= '<div class="copy"><p>'. $ans .'</p></div>';
											$col1.= '<div class="cursor checkbox" data-id="'. ($key + 1) .'" data-val="'. ($quizkey + 1) .'"></div>';
										$col1.= '</div>';
									$col1.= '</div>';
								}
							}
							echo '<div class="col col1">'. $col1 .'</div>';
							echo '<div class="col col2">'. $col2 .'</div>';
						echo '</div>';
						echo '<div class="qcount qcount'. ($key + 1) .'">'. $thisObj->getImage('/images/quiz_box_num.png', 'boxnum') .'<p>Q'. ($key + 1) .'</p></div>';
					echo '</div>';
				echo '</div>';
			}
		?>
		<div class="row row8 qsubmit even">
			<div class="container">
				<div class="cursor submit">SUBMIT</div>
			</div>
		</div>
	</div>
</div>
