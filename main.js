// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'categoria.html',
            controller  : 'categoriaController'
        })
        .when('/preguntas', {
            templateUrl : 'preguntas.html',
            controller  : 'preguntasController'
        })
        .otherwise({
            redirectTo: 'home.html'
        });
});

angularRoutingApp.controller('mainController', function($scope) {
});

angularRoutingApp.controller('categoriaController', function($scope) {

});

angularRoutingApp.controller('preguntasController', function($scope) {
  $scope.user = {
    websites: [
      {tipo:'',bloque:'',pregunta:''}
    ]
  };
  $scope.add = function() {
    $scope.user.websites.push({ tipo: '',bloque:'',pregunta:''});
  };
});
