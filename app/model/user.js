/**
 * Created by oleg on 10/10/2016.
 */
'use strict';
angular.module('smartSupply.Model').factory('User',[function(){
    function User(userData)
    {
        this.setUserId(userData.userId);
        this.setUserName(userData.userName);
        this.setEmail(userData.userEmail);
        this.setPosition(userData.position);
        this.setIsLocked(userData.isLocked);
        this.setOfficePhoneNumber(userData.officePhoneNumber);
    }
    User.prototype = {
        setUserId: function (userId) {
            this.userId = userId;
        },
        setUserName: function (userName) {
            this.userName = userName;
        },
        setEmail: function (userEmail) {
            this.userEmail = userEmail;
        },
        setPosition: function (position) {
            this.position = position;
        },
        setIsLocked: function (isLocked) {
            this.isLocked = isLocked;
        },
        setOfficePhoneNumber: function (officePhoneNumber) {
            this.officePhoneNumber = officePhoneNumber;
        }
    };
    return User;
}]);
angular.module('smartSupply.Model').service('userManager',['$http', '$q', 'User', function ($http, $q, User) {

}]);