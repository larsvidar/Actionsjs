/*************** GENERAL FUNCTIONS *****************/
/***************************************************/
import { genObject, IIndexableString } from './types';
/***** FUNCTIONS *****/
/**
 * Function for comparing values in two arrays and returning duplicate values.
 * @param {Array<any>} arr1 - First array to be compared.
 * @param {Array<any>} arr2 - Second array to be compared.
 * @return {Array<any>} Array of duplicate values from both arrays.
 */
export declare const compareArray: (arr1: any, arr2: any) => any;
/**
 * Replaces nordic characters with ansi acceptable characters
 * @param {string} str
 * @returns {string}
*/
export declare const isoToAnsi: (str?: string) => string;
/**
 * Replaces ansi characters with iso nordic characters
 * @param {string} str
 * @returns {string}
*/
export declare const ansiToIso: (str?: string) => string;
/**
 * Formats a string into a link-friendly format.
 * @param {string} link string to be formatted
 * @return {string} the formatted string.
 */
export declare const stringifyLink: (link: string) => string;
/**
 * Makes the first character in a string uppercase.
 * @param {string} text string to be formatted.
 * @return {string} text with uppercase first char.
 */
export declare const capitalize: (text: string) => string;
/**
 * Adds zero in front of a number if it is lower than 10.
 * @param {number} number to add zero to.
 * @return {string} zerofied-number as string.
 */
export declare const addZero: (number: number) => string;
/**
 * Converts minutes to a string of hours and minutes.
 * @param {number} minutes to be converted.
 * @return {string} Formatted string (eg. 2t 5m)
 */
export declare const toHours: (minutes: number, loc?: genObject | undefined) => string;
/**
 * Converts minutes to a string of minutes and seconds.
 * @param {number} seconds to be converted.
 * @return {string} Formatted string (eg. 2m 5s)
 */
export declare const toMinutes: (seconds: number, loc?: genObject | undefined) => string;
/**
 * Gets file (from formData) and reduces the longest size of the image to 300px.
 * @param {any} file from formData to be reduced.
 * @return {{file: genObject, messages: string[]}} Object with file-object and messages.
 */
export declare const resizeImage: (file: any, options: genObject) => Promise<{
    file?: genObject | undefined;
    messages: string[];
}>;
/**
 * Sorts an array of object based on values in passed key.
 * @param {Array<genObject>} array - Array of objects to be sorted.
 * @param {string} key to be sorted by.
 * @param {string='asc'} sort - Optional - Sort order: 'asc' or 'desc'. Default = 'asc'.
 * @return {Array<genObject>} New array of sorted objects.
 */
export declare const sortObjectArray: <T extends genObject>(array: T[], key: string, sort?: string) => T[];
/**
 * Checks if item is a string.
 * @param {*} value Value to be checked.
 * @return {boolean} Returns true if string, false if not.
 */
export declare const stringCheck: (value: any) => boolean;
/**
 * Gets duration since passed date.
 * @param {number} date Date to count from (UNIX epoch).
 * @param {boolean} short If true, a short-form of the string will be returned.
 * @return {string} A string telling how long ago passed date was.
 */
export declare const getTimeSince: (date: number, short?: boolean) => string;
/**
 * Checks if passed value is an error-object.
 * @param {any} value Value to be checked.
 * @return {boolean} True if error, false if not.
 */
export declare const isError: (value: any) => value is Error;
/**
 * Generates a UUID of variable size.
 * @param {number} size - Default value: 16 - Length of UUID-string.
 * @return {string} UUID-string.
 */
export declare const genUid: (size?: number) => string;
/*** Escaping inputs ***/
/**
 * Formats dates to DD.MM.YYYY format.
 * @param {string | number} rawDate The date to format.
 * @param {string=} format String defining how date should be formatted.
 * @return {string} Formatted date-string.
 */
export declare const formatDate: (rawDate: string | number, format?: string | undefined) => string;
/**
 * Making a PDF-file or image of passed HTML-element (Only image works now).
 * @param element Html-element to make PDF or image from.
 * @return {Promise<void>} Returns nothing.
 */
