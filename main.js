var list;
var count = 0;
window.onload = function() {
	$.get("https://picsum.photos/list", function(data){
		list = data;
		for (var i = 0; i < 3; i++) {
			$("#photos").append("<img class='image col-xs-4' src='" + list[i].post_url + "/download' alt='picture'>");
		}
		count += 3;
	})
}

function nextPhotos() {
	$("#photos").html('');
	for (var i = count; i < (count + 3); i++) {
		$("#photos").append("<img class='image col-xs-4' src='" + list[i].post_url + "/download' alt='picture'>");
	}
	count += 3;
}