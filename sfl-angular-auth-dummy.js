'use strict';

angular.module('sfl.auth.dummy', [])

.service('sflAuthDummy', function ($log) {

    var self = this;

    self.currentUser = null;

    self.register = function (user, successCallback, errorCallback) {
        $log.info('SFL dummy auth', 'REGISTER');
    };

    self.reset = function (email, successCallback, errorCallback) {
        $log.info('SFL dummy auth', 'RESET');
    };

    self.confirm = function (user, successCallback, errorCallback) {
        $log.info('SFL dummy auth', 'CONFIRM');
    };

    self.login = function (credentials, successCallback, errorCallback) {
        $log.info('SFL dummy auth', 'LOGIN');
        self.currentUser = { email: 'dummy@localhost.dev', nickName: 'Dummy User' };
        if (successCallback) successCallback(self.currentUser);
    };

    self.logout = function (successCallback, errorCallback) {
        $log.info('SFL dummy auth', 'LOGOUT');
        self.currentUser = null;
    };

    self.isAuthenticated = function () {
        return self.currentUser !== null;
    };

    self.isAuthorized = function () {
        return self.isAuthenticated();
    };

    self.restore = function (successCallback) {
        $log.info('SFL dummy auth', 'RESTORE');
    };

    self.getCurrentUser = function () {
        return self.currentUser;
    };

});