export declare const makePdf: (element: HTMLElement, name: string) => Promise<void>;
/**
 * Function for turning a query-string into an object.
 * @param {string} queryString Query-string to convert.
 * @return {genObject}
 */
export declare const parseQuery: (queryString: string) => genObject;
/**
 * Checks if a value is empty or not.
 * Empty objects or arrays, and undefined, null, NaN are all considered empty in this function.
 * Falsy values like 0, '' or false is not considered empty.
 * @param {any} data data to check.
 * @return {boolean} True if empty, false if not.
 */
export declare const isEmpty: (data: any) => boolean;
/**
 * Removes undefined, null and NaN values from objects.
 * @param {any} data to check for undefined values.
 * @return {genObject} Filtered object without undefined values.
 */
export declare const removeEmpty: (data: any) => any;
/**
 * Simple sleep-function that can be used in async-functions.
 * @param {number} ms Number of milliseconds to wait for.
 * @return {Promise<undefined>} Returns empty promise that are resolved after passed number of milliseconds.
 */
export declare const sleep: (ms: number) => Promise<void>;
/**
 *
 * @param urlPrefix
 * @param url
 * @returns
 */
export declare const prependUrl: (urlPrefix: string, url: string) => string;
/**
 * Checks if a value is empty or error.
 * @param {*} value Value to be checked
 * @return {boolean} True if valid, false if empty or error.
 */
export declare const isValid: (value: any) => any;
/**
 * @TODO Refactor me to not use .pop()
 * Function for paginate an array. Fetches item from a source array, which is affected directly.
 *
 * @param {any[]} source Source-array to paginate from.
 * @param {number} quantity Number of items to get each time
 */
export declare function paginateArray<T>(source: T[], quantity: number): T[];
/**
 * Function for setting console.time-message
 * @param {string} text Text to display in console
 * @param {boolean=} end If true, defines end-message.
 * @return {void}
 */
export declare const setTime: (text: string, end?: boolean | undefined) => void;
/**
 * Function for sorting an target-array based on the order of a source-array
 * @param {T[]} targetArray Array to be sorted
 * @param {any[]} sourceArray Array with values to sort after.
 * @param {string} compareKey Key to get value from targetArray.
 * @return {T[]} Sorted array.
 */
export declare const sortFromArray: <T extends genObject>(targetArray: T[], sourceArray: any[], compareKey: string) => T[];
/**
 *
 * @param data
 * @param type
 */
export declare const noError: (data: any, type: string) => any;
/**
 * Returns an object with a 'clearAll' method.
 *  -Timeout-ids can be stored in det object, and clearAll will clear every timeout.
 * @return {genObject} Object with clearAll-method
 */
export declare const getTimeoutObject: () => genObject;
/**
 * Applies trim() to all properties in an object that is of type string.
 * @param {genObject} obj Object to process.
 * @return {genObject} Trimmed-object.
 */
export declare function trimObject<T = genObject>(obj: genObject): T;
/**
 * Parses a string to key value pairs
 * Example: a:12,b:34 -> {a: 12, b: 34}
 *
 * @param {string} str
 * @returns {genObject}
 */
export declare const stringToObject: (str: string) => genObject;
/**
 * Checks if a value is an object or not, (also not an array);
 * @param {any} value Value to be checked
 * @return {boolean} True if valid object, false if not.
 */
export declare const isObject: (value: any) => value is genObject;
/**
 * Function for converting a form-element to an object.
 * @param {HTMLFontElement} form Form to be converted
 * @param {genObject?} target A target-object that the result can be added to.
 * @return {genObject} Object of key-value pairs from form-data;
 */
export declare const serializeForm: (form: HTMLFormElement, target?: genObject | undefined) => genObject;
export declare function handleEvent<T>(event: any, stopPropagation?: boolean): T;
/**
 * Inserts space between thousands, after 10 000;
 * @param {number} value Number to be formatted.
 * @return {string | number}
 */
export declare const formatNumber: (value: number, separator?: string) => string | number;
/**
 * Wraps a try catch-block into one line of code.
 * @param {function} action A function that wraps the function to be called. E.g: tryCatch(() => myFunction(arg1, arg2))
 * @return {any} Returns whatever the passed function returners.
 */
