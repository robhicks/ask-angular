App.controller("MainCtrl", ['$scope', function($scope){
  var self = this;
  $scope.main = this;

  self.showSecondaryNav = false;
//  self.lang = lang;

  self.toggleSecondaryNav = function(){
    self.showSecondaryNav = !self.showSecondaryNav;
  }
}]);