var address = location.href;
// console.log(address)
// if()
$('.hisplay-box').css({"display":"none"})
var arr = address.split('?');
// console.log(arr)
if(arr.length == 1){
	// alert('您现在是游客状态');
	$.ajax({
		url:'json/myindex.json',
		type:'get',
		success:function(res){
			// console.log(res);
			var users = res.data[1].users;
			// console.log(users)
			
			var uName = document.getElementById('username');
			var psd = document.getElementById('psd');
			var btn = document.getElementById('sumbtn');
			$('.keke').click(function(){
				alert("请先登录")
			})
			btn.onclick = function(){
				for(var i = 0;i < users.length;i++){
					console.log(uName.value)
					console.log(users[i].username)
					console.log(psd.value)
					console.log(users)
					if(uName.value == users[i].username && psd.value == users[i].password){
						location.href = "index.html?" + i;
						alert('登录成功');
						break;
					}else{
						alert("账号密码错误")
					}
				}
			}
			
		}
	})
}else{
	var u_id = arr[1];
	console.log(u_id)
	$.ajax({
		url:'json/myindex.json',
		type:'get',
		success:function(res){
			//获取追番数据
			// var zhuifan_ing = res.data[0].plate[0];
			var users_id = u_id;
			var users = res.data[1].users[users_id];
			$('.hisplay-box').css({"display":"block"})
			// $('.denglu').removeClass('trigger':'click');
			$('.Log-box').click(function(){
				var uName = document.getElementById('username');
				var psd = document.getElementById('psd');
				location.href = "myindex.html?" + u_id;
			})
			var str = '';
			str += `<form action="" class="form">
				<img src="${users.headimg}" >
              <h2>欢迎回来</h2>
              <div class="input-group">
                <input type="text" name="username" value="昵称：${users.username}" disabled="disabled"/>
              </div>
			  <div class="input-group">
			    <input type="text" name="userage" value="年龄：${users.age}" disabled="disabled"/>
			  </div>
			  <div class="input-group">
			    <input type="text" name="usersex" value="性别：${users.sexs}" disabled="disabled"/>
			  </div>
            </form>`
			$('.login-wrapper').html(str);
			$('.keke').click(function(){
				location.href = 'xiangxi.html?' + u_id
			})
		}
	})
}