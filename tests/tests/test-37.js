this.name = "$scope test";
this.run = function(test, nTPL, callback) {
	var a = nTPL("{%= $scope.test = ($scope.test || 0) +1 %}");
	var a1 = a();
	var a2 = a();
	test.equal(a1 + a2, "12");
}