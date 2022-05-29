export declare const genArray: ({} | null | undefined)[];
export declare const genObject: {
    arr: ({} | null | undefined)[];
    text: string;
    nonText: string;
    number: number;
    nonNumber: number;
    boolean: boolean;
    nonBoolean: boolean;
    undefined: undefined;
    null: null;
    NaN: number;
    date: Date;
    emptyArr: never[];
    emptyObj: {};
};
export declare const nonEmptyArray: (string | number | boolean | Date | {
    text: string;
    nonText: string;
    number: number;
    nonNumber: number;
    boolean: boolean;
    nonBoolean: boolean;
    undefined: undefined;
    null: null;
    NaN: number;
    date: Date;
    emptyArr: never[];
    emptyObj: {};
})[];
export declare const nonEmptyObject: {
    arr: ({} | null | undefined)[];
    text: string;
    number: number;
    nonNumber: number;
    boolean: boolean;
    nonBoolean: boolean;
    date: Date;
};
