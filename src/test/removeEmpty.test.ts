const {removeEmpty} = require('../index');
import * as htmlToImage from 'html-to-image';
import {genArray, genObject, nonEmptyArray, nonEmptyObject} from './testData';
jest.mock('html-to-image');


test('RemoveEmpty Primitives', () => {
	expect(removeEmpty('ok')).toEqual('ok');
	expect(removeEmpty('')).toEqual('');
	expect(removeEmpty(1)).toEqual(1);
	expect(removeEmpty(0)).toEqual(0);
	expect(removeEmpty(true)).toEqual(true);
	expect(removeEmpty(false)).toEqual(false);
	expect(removeEmpty([])).toEqual([]);
	expect(removeEmpty({})).toEqual({});
});

test('RemoveEmpty Object', () => {
	expect(removeEmpty(genObject)).toEqual(nonEmptyObject);
});

test('RemoveEmpty Array', () => {
	expect(removeEmpty(genArray)).toEqual(nonEmptyArray);
});
