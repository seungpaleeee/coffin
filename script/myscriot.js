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


    //section4  슬릭

    $(".s4_left_move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:false,
        slidesToScroll:2
    })

    //sns 탭 메뉴

    $(".section5_inner ul li").click(function(e){
        e.preventDefault();    //위로 안올라감
        $(".section5_inner ul li").toggleClass("on")
    })

})