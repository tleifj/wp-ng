<!DOCTYPE HTML>

<html lang="en-US">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title></title>
	<?php wp_head(); ?>
</head>

<body>
	<?php
$args = array('post_type' => 'expense'); 
$expenses = new WP_Query($args);
var_dump($expenses);
if ($expenses->have_posts()) {
	foreach ($expenses as $post) {
		setup_postdata($post);
		the_permalink();
	}
	wp_reset_postdata();
}
 ?>
 <p>test</p>
	<footer>	
	</footer>
<?php wp_footer(); ?>
</body>

</html>


 
