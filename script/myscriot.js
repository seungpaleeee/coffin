$(function(){

    $(".pop").slideDown("fast");

    $(".pop .pop_inner button").click(function(){
        $(".pop").slideUp()
    })

    //메뉴영역

    $(".sub").hide();

    $(".gnb, .header_b").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({ height:"400px"}, 500)
    })//mouseenter

    $(".header_b").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({ height:"103px"}, 500)
    })//mouseleave

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true
    })

})