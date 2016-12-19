$(function(){
	
	$(".title-right span").click(function(){
		$(this).addClass("active").siblings().removeClass('active')
	})
	//登录成功后的跳转
	function times(){
		var time = 3;
		var timer = setInterval(function(){
			time--;
			console.log(time)
			$('.time').html(time+"s");
			if(time<= 0){
				window.location.href="#"
				clearInterval(timer);
				time=3
			}
		},1000)
	}
	times()
})
