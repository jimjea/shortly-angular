angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {url: ''};
  $scope.addLink = function () {
    $scope.loading = true;
    Links.linkSender($scope.link).then(function() {
      $scope.loading = false;
      console.log("Message Sent!");
    });
  };
  $scope.goToLinkPage = function() {
    $location.path('/links');
  };
});
