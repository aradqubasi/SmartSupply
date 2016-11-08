/**
 * Created by oleg on 11/8/2016.
 */
'use strict';
describe('user-password-edit', function () {
    var $rootScope, $compile, $componentController, elm, ctrl, bindings, hit;

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
                return false;
            };
            elm = angular.element('<user-password-component on-update="onUpdate(oldPassword, newPassword)"></user-password-component>');
            $compile($rootScope)(elm);
            $rootScope.$digest();
        });
        it('update with right old password', function() {

        });
        it('update with wrong old password', function () {

        });
    });
});