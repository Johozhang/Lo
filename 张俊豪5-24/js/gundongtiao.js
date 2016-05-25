	$()
	function createScroll() {
		var wrap = document.getElementById("wrap");
		var content = document.getElementById("content");
		var slideBar = document.getElementById("slideBar");
		var slider = document.getElementById("slider");
		if(content.offsetHeight < wrap.offsetHeight){
			//判断内容没有超出一屏，return不执行之后的代码了
			return;
		}
		slideBar.style.display = "block";
		var scale = wrap.offsetHeight/content.offsetHeight;
		// wrap.offsetHeight/content.offsetHeight = slider.offsetHeight/slideBar.offsetHeight;
		var slideHeight = scale * slideBar.offsetHeight;
		slider.style.height = slideHeight + "px";
		var maxHeight = slideBar.offsetHeight - slideHeight;
		//给wrap元素添加滚轮事件
		mousewheel(wrap,function(){
			//滚轮向上
			var sliderTop = slider.offsetTop;
			sliderTop -= 10;
			if(sliderTop < 0) {
				sliderTop = 0;
			}
			var scaleY = sliderTop/slideBar.offsetHeight;
			// sliderTop/slideBar.offsetHeight = content.offsetTop/content.offsetHeight;
			slider.style.top = sliderTop + "px"
			content.style.top = - scaleY * content.offsetHeight + "px";
		},function() {
			//滚轮向下
			var sliderTop = slider.offsetTop;
			sliderTop += 10;
			if(sliderTop > maxHeight) {
				sliderTop = maxHeight;
			}
			var scaleY = sliderTop/slideBar.offsetHeight;

			slider.style.top = sliderTop + "px";
			content.style.top = - scaleY * content.offsetHeight + "px";
		})

		function mousewheel(element,up,down) {
			element.onmousewheel = handle;
			if(window.addEventListener) {
				element.addEventListener("DOMMouseScroll",handle,false);
			}
			function handle(e) {
				var e = e || window.event;
				if(e.wheelDelta < 0 || e.detail > 0) {
					down();
				}else {
					up();
				}
			}
		}
		
		//添加点击事件
		var wrapPos = wrap.getBoundingClientRect();
		slideBar.onclick = function(e) {
			var e = e || window.event;
			var sliderTop = e.clientY - slider.offsetHeight/2 - wrapPos.top;
			//判段边界
			if(sliderTop < 0) {
				sliderTop = 0;
			}else if(sliderTop > maxHeight) {
				sliderTop = maxHeight;
			}
			var scaleY = sliderTop/slideBar.offsetHeight; //比例
			slider.style.top = sliderTop + "px";
			content.style.top = - scaleY * content.offsetHeight + "px";
		}

		//拖拽
		slider.onmousedown = function(e) {
			var e = e || window.event;
			var oTop = e.clientY - slider.offsetTop;
			document.onmousemove = function(e) {
				var e = e || window.event;
				var sliderTop = e.clientY - oTop;

				//判段边界
				if(sliderTop < 0) {
					sliderTop = 0;
				}else if(sliderTop > maxHeight) {
					sliderTop = maxHeight;
				}
				var scaleY = sliderTop/slideBar.offsetHeight; //比例
				slider.style.top = sliderTop + "px";
				content.style.top = - scaleY * content.offsetHeight + "px";
			}
			document.onmouseup = function() {
				document.onmousemove = null;
			}
		}
		slider.onclick = function(e) {
			var e = e || window.event;
			e.cancelBubble = true;
		}

		//键盘事件
		document.onkeydown = function(e) {
			var e = e || window.event;
			if(e.keyCode == 38) {
				var sliderTop = slider.offsetTop;
				sliderTop -= 10;
				if(sliderTop < 0) {
					sliderTop = 0;
				}
				var scaleY = sliderTop/slideBar.offsetHeight;
				// sliderTop/slideBar.offsetHeight = content.offsetTop/content.offsetHeight;
				slider.style.top = sliderTop + "px"
				content.style.top = - scaleY * content.offsetHeight + "px";
			}else if(e.keyCode == 40) {
				//滚轮向下
				var sliderTop = slider.offsetTop;
				sliderTop += 10;
				if(sliderTop > maxHeight) {
					sliderTop = maxHeight;
				}
				var scaleY = sliderTop/slideBar.offsetHeight;

				slider.style.top = sliderTop + "px";
				content.style.top = - scaleY * content.offsetHeight + "px";
			}
		}
	}
	createScroll();