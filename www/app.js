console.log("Hello world!");

// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
  'Alertify'
]);

app.config(["$routeProvider", "$locationProvider", "uiGmapGoogleMapApiProvider", function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

  uiGmapGoogleMapApiProvider.configure({
    //    key: 'your api key',
    v: '3.22', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
  $routeProvider
    .when("/", {
      templateUrl: "templates/home.html"
    }) 
    .otherwise({
      templateUrl: "templates/404.html"
    });

    $locationProvider.html5Mode(true);
   
 }]);