$(function(){

    // 탑버튼 : 위치 조절
    $(window).scroll(function(){            
        const EX = $("#ex").offset().top;
        hscoll = $(this).scrollTop();
        // console.log(EX)
        if(hscoll >= EX){
            $("#fix").css('display','block')
        }else{
            $("#fix").css('display','none')
        }
        
    });
    // 탑버튼 : 실행
    $("#fix").click(function () {
        $("html,body").animate({ scrollTop: $("#wrap").offset().top }, 500)
    })
})