/**
 * Created by oleg on 11/21/2016.
 */
'use strict';
angular.module('smartSupply.passwordConfirmation')
.directive('passwordconfirmation', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl){
            ctrl.$validators.passwordconfirmation = function (modelValue, viewValue) {
                //if ()
            };
        }
    };
});