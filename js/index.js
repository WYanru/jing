//最顶部点击消失
$(".close").click(function() {
	$("#J_event").hide();
})
//还没逛够
$(".shop_01").hover(function() {
	$(".yin").fadeToggle();
})
$(".shop_02").hover(function() {
	$(".yin1").fadeToggle();
})
$(".shop_03").hover(function() {
	$(".yin2").fadeToggle();
})
$(".shop_04").hover(function() {
	$(".yin3").fadeToggle();
})
//地址选择
$(".henan").hover(function() {
	$(".di_zhi").fadeToggle();
	$(".di_zhi").hover(function() {

		$(".di_zhi").fadeIn();
	}, function() {

		$(".di_zhi").fadeOut();
	});
});
//导航栏
$("._wode").eq(0).hover(function() {
	$("._wode1").fadeToggle();
	$("._wode1").hover(function() {
		$("._wode1").fadeIn();
	}, function() {
		$("._wode1").fadeOut();
	});
});
$("._wode").eq(1).hover(function() {
	$(".l_qiye").fadeToggle();
	$(".l_qiye").hover(function() {
		$(".l_qiye").fadeIn();
	}, function() {
		$(".l_qiye").fadeOut();
	});
});
$("._wode").eq(2).hover(function() {
	$("._kehu").fadeToggle();
	$("._kehu").hover(function() {
		$("._kehu").fadeIn();
	}, function() {
		$("._kehu").fadeOut();
	});
});
$("._wode").eq(3).hover(function() {
	$("._wangzhan").fadeToggle();
	$("._wangzhan").hover(function() {
		$("._wangzhan").fadeIn();
	}, function() {
		$("._wangzhan").fadeOut();
	});
});
//主图轮播
$(function() {
	var index = 0;
	$(".num li").mousemove(function() {
		$(this).addClass("current").siblings().removeClass("current");
		index = $(this).index();
		$(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	});
	var time = setInterval(move, 3000);

	function move() {
		index++;
		if(index == 8) {
			index = 0
		}
		$(".num li").eq(index).addClass("current").siblings().removeClass("current");
		$(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	};
	$(".outer").hover(function() {
			clearInterval(time);
		},
		function() {
			time = setInterval(move, 3000);
		});
	$(".right_btn").click(function() {
		move();
	});

	function moveL() {
		index--;
		if(index == -1) {
			index = 7
		}
		$(".num li").eq(index).addClass("current").siblings().removeClass("current");
		$(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	}
	$(".left_btn").click(function() {
		moveL();
	});
})
//搜索框
$(function() {
	$(".text").on("blur", function() {
		$.get(" http://47.104.244.134:8080/goodsbyid.do", {
			"id": $(".text").val()
		}, function(res) {
			console.log(res.name);
			var Name = res.name;
			$(".shu_1 li").html(Name);
		});
	});
});

//搜索框
$(function() {
	$(".text_1").on("blur", function() {
		$.get(" http://47.104.244.134:8080/goodsbyid.do", {
			"id": $(".text_1").val()
		}, function(res) {
			console.log(res.name);
			var Name = res.name;
			$(".shu-1 li").html(Name);
		});
	});
});

$(function() {
	show_time();
});
//倒计时
function show_time() {
	var time_start = new Date().getTime(); //设定当前时间
	var time_end = new Date("2019/3/2 00:12:00").getTime(); //设定目标时间
	// 计算时间差 
	var time_distance = time_end - time_start;
	// 天
	var int_day = Math.floor(time_distance / 86400000)
	time_distance -= int_day * 86400000;
	// 时
	var int_hour = Math.floor(time_distance / 3600000)
	time_distance -= int_hour * 3600000;
	// 分
	var int_minute = Math.floor(time_distance / 60000)
	time_distance -= int_minute * 60000;
	// 秒 
	var int_second = Math.floor(time_distance / 1000)
	// 时分秒为单数时、前面加零 
	if(int_day < 10) {
		int_day = "0" + int_day;
	}
	if(int_hour < 10) {
		int_hour = "0" + int_hour;
	}
	if(int_minute < 10) {
		int_minute = "0" + int_minute;
	}
	if(int_second < 10) {
		int_second = "0" + int_second;
	}
	// 显示时间 

	$(".time_h").html(int_hour);
	$(".time_m").html(int_minute);
	$(".time_s").html(int_second);
	// 设置定时器
	setTimeout("show_time()", 1000);
}
//四个图片轮播
$(function() {
	var showIndex = 0;
	var timer;
	$(function() {
		$(".list_01 .l-i").not(":eq(0)").css("display", "none");
		startTimer();

		$(".btnPrev").click(function() {
			clearInterval(timer);

			if(showIndex == 0) showIndex = 2;
			showIndex--;
			showImg();
			startTimer();
		});

		$(".btnNext").click(function() {
			clearInterval(timer);

			if(showIndex == 1) showIndex = -1;
			showIndex++;
			showImg();
			startTimer();
		});
	});

	function startTimer() {
		timer = setInterval(function() {
			showIndex++;
			if(showIndex >= 2) showIndex = 0;
			showImg();
		}, 100000);
	}

	function showImg() {
		$(".list_01 .l-i").stop(true, true);
		$(".list_01 .l-i").fadeOut(400).eq(showIndex).fadeIn(400);
	}
})
//俩图轮播
$(function() {
	var showIndex = 0;
	var timer;
	$(function() {
		$("._tup li").not(":eq(0)").css("display", "none");
		startTimer();
		$("ul.uIndex li").hover(function() {
			clearInterval(timer);

			showIndex = $(this).index();
			showImg();
		}, function() {
			startTimer();
		});
		$(".btnPrev").click(function() {
			clearInterval(timer);

			if(showIndex == 0) showIndex = 2;
			showIndex--;
			showImg();
			startTimer();
		});

		$(".btnNext").click(function() {
			clearInterval(timer);

			if(showIndex == 1) showIndex = -1;
			showIndex++;
			showImg();
			startTimer();
		});
	});

	function startTimer() {
		timer = setInterval(function() {
			showIndex++;
			if(showIndex >= 2) showIndex = 0;
			showImg();
		}, 4000);
	}

	function showImg() {
		$("._tup li").stop(true, true);
		$("._tup li").fadeOut(400).eq(showIndex).fadeIn(400);
		$("ul.uIndex li").removeClass("bg").eq(showIndex).addClass("bg");
	}
})
//中间定位顶部
window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollTop>=200){
		
		$(".search_1").css({"display":"block","position":"fixed","top":"0"});
		$(".shu-1").css({"position":"fixed","top":"50"});
	}else{
		
		$(".search_1").css({"display":"static"});
	}
}
//获取用户名
if(getCookie("lart")) {
	var obj = JSON.parse(getCookie("lart"));
}
var $username = obj[1];
//console.log(obj[1]);
$(".link-login").html("你好,"+$username);
$(".l-deng").html($username);
