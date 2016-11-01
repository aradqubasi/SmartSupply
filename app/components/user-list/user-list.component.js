/**
 * Created by oleg on 10/13/2016.
 */
'use strict';
angular.module('smartSupply.userList')
    .component('userList',{
        templateUrl: 'components/user-list/user-list.template.html',
        bindings: {
            usersList: '<',
            onSelect: '&'
        },
        controller: [function(){

        }]
    });