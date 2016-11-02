/**
 * Created by SOA on 10/30/2016.
 */
'use strict';
describe('reportsBar testing', function () {
    beforeEach(module('smartSupply.reportsBar', 'ngAria', 'ngAnimate', 'ngMaterial', 'smartSupply.templates'));
    var $componentController, $rootScope, $compile, ctrl, elm;
    var reportsList = [{reportName : "report1"}, {reportName: 'report2'}, {reportName: 'report3'}];
    beforeEach(inject(function (_$componentController_, _$compile_, _$rootScope_) {
        $componentController = _$componentController_;
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('bindings', function () {
        var bindings = {reports : reportsList};
        ctrl = $componentController('reportsBar', null, bindings);
        expect(ctrl.reports).toBeDefined();
        expect(ctrl.reports.length).toBe(reportsList.length);
        expect(ctrl.reports).toBe(reportsList);
        //var prevVal = reportsList[0].reportName;
        //ctrl.reports[0].reportName = "changed " + ctrl.reports[0].reportName;
        //expect(reportsList[0].reportName).toBe(prevVal);
        var prevVal = reportsList;
        ctrl.reports = [{reportName : "changed report"}];
        expect(reportsList).toBe(prevVal);
    });

    describe('template', function () {

        beforeEach(inject(function (_$componentController_, _$compile_, _$rootScope_) {
            $componentController = _$componentController_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;

            $rootScope.rList = reportsList;
            elm = angular.element('<div><reports-bar reports="rList"></reports-bar></div>');
            $compile(elm)($rootScope);
            $rootScope.$digest();
        }));


        it('have reports in list', function () {
            //console.log(elm);
            var repLines = elm.find('span');
            var parsedRepLines = [];
            //console.log(repLines);
            expect(repLines.length).toBe(reportsList.length);
            for (var i = 0; i < repLines.length; i++)
            {
                parsedRepLines.push({ reportName: elm.find('span').eq[0]});
            }
            console.log(parsedRepLines);
        });
    });
});