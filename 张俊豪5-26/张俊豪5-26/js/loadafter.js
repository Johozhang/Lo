	$(function(){
		$("#mainContent dt").on("touchstart",function(){
			$(this).parent().toggleClass("list-active");
		})
	})
