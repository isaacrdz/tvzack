$(function(){

$('#searchForm')
	.find('form')
	.submit( function (ev){
		var search = $(this)
			.find('input[type="text"]')
			.val();
			alert('Se ha buscado;' + search)
	})
	var template = 
'<article id="tv-show">' +
	'<div class="panel panel-default">' +
		'<div class="panel-body" style="background: #EFEFEF;">' +
				'<div class="col-md-3">' +
				'<img src=":img:" alt="">' +
			'</div>' +
			'<div class="col-md-8">' +
				'<h1>:name:</h1>' +
				'<p>:summary:</p>' +
			'</div>' +
		'</div>' +
	'</div>' +
'</article>';
	


	$.ajax({
		url:'http://api.tvmaze.com/shows',
		success: function (shows,textStatus,xhr){
			var article = template
			.replace(':name:', show.name);
		}
	})
})