/**
 * Created by oleg on 10/13/2016.
 */
'use strict';
describe('user-list', function () {
    beforeEach(module('smartSupply.userList'));
    describe('user-list.component', function () {
        var expusers = [
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
        var selectedUser = -1;
        var expOnSelect = function (userId) {
            selectedUser = userId;
        };
        var $componentController;
        beforeEach(inject(function(_$componentController_) {
            $componentController = _$componentController_;
        }));
        it('test 1',function () {
            var bindings = { usersList: expusers, onSelect: expOnSelect };
            var ctrl = $componentController('user-list',null, bindings);
            expect(ctrl.usersList).toBeDefined();
            expect(ctrl.usersList).toBe(expusers);
            expect(ctrl.onSelect).toBeDefined();
            ctrl.onSelect(ctrl.usersList[0]);
            expect(selectedUser).toBe(expusers[0].userId);
        });
    });
});