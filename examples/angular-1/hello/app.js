'use strict';

angular.module('example', [
  'example.flickr',
  'example.settings',
  'example.welcome',
  'ngPhinRouter'
]).
  controller('AppController', ['$router', AppController]);

function AppController($router) {
  $router.config([
    { path: '/',              redirectTo: '/welcome' },
    { path: '/welcome',       component: 'welcome' },
    { path: '/flickr',        component: 'flickr' },
    { path: '/settings',      component: 'settings' }
  ]);
}
