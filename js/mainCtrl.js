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
		$scope.newQuote = "";
		$scope.newAuthor = "";
	};
	
	$scope.removeData = function(){
		var str = $scope.quoteToDelete;
		myService.removeData(str);
		$scope.quoteToDelete = "";
	};
});