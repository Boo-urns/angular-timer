var app = angular.module('timerApp', []);

app.controller( 'TimerCtrl', function CountdownCtrl($scope,$timeout) {
    $scope.minutes  = 0,
    $scope.seconds  = 0,
    $scope.pauseBtn = 1;
    var countdown;

    $scope.start = function() {
    	$scope.pauseBtn = 1,
    	$scope.started  = 1;
    	
    	if($scope.minutes > 0 || ($scope.minutes == 0 && $scope.seconds >= 0)) {
	    	countdown = $timeout(function() { 
					$scope.seconds--;
	
	        if($scope.seconds > 0 && $scope.minutes == 0) {
	        		$scope.start();
	        
	        } else if ($scope.seconds >= 0 && $scope.minutes > 0) {
	        		$scope.start();
	        }
	        else {
	        		if($scope.minutes > 0) {
		        		$scope.minutes--;
		            $scope.seconds = 59;
		            $scope.start();
	            } else {
	            	$timeout.cancel(countdown);
	            }
	        }        
	
	    	}, 1000);
    	}
    }
      
		$scope.pause = function() {
			$scope.pauseBtn = 0,
			$scope.started  = 0;
		  $timeout.cancel(countdown);
		};
		
		$scope.resume = function() { 
			$scope.pauseBtn = 1;
			$scope.start();
		}
     
});