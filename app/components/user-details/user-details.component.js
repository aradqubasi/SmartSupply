'use strict';
angular.module('smartSupply.userDetails')
    .component('userDetails',{
        templateUrl: "components/user-details/user-details.template.html",
        bindings: { user: "=", onCreate: "&", onUpdate: "&"},
        controller: [function () {
            var ctrl = this;

            ctrl.create = function (user) {
                ctrl.onCreate({user: ctrl.user});
            };
            ctrl.update = function (user) {
                ctrl.onUpdate({user: ctrl.user});
            };
            ctrl.pwupdate = function (oldPassword, newPassword) {
                console.log(oldPassword);
                console.log(newPassword);
                return true;
            };
        }]
    });