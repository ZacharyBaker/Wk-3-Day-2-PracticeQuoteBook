var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, myService){
	$scope.test = 'breh';
	
	
	$scope.quotes = myService.getData();
	
	
});