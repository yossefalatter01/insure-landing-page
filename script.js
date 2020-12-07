$(function(){
    $('#mynbo').hide();
    // $('#fixxo').hide();
    var x = 4 ;
    $('#mynato').click(()=>{
        $('#mynbo').slideToggle();
        $('.allofall').toggle();
        //  $('#fixxo').hide();
        // $('#fixxo').toggle();
        if (x%2==0){
            $('#mynato').attr("src","images/icon-close.svg"); 
            $('#mynbo').css({
                "position":"fixed",
                "top": "75px"
            }) ;
            $('#kok').css({
                "position":"fixed",
                "top": "0",
                "z-index" : "999"
        }) ;
        }else{
            $('#mynato').attr("src","images/icon-hamburger.svg"); 
            // $('#mynbo').css("position","relative") ;
        }
        x++;
    })
});
$(function() {
    $("body").niceScroll({
        cursorborder : "none",
        cursorcolor : "hsl(256, 15%, 50%)",
        // cursorfixedheight: 300,
        scrollspeed: 60,
        zindex: 999})
})