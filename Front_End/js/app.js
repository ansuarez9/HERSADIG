var app = angular.module('myApp', [])
.controller("msgCtrl", function($scope) {
	$scope.user = null;
	$scope.master = null;
	$scope.submit = function(){
		$scope.master = angular.copy($scope.user);
	}
});