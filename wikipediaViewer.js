$(document).ready(function() {
	$("#title").on("click", function() {
		location.reload();
	});

	$("#searchInput").keypress(function(e) {
		if(e.which == 13) {	
			var searchValue = $("#searchInput").val();
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchValue + "&namespace=0&format=json&callback=?";

			$.ajax({ 
				type: "GET",
				url: url,
				dataType: "json",
				success: function(data) {
					$("#searchResult").html("");

					for(var i = 0; i < data[1].length; i++) {
						$("#searchResult").append("<li class='well'><h4><a href=" + data[3][i] + ">" + data[1][i] + "</a></h4><p>" + data[2][i] + "</p></li>");
					}

					$("html, body, .wrapper").css("height", "auto");
					$("#title").css("margin-top", "64px");
					
				},
				error: function(errorMessage) {
					$("#test").html("Error");
				}
			});

		}
	});	
});
