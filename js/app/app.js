angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/user/:name', {
          templateUrl: '/views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function($http, $route){
              // console.log($route);
              return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.name);
            }
          }
        });
    });
