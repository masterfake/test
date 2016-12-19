$(function(){
	//手机验证码
	function send(time) {
		var time = 60;
		var timer = setInterval(function() {
			time--;
			$(".sendphonecheck").val(time + 's');
			$(".sendphonecheck").attr("disabled", "true");
			if(time == 0) {
				$(".sendphonecheck").val("发送验证码");
				$(".sendphonecheck").removeAttr("disabled");
				clearInterval(timer);
				time = 60;
			}
		}, 1000)

	}
	$(".sendphonecheck").click(function() {
		send();
		$.post("http://192.168.50.46:8001/user/generate_code",$(".phonenumber").val(),function(data){
			console.log(data)
		})
	})
	
	//验证码
	function times(time) {
		var time = 60;
		var timer = setInterval(function() {
			time--;
			$(".checkcode").val(time + 's');
			$(".checkcode").attr("disabled", "true");
			if(time == 0) {
				$(".checkcode").val("发送验证码");
				$(".checkcode").removeAttr("disabled");
				clearInterval(timer);
				time = 60;
			}
		}, 1000)

	}
	$(".checkcode").click(function() {
		times();
			
	})
	
})
