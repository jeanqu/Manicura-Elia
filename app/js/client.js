angular.module("ManElia", [ "ngSanitize", "ui.tinymce" ])
.controller("ManEliaCtrl", function($scope, $location) {

	$scope.vueCourante = 'vueIntroduction';


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

});
