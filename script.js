 // Main Angular Application
var App = angular.module("App", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {
	
	$scope.loadnews = function(){
	
		// for this project, you are going to load news, based on user input.
		var qnews = $("#qnews").val();
		console.log(qnews)
		// go to google and search new york times api. find one you like, register for
		// an api key and read its documentation on how to make requests
		var apiURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + qnews +"&api-key=2c8b874ea759db461455c09f7662d278:13:74721478";
		console.log(apiURL)
		// you will have to take in user input, add it to the api request
		// make the AJAX call, parse the response, and then dispkay it on the screen
		$.getJSON(apiURL, function(data){ 
			console.log(data);
			$scope.newslist=[];
			var newsl = data.response.docs;
			for (var i=0; i < newsl.length; i++) {
				var docsl = newsl[i];
				
				var headline = docsl.headline.main;
				var snippit = docsl.snippet;
				var pubdate = docsl.pub_date;
				var url = docsl.web_url;

				$scope.newslist.push({
					headline: headline,
					snippit: snippit,
					pubdate: pubdate,
					url: url
				})


			}

			$scope.$apply(function(){
				console.log($scope.newslist)
			})

		})
		// using the Angular framework, display the results in the provided
		// unordered list in the html document.
		// 
		// $scope.$apply(function(){
		// 	console.log($scope.events);
		// });

		// p.s when in doubt, console log something to check it. 
		// console logging is your friedn and its helpful.
		// also google things and look at others code.
	
	}
	
	
});