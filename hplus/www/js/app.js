// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
$(document).ready(function(){
    $("#ionicView").hide();
    $("#signupForm").hide();
});

function showSignup(){
    $("#loginForm").hide();
    $("#signupButton").hide();
    $("#signupForm").show();
}
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//Controller for Login and Sign up.
.controller('loginCtrl', function($scope,$location) {
        
    $scope.doLogout = function() {
            $("#loginForm").show();
            $("#ionicView").hide();
            $("#signupForm").hide();
            $("#signupButton").show();
            $("#signupButton").show();
            $("#loginUsername").val("");
            $("#loginPassword").val("");
            $("#signupPassword").val("");
            $("#signupPasswordCheck").val("");
            $("#signupName").val("");
            $("#signupUsername").val("");
            
        
    }
   
    $scope.doLogin = function() {
        
        /*
        
        Code to get data from DB and check valid user
        
        */
        //Change User to DB value
        
        if($scope.loginData.username.toLowerCase() == 'admin' && $scope.loginData.password == 'admin'){
            console.log("logged in");
            $("#ionicView").show();
            $("#loginForm").hide();
            $("#signupButton").hide();
            $("#signupForm").hide();
            
            
        }
        else
        // Display Error message
            console.log("Error");
    }
    
    $scope.doSignup = function() {
        /*
        
        Do Validation of Data
        
        */
        
        /*
        
        Code to Insert data into DB
        
        */
        
        
        //login after Signup method
        loginAfterSignup($scope.signupData.username,$scope.signupData.password);
        
        
    }
    
    function loginAfterSignup(username,password){
        
        /*
        
        Code to get data from DB and check valid user
        
        */
        //Change User to DB value
        if(username.toLowerCase() == 'user' && password == 'user'){
            $("#ionicView").show();
            $("#loginForm").hide();
            $("#signupButton").hide();
            $("#signupForm").hide();
            
            
        }
        else
        // Display Error message
            console.log("Error");
    
    }


 })

            
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

