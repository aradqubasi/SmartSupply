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
            hit = false;
            $rootScope.onUpdate = function (oldPassword, newPassword) {
                hit = true;
                var success = false;
                console.log(oldPassword);
                console.log(newPassword);
                if (typeof oldPassword == 'string' && typeof newPassword == 'string')
                {
                    if (oldPassword == currentPassword)
                    {
                        success = true;
                    }
                }
                return success;
            };
            elm = angular.element('<div><user-password-edit on-update="onUpdate(oldPassword, newPassword)"></user-password-edit></div>');
            $compile(elm)($rootScope);
            $rootScope.$digest();
        });
        it('update with right old password', function() {
            //elm.find('input').val(['666', '777', '888']);
            elm.find('input').eq(0).val('666');
            elm.find('input').eq(0).triggerHandler('input');
            elm.find('input').eq(1).val('777');
            elm.find('input').eq(1).triggerHandler('input');
            //elm.find('input').eq(1).triggerHandler('input');
            //$rootScope.$digest();
            //console.log(elm.find('form'));
            console.log(elm.find('input').eq(1));
            //console.log(elm.find('input').eq(0).html());
            //console.log($rootScope.oldPassword);
            //console.log($rootScope.newPassword);
            //console.log($rootScope.newPasswordConfirmed);
            //console.log($rootScope.updateResult);
            $rootScope.$digest();
            elm.find('button').triggerHandler('click');
            $rootScope.$digest();
            //console.log($rootScope.updateResult);
            expect(hit).toBeTruthy();
        });
        it('update with wrong old password', function () {

        });
    });
});