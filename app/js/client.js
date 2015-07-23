angular.module("ManElia", [ "ngSanitize", "ui.tinymce", "serviceClient", "misFiltros" ])
.controller("ManEliaCtrl", function($scope, $location, $filter, $http, ClientServices) {

	$scope.vueCourante = 'vueIntroduction';
	$scope.resultTryConnexion = 'none';

	$scope.Carta = [];

	//$scope.VarReservacia = {};
	$scope.tipo_reservacia_libre = 0;
	$scope.tipo_reservacia_noDisponible = 1;
	$scope.tipo_reservacia_ocupado = 2;
	$scope.tipo_reservacia_tuReservacia = 3;
	$scope.horarioFinal = 21;
	$scope.horarioInitial = 7;
	$scope.division_maximale_hora = 0.25;
	$scope.numero_horarios_total = ($scope.horarioFinal - $scope.horarioInitial + 1) / $scope.division_maximale_hora;	//(horarioFinal - horarioInitial + 1) / division_maximale_hora
	$scope.semanas = [];
	/*
	$scope.list_horarios = [
		{
			numero: 1,
			dias: 
			[
				{
					id: 1,
					nombre: "lunes", reservaciones: [{empeza: 1, termina: 6, tipo: 1}, {empeza: 3, termina: 6, tipo: 2}]
				},
				{
					id: 2,
					nombre: "martes", reservaciones: [{empeza: 1, termina: 6, tipo: 1}]
				},
				{
					id: 3,
					nombre: "miercoles", reservaciones: [{empeza: 1, termina: 6, tipo: 1}]
				},
				{
					id: 4,
					nombre: "jueves", reservaciones: [{empeza: 1, termina: 6, tipo: 1}]
				},
				{
					id: 5,
					nombre: "viernes", reservaciones: [{empeza: 1, termina: 6, tipo: 1}]
				},
				{
					id: 6,
					nombre: "sabado", reservaciones: [{empeza: 1, termina: 6, tipo: 1}]
				},
				{
					id: 7,
					nombre: "domingo", reservaciones: [{empeza: 1, termina: 6, tipo: 1}]
				},
			]
		}
	]; */


	$scope.list_horarios_semanas = [];


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
	};

	$scope.sendReservacia = function(varInformacionesFormulario){
		alert('Validacion formulario');
	};
	$scope.hora = function(horario) {
		return horario.substr(16, 2);
	};
	$scope.minuta = function(horario) {
		return horario.substr(19, 2);
	};
	$scope.dayDate = function(horario) {
		return horario.substr(0, 15);
	};
	$scope.deHorarioAIdHoraio = function(horario){
		return (($scope.hora(horario) - $scope.horarioInitial) * 4 + $scope.minuta(horario) / 15);
	};
	$scope.deIntervalTiempoAIdHoraio = function(interval){
		return (interval.hours * 4 + interval.minutes / 15);
	};
	$scope.createListHorarios = function(semana, dayOfSemana){
		var un_dia = [];
		var una_semana = [];
		var un_horario_reservacia = {};
		var reservacion_estudianda = 0;
		var typo_horario = 1;
		var numero_hora_initial = 0;
		var numero_hora_final = 0;
		var id_reservacia = 0;
		var estado_actual = $scope.tipo_reservacia_libre;
		for (var i = 0; i<=6; i++)
		{
			for (var j=1; j<=$scope.numero_horarios_total; j++)
			{
				if (dayOfSemana[i] === $scope.dayDate(semana[reservacion_estudianda].hora_inicial))
				{
					if (j === $scope.deHorarioAIdHoraio(semana[reservacion_estudianda].hora_inicial))
					{
						numero_hora_initial = $scope.deHorarioAIdHoraio(semana[reservacion_estudianda].hora_inicial);
						numero_hora_final = $scope.deHorarioAIdHoraio(semana[reservacion_estudianda].hora_final);
						id_reservacia = semana[reservacion_estudianda].id_reservacia;
						estado_actual = semana[reservacion_estudianda].reservacia_fk_reservacia_estado;
					}
					else if (j === $scope.deHorarioAIdHoraio(semana[reservacion_estudianda].hora_final))
					{
						estado_actual = $scope.tipo_reservacia_libre;

						if (semana[reservacion_estudianda + 1])
						{
							reservacion_estudianda++;
						}
						else
						{
						}
					}
				}
				
				un_horario_reservacia.diaid = i;
				un_horario_reservacia.id = j;
				un_horario_reservacia.estado = estado_actual;

				un_dia.push(un_horario_reservacia);
				un_horario_reservacia = {};
			}			
			una_semana.push(un_dia);
			un_dia = [];
		}
		$scope.semanas.push(una_semana);
		console.log($scope.semanas);
	};


	$scope.descargarInformacionesBasica = function(){
		$http.post('/getCartas').
		  success(function(data, status, headers, config) {
		  	$scope.Carta =  data.Carta;
		  }).
		  error(function(data, status, headers, config) {
		  	console.log('erreur 1');
		    $scope.Carta = [];
		  });


		  $http.post('/getReservaciones', {numero_semana: 0}).
		  success(function(data, status, headers, config) {
		  	$scope.createListHorarios(data.semana, data.dayOfSemana);
		  }).
		  error(function(data, status, headers, config) {
		  	console.log('Error 2');
		    $scope.semanas[0] = [];
		  });
			
	} 

	$scope.cambiarValorHorarioEvaluado = function(diaid, horaId) {
		console.log(diaid + ' ' + horaId + ' ' + $scope.VarReservacia.id_carta);
	}
	

	$scope.descargarInformacionesBasica();

	//$scope.createListHorarios($scope.semanas[0]);

});
