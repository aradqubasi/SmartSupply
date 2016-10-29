'use strict';
angular.module('smartSupply.userDetails')
    .component('userDetails',{
        templateUrl: "components/user-details/user-details.template.html",
        bindings: { user: "<", onCreate: "&", onUpdate: "&"},
        controller: [function () {
            var ctrl = this;
            ctrl.create = function (user) {
                ctrl.onUpdate(user);
            };
            ctrl.update = function (user) {
                console.log('hit upd');
                console.log(user.userName);
                var usr = {
                    userId: "1",
                    userName: "Barbara Kan",
                    userEmail: "barbara.kan@triumph.com",
                    position: "User",
                    isLocked: true,
                    officePhone: "0000000001"
                };
                console.log(usr.userName);
                ctrl.onCreate(usr);
            };
        }]
    });