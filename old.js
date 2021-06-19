


let path_blog = 'https://github.com/fburdell/fburdell.github.io/blob/master/blogs/blog.json'
var containerBlog = document.getElementById("myBlog")
	
fetch(pathBlog)
	 .then(function (response) {
			 return response.json();
	 })
	 .then(function (data) {
			 appendData(data);
	 })
	 .catch(function (err) {
			 console.log('error: ' + err);
	 });
function appendData(data) {
	 var mainContainer = document.getElementById("myBlog");
	 for (var i = 0; i < data.length; i++) {
			 var div = document.createElement("div");
			 div.innerHTML = 'post: ' + data[i].title + ' ' + data[i].body;
			 mainContainer.appendChild(div);
	 }
}
