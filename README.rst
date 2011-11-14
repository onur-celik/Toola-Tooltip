 author:: Emre YILMAZ
 date:: 07/09/2011 11:25
 name:: Toola Tooltip Function 
 usage:: 
	<script src="tooltip.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$tooltip('tooltipClass','tooltipBoxID');
		});
	</script>
	
...note::
	Don't forget styling your tooltipbox,importing jquery
	
 @example-css 
	.tooltip{
	position:relative;
	}
	#tooltip{
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
  @blog http://blog.theylmz.com
  
  /**
  *$(document).ready();
  *içerisinde 
  *$(document).ready(function(){
  *$tooltip('tooltipleriolacaklarınsiniflarininadi','tooltipidsi');
  *});
  *şeklinde kullanabilirsiniz.
  *
  *Css ayarlarını kendiniz yapıcanız zati. mesala 
  *<a href="#" class="link tooltips" alt="Buradaki yazı tooltip olacak">Buraya</a> 
  *şeklindeki bağlantıları oluşturun. her oluşturduğunuza tooltips sınıfını verin. 
  *sonra body etiketinden önce <div id="tooltipbox"></div>  ekleyin. 
  *css ayarlamalarını yapın bu kutu için. 
  *sonra da $tooltip('tooltips','tooltipbox');  diye başlatın.
  **/