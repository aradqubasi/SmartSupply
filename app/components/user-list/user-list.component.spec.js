/**
 * Created by oleg on 10/13/2016.
 */
'use strict';
describe('user-list', function () {
    beforeEach(module('smartSupply.userList', 'ngAria', 'ngAnimate', 'ngMaterial'));
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
            var ctrl = $componentController('userList',null, bindings);
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

        //beforeEach(module('components/user-list/user-list.template.html'));
        beforeEach(module('smartSupply.templates'));
        beforeEach(inject(function (_$componentController_, _$compile_, _$rootScope_) {
            $componentController = _$componentController_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $rootScope.users = users;
            $rootScope.onSelect = onSelect;
            elm = angular.element(

                "<div><user-list users-list='users' on-select='onSelect'></user-list></div>"

                //'<ul><li>{{users}}</li><li>2</li><li>3</li></ul>'
            );

            //elm = angular.element('<ul><li>1</li><li>2</li><li>3</li></ul>');
            $compile(elm)($rootScope);
            //elm = $compile('<ul><li>1</li><li>2</li><li>3</li></ul>')($rootScope);
            $rootScope.$digest();
        }));

        it('should show the list of users', function () {
            //console.log(elm);
            var usersRecords = elm.find('md-list-item');
            //console.log(elm.html());
            //console.log(usersRecords);
            expect(usersRecords).toBeDefined();
            expect(usersRecords.length).toBe(users.length);
        });
    });
});

