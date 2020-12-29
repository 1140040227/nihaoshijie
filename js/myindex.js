var address = location.href;
// console.log(address)
var arr = address.split('?');
var u_id = arr[1];
// console.log(u_id)
$('.user-headimg').click(function() {
	$('.big-div').css({
		"display": "block"
	})
	$('.user-controls').css({
		"display": "block"
	});
})
$('.big-div').click(function() {
	$(this).css({
		"display": "none"
	})
	$('.user-controls').css({
		"display": "none",
		"z-index": "98"
	})
})
$('.user-controls ul li').eq(0).click(function() {
	location.href = 'index.html';
})
$('.logo-img').click(function() {
	location.href = 'index.html?' + u_id;
})
$('.header-ul li').eq(0).click(function() {
	location.href = 'index.html?' + u_id;
})
$.ajax({
	url: './json/myindex.json',
	type: 'get',
	success: function(res) {
		// console.log(res);
		//获取到正在追番数据
		var zhuifan_ing = res.data[0].plate[0];
		// console.log(location.href)
		// console.log(u_id)
		var users_id = u_id;
		//获取到追番标题
		var zhuifan_ing_title = zhuifan_ing.title;
		// 获取到追番的番剧数据
		var zhuifan_ings = zhuifan_ing.products;

		//获取到我的收藏数据
		var mylike = res.data[0].plate[1];
		var mylike_title = mylike.title;
		var mylikes = mylike.products;



		var users = res.data[1].users[users_id];
		console.log(users);
		// tab切换
		//主页
		function myindex() {
			$('.user-header-ul li').css({
				"color": ""
			});
			$('.user-header-ul li').eq(0).css({
				"color": "deepskyblue"
			})
			$(".myindex-main").html("");
			var str = "";
			str +=
				`<div class="like-movie-box">
						<div class="like-movie-title">
							<h3>${zhuifan_ing_title}</h3>
							<span>更多></span>
						</div>
						<div class="like-movie-main">`;
			for (var i = 0; i < 3; i++) {
				str +=
					`<div class="like-movies">
								<div class="like-movies-leftimgbox">
									<img src="${zhuifan_ings[users.likemovies[i]-1].images}" >
								</div>
								<div class="like-movies-rightbox">
									<span class="like-movies-righttitle">
										${zhuifan_ings[users.likemovies[i]-1].title}
									</span>
									<p class="like-movies-righttext">
										${zhuifan_ings[users.likemovies[i]-1].introduce}
									</p>
								</div>
							</div>`
			}
			str += `</div></div>`;


			str +=
				`<div class="collect-movie-box">
						<div class="collect-movie-maintitle">
							<h3>${mylike_title}</h3>
							<span>更多></span>
						</div>
						<div class="collect-movie-main">`;
			for (var i = 0; i < 3; i++) {
				str +=
					`<div class="collect-movies">
								<div class="collect-movies-leftimgbox">
									<img src="${mylikes[users.mycollects[i]-1].images}" >
								</div>
								<div class="collect-movies-rightbox">
									<span class="collect-movies-righttitle">
										${mylikes[users.mycollects[i]-1].title}
									</span>
									<p class="collect-movies-righttext">
										${mylikes[users.mycollects[i]-1].introduce}
									</p>
								</div>
							</div>`
			}



			str += `</div></div>`;
			str +=
				`<div class="mychannel-box">
						<div class="mychannel-title">
							<h3>我的频道</h3>
						</div>
						<div class="mychannel-create-box">
							<p>投稿视频可以分类展示了</p>
							<span>创建频道</span>
						</div>
					</div>`;
			$('.myindex-main').html(str);
			$('.like-movie-title span').click(function() {
				tab_id = 2;
				$('.slide').stop().animate({
					"left": $('.user-header-ul li').width() * tab_id + "px"
				}, 200)
				likes();

			})
		}
		myindex();
		$('.user-header-ul li').eq(0).click(function() {
			tab_id = $(this).index();
			myindex();
		})

		var news = res.data[2].news;
		var videies = res.data[3].videies;
		// 动态
		$('.user-header-ul li').eq(1).click(function() {
			tab_id = $(this).index();
			$('.user-header-ul li').css({
				"color": ""
			})
			$(this).css({
				"color": "deepskyblue"
			})
			$(".myindex-main").html("");
			var str = "";
			for (var i = 0; i < 2; i++) {
				str +=
					`<div class="personal-news-header">
					<div class="personal-news-headerleft">
						<div class="personal-news-headerimg">
							<img src="${users.headimg}" >
						</div>
						<div class="personal-news-headername">
							<p class="personal-news-username">
								${users.username}
							</p>
							<span class="personal-news-date">11-25</span>
						</div>
					</div>
					<div class="personal-news-headerright">
						<svg class="icon icon-ziyuan" aria-hidden="true">
						  <use xlink:href="#icon-ziyuan"></use>
						</svg>
						<div class="personal-news-headerright-box">
							<ul class="personal-news-headerright-boxul">
								<li>置顶</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="personal-news-main">
					<p class="personal-news-maintext">
						${news[i].title}
					</p>
					<div class="personal-news-main-movie">
						<div class="personal-news-main-movieleft">
							<img src="${videies[i].images}" >
							<span class="personal-news-main-movietips">投稿视频</span>
							<span class="personal-news-main-moviemain">
								<span class="personal-news-main-moviedate">
									${videies[i].times}
								</span>
								<svg class="icon icon-shizhong" aria-hidden="true">
								  <use xlink:href="#icon-shizhong"></use>
								</svg>
							</span>
						</div>
						<div class="personal-news-main-movieright">
							<p class="personal-news-main-movierightTitle">${videies[i].title}</p>
							<p class="personal-news-main-movierightText">${videies[i].Author}</p>
							<span class="personal-news-main-moviedown">
								<svg class="icon" aria-hidden="true">
								  <use xlink:href="#icon-bofang"></use>
								</svg>
								<span class="personal-news-main-moviedownnum">`;
								
								if(videies[i].plays.length > 4){
									videies[i].plays = videies[i].plays.slice(-99,-4) + '.' + videies[i].plays.slice(-4,-3) +'w'
								}
								// console.log(videies[i].plays)
				str += `${videies[i].plays}</span><svg class="icon" aria-hidden="true">
								  <use xlink:href="#icon-danmu"></use>
								</svg>
								<span class="personal-news-main-moviedownnum">`;
								if(videies[i].danmus.length > 4){
									videies[i].danmus = videies[i].danmus.slice(-99,-4) + '.' + videies[i].danmus.slice(-4,-3) +'w'
								}
				str += `${videies[i].danmus}</span>
							</span>
						</div>
					</div>`;
				str +=
					`<div class="personal-news-control">
								<span class="personal-news-controlbox">
									<svg class="icon icon-zhuanfa" aria-hidden="true">
									  <use xlink:href="#icon-web-icon-"></use>
									</svg>
									<span class="personal-news-controltext">转发</span>
								</span>
								<span class="personal-news-controlbox">
									<svg class="icon icon-zhuanfa" aria-hidden="true">
										<use xlink:href="#icon-pinglun"></use>
									</svg>
									<span class="personal-news-controltext">评论</span>
								</span>
								<span class="personal-news-controlbox">
									<svg class="icon icon-zhuanfa" aria-hidden="true">
										<use xlink:href="#icon-dianzan"></use>
									</svg>
									<span class="personal-news-controltext">赞</span>
								</span>					
							</div>
						</div>
					</div>`;
			}
			$('.myindex-main').html(str);
			$('.personal-news-headerright').click(function() {
				$('.personal-news-headerright-box').css({
					"display": "block",
					"z-index": "99"
				})
				$('.big-div').css({
					"display": "block"
				})
			})
			$('.big-div').click(function() {
				$(this).css({
					"display": "none"
				})
				$('.personal-news-headerright-box').css({
					"display": "none",
					"z-index": "98"
				})
			})
		})

		//获取番剧信息
		var mysub = res.data[4].movies;
		// console.log(mysub)

		function likes() {
			$(".myindex-main").html("");
			var str = "";
			str += `<div class="subscribe-title">
				<h3>我的订阅</h3>
			</div>
			<div class="subscribe-main">`;
			// console.log(mysub[1].tips)
			for (var i = 0; i < mysub.length; i++) {
				str +=
					`<div class="subscribe-movies">
						<div class="subscribe-moviesleft">
							<div class="subscribe-moviesleft-imgbox">
								<span class="subscribe-tips">${mysub[i].tips}</span>
								<img src="${mysub[i].images[0]}" >
							</div>
						</div>
						<div class="subscribe-moviesright">
							<span class="subscribe-moviesright-title">
								${mysub[i].title}
							</span>
							<p class="subscribe-moviesright-text">
								${mysub[i].introduce}
							</p>
							<p class="subscribe-moviesright-textlikes">${mysub[i].type}</p>
							<p class="subscribe-moviesright-textlikes">${users.playing[i]}</p>
						</div>
					</div>`;
			}
			$('.myindex-main').html(str);
			tab_id = 2;
			$('.user-header-ul li').css({
				"color": ""
			})
			$('.user-header-ul li').eq(2).css({
				"color": "deepskyblue"
			})

		}
		$('.user-header-ul li').eq(2).click(function() {
			tab_id = $(this).index();
			$('.user-header-ul li').css({
				"color": ""
			})
			$(this).css({
				"color": "deepskyblue"
			})
			likes();
		})

	}
})


