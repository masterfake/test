$(function(){
	console.log($(":checkbox").prop("checked"))
	$(".islogin").click(function(){
		if($(".possword").val()!=''&&$(".username").val()!=""&&$(":checkbox").prop("checked")==true){
			var user = {
	            passwd : $(".possword").val(), 
	    	    phone : $(".username").val()
	         }
		    $.post("http://192.168.50.46:8001/login/login",user,callBack)	        
		}else{
			alert("请填写手机号")
		}
		
		function callBack(data){
			if(data.code==0){
			   	 console.log(data);
			     var key = data.data.session;
			     $.cookie("user",JSON.stringify(key),{expires:7,path:"/"});
			      
	    	     
			   }else{
			   	alert("用户名或密码错误")
			   }
		}
		
	    	
	})
	var a = $.cookie("user");
	console.log(a)
})

