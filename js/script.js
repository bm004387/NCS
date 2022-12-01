$(document).ready(function(){
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500); // 500ms = 0.5s
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
        $('.imgslide').bxSlider({
            auto: true,// 자동재생
            speed:500,  // 사진 전환 속도 설정(500 = 500ms = 0.5s = 0.5초)
            stopAutoOnClick: true,  // 애니메이션 유지 시간(1000 = 1000ms = 1s = 1초) 
            pager: true, // 이전(<), 다음(>) 버튼을 누르면 슬라이드가 정지됨
            slideWidth: 1200, // 페이지의 width(폭) 1200px
        });
$(function(){
    $('.tabmenu > li > a').click(function(){
        $(this).parent().addClass("active").siblings().
        removeClass("active")
        return false;
    })
    
});
        $(".notice li:first").click(function(){
            $("#layer").addClass("active");
        });
        $(".btn").click(function(){
            $("#layer").removeClass("active")
        })

        $(".banner").vegas({
            slides: [
                {   src: '/images/imgsd3.jpg' },
                {   src: '/images/imgsd3.jpg',
                    video: {
                        src: [
                            '/videos/shits_videos.mp4',
                        ],
                        loop: false,
                        mute: true
                    }
                }
            ]
        });
});
