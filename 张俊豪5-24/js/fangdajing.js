//		
//$(function(){
//			var maxImg = maxBox.children[0];
//			var minBoxPos = minBox.getBoundingClientRect();
			//块与大图的显隐
			$("#minBox").hover(function() {
					$("#slider").show();
					$("#maxBox").show()
				},function() {
					$("#slider").hide();
					$("#maxBox").hide();
				})
			
			
			$("#minBox").on("mousemove",(function(e) {
					var oleft = e.clientX - $("#slider").width()/2 - $("#minBox").offset().left;
					var oTop = e.clientY - $("#slider").height()/2 - $("#minBox").offset().top;
					var maxWidth = $("#minBox").innerWidth() - $("#slider").;
					var maxHeight = minBox.clientHeight - slider.offsetHeight;
					if(bLeft > maxWidth) {
						bLeft = maxWidth;
					}else if(bLeft < 0) {
						bLeft = 0;
					}
					if(bTop > maxHeight) {
						bTop = maxHeight;
					}else if(bTop < 0) {
						bTop = 0;
					}
					var scaleX = bLeft/maxWidth;
					var scaleY = bTop/maxHeight;
					maxImg.style.left = - scaleX * (maxImg.offsetWidth- maxBox.offsetWidth) + "px";
					maxImg.style.top = - scaleY * (maxImg.offsetHeight - maxBox.offsetHeight) + "px";
					slider.style.left = bLeft + "px";
					slider.style.top = bTop + "px";
				})
	})