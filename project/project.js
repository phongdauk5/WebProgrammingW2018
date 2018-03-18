function postNew(){
	var html = document.getElementById("newpost_textbox");
	var newpost = 	`<div class="post">
					<span class="userimg">
					<a href=""><img class="useravatar" src="images/tide.jpg"></a>
					</span>
					<a href="">Le Phong</a>
					<a href=""><img class="expand_icon" src="images/expand_icon.png"></a>
					<p>${html.value}</p>
					<a href="" class="postinteract">Like</a>
					<a href="" class="postinteract">Comment</a>
					<a href="" class="postinteract">Share</a>
					</div>`
	$('#news').prepend(newpost);
}