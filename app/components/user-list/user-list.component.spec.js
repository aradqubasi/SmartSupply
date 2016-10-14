/**
 * Created by oleg on 10/13/2016.
 */
'use strict';
describe('user-list', function () {
    beforeEach(module('smartSupply.userList'));
    describe('user-list.component', function () {
        var users = [
            {
                userId: "1",
                userName: "Barbara Kan",
                userEmail: "barbara.kan@triumph.com",
                position: "User",
                isLocked: true,
                officePhone: "0000000001"
            },
            {
                userId: "2",
                userName: "Cecile Staehler-Schneid",
                userEmail: "Cecile.Staehler-Schneid@triumph.com",
                position: "Supervisor",
                isLocked: false,
                officePhone: "0000000001"
            },
            {
                userId: "3",
                userName: "Ben Vermin",
                userEmail: "ben.vermin@chainbalance.com",
                position: "Administrator",
                isLocked: false,
                officePhone: "0000000001"
            }
        ];
        var selectedUser = {};
        var $componentController;
        var onSelect = function (user) {
            selectedUser = user;
        };

        beforeEach(inject(function(_$componentController_) {
            $componentController = _$componentController_;
        }));
        it('should get bindings correctly',function () {
            var bindings = { usersList: users, onSelect: onSelect };
            var ctrl = $componentController('user-list',null, bindings);
            expect(ctrl.usersList).toBeDefined();
            expect(ctrl.usersList).toBe(users);
            expect(ctrl.onSelect).toBeDefined();
            ctrl.onSelect(ctrl.usersList[0]);
            expect(selectedUser).toBe(users[0]);
        });
    });
    describe('user-list.template', function(){
        
        var users = [
            {
                userId: "1",
                userName: "Barbara Kan",
                userEmail: "barbara.kan@triumph.com",
                position: "User",
                isLocked: true,
                officePhone: "0000000001"
            },
            {
                userId: "2",
                userName: "Cecile Staehler-Schneid",
                userEmail: "Cecile.Staehler-Schneid@triumph.com",
                position: "Supervisor",
                isLocked: false,
                officePhone: "0000000001"
            },
            {
                userId: "3",
                userName: "Ben Vermin",
                userEmail: "ben.vermin@chainbalance.com",
                position: "Administrator",
                isLocked: false,
                officePhone: "0000000001"
            }
        ];
        var selectedUser = {};
        var $componentController, $rootScope, $compile;
        var elm;
        var onSelect = function (user) {
            selectedUser = user;
        };

        beforeEach(module('templates'));
        
        beforeEach(inject(function (_$componentController_, _$compile_, _$rootScope_) {
            $componentController = _$componentController_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            elm = angular.element(
                '<div>' +
                    '<user-list userslist="users" on-select="onSelect"></user-list>' +
                '</div>'
            );
            $compile(elm)($rootScope);
            $rootScope.$digest();
        }));

        it('should show the list of users', function () {
            var usersRecords = elm.find('md-list md-list-item span');
            expect(usersRecords).toBeDefined();
            expect(usersRecords.length()).toBe(users.length);
        });
    });
});