angular.module('example', [
  'example.goodbye',
  'example.welcome',
  'ngAnimate',
  'ngPhinRouter'
])
.controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
  { path: '/',              redirectTo: '/welcome' },
  { path: '/welcome',       component: 'welcome' },
  { path: '/goodbye',       component: 'goodbye' }
];
function AppController($router) {
  this.greeting = 'Hello';
}
