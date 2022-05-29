"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty = require('../index').isEmpty;
var testData_1 = require("./testData");
jest.mock('html-to-image');
test('isEmpty Primitives', function () {
    expect(isEmpty()).toEqual(true);
    expect(isEmpty(undefined)).toEqual(true);
    expect(isEmpty('ok')).toEqual(false);
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty(1)).toEqual(false);
    expect(isEmpty(0)).toEqual(false);
    expect(isEmpty(true)).toEqual(false);
    expect(isEmpty(false)).toEqual(false);
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty(['ok'])).toEqual(false);
    expect(isEmpty({ status: 'ok' })).toEqual(false);
    expect(isEmpty([undefined])).toEqual(false);
    expect(isEmpty({ null: undefined })).toEqual(false);
});
test('isEmpty Object', function () {
    expect(isEmpty(testData_1.genObject)).toEqual(false);
    expect(isEmpty(testData_1.nonEmptyObject)).toEqual(false);
});
test('isEmpty Array', function () {
    expect(isEmpty(testData_1.genArray)).toEqual(false);
    expect(isEmpty(testData_1.nonEmptyArray)).toEqual(false);
});
