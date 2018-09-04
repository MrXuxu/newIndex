$(function(){
    var index = 0;
    function animate(index) {
        // $(".bg li").eq(index).fadeIn().siblings().fadeOut();
        $(".bg li").eq(index).addClass("show").siblings().removeClass("show");
    }
    setInterval(function(){
        animate(index);
        index++;
        if(index>1){
            index = 0;
        }
    }, 4000)
})

$(function(){
    var nav = $("#nav").offset().top;
    console.log(nav);
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if(scroll>nav) {
            $("#nav").addClass("fixed");
        }
        if(scroll<=nav) {
            $("#nav").removeClass("fixed");
        }
    })
})

$(function(){
    $("#collapse").click(function(){
        $("#nav_bar").slideToggle(300);
    })
})