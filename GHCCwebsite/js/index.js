var navTop,moreW,navH,aboutRightW;
$(document).ready(function(){
    index();
    TimeFun();
    if($('.trailist').length>0){
        marqueefun('trailist',3,2,1.5)
    }
    
})
$(window).load(function(){
    resizes();
    var a=$('html,body').scrollTop();
   
})
$(window).resize(function(){
    resizes();
})
function index(){
    $('.menu').on('click',function(){
        $('.slide_nav').addClass('left_active')
        $('.all_contentS,.all_content').addClass('active');
        $('.fixed_bg').show();
        $('.header .logo').animate({'opacity':0})
    })
    $('.fixed_bg,.phone_back').on('click',function(){
        $('.slide_nav').removeClass('left_active')
        $('.all_contentS').removeClass('active');
        setTimeout(function(){
            $('.all_content').removeClass('active');
        },400)
        
        $('.fixed_bg').hide();
        $('.header .logo').animate({'opacity':1})
    })
    $('.slide_nav .slide_nav_ul li a').hover(function(){
        $(this).find('.slide_nav_bg span').stop(true,true);
        $(this).find('.slide_nav_bg span').stop().animate({'width':'100%'},400)
    },function(){
        $(this).find('.slide_nav_bg span').stop().animate({'width':'0%'},400)
    })

    var navC=1;
    $('.navF').on('click',function(){
        if(navC==1){
            $('#nav').addClass('active')
            $('.teamNavList').animate({'left':0},500)
            navC=0;
        }else{
            $('#nav').removeClass('active')
            $('.teamNavList').animate({'left':'100%'},500)
            navC=1;
        }
    })


   
}





function resizes(){
    winH=$(window).height();
    winW=$(window).width();
    if(winW>800){
        var footerH=$('.footer').outerHeight();
        $('.footer li').outerHeight(footerH)
    }else{
        $('.footer li').css({'height':'auto'})
    }
    
    /*内页header*/
    var headerA=$('.pagenav a.active').index();
    var activa=$('.secguideS li').eq(headerA).find('a.active').length;
    if(activa>0){
       var thisAL=$('.pagenav a').eq(headerA).offset().left;
        $('.secguideS li').eq(headerA).show().css({'left':thisAL-40}).animate({'left':thisAL,opacity:1},400);
        $('.secguideS').stop().animate({'height':40}) 
    }
    $('.pagenav a').hover(function(){
        var index=$(this).index();
        secAIndex=$('.secguideS li').eq(index);
        if($('.secguideS li').eq(index).find('a').length>0){
             var thisAL=$(this).offset().left;
            secAIndex.siblings().hide().css({'opacity':0})
            secAIndex.show().css({'left':thisAL-40}).animate({'left':thisAL,opacity:1},400)
            
            $('.secguideS').stop().animate({'height':40})
        }
       
    },function(){})
    $('.secguideS').hover(function(){},function(){
        $('.secguideS li').eq(headerA).siblings().hide();
        if($('.secguideS li').eq(headerA).find('a').length>0){
             var thisAL=$('.pagenav a').eq(headerA).offset().left;
            $('.secguideS li').eq(headerA).show().css({'left':thisAL-40}).animate({'left':thisAL,opacity:1},400);
            $('.secguideS').stop().animate({'height':40})
        }else{
            $('.secguideS').stop().animate({'height':0})
        }
       
    }) 
    var hisAH=$('.histList .roundLi a').width();
    $('.histList .roundLi a').outerHeight(hisAH)
    var phoneNavL=$('.phoneNav a').length;
    phoneNavL>3?$('.phoneNav a').width(winW/2):$('.phoneNav a').width(winW/phoneNavL);

    if(winW>900){
        var InterRightH=$('.InterLeft').outerHeight();
        $('.InterRight').height(InterRightH)
        var controLeftH=$('.controLeft').outerHeight();
        $('.controRight').height(controLeftH)
    }else{
        $('.InterRight').css({'height':'auto'})
        $('.controRight').css({'height':'300px'})
    }

     /*新增*/
    var secguideSH=$('.secguideS').height();
    var pageHeaderH=$('.pageHeader').height();
    $('.conR').css({'top':40+pageHeaderH})
    
}

