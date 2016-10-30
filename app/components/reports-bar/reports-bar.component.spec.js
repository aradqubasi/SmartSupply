/**
 * Created by SOA on 10/30/2016.
 */
'use strict';
describe('reportsBar testing', function () {
    beforeEach(module('smartSupply.reportsBar', 'ngAria', 'ngAnimate', 'ngMaterial'));
    var $componentController, ctrl;
    var reportsList = [{reportName : "report1"}, {reportName: 'report2'}, {reportName: 'report3'}];
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));
    it ('test', function () {
       var bindings = {reports : reportsList};
       ctrl = $componentController('reportsBar', null, bindings);
    });

    it('bindings', function () {
        expect(ctrl.reports).toBeDefined();
    });
});