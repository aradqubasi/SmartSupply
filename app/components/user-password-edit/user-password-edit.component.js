/**
 * Created by oleg on 11/8/2016.
 */
'use strict';
angular.module('smartSupply.userPasswordEdit')
.component('userPasswordEdit', {
    templateUrl: 'components/user-password-edit/user-password-edit.template.html',
    bindings: { onUpdate : '&' },
    controller: [function () {
        var ctrl = this;
        ctrl.debug = true;
        ctrl.oldPassword = '';
        ctrl.newPassword = '';
        ctrl.newPasswordConfirmed = '';
        ctrl.updateResult = {};
        ctrl.tryPasswordUpdate = function () {
            ctrl.updateResult = ctrl.onUpdate({oldPassword: ctrl.oldPassword, newPassword: ctrl.newPassword});
        };
        ctrl.getPasswordMatch = function ()
        {
            return {'mismatch' : ctrl.oldPassword == ctrl.newPassword && ctrl.oldPassword != '' && ctrl.newPassword != ''};
        };
    }]
});