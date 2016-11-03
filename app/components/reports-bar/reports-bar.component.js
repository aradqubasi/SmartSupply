/**
 * Created by SOA on 10/30/2016.
 */
'use strict';
angular.module('smartSupply.reportsBar')
.component('reportsBar', {
    templateUrl: 'components/reports-bar/reports-bar.template.html',
    bindings: { reports: '<' },
    controller: ['$mdSidenav',function ($mdSidenav) {
        this.openSideNav = function () {
            $mdSidenav('left').open();
        };
        this.closeSideNav = function () {
            $mdSidenav('left').close();
        };
    }]
});