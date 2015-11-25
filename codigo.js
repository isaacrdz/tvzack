$(function(){
	var $tvShowsContainer = $('#app-body').find('.row');

	function renderShows(shows) {
		shows.forEach(function (show){
			var article = template
				.replace(':name:', show.name)
				.replace(':img:', show.image.medium)
				.replace(':summary:', show.summary)
				.replace(':img alt:', show.name + 'Logo')
			
				var $article = $(article)
				$article.hide();
				$tvShowsContainer.append($article.show());
		})
	}

	/**
   * Submit search form
   */

$('#searchForm')
	.find('form')
	.submit( function (ev){
		ev.preventDefault();
		var busqueda = $(this)
			.find('input[type="text"]')
			.val();

			$tvShowsContainer.find('.tv-show').remove()
			$.ajax({
				url:'http://api.tvmaze.com/search/shows',
				data: { q: busqueda },
				success: function (res, textStatus, xhr){
					
					var shows = res.map(function (el) {
						return el.show;
					})
         	 renderShows(shows);          
					}
				})
			})


	var template = 
		'<article class="tv-show">' +
			'<div class="panel panel-default">' +
				'<div class="panel-body" style="background: #EFEFEF;">' +
						'<div class="col-md-3">' +
						'<img src=":img:" alt=":img alt:">' +
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
			renderShows(shows);
		}
	})
})











