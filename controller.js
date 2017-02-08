var app = angular.module('myApp', []);

app.controller("orderController", function($scope, $window){
	
	$scope.courses = [{name:'web development', price:'300', active: true},{name:'Design', price:'400', active: false},{name:'Integration', price:'250', active: false},{name:'Traning', price:'200', active: false}];

	$scope.addMe = function(e){
		e.active = !e.active;
	};
	$scope.addTotal = function(){
		
		$scope.total = 0;

		angular.forEach($scope.courses, function(e){
			if(e.active) {
				$scope.total += parseInt(e.price);
				//console.log($scope.total);
			}
		});
		return $scope.total;
	};
});