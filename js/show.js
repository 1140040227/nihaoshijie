// setInterval(function(){
// 	var r = parseInt(Math.random()*255),
// 		g = parseInt(Math.random()*255),
// 		b = parseInt(Math.random()*255);
// 	$(".title-one").css("color","rgb("+r+","+g+","+b+")");
// 	$(".title-two").css("color","rgb("+r+","+g+","+b+")");
// 	$(".join-this").css({"color":"rgb("+r+","+g+","+b+")","border-color":"rgb("+r+","+g+","+b+")"});
// },500)


$(".join-this").click(function(){
	$(this).slideUp(300);//按钮过渡事件
	$(".title-one").animate({"left":"8%","opacity":"0"},500,function(){
		$(this).css("display","none")
	})
	$(".title-two").animate({"left":"38%","opacity":"0"},500,function(){
		$(this).css("display","none")
		$(".right-box").animate({"width":"82%"},1000);//右盒子
		$(".Show-box").animate({"height":"52%"},1000,function(){
			$("video").css({"height":"100%"})
		});
		$(".left-box").animate({"left":"0"},1000)
	})
	
	
})