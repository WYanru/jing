//放大镜

//huoquID
id = location.search.split("=")[1];
console.log(id)
$(function() {
	var str = "";
	var str1 = "";
	var str2 = "";
	var str3 = "";
	var str4="";
	var url = "http://47.104.244.134:8080/goodsbyid.do";
	$.get(url, {id: id}, function(res) {
		
		//console.log(res.id);
		str4 = "<span class='x-id'>" + res.id + "</span>"
		str = "<img src='" + res.picurl + "'/>"
		//console.log(str)
		$("#mid").append(str);
		str1 = "<img src='" + res.picurl + "'>"
		$("#big").append(str1);
		str2 = "<h4>" + res.name + "</h4>"
		$(".D-ti").append(str2);
		str3 = "<p>" + res.price + "</p>"
		$("._jiage").append(str3);
		
		
		
		var ozoombox = document.getElementById("zoombox");
		var omid = document.getElementById("mid");
		var ozoom = document.getElementById("zoom");
		var oBox = document.getElementById("box")
		var ali = oBox.children;
		var omidImg = omid.children[0];
		var obig = document.getElementById("big");
		var obigImg = obig.children;
		var obgImg = obig.children[0];

		for(let h = 1; h <= obigImg.length; h++) {
			//先清z-index再加
			//ali[h - 1].onclick = function() {
				for(var j = 0; j < obigImg.length; j++) {
					obigImg[j].style.zIndex = "0";
				}
				obigImg[h - 1].style.zIndex = h;
				
				var cw = omid.clientWidth;
				var ch = omid.clientHeight;
				omid.onmousemove = function(e) {
					var evt = e || event;
					var zw = ozoom.offsetWidth;
					var zh = ozoom.offsetHeight;
					var left = evt.clientX - ozoombox.offsetLeft - zw / 2;
					var top = evt.clientY - ozoombox.offsetTop +zh / 2;
					left = left <= 0 ? 0 : left > cw - zw ? cw - zw : left;
					top = top <= 0 ? 0 : top > ch - zh ? ch - zh : top;
					ozoom.style.left = left + "px";
					ozoom.style.top = top + "px";
					obigImg[h - 1].style.left = -left / cw * obgImg.offsetWidth + "px";
					obigImg[h - 1].style.top = -top / ch * obgImg.offsetHeight + "px";
				}
			//}

		}
	})
	$("#mid").mouseover(function() {
		$("#zoom").css({"display":"block"});
		$("#big").css({"display":"block"});					
	})
	$("#mid").mouseout(function() {
		$("#zoom").css({"display":"none"});
		$("#big").css({"display":"none"});
		
	})
	
	
	
})
 

//点击购物车那里的左右
$(function() {
	var i = 1;
	$(".D-button1").on("click", function() {
		$(".D-zishu").html(i += 1);
	})
	$(".D-button2").on("click", function() {
		if(i <= 1) {
			$(".D-zishu").html(1);
		} else {
			$(".D-zishu").html(i -= 1);
		}

	})
	//
	$(".D-gou").on("click",function(){
		//购物车添加
		if(getCookie("lart")) {
			var obj = JSON.parse(getCookie("lart"));
		}
		var token = obj[0];		
		
		var url2="http://47.104.244.134:8080/cartsave.do";
		$.get(url2,{gid:id,token:token},function(res){
			console.log(res);
		})
	})
})