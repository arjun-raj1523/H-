angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout ,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.signUpData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();

  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
   $http.get("http://www.arjunraj.net/HandsPlus/getData.php")
    .success(function (response) {
        var count=response.records.length;
        for(var i=0;i<count;i++){
        if(response.records[i].Name.toLowerCase() == $scope.loginData.username.toLowerCase()){
          console.log("sucess");
          location.href='#/app/playlists';
        }
        else{
          console.log("Fail");
        }
      }
    });

    
  };

  $scope.doSignup = function() {
    console.log('Doing Sign Up');   
$http.post("http://www.arjunraj.net/HandsPlus/insert.php","arjun")
    .success(function (response) {

      console.log(response.records[0]);

    });
    

  };


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
