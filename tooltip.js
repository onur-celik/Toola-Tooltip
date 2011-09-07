/**
 * @author Emre YILMAZ
 * @date 07/09/2011 11:25
 * @name Tooltip function
 * @usage $tooltip(tooltipsclassname,tooltipboxid);
 * @desc don't forget styling your tooltipbox
 * @example-css 
 * .tooltip{
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
 */
$tooltip = function(el,tipelid){
    $("."+el).live('mouseenter',function(){
        var title = $(this).attr('alt');
        document.onmousemove=(function(e){
            var left = 0;
            var top = 0;
            var ie = document.all?true:false;
            if(!ie) document.captureEvents(Event.MOUSEMOVE)
            if(ie){
                left = event.clientX + document.body.scrollLeft;
                top = event.clientY + document.body.scrollTop;
            }else{
                left=e.pageX;
                top = e.pageY;
            }
            $("#"+tipelid).css('left',left+16);
            $("#"+tipelid).css('top',top+16);
        })    
        $("#"+tipelid).html(title);
        $("#"+tipelid).fadeIn();
    });
    $("."+el).live('mouseout',function(){
        $("#"+tipelid).fadeOut();
    })
}