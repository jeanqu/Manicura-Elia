angular.module("ManElia", [ "ngSanitize", "ui.tinymce", "serviceClient" ])
.controller("ManEliaCtrl", function($scope, $location, $http, ClientServices) {

	$scope.vueCourante = 'vueIntroduction';
	$scope.resultTryConnexion = 'none';

	$scope.Carta = [];

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

	$scope.sendReservacia = function(varInformacionesFormulario){
		alert('Validacion formulario');
	}

	$scope.descargarInformacionesBasica = function(){
		$http.post('/getCartas').
		  success(function(data, status, headers, config) {
		  	$scope.Carta =  data.Carta;
		  }).
		  error(function(data, status, headers, config) {
		    $scope.Carta = [];
		  })
			
	}
	$scope.descargarInformacionesBasica();

});
