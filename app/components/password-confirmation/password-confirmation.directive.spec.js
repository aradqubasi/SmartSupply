/**
 * Created by oleg on 11/21/2016.
 */
'use strict';
describe('password-confirmation', function () {
    beforeEach(module('ngModel', 'smartSupply.passwordConfirmation'));
    var $rootScope, $compile, elm;
    beforeEach(inject(function(_$rootScope_, _$compile_){
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));
    describe('validation', function() {
        beforeEach(function () {
            elm = angular.element(
                '<form name="form">' +
                    '<input type="password" ng-model="login.password">' +
                    '<input type="password" ng-model="login.verify" passwordconfirmation="login.password" name="verify">' +
                    '<span ng-show="form.verify.$error.passwordconfirmation">Must be equal</span>' +
                '</form>');
            $compile(elm)($rootScope);
            $rootScope.$diggest();
        });
        it('check', function () {
            console.log(elm);
        });
    });
});