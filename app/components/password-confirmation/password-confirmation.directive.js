/**
 * Created by oleg on 11/21/2016.
 */
angular.module('smartSupply.passwordConfirmation')
    .directive('passwordconfirmation', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl){
                ctrl.$validators.passwordconfirmation = function (modelValue, viewValue) {
                    if (!attrs.passwordconfirmation) {
                        console.error('passwordconfirmation expects a model as an argument');
                        return;
                    }
                    scope.$watch(attrs.passwordconfirmation, function (value) {
                        if (model.$viewValue !== undefined && model.$viewValue !== '') {
                            model.$setValidity('passwordconfirmation', value === model.$viewValue);
                        }
                    });
                    model.$parsers.push(function (value) {
                        if (value === undefined || value === '') {
                            model.$setValidity('passwordconfirmation', true);
                            return value;
                        }
                        var isValid = value === scope.$eval(attrs.passwordconfirmation);
                        model.$setValidity('passwordconfirmation', isValid);
                        return isValid ? value : undefined;
                    });
                };
            }
        };
    });