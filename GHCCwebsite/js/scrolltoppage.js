$(document).ready(function(){
	
})
$(window).load(function(){
		scrolltopx();
	})

$(window).resize(function(){
scrolltopx();
})
var winH=$(window).height();
function scrolltopx(){
	var winW=$(window).width();
	var winH=$(window).height();
	var headerH=$('.header').height();
	var bannerH=$('.banner').height();
	setTimeout(function(){
		$('.header').animate({top:0},600)
	},500)
	if(winH>680){
		eachTop2('.about0')
	}
	eachTop2('.about00')

	var comonbannerH=$('.common_banner').outerHeight()

	
	if($('.about1F').length>0){
		var about1FTop=$('.about1F').offset().top-winH*12/11
	}
	if($('.about2F').length>0){
		var about2FTop=$('.about2F').offset().top-winH*12/11
		console.log($('.about2F').offset().top,about2FTop,winH*12/11)
	}	
	if($('.about3F').length>0){
		var about3FTop=$('.about3F').offset().top-winH*12/11
	}
	if($('.about4F').length>0){
		var about4FTop=$('.about4F').offset().top-winH*12/11
		
	}
	if($('.about5F').length>0){
		var about5FTop=$('.about5F').offset().top-winH*12/11
	}
	if($('.about6F').length>0){
		var about6FTop=$('.about6F').offset().top-winH*11/12
	}
	if($('.about7F').length>0){
		var about7FTop=$('.about7F').offset().top-winH*12/11
	}
	if($('.about8F').length>0){
		var about8FTop=$('.about8F').offset().top-winH*6/11
	}
	if($('.about9F').length>0){
		var about9FTop=$('.about9F').offset().top-winH*6/11
	}
	if($('.about10F').length>0){
		var about10FTop=$('.about10F').offset().top-winH*6/11
	}
	if($('.about11F').length>0){
		var about11FTop=$('.about11F').offset().top-winH*6/11
	}
	if($('.about12F').length>0){
		var about12FTop=$('.about12F').offset().top-winH*6/11
	}
	if($('.about13F').length>0){
		var about13FTop=$('.about13F').offset().top-winH*6/11
	}
	if($('.about14F').length>0){
		var about14FTop=$('.about14F').offset().top-winH*6/11
	}
	if($('.about15F').length>0){
		var about15FTop=$('.about15F').offset().top-winH*6/11
	}
	if($('.about16F').length>0){
		var about16FTop=$('.about16F').offset().top-winH*6/11
	}
	if($('.about17F').length>0){
		var about17FTop=$('.about17F').offset().top-winH*11/12
	}
	
	if($('.product_info').length>0){
		var product_infoTop=$('.product_info').offset().top-$(window).height()*12/11;
	}

	if($('.footer').length>0){
		var footerTop=$('.footer').offset().top-$(window).height()
		var footerH=$('.footer').outerHeight();
	}
	var b=1;

	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop();
		var documentH=$(document).height();
		var winH=$(window).height();
		eachTop('.about1',$(this),about1FTop,120,1200)
		eachTop('.about2',$(this),about2FTop,120,1200)
		eachTop('.about3',$(this),about3FTop,120,1200)
		eachTop('.about4',$(this),about4FTop,120,1200)
		eachTop('.about5',$(this),about5FTop,120,1200)
		eachTop('.about6',$(this),about6FTop,120,1200)
		eachTop('.about7',$(this),about7FTop,120,1200)
		eachTop('.about8',$(this),about8FTop,120,1200)
		eachTop('.about9',$(this),about9FTop,120,1200)
		eachTop('.about10',$(this),about10FTop,120,1200)
		eachTop('.about11',$(this),about11FTop,120,1200)
		eachTop('.about12',$(this),about12FTop,120,1200)
		eachTop('.about13',$(this),about13FTop,120,1200)
		eachTop('.about14',$(this),about14FTop,120,1200)
		eachTop('.about15',$(this),about15FTop,120,1200)
		eachTop('.about16',$(this),about16FTop,120,1200)
		eachTop('.about17',$(this),about17FTop,120,1200)
		
		if(scrollTop>product_infoTop){
			if($('.product_info').css('opacity')==0){
				$('.product_info').animate({top:0,opacity:1},1000)
			}
		}
		
		if(about16FTop<scrollTop){
			setTimeout(function(){
				if(b==1){
					b=0;
					var a=0;
					console.log(a)
					var timir=setInterval(function(){
						if(a==5){clearInterval(timir)}
						$('.theme_bottom li').eq(a).find('.guid_line img').addClass('active')
						a++;
					},500)
				}
			},1000)
		}

	})
	
	
}
function eachTop(oo,obj,top,delay,time){
	var scrollTop=obj.scrollTop()
	if(scrollTop>top){
			if($(oo).css('opacity')==0){
				$(oo).each(function(index){
					$(this).delay(index*delay).animate({'top':0,opacity:1},time);
				})
			}
		}
}
function eachTop2(oo){
	if($(oo).css('opacity')==0){
		$(oo).each(function(index){
			$(this).delay(index*120).animate({'top':0,opacity:1},1200);
		})
	}
}

