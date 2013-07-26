var app = angular.module('timerApp', []);

app.controller( 'TimerCtrl', function CountdownCtrl($scope,$timeout) {
    $scope.minutes  = 0,
    $scope.seconds  = 0,
    $scope.pauseBtn = 1;

    $scope.startTimestamp = 0;
    var diff, timerPromise;

    $scope.start = function() {
 	
	    	if($scope.startTimestamp == 0) {
	    		$scope.startTimestamp = new Date().getTime();
	    		$scope.pauseBtn = 1,
	    		$scope.started  = 1;
	    	} else {
	    		diff = (new Date().getTime() - $scope.startTimestamp) / 1000;
	    		console.log(diff);
	    	}
				
 			// Why is timerPromise up top instead of bottom?
 			// it won't cancel if it's at the bottom!!
 			timerPromise = $timeout($scope.start, 1000);
  
      if($scope.seconds > 0 && $scope.minutes >= 0) {
      		$scope.seconds--;
      
      } else {
      		if($scope.minutes > 0) {
        		$scope.minutes--;
            $scope.seconds = 59;

          } else if($scope.seconds > 0) {
          	$scope.seconds--;

        	} else {
          	$timeout.cancel(timerPromise);
          	$scope.seconds = 0;
          	console.log('countdown finished!');
          	$scope.pause();
          }
      }        
    }
      
		$scope.pause = function() {
			$scope.pauseBtn = 0;
			$scope.started  = 0;
			$scope.startTimestamp = 0;
		  $timeout.cancel(timerPromise);
		};
		
		$scope.resume = function() { 
			$scope.pauseBtn = 1;
			$scope.start();
		}
     
});