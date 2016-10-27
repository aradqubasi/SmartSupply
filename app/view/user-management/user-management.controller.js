/**
 * Created by oleg on 10/11/2016.
 */
'use strict';
angular.module('smartSupply.view')
    //.controller('user-management.controller',['User','userManager', function (User,userManager) {
    .controller('user-management.controller',['userManager', function (userManager) {
        this.reportName = 'User Management';
        this.users = [];
        this.selectedUser = {
            userId: "1",
            userName: "Barbara Kan",
            userEmail: "barbara.kan@triumph.com",
            position: "User",
            isLocked: true,
            officePhone: "0000000001"
        };
        var scope = this;
        this.selectCall = function (user) {
          console.log('hit');
        };
        this.updateUser = function (user) {
            console.log(user.userName + ' was updated');
        };
        this.createUser = function (user) {
            console.log(user.userName + ' was created');
        };
        var promiseObj = userManager.getAllUsers();
        promiseObj.then(function (value) {
            scope.users = value;
            //scope.selectedUser = value[0];
        });

        //var u1 = new User({"userId":"1","userName":"BarbaraKan","userEmail":"barbara.kan@triumph.com","position":"User","isLocked":true,"officePhone":"0000000001"});
        //var u2 = new User({"userId":"2","userName":"CecileStaehler-Schneid","userEmail":"Cecile.Staehler-Schneid@triumph.com","position":"Supervisor","isLocked":false,"officePhone":"0000000001"});
        //var u3 = new User({"userId":"3","userName":"BenVermin","userEmail":"ben.vermin@chainbalance.com","position":"Administrator","isLocked":false,"officePhone":"0000000001"});
        //this.users = [u1, u2, u3];
        //this.users = userManager.getAllUsers();
        //this.users = JSON.parse('[{"userId": "1","userName": "Barbara Kan","userEmail": "barbara.kan@triumph.com",      "position": "User",      "isLocked": true,      "officePhone": "0000000001"    },    {      "userId": "2",      "userName": "Cecile Staehler-Schneid",      "userEmail": "Cecile.Staehler-Schneid@triumph.com",      "position": "Supervisor",      "isLocked": false,      "officePhone": "0000000001"    },    {      "userId": "3",      "userName": "Ben Vermin",      "userEmail": "ben.vermin@chainbalance.com",      "position": "Administrator",      "isLocked": false,      "officePhone": "0000000001"    }  ]');
    }]);
