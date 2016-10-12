/**
 * Created by oleg on 10/11/2016.
 */
'use strict';
angular.module('smartSupply.view')
    .controller('user-management.controller',['userManager', function (userManager) {
        this.reportName = 'User Management';
        this.users = userManager.getAllUsers();
        //this.users = JSON.parse('[{"userId": "1","userName": "Barbara Kan","userEmail": "barbara.kan@triumph.com",      "position": "User",      "isLocked": true,      "officePhone": "0000000001"    },    {      "userId": "2",      "userName": "Cecile Staehler-Schneid",      "userEmail": "Cecile.Staehler-Schneid@triumph.com",      "position": "Supervisor",      "isLocked": false,      "officePhone": "0000000001"    },    {      "userId": "3",      "userName": "Ben Vermin",      "userEmail": "ben.vermin@chainbalance.com",      "position": "Administrator",      "isLocked": false,      "officePhone": "0000000001"    }  ]');
    }]);
