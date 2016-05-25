		$(function(){
			$("#submitBtn").on("click",function(){
				if(!$("#userName").val()){
					$("#userName").focus();
					return;
				}else if(!$("#msg").val()) {
					$("#msg").focus();
					return;
				}
				var li = $("<li></li>");
				var c = '<div class="logo">'+
					'<img src="img/IMG_0013.JPG">'+
				'</div>'+
				'<div class="user-info">'+
					'<p class="user-name"><span>'+$("#userName").val()+'</span><a href="javascript:void(0);" class="del-btn">删除</a></p>'+
					'<p class="txt">'+$("#msg").val()+'</p>'+
				'</div>';
			li.html(c);
			li.hide();//先隐藏
			$("#msgList").prepend(li);
			li.slideDown();

			//重置
			$("#userName").val("");
			$("#msg").val("");
			$("#wordNumber").text("140");
		})

		//事件委托
		$("#msgList").on("click",".del-btn",function(){
			// $(this).parent().parent().parent().remove();

			//动画之后删除
			$(this).parents("li").slideUp(function() {
				//当前的$(this)已经是li了
				$(this).remove();
			});
			// $(this).parents("li").remove();
		})
	})

	$(document).on("keydown",function(e) {
		if(e.keyCode == 13) {
			$("#submitBtn").trigger("click");
		}
	})
	$("form").on("submit",function(e){
		e.preventDefault();
	})
	$("#msg").bind("input propertychange",function() {
		$("#wordNumber").html(140-$(this).val().length)
	})