/*
    github-app.js
    very quick and dirty github API demo

    To get all your repos on GitHub, GET this URL:
        https://api.github.com/users/your-github-username/repos

        https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
 */

"use strict";

angular.module('GitHubApp', [])
    .controller('GitHubController', function($scope, $http) {
        $scope.userName = 'AlexSchenck';
        $scope.getRepos = function() {

            $http.get('https://api.github.com/users/' + $scope.userName + '/repos')
                .success(function(data) {
                    console.log(angular.toJson(data, true));
                    $scope.repos = data;
                })
                .error(function(err) {
                    // err will contain error information
                    console.log(err);
                });
        };
    });