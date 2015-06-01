<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$food = $_GET['food'];
	$foodArray = array('tuna','beef','fish', 'chicken', 'ham', 'apples','avocado', 'bananas');
	if(in_array($food, $foodArray))
		echo 'We do have '.$food.'!';
	elseif($food=='')
		echo 'Please Enter a food !';
	else
		echo 'Sorry, We do not sell '.$food.'!';
echo '</response>';
?>