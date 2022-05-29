var removeEmpty = require('../index').removeEmpty;
import { genArray, genObject, nonEmptyArray, nonEmptyObject } from './testData';
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
    expect(removeEmpty(genObject)).toEqual(nonEmptyObject);
});
test('RemoveEmpty Array', function () {
    expect(removeEmpty(genArray)).toEqual(nonEmptyArray);
});
test('RemoveEmpty Test', function () {
    expect(removeEmpty({ "nonText": "" })).toEqual({});
});
