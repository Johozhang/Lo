$(function(){
				var index = 0;//当前图片下标
				var perWidth = $("#inner a").eq(0).width();//每张图片宽度
				//1.给下面小圆点加事件
				$("#paganation span").on("click",function(){
					index = $(this).index();
					$("#inner").css({
						left:-index * perWidth
					})
					$(this).addClass("active").siblings().removeClass("active");
				})
				//下一张
				$(".right-arrow").on("click",function(){
					index++;
					if(index > $("#paganation span").size() - 1) {
						index = 0;
					}
				
					$("#inner").css({
						left:-index * perWidth
					})
					$("#paganation span").eq(index).addClass("active").siblings().removeClass("active");
				})
				$(".left-arrow").on("click",function(){
					index--;
				if(index < 0) {
						index = $("#paganation span").size() - 1;
					}
				$("#inner").css({
						left:-index * perWidth
					})
					$("#paganation span").eq(index).addClass("active").siblings().removeClass("active");
				})
				var timer = setInterval(function(){
					$(".right-arrow").trigger("click")
				},1000)
				
				$("#wrap").hover(function(){
					clearInterval(timer);
				},function(){
					timer = setInterval(function(){
						$(".right-arrow").trigger("click");
				},1000)
					})
					
			})
//			$(function() {
//				$("#paganation span").on("click",function(){
//					var index = $(this).index();
//					$("#inner a").eq(index).fadeIn().siblings().fadeOut();
//					$("#paganation span").eq(index).addClass("active").siblings().removeClass("active");
//					$(".right-arrow").on("click",function(){
//						index++;
//						if(index > $("#paganation span"),length - 1)
//					})
//				})
//			})