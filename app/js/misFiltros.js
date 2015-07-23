angular.module("misFiltros", [])
.filter("range", function() {
	return function(input, minimum, totalo) {
	    total = parseInt(totalo);
	    for (var i = minimum; i<=totalo; i++)
	      input.push(i);
    return input;
  };
});