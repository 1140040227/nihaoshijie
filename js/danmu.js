var ov = document.querySelector('.video-title');
var ve = document.getElementById('a1');
var danmuArr = [
		'liuliliuli',
		'6666666',
		'liuliliuli[]~(￣▽￣)~*干杯',
		'爷青回',
		'武汉加油',
		'前方高能',
		'有内味了',
		'禁止套娃',
		'红双喜',
		'真实',
		'阿伟死了',
		'awsl',
		'我从未见过如此厚颜无耻之人',
		'我斑愿称你为最强',
		'呐，现在就要放晴咯',
		'真相永远只有一个',
		'王冰冰是我老婆'
	];
	// console.log(rgbs)
	var colors = ['deepskyblue', 'red', 'white', 'white', 'white', 'white', 'white', 'pink', 'purple', 'green']
ov.onmouseenter = function() {
	setTimeout(function() {
		ve.style.filter = "blur(0px)";
		ve.play();
		$('.video-ul').css({
			"display": "none"
		})
	}, 2500)
}
ov.onmouseleave = function() {
	setTimeout(function() {
		ve.style.filter = "blur(4px)";
		ve.pause();
		$('.video-ul').css({
			"display": "block"
		})
	}, 2500)
	var str = '';
	for(var i = 0;i < danmuArr.length;i++){
		str += `<li class="liss">${danmuArr[i]}</li>`;
	}
	$('.video-ul').html(str);
	var liss = document.querySelectorAll('.liss')
	for (var i = 0; i < danmuArr.length; i++) {
		var ss = parseInt(Math.random()) * 5 + 's';
		var rgbs = Math.floor(Math.random() * 9);
		var tops = parseInt(Math.random() * 200) + "px";
		var lis = parseInt(Math.random() * 17);
		liss[i].style.animation = "rights " + ss + " infinite linear";
		$('.video-ul li').eq(i).css({"color": colors[rgbs],"top": tops})
	}
}
