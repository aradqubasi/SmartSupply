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
                ctrl.onCreate(user);
            };
        }]
    });