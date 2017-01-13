var app = angular.module('MyApp', []).config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});

app.controller('WPCtrl', ['$scope', '$http', function($scope, $http){

  $http({
    method: 'GET',
    url: 'http://ponte.cartacapital.com.br/wp-json/wp/v2/posts'
  }).then(function successCallback(response) {
      $scope.data = response.data;
      console.log($scope.data)
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });

}]);