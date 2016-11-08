/**
 * Created by oleg on 11/8/2016.
 */
'use strict';
describe('user-password-edit', function () {
    var $rootScope, $compile, $componentController, elm, ctrl, bindings, hit, currentPassword;

    beforeEach(module('ngAria', 'ngAnimate', 'ngMaterial', 'smartSupply.userPasswordEdit', 'smartSupply.templates'));
    beforeEach(inject(function(_$rootScope_, _$compile_, _$componentController_){
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $componentController = _$componentController_;
    }));

    describe('controller', function() {
        beforeEach(function () {

        });
        it('update with right old password', function() {
            hit = {};
            bindings = {onUpdate : function (oldPassword, newPassword) {
                hit = true;
                return true;
            }};
            ctrl = $componentController('userPasswordEdit', null, bindings);
            ctrl.tryPasswordUpdate();
            expect(hit).toBeTruthy();
            expect(ctrl.updateResult).toBeTruthy();
        });
        it('update with wrong old password', function () {
            hit = {};
            bindings = {onUpdate : function (oldPassword, newPassword) {
                hit = true;
                return false;
            }};
            ctrl = $componentController('userPasswordEdit', null, bindings);
            ctrl.tryPasswordUpdate();
            expect(hit).toBeTruthy();
            expect(ctrl.updateResult).toBeFalsy();
        });
    });

    describe('directive', function () {
        beforeEach(function () {
            hit = {};
            $rootScope.onUpdate = function (oldPassword, newPassword) {
                hit = true;
                var success =;
                if (typeof oldPassword == 'string' && typeof newPassword == 'string')
                {
                    if (oldPassword == currentPassword)
                    {
                        success = true;
                    }
                }
                return false;
            };
            elm = angular.element('<div><user-password-edit on-update="onUpdate(oldPassword, newPassword)"></user-password-edit></div>');
            $compile(elm)($rootScope);
            $rootScope.$digest();
        });
        it('update with right old password', function() {
            //console.log(elm);
        });
        it('update with wrong old password', function () {

        });
    });
});