export declare const tryCatch: (action: any) => any;
/**
 * Stringify a value and print it with specified indention.
 * @param {any} Data to be stringified
 * @param {number} indention number of spaces to indent
 * @return {string}
 */
export declare const stringify: (data: any, indention?: number) => string;
/**
 * Makes a url-parameter string from an object.
 * @param {genObject} params
 * @return {string}
 */
export declare const constructParamsString: (params: genObject) => string;
/**
 * Opens a new window and navigates to passed url.
 * @param {string} url Url to show in new window.
 * @param {number = 480} width Width of window in pixels. Default: 480.
 * @param {number = 640} height Height of window in pixels. Default: 640.
 * @param {number} top Number of pixels the window should be placed from the top of the screen
 * @param {number} left Number of pixels the window should be placed from the left edge of the screen
 * @return {Window} A window-object
 */
export declare const openWindow: (url: string, width: number | undefined, height: number | undefined, top: number, left: number) => Window | Error;
/**
 * Function for setting and triggering location-hash;
 * @param {string} hash to be set (string without #);
 * @return {void}
 */
export declare const setHash: (hash: string) => void;
/**
 * Makes sure an array-object is returned.
 * @param {any[]} array Array to be checked
 * @return {any[]} Safe array.
 */
export declare function safeArray<T>(array?: T[]): T[];
/**
 * Makes sure a value is a string
 * @param {string} value
 * @return {string}
 */
export declare function safeString(value?: string): string;
interface IPagination<T> {
    result: T[];
    pages: number;
    items: number;
    hasMore: boolean;
}
/**
 * Returns items from array depending on page and number of items pr. page.
 * @param {any[]} arr Array of items.
 * @param {number = 1} page What page to return
 * @param {number = 10} itemsPrPage How many items should be fetched pr. page.
 */
export declare function appendPagination<T = any>(arr: any[], page?: number, itemsPrPage?: number): IPagination<T>;
export declare const isWebAdresse: (url: string) => boolean;
export declare const prependSlash: (url: string) => string;
export declare function isArray<T>(value: any): value is Array<T>;
/**
 * Removes any trailing slashes at the end of a url (or any string).
 * @param {string} url
 * @return {string}
 */
export declare function noTrailingSlash(url: any): any;
/**
 * Removes any trailing slashes at the beginning of a url (or any string).
 * @param {string} url
 * @return {string}
 */
export declare function noPreSlash(url: any): any;
/**
 * Removes any trailing slashes at the end or/and at the beginning of a string.
 * @param {string} url
 * @return {string}
 */
export declare function noWrappingSlash(url: any): any;
/**
 * Separates an url-string into an array of strings. useful for Next.js-routing.
 *   e.g: '/blog/post/' will return ['blog', 'post'].
 * @param {string} url;
 * @returns {string[]}
 */
export declare const urlToArray: (url: string) => string[];
/**
 * Gets last slug from url-string
 * @param {string} url
 * @return {string}
 */
export declare const getSlug: (url: string) => string;
/**
 * Function for returning month based on a date.
 * @param {Date | string} rawDate A date as a Date-object or a string.
 * @param {'long' | 'short'} format Month name in long or short format.
 * @returns {string} Name of month.
 */
export declare const getMonth: (rawDate: any, format: "long" | "short" | undefined, loc: genObject) => any;
/**
 * Safe version of Array.prototype.map method
 * @param {any[]} arr Array to be mapped
 * @param {Function} action Function to process each item in array
 * @returns {any[]} Modified array
 */
export declare function map<T = any>(arr?: T[], action?: (item: T, index?: number) => any): any[];
/**
 * Safe version of Array.prototype.filter.
 * @param {any[]} arr Array to filter
 * @param {Function} action Function to determine if item should be filtered out or not.
 * @returns {any[]} Filtered array
 */
export declare function filter<T = any>(arr?: T[], action?: (item: T) => boolean): any[];
/**
 * Safe version of Array.prototype.find.
 * @param {any[]} arr Array to find item in
 * @param {Function} action Function to find item.
 * @returns {any[]} Filtered array
 */
