/**
 * Created by tlo on 9/8/2016.
 */
(function () {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = "";

        $scope.doLunchCheck = function () {
            if ($scope.lunch.length == 0) {
                $scope.message = 'Please enter data first'
            } else if ($scope.lunch.split(',').length <= 3) {
                $scope.message = 'Enjoy!'
            } else {
                $scope.message = 'Too much!'
            }
        };
    }
})();