angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.linkGetter()
      .then(function(data) {
        $scope.data.links = data;
        console.log(data)
      }).catch(function(err) {
        console.error(err, "Error Found");
      });
  };
  $scope.getLinks();
  $scope.goToShortenPage = function() {
    $location.path('/shorten');
  };
});

