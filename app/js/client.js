angular.module("ManElia", [ "ngSanitize", "ui.tinymce" ])
.controller("ManEliaCtrl", function($scope, $location, $http) {

	$scope.vueCourante = 'vueIntroduction';
	$scope.resultTryConnexion = 'none';

	$scope.$watch(function() {
		return $location.path();
	}, function(newPath) {
		var tabPath = newPath.split("/");
		if (tabPath.length > 1 && tabPath[1]) 
		{
			if (tabPath[1] == "formulaire")
				$scope.vueCourante = "vueFormulaire";
		} 
		else 
		{
			$scope.vueCourante = "vueIntroduction";
		}
	});

	//var socket = io.connect('http://localhost:8080');

	$scope.intentaConnexion = function(VarIntentaConnexiones){
		//socket.emit('TryLoggin', VarIntentaConnexiones);
		$http.post('/tryLoggin', {VarIntentaConnexiones: VarIntentaConnexiones}).
		  success(function(data, status, headers, config) {
		  	$scope.resultTryConnexion = data.goodInformations;
		  	if ($scope.resultTryConnexion == true)
		  	{
		  		window.location.href = '/indexAdministration.html';
		  	}
		  }).
		  error(function(data, status, headers, config) {
		    $scope.resultTryConnexion = false;
		  });
	}

	/*
	socket.on('TryLogginResponse', function (data) {
	    console.log('en la funcion');
	    $scope.$apply(function(){
		    if (data.goodInformations == 'true')
		    {
		    	$scope.resultTryConnexion = 'true';
		  		window.location.href = '/indexAdministration.html';
		  	}
		    else
		    {
				console.log('faux');
		    	$scope.resultTryConnexion = 'false';
		    }
	    });
	  });*/
});
