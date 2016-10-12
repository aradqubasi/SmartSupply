/**
 * Created by oleg on 10/10/2016.
 */
'use strict';
angular.module('smartSupply.model').factory('User',[function(){
    function User(userData)
    {
        this.setData(userData);
    }
    User.prototype = {
        setUserId: function (userId) {
            this.userId = userId;
        },
        getUserId: function () {
            return this.userId;
        },
        setUserName: function (userName) {
            this.userName = userName;
        },
        getUserName: function () {
            return this.userName;
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
        },
        setData: function (userData) {
            angular.extend(this, userData);
            //this.setUserId(userData.userId);
            //this.setUserName(userData.userName);
            //this.setEmail(userData.userEmail);
            //this.setPosition(userData.position);
            //this.setIsLocked(userData.isLocked);
            //this.setOfficePhoneNumber(userData.officePhoneNumber);
        }
    };
    return User;
}]);
angular.module('smartSupply.model').service('userManager',['$http', '$q', 'User', function ($http, $q, User) {
    var userManager = {
        _pool: {},
        _get: function (userId, userData) {
            var tmpUser = this._pool[userId];
            if (tmpUser) {
                //set
            }
            else {
                tmpUser = new User(userData);
                this._pool[userId] = tmpUser;
            }
            return tmpUser;
        },
        _search: function(userId){
            return this._pool[userId];
        },
        _load: function (userId, deferred) {
            var scope = this;
            $http.get('Mock/user.json')//$http.get('url' + userId)
                .success(function(userData){
                    var user = scope._get(userData.userId, userData);
                    deferred.resolve(user);
                })
                .error(function(){
                    deferred.reject();
                });
        },
        getUser: function (userId) {
            var deferred = $q.defer();
            var user = scope._search(userId);
            if (user) {
                deferred.resolve(user);
            }
            else {
                this._load(userId, deferred)
            }
            return deferred.promise;
        },
        getAllUsers: function () {
            var deferred = $q.defer();
            var scope = this;
            $http.get('Mock/users.json')//$http.get('url')
                .success(function (usersArray) {
                    var users = [];
                    usersArray.forEach(function (userData) {
                        var user = scope._get(userData.userId, userData);
                        users.push(user);
                    });
                    deferred.resolve(users);
                })
                .error(function () {
                    deferred.reject();
                });
            return deferred.promise;
        },
        setUser: function (userData) {
            var scope = this;
            var user = this._search(userData.userId);
            if (user)
            {
                this.setData(userData);
            }
            else
            {
                user = scope._get(userData.userId, userData);
            }
        }
    };
    return userManager;
}]);

/*
 angular.module('smartSupply.Model').factory('User',[function(){
 function User(userData)
 {
 this.setData(userData);
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
 },
 setData: function (userData) {
 this.setUserId(userData.userId);
 this.setUserName(userData.userName);
 this.setEmail(userData.userEmail);
 this.setPosition(userData.position);
 this.setIsLocked(userData.isLocked);
 this.setOfficePhoneNumber(userData.officePhoneNumber);
 }
 };
 return User;
 }]);
 angular.module('smartSupply.Model').service('userManager',['$http', '$q', 'User', function ($http, $q, User) {
 var userManager = {
 _pool: {},
 _get: function (userId, userData) {
 var tmpUser = this._pool[userId];
 if (tmpUser) {
 //set
 }
 else {
 tmpUser = new User(userData);
 this._pool[userId] = tmpUser;
 }
 return tmpUser;
 },
 _search: function(userId){
 return this._pool[userId];
 },
 _load: function (userId, deferred) {
 var scope = this;
 $http.get('url' + userId)
 .success(function(userData){
 var user = scope._get(userData.userId, userData);
 deferred.resolve(user);
 })
 .error(function(){
 deferred.reject();
 });
 },
 getUser: function (userId) {
 var deferred = $q.defer();
 var user = scope._search(userId);
 if (user) {
 deferred.resolve(user);
 }
 else {
 this._load(userId, deferred)
 }
 return deferred.promise;
 },
 getAllUsers: function () {
 var deferred = $q.defer();
 var scope = this;
 $http.get('url')
 .success(function (usersArray) {
 var users = [];
 usersArray.forEach(function (userData) {
 var user = scope._retrieveInstance(userData.userId, userData);
 users.push(user);
 });
 deferred.resolve(users);
 })
 .error(function () {
 deferred.reject();
 });
 return deferred.promise;
 },
 setUser: function (userData) {
 var scope = this;
 var user = this._search(userData.userId);
 if (user)
 {
 this.setData(userData);
 }
 else
 {
 user = scope._get(userData.userId, userData);
 }
 }
 };
 return userManager;
 }]);
 */