"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonEmptyObject = exports.nonEmptyArray = exports.genObject = exports.genArray = void 0;
var arr = [
    '', 'ok',
    0, 1,
    false, true,
    undefined, null, NaN,
    new Date(0),
    {}, [],
];
var nonEmptyArr = [
    'ok',
    0, 1,
    false, true,
    new Date(0),
];
var obj = {
    text: 'ok',
    nonText: '',
    number: 1,
    nonNumber: 0,
    boolean: true,
    nonBoolean: false,
    undefined: undefined,
    null: null,
    NaN: NaN,
    date: new Date(0),
    emptyArr: [],
    emptyObj: {},
};
var nonEmptyObj = {
    text: 'ok',
    number: 1,
    nonNumber: 0,
    boolean: true,
    nonBoolean: false,
    date: new Date(0),
};
exports.genArray = __spreadArray(__spreadArray([], arr, true), [obj], false);
exports.genObject = __assign(__assign({}, obj), { arr: arr });
exports.nonEmptyArray = __spreadArray(__spreadArray([], nonEmptyArr, true), [obj], false);
exports.nonEmptyObject = __assign(__assign({}, nonEmptyObj), { arr: arr });
