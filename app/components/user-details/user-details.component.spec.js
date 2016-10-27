/**
 * Created by SOA on 10/21/2016.
 */
'use strict';
describe('user-details', function () {

    beforeEach(module('smartSupply.userDetails', 'smartSupply.templates','ngAnimate','ngAria','ngMaterial'));

    var userToDisplay = {
        userId: 1,
        userName: "Barbara Kan",
        userEmail: "barbara.kan@triumph.com",
        position: "User",
        isLocked: true,
        officePhone: "0000000001"
    };
    var outUser = {};
    var updateUser = function (user) {
        console.log(user.userName + ' was updated');
        outUser = user;
    };
    var createUser = function (user) {
        console.log(user.userName + ' was created');
        outUser = user;
    };
    var $componentController;

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('test controller', function () {
       it('bindings', function () {
           var bindings = {user: userToDisplay, onCreate: createUser, onUpdate: updateUser};
           var ctrl = $componentController('userDetails', null,  bindings);
           expect(ctrl.user).toBeDefined();
           expect(ctrl.user).toBe(userToDisplay);

           expect(ctrl.onCreate).toBeDefined();
           expect(ctrl.onCreate).toBe(createUser);
           ctrl.onCreate(ctrl.user);
           expect(outUser).toBe(userToDisplay);
           outUser = {};

           expect(ctrl.onUpdate).toBeDefined();
           expect(ctrl.onUpdate).toBe(updateUser);
           ctrl.onUpdate(ctrl.user);
           expect(outUser).toBe(userToDisplay);
           outUser = {};
       });
    });

    describe('test display',function () {
        var ctrl, $compile, $rootScope, elm;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $rootScope.userToDisplay = userToDisplay;
            $rootScope.createUser = createUser;
            $rootScope.updateUser = updateUser;
            elm = angular.element('<div><user-details user="userToDisplay" on-create="createUser" on-update="updateUser"></user-details></div>');
            $compile(elm)($rootScope);
            $rootScope.$digest();
            //var bindings = {user: userToDisplay, onCreate: createUser(), onUpdate: updateUser};
            //ctrl = $componentController('userDetails', null, bindings);
        }));

        it('first tab was displayed', function () {
            //console.log(elm);
            console.log(elm.find('input').eq(0));
            //elm.find('input').eq(0).val('New name').triggerHandler('input');
            //elm.find('md-button');
            console.log(elm.find('button').eq(0));
            //elm.find('button').eq(0).click();
            elm.find('button').eq(0).triggerHandler('click');
            //expect(elm.find('input')).toBe();
            //console.log(elm);
        });
    });
    });