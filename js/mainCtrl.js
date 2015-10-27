var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, myService){
	$scope.test = 'breh';
	
	
	$scope.quotes = myService.getData();
	
	$scope.addData = function(){ 
		
		var quoteObj = {
			text: $scope.newQuote,
			author: $scope.newAuthor
		}
		myService.addData(quoteObj);
	};
});