
var App = angular.module('AskModule', ['ui.router'])

  .config(function ($locationProvider, $urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/ask");
    $stateProvider
      .state('ask', {url: "/ask", templateUrl: '/partials/main'})
      .state('tree', {url: "/ask/tree", templateUrl: '/partials/tree', controller: "TreeCtrl as tree"})
      .state('memories', {url: "/ask/memories", templateUrl: '/partials/memories'})
      .state('search', {url: "/ask/search", templateUrl: '/partials/search'})
      .state('indexing', {url: "/ask/indexing", templateUrl: '/partials/indexing'})
      .state('temple', {url: "/ask/temple", templateUrl: '/partials/temple'})
      .state('partners', {url: "/ask/partners", templateUrl: '/partials/partners'})
      .state('fsAccount', {url: "/ask/FamilySearch_Account", templateUrl: '/partials/fsAccount'})
      .state('genealogyAssistance', {url: "/ask/Geneaology_Assistance", templateUrl: '/partials/genealogyAssistance'})
      .state('fsCenter', {url: "/ask/FamilySearch_Center", templateUrl: '/partials/fsCenter'})
  })

  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParms = $stateParams;
  });