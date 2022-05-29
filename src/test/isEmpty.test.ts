const {isEmpty} = require('../index');
import * as htmlToImage from 'html-to-image';
import {genArray, genObject, nonEmptyArray, nonEmptyObject} from './testData';
jest.mock('html-to-image');


test('isEmpty Primitives', () => {
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
	expect(isEmpty({status: 'ok'})).toEqual(false);
	expect(isEmpty([undefined])).toEqual(false);
	expect(isEmpty({null: undefined})).toEqual(false);
});

test('isEmpty Object', () => {
	expect(isEmpty(genObject)).toEqual(false);
	expect(isEmpty(nonEmptyObject)).toEqual(false);
});

test('isEmpty Array', () => {
	expect(isEmpty(genArray)).toEqual(false);
	expect(isEmpty(nonEmptyArray)).toEqual(false);
});
