$(function() {
	//表单验证
	var phone_reg = /^1[34578]{1}\d{9}$/;
	var p_reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
	var isTrue = true;

	$(".phone").blur(function() {
			$.post("http://192.168.50.46:8001/sign/isigned", {
				phone: $('.phone').val()
			}, function(data) {
				if(data.code != 0) {
					$(".phone-err").html("该手机号已被注册");
					isTrue = false;
				} else {
					$(".phone-err").html("");
					isTrue = true;
				}
			})
			var phonenumber = $(".phone").val();
			if(phonenumber.length <= 0 || !(phone_reg.test(phonenumber))) {
				$(".phone-err").html("请输入正确的手机号");
				isTrue = false;
			} else {
				$(".phone-err").html("");
				isTrue = true;
			}
		})
		//密码
	$(".passwd").blur(function() {
		var pow = $(".passwd").val();
		if(pow.length <= 0 || !(p_reg.test(pow))) {
			$(".pow-err").html("密码格式不正确");
			isTrue = false;
		} else {
			$(".pow-err").html("");
			isTrue = true;
		}
	})
	$(".passwdcheck").blur(function() {
			if($(".passwdcheck").val().length <= 0 || $(".passwdcheck").val() != $(".passwd").val()) {
				$(".pow-check").html("请保持密码一致");
				isTrue = false;
			} else {
				$(".pow-check").html("");
				isTrue = true;
			}
		})
		//验证码
	function times(time) {
		var time = 60;
		var timer = setInterval(function() {
			time--;
			$(".sendcord").val(time + 's');
			$(".sendcord").attr("disabled", "true");
			if(time == 0) {
				$(".sendcord").val("发送验证码");
				$(".sendcord").removeAttr("disabled");
				clearInterval(timer);
				time = 60;
			}
		}, 1000)

	}
	//发送验证码
	$(".sendcord").click(function() {
			times();
			var phonemsg = {
				phone: $(".phone").val()
			}
			jsonAjax("http://192.168.50.46:8001/user/generate_code", phonemsg, "json", callBack);

			function callBack(data) {
				console.log(data)
			}
		})
		//登录
	$(".isreg").click(function() {
			if(isTrue != false && $(".phone").val() != "" && $(".cord").val() != "" && $(".passwd").val() != "") {
				var userInfo = {
					passwd: $(".passwd").val(),
					phone: $(".phone").val(),
					valid_number: $(".cord").val()
				}
				$.post("http://192.168.50.46:8001//sign/sign",userInfo, function(data) {
					alert("注册成功");
					window.location.href = "login.html"
					console.log(data)
				})
			} else {
				alert("请填写手机号密码")
			}
	})
		//ajax
	function jsonAjax(url, param, datat, callback) {
		$.ajax({
			type: "post",
			url: url,
			data: param,
			dataType: datat,
			success: callback,
			error: function() {
				console.log("error")
			}
		});
	}

})