function TimeFun(){
    var histListW=$('.histList').width();
    $('.histList .roundLi').width(histListW*0.082)
    $('.histList .arrowLi').width(histListW*0.224).css({'padding-bottom':histListW*0.079})
    var liindex=0;
        var devlea=0;
        var arrowliL=($('.histList li').length+1)/2;
        $('.histList li,.his_iphone_time a').on('click',function(){
            liindex=$(this).index();
            $(this)
            develmove(liindex);
        })

        develauto();
        var timir;
        $('.histLeft').on('click',function(){
            var roundLiw=$('.histList .roundLi').width();
            var arrowLiW=$('.histList .arrowLi').width();
            var devel_his_arrowW=roundLiw+arrowLiW;
            $('.histRight').removeClass('active');
            if(liindex==0){
                return;
            }
            if(liindex==1){
                $(this).addClass('active')
            }
            var num=(liindex)%4
            if(num==0){
                devlea--;
                $('.histListUl').stop().animate({left:-devel_his_arrowW*devlea})
            }
            liindex--;
            develmove(liindex);
            clearInterval(timir)
            setTimeout(function(){
                develauto();
            },10)
        })
        $('.histRight').on('click',function(){
            
            var roundLiw=$('.histList .roundLi').width();
            var arrowLiW=$('.histList .arrowLi').width();
            var devel_his_arrowW=roundLiw+arrowLiW;
            $('.histLeft').removeClass('active');
            if(liindex==arrowliL-1){
                liindex=-1;
                devlea=-1;
                $('.histListUl').stop().animate({left:0})
            }
            if(liindex==arrowliL-2){
                $(this).addClass('active')
            }
            var num=(liindex+1)%4
            if(num==0){
                devlea++;
                $('.histListUl').stop().animate({left:-devel_his_arrowW*devlea})
            }
            liindex++;
            develmove(liindex);
            clearInterval(timir)
            setTimeout(function(){
                develauto();
            },10)
        })
        function develauto(){
            timir=setInterval(function(){
                var roundLiw=$('.histList .roundLi').width();
            var arrowLiW=$('.histList .arrowLi').width();
                var devel_his_arrowW=roundLiw+arrowLiW;
                $('.devel_his_left').removeClass('active');
                if(liindex==arrowliL-1){
                    liindex=-1;
                    devlea=-1;
                    $('.histListUl').stop().animate({left:0})
                }
                if(liindex==arrowliL-2){
                    $(this).addClass('active')
                }
                var num=(liindex+1)%4
                if(num==0){
                    devlea++;
                    $('.histListUl').stop().animate({left:-devel_his_arrowW*devlea})
                }
                liindex++;
                develmove(liindex);
            },5000)
        }
        function develmove(obj){
            var devel_his_picSW=$('.devel_his_picS').width();
            $('.histList li').eq(obj).siblings().removeClass('active');
            $('.histList li').eq(obj).addClass('active');
            $('.his_iphone_time a').eq(obj).siblings().removeClass('active');
            $('.his_iphone_time a').eq(obj).addClass('active');
            $('.devel_his_mes li').eq(obj).siblings().hide();
            $('.devel_his_mes li').eq(obj).find('p').css({'opacity':0,top:'70px'})
            $('.devel_his_mes li').eq(obj).show();
            $('.devel_his_mes li').eq(obj).find('p').each(function(index){
                $(this).delay(index*150).animate({'opacity':1,top:0},1000)
            })
            $('.devel_his_picS ul').stop().animate({left:-devel_his_picSW*obj})
        }
}