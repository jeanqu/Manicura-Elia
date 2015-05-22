angular.module("ManEliaAdmin", [ "ngSanitize", "ui.tinymce" ])
.controller("ManEliaAdminCtrl", function($scope, $location, $http) {

	$scope.vueCourante = 'vueIntroduction';

	$scope.deconnexiaAdmin = function(){
		
		$http.post('/deconnectLoggin').
		  success(function(data, status, headers, config) {
		  	window.location.href = '/index.html';
		  }).
		  error(function(data, status, headers, config) {
		    alert('Error!');
		  });
	}

});