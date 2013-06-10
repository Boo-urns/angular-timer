app.filter('prependZero', function(){
	return function(input){
		if(input < 10) {
			return '0' + input;
		} else {
			return input;
		}
		
	};
});