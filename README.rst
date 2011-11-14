author Emre YILMAZ

date 07/09/2011 11:25

name Toola Tooltip Function 

usage::
	<html>
	<head>
	<title>Toola Test</title>
	<link rel="stylesheet" type="text/css" href="tooltip.css"/>
	<script src="tooltip.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$tooltip('tooltipClass','tooltipBoxID');
		});
	</script>
	</head>
	<body>
		<a href="#" class="tooltip" alt="This text is showing each mouseover. Also this text may be <b>HTML</b> format">Example Site</a>
		
		<!--Must add this div, last line your code-->
		<div id="tooltipBoxID"></div>
		<!--/-->
	</body>
	</html>

	
..note::
	Don't forget styling your tooltipbox,importing jquery


Example-css(tooltip.css) :: 
	.tooltipClass{
	position:relative;
	}
	#tooltipBoxID{
	position:absolute;
	top:25px;
	left:4px;
	border:1px solid #ccc;
	background:#fff6b6;
	padding:2px 5px;
	display:none;
	z-index: 20;
	font-size:10px;
	text-decoration: none;
	color:#484848;
	min-width: 20px;
	min-height: 10px;
	line-height:15px;
	}

Blog: http://blog.theylmz.com