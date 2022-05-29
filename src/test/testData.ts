
const arr = [
	'', 'ok',
	0, 1,
	false, true, 
	undefined, null, NaN, 
	new Date(0),
	{}, [],
];

const nonEmptyArr = [
	'ok',
	0, 1,
	false, true, 
	new Date(0),
]

const obj = {
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

const nonEmptyObj = {
	text: 'ok',
	number: 1,
	nonNumber: 0,
	boolean: true,
	nonBoolean: false,
	date: new Date(0),
}

export const genArray = [arr, obj];
export const genObject = {...obj, arr};
export const nonEmptyArray = [...nonEmptyArr, obj];
export const nonEmptyObject = {...nonEmptyObj, arr};