// 个性签名功能实现
var flag = true;
$(".user-container-bottom").mouseenter(function() {
	// console.log($('[name=person-note]').attr('disabled'),flag)
	if ($('[name=person-note]').attr('disabled') == "disabled") {
		if (flag == false) {
			$('[name=person-note]').removeAttr("disabled", "disabled")
			$('[name=person-note]').css({
				"background": "ghostwhite",
				"color": "gray"
			})
		} else {
			$('[name=person-note]').css({
				"background": "rgba(255,255,255,0.3)",
				"border": "1px solid #ffffff",
				"color": "white"
			})
			$('[name=person-note]').removeAttr("disabled", "disabled")
		}
	} else {

	}
})

$(".user-container-bottom").click(function() {
	// console.log($('[name=person-note]').attr('disabled'),flag)
	flag = false;
	// console.log($('[name=person-note]').attr('disabled'),flag)
	$('[name=person-note]').removeAttr("disabled", "disabled");
	$('[name=person-note]').css({
		"background": "ghostwhite",
		"color": "gray"
	});
})

$(".user-container-bottom").mouseleave(function() {
	if ($('[name=person-note]').attr('disabled') == undefined) {
		if (flag == false) {
			// console.log($('[name=person-note]').attr('disabled'),flag)
			$('[name=person-note]').css({
				"background": "ghostwhite",
				"color": "gray"
			})
			$('[name=person-note]').removeAttr("disabled", "disabled");
		} else {
			$('[name=person-note]').attr("disabled", "disabled");
			$('[name=person-note]').css({
				"background": "rgba(255,255,255,0)",
				"border": "1px solid transparent"
			})
		}
	} else {
		$('[name=person-note]').attr("disabled", "disabled");
		$('[name=person-note]').css({
			"background": "rgba(255,255,255,0.3)",
			"border": "1px solid transparent"
		})
	}
})

$('[name=person-note]').blur(function() {
	flag = true;
	$('[name=person-note]').attr("disabled", "disabled");
	$('[name=person-note]').css({
		"background": "rgba(255,255,255,0)",
		"border": "1px solid transparent",
		"color": "whitesmoke"
	})
})

// 详情导航栏移动条功能实现
var tab_id = 0;
// 先添加默认效果
// var liW = $('.user-header-ul li').width();
// var liS = $('.user-header-ul li').length;

$('.slide-box').width($('.user-header-ul li').width() * $('.user-header-ul li').length)
$('.slide').width($('.user-header-ul li').width());
$('.user-header-ul li').eq(0).css({
	"color": "deepskyblue"
});

$('.user-header-ul li').mouseenter(function() {
	var li_step = $(this).index();
	// console.log(li_step)
	$('.slide').stop().animate({
		"left": li_step * $(".user-header-ul li").width()
	}, 200)
})
$('.user-header-ul').mouseleave(function() {
	if (tab_id == 0) {
		$('.slide').stop().animate({
			"left": "0"
		}, 200)
	} else if (tab_id != 0) {
		$('.slide').stop().animate({
			"left": $('.user-header-ul li').width() * tab_id + "px"
		}, 200)
	}
})
