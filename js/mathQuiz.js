new WOW().init();

var app = angular.module('mathQuiz', []);

app.controller('QuesLibrary', ['$scope', function($scope) {
	$scope.list = [ 
		{ 
			question: "Who is the most recent recipient of the Ballon d'or?", 
			ans1: "Lionel Messi",
			ans2: "Cristiano Ronaldo",
			ans3: "Andrés Iniesta",
			ans4: "Manuel Neuer",
			right: 2, 
		}, 
		{ 
			question: "Who is the LORD of football world?", 
			ans1: "Ronaldo de Lima",
			ans2: "Cristiano Ronaldo",
			ans3: "Pele",
			ans4: "Bendtner",
			right: 4, 
		}
	];
	$scope.identifies = [];
	$scope.ques_index = 0;
    $scope.ques = $scope.list[0];
	$scope.next = function () {
        if ( $scope.ques_index >= $scope.list.length - 1) {
            $scope.ques_index = 0;
        } else {
            $scope.ques_index ++;
        }
		$scope.ques = $scope.list[ $scope.ques_index ];
    };
	$scope.prev = function () {
        if ( $scope.ques_index <= 0 ) {
            $scope.ques_index = $scope.list.length - 1;
        } else {
            $scope.ques_index --;
        }
		$scope.ques = $scope.list[ $scope.ques_index ];
    };
}]);