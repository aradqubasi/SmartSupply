/**
 * Created by SOA on 11/4/2016.
 */
'use strict';
describe('camel-dashed-filter', function () {
    var $rootScope, $compile, elm;
    beforeEach(module('smartSupply.camelToDashed'));
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        elm = angular.element('<div><span>{{ "camelCase" | camelToDashed }}</span></div>');
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $compile(elm)($rootScope);
        $rootScope.$digest();
    }));
    it('should convert to dashed', function () {
        //console.log(elm);
        var value = elm.find('span').eq(0).html();
        //console.log(value);
        expect(value).toEqual("camel-case");
    });
});