export declare function find<T = any>(arr?: T[], action?: (item: T) => boolean): T | undefined;
/**
 * Safe version of Array.prototype.forEach method.
 * @param {any[]} arr Array to iterate over
 * @param {Function} action Function to run on each item in array.
 * @returns {void} Executes passed function.
 */
export declare function forEach<T = any>(arr?: T[], action?: (item: T, index?: number) => any): void;
/**
 * Safe version of String.prototype.split method.
 * @param {string} value String to split.
 * @param {string} param Value to split string on.
 * @returns {string[]} Returns splitted string.
 */
export declare function split(value: string, param: string): string[];
/**
 * Compares to objects to see if values in data-object is different fram same values in source-object.
 *  -Missing properties are not compared.
 * @param {genObject} data Object with properties to check
 * @param {genObject} source Object with properties to compare against.
 * @returns {boolean} Returns true if any properties in data don't matches same property in source.
 */
export declare const hasChanges: (source: genObject, data: genObject) => false | undefined;
/**
 * Removes objects from array that has identical values for specified key
 * @param {any[]} array Array of objects.
 * @param {string} key Key to check value of.
 * @returns {any[]} Array with duplicates removed
 */
export declare const removeDuplicateArrayObjects: (array: any[], key: string) => any[];
/**
 * Converts an object to a string of url-params.
 *  - Only converts values that are strings or numbers.
 * @param {genObject} queryObject
 * @returns {string}
 */
export declare const objToUrlParams: (queryObject: genObject) => string;
/**
 * Function for shifting items in an array forward or backwards
 * @param {any[]} arr An array of anything
 * @param {number} offset Number of items to offset array with
 * @returns {any[]} Returns an array with exactly as many items in it.
 */
export declare const offsetArray: (arr: any, offset: number) => any;
/**
 * Function for checking objects are the equal.
 * @param {genObject} object1 First object to be compared
 * @param {genObject} object2 Second object to be compared
 * @returns {boolean} true if object is the same, false is there is a difference.
 */
export declare const shallowEqualObject: (object1: genObject, object2: genObject) => boolean;
/**
 * Removes to many new-lines in a string.
 * @param {string} text Text to be escaped
 * @returns {string} Escaped string.
 */
export declare const removeExcessiveNewLines: (text: string) => string;
/**
 * Remove url-params from an url-string
 * @param {string} url
 * @returns {string}
 */
export declare const removeUrlParams: (url: string) => any;
/**
 * Replaces an item in a array based on a query.
 * @param {any[]} array An array with any content
 * @param {any} updatedItem Item to insert where matching items is found
 * @param {genObject | any} query Query to find items.
 * 	This can be an object, where defined keys will be matched, or any other values that will be checked for equality.
 * @returns {any[]} Returns array with replaced item.
 */
export declare function updateArray<T>(array: T[], updatedItem: T, query: genObject | any, keepOldData?: boolean): any[];
/**
 * Takes a url-path and splits it into an array of slugs
 * @param path url-string to process.
 * @returns String array of slugs
 */
export declare const makePathArray: (path: string) => any;
/**
 * Adds item to array, or replaces/updates it if it has a key-value that matches key-value on target array.
 * @param data Data to add to array
 * @param targetArray Array to add data to.
 * @param key What key to check value of.
 * 	-If undefined a shallow compare of the items are done instead,
 * 		and items are always overwritten.
 * @param replace If true, replaces matched items instead of updating them.
 * @returns Updated array
 */
export declare function addOrReplace<T extends IIndexableString>(data: T | T[], targetArray: T[], key?: string, replace?: boolean): any[];
/**
 * Adds passed prop-class to native component-class. If non exists, empty string is returned instead
 * @param nativeClass
 * @param propClass
 * @returns
 */
export declare const propClass: (nativeClass?: string, propClass?: string) => string;
/**
 * Function for parsing json, but avoiding crashes.
 * @param {string} data Data to parse (should be a string)
 * @returns {object | any} Object from parsed json, or same data as was passed.
 */
export declare const jsonParse: (data: any) => any;
export {};
