/**
 * Created by SOA on 11/4/2016.
 */
'use strict';
angular.module('smartSupply.camelToDashed').filter('camelToDashed', function () {
    return function (camelCaseString) {
        return camelCaseString.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
    };
});