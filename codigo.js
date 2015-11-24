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
			shows.forEach(function(show){
				var article = template
					.replace(':name:', show.name)
					.replace(':img:', show.image.medium)
					.replace(':summary:', show.summary)
					.replace(':img alt:', show.name + 'Logo')
				
				$('#app-body')
					.find('.row')
					.append($(article))
			})
		}
	})
})