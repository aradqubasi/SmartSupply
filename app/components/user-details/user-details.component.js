'use strict';
angular.module('smartSupply.userDetails')
    .component('userDetails',{
        templateUrl: "components/user-details/user-details.template.html",
        bindings: { user: "<", onCreate: "&", onUpdate: "&"},
        controller: [function () {

        }]
    });