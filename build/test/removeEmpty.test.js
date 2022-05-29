"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeEmpty = require('../index').removeEmpty;
var testData_1 = require("./testData");
jest.mock('html-to-image');
test('RemoveEmpty Primitives', function () {
    expect(removeEmpty('ok')).toEqual('ok');
    expect(removeEmpty('')).toEqual('');
    expect(removeEmpty(1)).toEqual(1);
    expect(removeEmpty(0)).toEqual(0);
    expect(removeEmpty(true)).toEqual(true);
    expect(removeEmpty(false)).toEqual(false);
    expect(removeEmpty([])).toEqual([]);
    expect(removeEmpty({})).toEqual({});
});
test('RemoveEmpty Object', function () {
    expect(removeEmpty(testData_1.genObject)).toEqual(testData_1.nonEmptyObject);
});
test('RemoveEmpty Array', function () {
    expect(removeEmpty(testData_1.genArray)).toEqual(testData_1.nonEmptyArray);
});
test('RemoveEmpty Test', function () {
    expect(removeEmpty({ '': '' })).toEqual({});
});
