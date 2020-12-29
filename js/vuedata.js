var address = location.href;
// console.log(address)
var arr = address.split('?');
var u_id = arr[1];

new Vue({
	el:"#app",
	data:{
		sexs:[
			"<svg class='icon icon-xingbie' aria-hidden='true'><use xlink:href='#icon-xingbienv'></use></svg>",
			"<svg class='icon icon-xingbie' aria-hidden='true'><use xlink:href='#icon-xingbienan'></use></svg>"
		,],
		images:[
			"<img src='images/user-headimg.jpg' >",
			"<img src='images/user-headimg2.jpg' >"
		],
		users:{
			"id":"",
			"username":"",
			"password":"",
			"sex":"",
			"personNote":"",
			"level":"",
			"headImg":"",
			"likes":"",
			"fens":"",
			"zans":"",
			"plays":"",
			"reads":""
		}
	},
	mounted(){
		axios.get('json/myindex.json')
		.then(res => {
			var users_id = u_id;
			this.users = res.data.data[1].users[users_id];
				if(this.users.likes.length > 4){
					this.users.likes = this.users.likes.slice(-99,-4) + '.' + this.users.likes.slice(-4,-3) + "w";
				}
				if(this.users.fens.length > 4){
					this.users.fens = this.users.fens.slice(-99,-4) + '.' + this.users.fens.slice(-4,-3) + "w";
				}
				if(this.users.zans.length > 4){
					this.users.zans = this.users.zans.slice(-99,-4) + '.' + this.users.zans.slice(-4,-3) + "w";
				}
				if(this.users.plays.length > 4){
					this.users.plays = this.users.plays.slice(-99,-4) + '.' + this.users.plays.slice(-4,-3) + "w";
				}
				if(this.users.reads.length > 4){
					this.users.reads = this.users.reads.slice(-99,-4) + '.' + this.users.reads.slice(-4,-3) + "w";
				}
		})
	}
	
	// watch:{
	// 	personNote(){
	// 		console.log(123)
	// 	}
	// }
})