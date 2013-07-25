var app = angular.module('timerApp', []);

app.controller( 'TimerCtrl', function CountdownCtrl($scope,$timeout) {
    $scope.minutes  = 0,
    $scope.seconds  = 0,
    $scope.pauseBtn = 1;

    $scope.startTimestamp = 0;
    var countdown, diff;

    // will cleanup this var later
    var current;

    $scope.start = function() {
    	if($scope.startTimestamp == 0) {
    		$scope.startTimestamp = new Date().getTime();
    	} else {
    		diff = (new Date().getTime() - $scope.startTimestamp) / 1000;
    		console.log(diff);
    	}

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
	
	    	}, (1000 - diff));
    	}
    }
      
		$scope.pause = function() {
			$scope.pauseBtn = 0;
			$scope.started  = 0;
		  $timeout.cancel(countdown);
		};
		
		$scope.resume = function() { 
			$scope.pauseBtn = 1;
			$scope.start();
		}
     
});


/*
var start = new Date().getTime();
var time = 0,
    elapsed = '0.0';

var timer = 10; // 20 seconds to start w/
var current;


function countDown()
{
    var diff = (new Date().getTime() - start) / 1000;
    current = timer - Math.round(diff);

    document.title = current;

    if(current > 0) {
    window.setTimeout(countDown, (1000 - diff));
  	}
}
window.setTimeout(countDown, 1000);

*/