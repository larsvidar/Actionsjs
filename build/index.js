"use strict";
/*************** GENERAL FUNCTIONS *****************/
/* Functions not specific to Utdannet.nos solution */
/***************************************************/
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.getSlug = exports.urlToArray = exports.noWrappingSlash = exports.noPreSlash = exports.noTrailingSlash = exports.isArray = exports.prependSlash = exports.isWebAdresse = exports.appendPagination = exports.safeString = exports.safeArray = exports.setHash = exports.openWindow = exports.constructParamsString = exports.stringify = exports.tryCatch = exports.formatNumber = exports.handleEvent = exports.serializeForm = exports.isObject = exports.stringToObject = exports.trimObject = exports.getTimeoutObject = exports.noError = exports.sortFromArray = exports.setTime = exports.paginateArray = exports.isValid = exports.prependUrl = exports.sleep = exports.removeEmpty = exports.isEmpty = exports.parseQuery = exports.makePdf = exports.formatDate = exports.genUid = exports.isError = exports.getTimeSince = exports.stringCheck = exports.sortObjectArray = exports.resizeImage = exports.toMinutes = exports.toHours = exports.addZero = exports.capitalize = exports.stringifyLink = exports.ansiToIso = exports.isoToAnsi = exports.compareArray = exports.safeWindow = void 0;
exports.jsonParse = exports.propClass = exports.addOrReplace = exports.makePathArray = exports.updateArray = exports.removeUrlParams = exports.removeExcessiveNewLines = exports.shallowEqualObject = exports.offsetArray = exports.objToUrlParams = exports.removeDuplicateArrayObjects = exports.hasChanges = exports.split = exports.forEach = exports.find = exports.filter = exports.map = exports.getMonth = void 0;
/***** IMPORTS *****/
var htmlToImage = __importStar(require("html-to-image"));
/*** GLOBAL VARIABLES ***/
/***** FUNCTIONS *****/
/**
 * Return safe version of the window-object, also if app runs on server.
 * @returns Window or empty object.
 */
var safeWindow = function () {
    var windowObject = typeof window === 'undefined' ? {} : window;
    windowObject.location = windowObject.location || {};
    return windowObject;
};
exports.safeWindow = safeWindow;
/**
 * Function for comparing values in two arrays and returning duplicate values.
 * @param {Array<any>} arr1 - First array to be compared.
 * @param {Array<any>} arr2 - Second array to be compared.
 * @return {Array<any>} Array of duplicate values from both arrays.
 */
var compareArray = function (arr1, arr2) {
    arr1 = safeArray(arr1);
    arr2 = safeArray(arr2);
    return arr1.filter(function (value) {
        return arr2.includes(value);
    });
};
exports.compareArray = compareArray;
/**
 * Replaces nordic characters with ansi acceptable characters
 * @param {string} str
 * @returns {string}
*/
var isoToAnsi = function (str) {
    if (str === void 0) { str = ''; }
    var lowerCaseStr = safeString(str.toLocaleLowerCase());
    return lowerCaseStr
        .replace(/ø/g, '+o')
        .replace(/Ø/g, '+O')
        .replace(/æ/g, '+e')
        .replace(/Æ/g, '+E')
        .replace(/å/g, '+a')
        .replace(/Å/g, '+A');
};
exports.isoToAnsi = isoToAnsi;
/**
 * Replaces ansi characters with iso nordic characters
 * @param {string} str
 * @returns {string}
*/
var ansiToIso = function (str) {
    if (str === void 0) { str = ''; }
    return str
        .replace(/\+o/g, 'ø')
        .replace(/\+O/g, 'Ø')
        .replace(/\+e/g, 'æ')
        .replace(/\+E/g, 'Æ')
        .replace(/\+a/g, 'å')
        .replace(/\+A/g, 'Å');
};
exports.ansiToIso = ansiToIso;
/**
 * Formats a string into a link-friendly format.
 * @param {string} link string to be formatted
 * @return {string} the formatted string.
 */
var stringifyLink = function (link) {
    if (link) {
        var newLink = link.toLowerCase()
            .replace(/ø/g, 'o')
            .replace(/æ/g, 'e')
            .replace(/å/g, 'a')
            .replace(/\s/g, '-')
            .replace(/[^a-z0-9-.\s]/g, '');
        return newLink;
    }
    return 'undefined-stringify-link';
};
exports.stringifyLink = stringifyLink;
/**
 * Makes the first character in a string uppercase.
 * @param text string to be formatted.
 * @return text with uppercase first char.
 */
var capitalize = function (text) {
    if (text === void 0) { text = ''; }
    var thisText = safeString(text);
    var textArray = thisText === null || thisText === void 0 ? void 0 : thisText.split('');
    textArray[0] = textArray[0].toUpperCase();
    return textArray.join('');
};
exports.capitalize = capitalize;
/**
 * Adds zero in front of a number if it is lower than 10.
 * @param {number} number to add zero to.
 * @return {string} zerofied-number as string.
 */
var addZero = function (number) {
    if (typeof number !== 'number')
        return '0';
    return number < 10 && number > -1
        ? '0' + Math.floor(number).toString()
        : Math.floor(number).toString();
};
exports.addZero = addZero;
/**
 * Converts minutes to a string of hours and minutes.
 * @param {number} minutes to be converted.
 * @return {string} Formatted string (eg. 2t 5m)
 */
var toHours = function (minutes, loc) {
    //Language locale
    if (!loc)
        loc = {
            minutesShort: 'm',
            hoursShort: 't',
        };
    if (!minutes || minutes < 0)
        return '0 ' + loc.minutesShort;
    return "".concat(Math.floor(minutes / 60)
        ? Math.floor(minutes / 60) + loc.hoursShort + ' '
        : '').concat(minutes % 60 === 0 ? '' : minutes % 60 + loc.minutesShort);
};
exports.toHours = toHours;
/**
 * Converts minutes to a string of minutes and seconds.
 * @param {number} seconds to be converted.
 * @return {string} Formatted string (eg. 2m 5s)
 */
var toMinutes = function (seconds, loc) {
    //Language locale
    if (!loc)
        loc = {
            secondsShort: 's',
            minutesShort: 'm',
        };
    if (!seconds || seconds < 0)
        return '0 ' + loc.minutesShort;
    return "".concat(Math.floor(seconds / 60)
        ? Math.floor(seconds / 60) + loc.minutesShort + ' '
        : '').concat(seconds % 60 === 0 ? '' : seconds % 60 + loc.secondsShort);
};
exports.toMinutes = toMinutes;
/**
 * Gets file (from formData) and reduces the longest size of the image to 300px.
 * @param {any} file from formData to be reduced.
 * @return {{file: genObject, messages: string[]}} Object with file-object and messages.
 */
var resizeImage = function (file, options) { return __awaiter(void 0, void 0, void 0, function () {
    var messages, getNewSize, fileName, image, canvas, ctx;
    return __generator(this, function (_a) {
        messages = [];
        if (!((file === null || file === void 0 ? void 0 : file.type) || '').match(/image\//gi)) {
            messages.push('Invalid file type');
            return [2 /*return*/, { messages: messages }];
        }
        getNewSize = function (width, height, size) {
            return width >= height
                ? [size, height / (width / size)]
                : [width / (height / size), size];
        };
        fileName = safeString(file.name).split('.')[0];
        image = new Image();
        image.src = URL.createObjectURL(file); //Setting passed file as image-source.
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d') || {};
        //Returning a promise that resolves to the new form-data (with the resized image).
        return [2 /*return*/, new Promise(function (resolve) {
                //Listener for when source is loaded into image.
                image.onload = function () {
                    //Checking if image is bigger than set size.
                    var longestSide = Math.max(image.width, image.height);
                    var newLongSize = longestSide < options.size ? longestSide : options.size;
                    if (longestSide < options.size)
                        messages.push('Bildet er for stort. Reduserer størrelsen');
                    //Getting the new size of the image.
                    var newSize = getNewSize(image.width, image.height, newLongSize);
                    //Setting the canvas to the new image size. 
                    canvas.width = newSize[0];
                    canvas.height = newSize[1];
                    //Drawing the image on the canvas with the new size.
                    ctx.drawImage(image, 0, 0, newSize[0], newSize[1]);
                    //Making new form-data.
                    var formData = new FormData();
                    //Getting the image from the canvas, and appending it to form-data.
                    canvas.toBlob(function (blob) { return __awaiter(void 0, void 0, void 0, function () {
                        var file_1;
                        return __generator(this, function (_a) {
                            if (!blob)
                                return [2 /*return*/];
                            if (options.blob) {
                                file_1 = new File([blob], fileName + '.png', { type: 'image/png' });
                                resolve({ file: file_1, messages: messages });
                            }
                            else {
                                formData.append('files', blob, fileName + '.png');
                                //Resolve when new formData is finished.
                                resolve({ file: formData, messages: messages });
                            }
                            return [2 /*return*/];
                        });
                    }); });
                };
            })];
    });
}); };
exports.resizeImage = resizeImage;
/**
 * Sorts an array of object based on values in passed key.
 * @param {Array<genObject>} array - Array of objects to be sorted.
 * @param {string} key to be sorted by.
 * @param {string='asc'} sort - Optional - Sort order: 'asc' or 'desc'. Default = 'asc'.
 * @return {Array<genObject>} New array of sorted objects.
 */
var sortObjectArray = function (array, key, sort) {
    if (sort === void 0) { sort = 'asc'; }
    //If array is empty, just return array.
    if (!Array.isArray(array) || !(array === null || array === void 0 ? void 0 : array.length))
        return [];
    //Returns sorted array
    return __spreadArray([], array, true).sort(function (a, b) {
        //Checking sort-order.
        var sortFactor = sort.toLowerCase() === 'asc' ? 1 : -1;
        var sortKey = key;
        //Converting to lower-case if property is string.
        var value1 = typeof a[sortKey] === 'string' ? a[sortKey].toLowerCase() : a[sortKey];
        var value2 = typeof b[sortKey] === 'string' ? b[sortKey].toLowerCase() : b[sortKey];
        //comparing values.
        return (value1 || '') > (value2 || '')
            ? sortFactor
            : -sortFactor;
    });
};
exports.sortObjectArray = sortObjectArray;
/**
 * Checks if item is a string.
 * @param {*} value Value to be checked.
 * @return {boolean} Returns true if string, false if not.
 */
var stringCheck = function (value) {
    return typeof value === 'string'
        ? true
        : false;
};
exports.stringCheck = stringCheck;
/**
 * Gets duration since passed date.
 * @param {number} date Date to count from (UNIX epoch).
 * @param {boolean} short If true, a short-form of the string will be returned.
 * @return {string} A string telling how long ago passed date was.
 */
var getTimeSince = function (date, short) {
    if (short === void 0) { short = false; }
    if (!date) {
        return short ? '0 s' : '0 sekunder siden';
    }
    //Get todays date.
    var today = Date.now();
    //Get milliseconds since passed date.
    var time = today - date;
    //Convert milliseconds to a human-readable string.
    //Seconds...
    var seconds = time / 1000;
    if (seconds < 60)
        return short
            ? "".concat(Math.round(seconds), " s")
            : "".concat(Math.round(seconds), " sekunder siden");
    //Minutes...
    var minutes = seconds / 60;
    if (minutes < 60)
        return short
            ? "".concat(Math.round(minutes), " m")
            : "".concat(Math.round(minutes), " minutter siden");
    //Hours...
    var hours = minutes / 60;
    if (hours < 24)
        return short
            ? "".concat(Math.round(hours), " t")
            : "".concat(Math.round(hours), " timer siden");
    //Days...
    var days = hours / 24;
    if (days < 7)
        return short
            ? "".concat(Math.round(days), " d")
            : "".concat(Math.round(days), " dager siden");
    //Weeks...
    var weeks = days / 7;
    if (weeks < 4)
        return short
            ? "".concat(Math.round(weeks), " u")
            : "".concat(Math.round(weeks), " uker siden");
    //Months...
    var months = days / 30.35;
    if (months < 12)
        return short
            ? "".concat(Math.round(months), " mnd")
            : "".concat(Math.round(months), " m\u00E5neder siden");
    //Years...
    var years = days / 364.25;
    return short
        ? "".concat(Math.round(years), " \u00E5r")
        : "".concat(Math.round(years), " \u00E5r siden");
};
exports.getTimeSince = getTimeSince;
/**
 * Checks if passed value is an error-object.
 * @param {any} value Value to be checked.
 * @return {boolean} True if error, false if not.
 */
var isError = function (value) {
    var _a;
    return value instanceof Error
        ? true
        : value && value.error
            ? true
            : ((_a = value === null || value === void 0 ? void 0 : value.meta) === null || _a === void 0 ? void 0 : _a.error)
                ? true
                : false;
};
exports.isError = isError;
/**
 * Generates a UUID of variable size.
 * @param {number} size - Default value: 16 - Length of UUID-string.
 * @return {string} UUID-string.
 */
var genUid = function (size) {
    if (size === void 0) { size = 16; }
    //Make variable for Uid.
    var code = '';
    //Loop through number of characters
    for (var i = 0; i < size; i++) {
        //Get random number or letter and add it to variable
        if (Math.random() < .3) {
            code += (Math.floor(Math.random() * 10));
        }
        else {
            code += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
    }
    //Return finished code.
    return code;
};
exports.genUid = genUid;
/*** Escaping inputs ***/
// const hasInvalidChars = /^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$/g.test(
//     inputValue,
//   )
/**
 * Formats dates to DD.MM.YYYY format.
 * @param {string | number} rawDate The date to format.
 * @param {string=} format String defining how date should be formatted.
 * @return {string} Formatted date-string.
 */
var formatDate = function (rawDate, format) {
    //Process date to format.
    var dateNumber = rawDate;
    if (!rawDate)
        dateNumber = Date.now();
    if (typeof rawDate === 'string' && rawDate.length < 13 && !isNaN(+rawDate))
        dateNumber = +(rawDate + '000');
    if (typeof rawDate === 'number' && rawDate < 1000000000000)
        dateNumber = rawDate * 1000;
    if (isNaN(+rawDate))
        dateNumber = new Date(rawDate).valueOf();
    //Make a date object.
    var date = new Date(+dateNumber);
    //Return data based on format-string
    switch (format) {
        //Return date as "jan. 2020"
        case 'year': return date.toLocaleDateString('no-NB', {
            year: 'numeric',
        });
        //Return date as "jan. 2020"
        case 'monthyear': return date.toLocaleDateString('no-NB', {
            month: 'short', year: 'numeric',
        });
        //Return date as "january 2020"
        case 'daymonthyear': return date.toLocaleDateString('no-NB', {
            day: 'numeric', month: 'long', year: 'numeric',
        });
        //Return date as a DD.MM.YYYY string.
        default: return date.toLocaleDateString('no-NB', {
            day: '2-digit', month: '2-digit', year: 'numeric',
        });
    }
};
exports.formatDate = formatDate;
/**
 * Making a PDF-file or image of passed HTML-element (Only image works now).
 * @param element Html-element to make PDF or image from.
 * @return {Promise<void>} Returns nothing.
 */
var makePdf = function (element, name) { return __awaiter(void 0, void 0, void 0, function () {
    var image, downloadRef;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, htmlToImage.toJpeg(element, { width: 1110, height: 634 })];
            case 1:
                image = _a.sent();
                downloadRef = document.createElement('a');
                downloadRef.href = image;
                downloadRef.download = name + '.jpg';
                downloadRef.click();
                return [2 /*return*/];
        }
    });
}); };
exports.makePdf = makePdf;
/**
 * Function for turning a query-string into an object.
 * @param {string} queryString Query-string to convert.
 * @return {genObject}
 */
var parseQuery = function (queryString) {
    queryString = safeString(queryString);
    //Variable for holding final result.
    var queryObject = {};
    //Check if queryString is not empty, and actually a string.
    if (!queryString || typeof queryString !== 'string')
        return {};
    //Split query-string from rest of url, and check for errors.
    var query = safeString(decodeURI(queryString)).split('?');
    //if(!query[1]) return new Error('Not a valid query-string.')
    //Split into individual key-value pairs.
    var queryArray = query[1]
        ? safeString(query[1]).split('&')
        : safeString(query[0]).split('&');
    //Iterate through key-pairs and adding them to queryObject.
    queryArray.forEach(function (item, index) {
        item = safeString(item);
        var itemArray = item.split('=');
        //If value is present, add it to queryObject...
        if (itemArray[1]) {
            var item_1 = '';
            try {
                item_1 = JSON.parse(itemArray[1]);
            }
            catch (thisError) {
                item_1 = itemArray[1];
            }
            if (itemArray[0])
                queryObject[itemArray[0]] = item_1;
            //If not, just push string into the single-item.
        }
        else if (itemArray[0]) {
            if (!queryObject.single)
                queryObject.single = [];
            queryObject.single[index] = itemArray[0];
        }
    });
    return queryObject;
};
exports.parseQuery = parseQuery;
/**
 * Checks if a value is empty or not.
 * Empty objects or arrays, and undefined, null, NaN are all considered empty in this function.
 * Falsy values like 0, '' or false is not considered empty.
 * @param {any} data data to check.
 * @return {boolean} True if empty, false if not.
 */
var isEmpty = function (data) {
    if ([undefined, null, NaN].includes(data))
        return true;
    if ((0, exports.isError)(data))
        return false;
    if (typeof data === 'object') {
        if (Array.isArray(data))
            return !data.length;
        var keys = Object.keys(data);
        return !keys.length;
    }
    return !data;
};
exports.isEmpty = isEmpty;
/**
 * Removes undefined, null and NaN values from objects.
 * @param {any} data to check for undefined values.
 * @return {genObject} Filtered object without undefined values.
 */
var removeEmpty = function (data) {
    if (typeof data !== 'object')
        return data;
    if (data instanceof Date)
        return data;
    if (Array.isArray(data))
        return data.filter(function (value) { return !!value; });
    var keys = Object.keys(data);
    var newObject = {};
    keys.forEach(function (key) {
        var value = data[key];
        if (!value)
            if (![false, 0].includes(value))
                return;
        var type = typeof value;
        if (type === 'object') {
            if (!(value instanceof Date)) {
                if (Array.isArray(value))
                    if (!value.length)
                        return;
                if (!Object.keys(value).length)
                    return;
            }
        }
        newObject[key] = value;
    });
    return newObject;
};
exports.removeEmpty = removeEmpty;
/**
 * Simple sleep-function that can be used in async-functions.
 * @param {number} ms Number of milliseconds to wait for.
 * @return {Promise<undefined>} Returns empty promise that are resolved after passed number of milliseconds.
 */
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
exports.sleep = sleep;
/**
 *
 * @param urlPrefix
 * @param url
 * @returns
 */
var prependUrl = function (urlPrefix, url) {
    return (0, exports.isWebAdresse)(url)
        ? url
        : noTrailingSlash(urlPrefix) + (0, exports.prependSlash)(url);
};
exports.prependUrl = prependUrl;
/**
 * Checks if a value is empty or error.
 * @param {*} value Value to be checked
 * @return {boolean} True if valid, false if empty or error.
 */
var isValid = function (value) {
    return !value || (0, exports.isEmpty)(value)
        ? false
        : (0, exports.isError)(value)
            ? false
            : true;
};
exports.isValid = isValid;
/**
 * @TODO Refactor me to not use .pop()
 * Function for paginate an array. Fetches item from a source array, which is affected directly.
 *
 * @param {any[]} source Source-array to paginate from.
 * @param {number} quantity Number of items to get each time
 */
function paginateArray(source, quantity) {
    var target = [];
    for (var i = 0; i < quantity; i++) {
        if (!source.length)
            break;
        target.push(source.pop());
    }
    return target;
}
exports.paginateArray = paginateArray;
/**
 * Function for setting console.time-message
 * @param {string} text Text to display in console
 * @param {boolean=} end If true, defines end-message.
 * @return {void}
 */
var setTime = function (text, end) { return end
    ? console.timeEnd(text)
    : console.time(text); };
exports.setTime = setTime;
/**
 * Function for sorting an target-array based on the order of a source-array
 * @param {T[]} targetArray Array to be sorted
 * @param {any[]} sourceArray Array with values to sort after.
 * @param {string} compareKey Key to get value from targetArray.
 * @return {T[]} Sorted array.
 */
var sortFromArray = function (targetArray, sourceArray, compareKey) {
    targetArray = safeArray(targetArray);
    sourceArray = safeArray(sourceArray);
    var target = [];
    sourceArray.forEach(function (item) {
        var matchingItem = targetArray.filter(function (thisItem) {
            return item === thisItem[compareKey];
        })[0];
        if (matchingItem)
            target.push(matchingItem);
    });
    return target;
};
exports.sortFromArray = sortFromArray;
/**
 *
 * @param data
 * @param type
 */
var noError = function (data, type) {
    if (!(0, exports.isError)(data))
        return data;
    switch (type) {
        case 'string': return '';
        case 'number': return 0;
        case 'array': return [];
        case 'boolean': return false;
        default: return {};
    }
};
exports.noError = noError;
/**
 * Returns an object with a 'clearAll' method.
 *  -Timeout-ids can be stored in det object, and clearAll will clear every timeout.
 * @return {genObject} Object with clearAll-method
 */
var getTimeoutObject = function () {
    return {
        //Method for clearing all timeouts stored in object.
        clearAll: function () {
            var _this = this;
            Object.keys(this).forEach(function (key) {
                if (key !== 'clearAll') {
                    clearTimeout(_this[key]);
                    delete _this[key];
                }
            });
        }
    };
};
exports.getTimeoutObject = getTimeoutObject;
/**
 * Applies trim() to all properties in an object that is of type string.
 * @param {genObject} obj Object to process.
 * @return {genObject} Trimmed-object.
 */
function trimObject(obj) {
    var _a, _b, _c, _d;
    var newObj = {};
    for (var _i = 0, _e = Object.keys(obj); _i < _e.length; _i++) {
        var key = _e[_i];
        newObj[key] = typeof obj[key] === 'string'
            ? (_d = (_c = (_b = (_a = obj[key]).trim) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.replace) === null || _d === void 0 ? void 0 : _d.call(_c, /\s{2,}/g, ' ')
            : obj[key];
    }
    return newObj;
}
exports.trimObject = trimObject;
/**
 * Parses a string to key value pairs
 * Example: a:12,b:34 -> {a: 12, b: 34}
 *
 * @param {string} str
 * @returns {genObject}
 */
var stringToObject = function (str) {
    str = safeString(str);
    return str === null || str === void 0 ? void 0 : str.split(',').map(function (val) { return safeString(val).split(':'); }).reduce(function (obj, _a) {
        var key = _a[0], val = _a[1];
        return (obj[key] = val, obj);
    }, {});
};
exports.stringToObject = stringToObject;
/**
 * Checks if a value is an object or not, (also not an array);
 * @param {any} value Value to be checked
 * @return {boolean} True if valid object, false if not.
 */
var isObject = function (value) {
    if (value instanceof Error)
        return false;
    return typeof value === 'object' && !Array.isArray(value);
};
exports.isObject = isObject;
/**
 * Function for converting a form-element to an object.
 * @param {HTMLFontElement} form Form to be converted
 * @param {genObject?} target A target-object that the result can be added to.
 * @return {genObject} Object of key-value pairs from form-data;
 */
var serializeForm = function (form, target) {
    var _a;
    //Checking values
    var FAILSAFE = 1000;
    if (!form)
        return {};
    var targetObject = (0, exports.isObject)(target) ? target : {};
    //Trying to get entries from form-data.
    var formData = (0, exports.tryCatch)(function () { return new FormData(form).entries(); });
    if ((0, exports.isError)(formData))
        return {};
    //Iterate through form-data
    var entry = formData.next();
    var count = 0;
    while (!entry.done) {
        count++;
        //Check value and assign it if valid.
        if (!((_a = entry === null || entry === void 0 ? void 0 : entry.value) === null || _a === void 0 ? void 0 : _a.length)) {
            entry.done = true;
        }
        else {
            targetObject[entry.value[0]] = entry.value[1];
            entry = formData.next();
        }
        //To avoid eternal loop
        if (count > FAILSAFE)
            entry.done = true;
    }
    return targetObject;
};
exports.serializeForm = serializeForm;
function handleEvent(event, stopPropagation) {
    if (stopPropagation === void 0) { stopPropagation = false; }
    event.preventDefault();
    if (stopPropagation)
        event.stopPropagation();
    var target = event.target;
    return target;
}
exports.handleEvent = handleEvent;
/**
 * Inserts space between thousands, after 10 000;
 * @param {number} value Number to be formatted.
 * @return {string | number}
 */
var formatNumber = function (value, separator) {
    if (separator === void 0) { separator = ' '; }
    return value < 10000
        ? value
        : (value / 1000).toFixed(3).replace('.', separator);
};
exports.formatNumber = formatNumber;
/**
 * Wraps a try catch-block into one line of code.
 * @param {function} action A function that wraps the function to be called. E.g: tryCatch(() => myFunction(arg1, arg2))
 * @return {any} Returns whatever the passed function returners.
 */
var tryCatch = function (action) {
    try {
        return action();
    }
    catch (error) {
        return error;
    }
};
exports.tryCatch = tryCatch;
/**
 * Stringify a value and print it with specified indention.
 * @param {any} Data to be stringified
 * @param {number} indention number of spaces to indent
 * @return {string}
 */
var stringify = function (data, indention) {
    if (indention === void 0) { indention = 4; }
    return JSON.stringify(data, null, indention);
};
exports.stringify = stringify;
/**
 * Makes a url-parameter string from an object.
 * @param {genObject} params
 * @return {string}
 */
var constructParamsString = function (params) {
    var paramString = '';
    if (!(0, exports.isObject)(params))
        return paramString;
    for (var item in params) {
        if (!paramString)
            paramString = '?';
        else
            paramString += '&';
        paramString += item + '=' + params[item];
    }
    return paramString;
};
exports.constructParamsString = constructParamsString;
/**
 * Opens a new window and navigates to passed url.
 * @param {string} url Url to show in new window.
 * @param {number = 480} width Width of window in pixels. Default: 480.
 * @param {number = 640} height Height of window in pixels. Default: 640.
 * @param {number} top Number of pixels the window should be placed from the top of the screen
 * @param {number} left Number of pixels the window should be placed from the left edge of the screen
 * @return {Window} A window-object
 */
var openWindow = function (url, width, height, top, left) {
    var _a, _b, _c;
    if (width === void 0) { width = 480; }
    if (height === void 0) { height = 640; }
    //Variables
    if (!top)
        top = (((_a = (0, exports.safeWindow)()) === null || _a === void 0 ? void 0 : _a.screen.height) / 3) - (height / 2);
    if (!left)
        left = (((_b = (0, exports.safeWindow)()) === null || _b === void 0 ? void 0 : _b.screen.width) / 2) - (width / 2);
    //Open new window
    var newWindow = (_c = (0, exports.safeWindow)()) === null || _c === void 0 ? void 0 : _c.open(url, '_blank', "top=".concat(top, ",left=").concat(left, ",width=").concat(width, ",height=").concat(height));
    if (!newWindow) {
        return Error('Kunne ikke åpne vindu for bank-ID. Tillat popups fra siden');
    }
    return newWindow;
};
exports.openWindow = openWindow;
/**
 * Function for setting and triggering location-hash;
 * @param {string} hash to be set (string without #);
 * @return {void}
 */
var setHash = function (hash) {
    location.hash = '';
    location.hash = hash;
};
exports.setHash = setHash;
/**
 * Makes sure an array-object is returned.
 * @param {any[]} array Array to be checked
 * @return {any[]} Safe array.
 */
function safeArray(array) {
    if (Array.isArray(array))
        return array;
    return [];
}
exports.safeArray = safeArray;
/**
 * Makes sure a value is a string
 * @param {string} value
 * @return {string}
 */
function safeString(value) {
    if (value === void 0) { value = ''; }
    if (typeof value === 'string')
        return value;
    return '';
}
exports.safeString = safeString;
/**
 * Returns items from array depending on page and number of items pr. page.
 * @param {any[]} arr Array of items.
 * @param {number = 1} page What page to return
 * @param {number = 10} itemsPrPage How many items should be fetched pr. page.
 */
function appendPagination(arr, page, itemsPrPage) {
    if (page === void 0) { page = 1; }
    if (itemsPrPage === void 0) { itemsPrPage = 10; }
    var array = safeArray(arr);
    if (page < 1)
        page = 1;
    var numberOfItems = page * itemsPrPage;
    var result = array.slice(0, numberOfItems);
    return {
        result: result,
        pages: Math.ceil(array.length / itemsPrPage),
        items: array.length,
        hasMore: numberOfItems < array.length,
    };
}
exports.appendPagination = appendPagination;
var isWebAdresse = function (url) {
    return safeString(url).substr(0, 4) === 'http';
};
exports.isWebAdresse = isWebAdresse;
var prependSlash = function (url) {
    url = safeString(url);
    return url.substr(0, 1) === '/'
        ? url
        : '/' + url;
};
exports.prependSlash = prependSlash;
//export const isError = (value: any): value is Error => value instanceof Error
function isArray(value) {
    if (!value)
        return false;
    return Array.isArray(value);
}
exports.isArray = isArray;
/**
 * Removes any trailing slashes at the end of a url (or any string).
 * @param {string} url
 * @return {string}
 */
function noTrailingSlash(url) {
    url = safeString(url);
    return url.substr(-1) === '/'
        ? url.substr(0, url.length - 1)
        : url;
}
exports.noTrailingSlash = noTrailingSlash;
/**
 * Removes any trailing slashes at the beginning of a url (or any string).
 * @param {string} url
 * @return {string}
 */
function noPreSlash(url) {
    url = safeString(url);
    return url.substr(0, 1) === '/'
        ? url.substr(1, url.length)
        : url;
}
exports.noPreSlash = noPreSlash;
/**
 * Removes any trailing slashes at the end or/and at the beginning of a string.
 * @param {string} url
 * @return {string}
 */
function noWrappingSlash(url) {
    return noPreSlash(noTrailingSlash(url));
}
exports.noWrappingSlash = noWrappingSlash;
/**
 * Separates an url-string into an array of strings. useful for Next.js-routing.
 *   e.g: '/blog/post/' will return ['blog', 'post'].
 * @param {string} url;
 * @returns {string[]}
 */
var urlToArray = function (url) {
    var _a, _b;
    return (_b = (_a = noWrappingSlash(safeString(url))).split) === null || _b === void 0 ? void 0 : _b.call(_a, '/');
};
exports.urlToArray = urlToArray;
/**
 * Gets last slug from url-string
 * @param {string} url
 * @return {string}
 */
var getSlug = function (url) {
    var urlArray = safeString(noTrailingSlash(url)).split('/');
    return urlArray.reverse()[0];
};
exports.getSlug = getSlug;
/**
 * Function for returning month based on a date.
 * @param {Date | string} rawDate A date as a Date-object or a string.
 * @param {'long' | 'short'} format Month name in long or short format.
 * @returns {string} Name of month.
 */
var getMonth = function (rawDate, format, loc) {
    if (format === void 0) { format = 'short'; }
    var months = loc.general.months[format];
    var date = new Date(rawDate);
    var month = date.getMonth();
    return months[month];
};
exports.getMonth = getMonth;
/**
 * Safe version of Array.prototype.map method
 * @param {any[]} arr Array to be mapped
 * @param {Function} action Function to process each item in array
 * @returns {any[]} Modified array
 */
function map(arr, action) {
    if (arr === void 0) { arr = []; }
    if (action === void 0) { action = function (item) { return item; }; }
    return safeArray(arr).map(function (item, index) {
        return action(item, index);
    });
}
exports.map = map;
/**
 * Safe version of Array.prototype.filter.
 * @param {any[]} arr Array to filter
 * @param {Function} action Function to determine if item should be filtered out or not.
 * @returns {any[]} Filtered array
 */
function filter(arr, action) {
    if (arr === void 0) { arr = []; }
    if (action === void 0) { action = function () { return false; }; }
    return safeArray(arr).filter(function (item) { return action(item); });
}
exports.filter = filter;
/**
 * Safe version of Array.prototype.find.
 * @param {any[]} arr Array to find item in
 * @param {Function} action Function to find item.
 * @returns {any[]} Filtered array
 */
function find(arr, action) {
    if (arr === void 0) { arr = []; }
    if (action === void 0) { action = function () { return false; }; }
    return safeArray(arr).find(function (item) { return action(item); });
}
exports.find = find;
/**
 * Safe version of Array.prototype.forEach method.
 * @param {any[]} arr Array to iterate over
 * @param {Function} action Function to run on each item in array.
 * @returns {void} Executes passed function.
 */
function forEach(arr, action) {
    if (arr === void 0) { arr = []; }
    if (action === void 0) { action = function (item) { return item; }; }
    safeArray(arr).forEach(function (item, index) {
        action(item, index);
    });
}
exports.forEach = forEach;
/**
 * Safe version of String.prototype.split method.
 * @param {string} value String to split.
 * @param {string} param Value to split string on.
 * @returns {string[]} Returns splitted string.
 */
function split(value, param) {
    return safeString(value).split(param);
}
exports.split = split;
/**
 * Compares to objects to see if values in data-object is different fram same values in source-object.
 *  -Missing properties are not compared.
 * @param {genObject} data Object with properties to check
 * @param {genObject} source Object with properties to compare against.
 * @returns {boolean} Returns true if any properties in data don't matches same property in source.
 */
var hasChanges = function (source, data) {
    var hasChanges = false;
    if (!data || !source)
        return hasChanges;
    forEach(Object.keys(data), function (key) {
        if (data[key] !== source[key])
            hasChanges = true;
    });
};
exports.hasChanges = hasChanges;
/**
 * Removes objects from array that has identical values for specified key
 * @param {any[]} array Array of objects.
 * @param {string} key Key to check value of.
 * @returns {any[]} Array with duplicates removed
 */
var removeDuplicateArrayObjects = function (array, key) {
    var newArray = [];
    var existingValues = [];
    forEach(array, function (item) {
        if (!existingValues.includes(item[key])) {
            existingValues.push(item[key]);
            newArray.push(item);
        }
    });
    return newArray;
};
exports.removeDuplicateArrayObjects = removeDuplicateArrayObjects;
/**
 * Converts an object to a string of url-params.
 *  - Only converts values that are strings or numbers.
 * @param {genObject} queryObject
 * @returns {string}
 */
var objToUrlParams = function (queryObject) {
    var queryString = '';
    if (!queryObject)
        return '';
    if (typeof queryObject !== 'object' || isArray(queryObject))
        return '';
    var keys = Object.keys(queryObject);
    forEach(keys, function (key) {
        var operator = queryString ? '&' : '?';
        var value = queryObject[key];
        var type = typeof value;
        if (['string', 'number'].includes(type)) {
            queryString += operator + key + '=' + value;
        }
    });
    return queryString;
};
exports.objToUrlParams = objToUrlParams;
/**
 * Function for shifting items in an array forward or backwards
 * @param {any[]} arr An array of anything
 * @param {number} offset Number of items to offset array with
 * @returns {any[]} Returns an array with exactly as many items in it.
 */
var offsetArray = function (arr, offset) {
    var newArray = [];
    var arrLength = arr.length;
    forEach(arr, function (item, index) {
        if (index === void 0) { index = 0; }
        var newIndex = index + offset;
        if (newIndex < 0)
            newIndex = arrLength + newIndex;
        if (newIndex > arrLength)
            newIndex = newIndex - arrLength;
        newArray[newIndex] = item;
    });
    return newArray.slice(1);
};
exports.offsetArray = offsetArray;
/**
 * Function for checking objects are the equal.
 * @param {genObject} object1 First object to be compared
 * @param {genObject} object2 Second object to be compared
 * @returns {boolean} true if object is the same, false is there is a difference.
 */
var shallowEqualObject = function (object1, object2) {
    var keys1 = Object.keys(object1);
    var keys2 = Object.keys(object2);
    // Check if same length 
    if (keys1.length !== keys2.length) {
        return false;
    }
    // Check if objects has same values
    for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
        var key = keys1_1[_i];
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};
exports.shallowEqualObject = shallowEqualObject;
/**
 * Removes to many new-lines in a string.
 * @param {string} text Text to be escaped
 * @returns {string} Escaped string.
 */
var removeExcessiveNewLines = function (text) {
    var newText = safeString(text).replace(/[\n|\r]{5,}/gm, '\n\n');
    return newText;
};
exports.removeExcessiveNewLines = removeExcessiveNewLines;
/**
 * Remove url-params from an url-string
 * @param {string} url
 * @returns {string}
 */
var removeUrlParams = function (url) {
    var urlArray = safeString(url).split('?');
    return noTrailingSlash(urlArray[0]);
};
exports.removeUrlParams = removeUrlParams;
/**
 * Replaces an item in a array based on a query.
 * @param {any[]} array An array with any content
 * @param {any} updatedItem Item to insert where matching items is found
 * @param {genObject | any} query Query to find items.
 * 	This can be an object, where defined keys will be matched, or any other values that will be checked for equality.
 * @returns {any[]} Returns array with replaced item.
 */
function updateArray(array, updatedItem, query, keepOldData) {
    if (keepOldData === void 0) { keepOldData = false; }
    if ((0, exports.isObject)(query)) {
        var keys_1 = Object.keys(query);
        var updatedArray_1 = map(array, function (item) {
            if (!(0, exports.isObject)(item))
                return item;
            var isMatch = true;
            forEach(keys_1, function (key) {
                if (item[key] !== query[key])
                    isMatch = false;
            });
            return !isMatch
                ? item
                : keepOldData
                    ? __assign(__assign({}, item), updatedItem) : updatedItem;
        });
        return updatedArray_1;
    }
    var updatedArray = map(array, function (item) {
        if (!item || !query)
            return item;
        if (item === query)
            return updatedItem;
    });
    return updatedArray;
}
exports.updateArray = updateArray;
/**
 * Takes a url-path and splits it into an array of slugs
 * @param path url-string to process.
 * @returns String array of slugs
 */
var makePathArray = function (path) {
    var safePath = safeString(path);
    var noSlashUrl = noWrappingSlash(safePath);
    var pathArray = split(noSlashUrl, '/');
    var cleanPathArray = (0, exports.removeEmpty)(pathArray);
    return cleanPathArray;
};
exports.makePathArray = makePathArray;
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
function addOrReplace(data, targetArray, key, replace) {
    if (replace === void 0) { replace = false; }
    var sameArray = [];
    var findSameItem = function (newData, oldItem, key) {
        return find(newData, function (dataItem) {
            var dataItemValue = key ? dataItem[key] : dataItem;
            //Adding uid to value if undefined, to not get true if both values is undefined.
            var itemValue = (key ? oldItem[key] : oldItem) || (0, exports.genUid)(16);
            return dataItemValue === itemValue;
        });
    };
    //Update/replace items that exist in target-array
    forEach(targetArray, function (item) {
        if (!Array.isArray(data))
            data = [data];
        var sameItem = findSameItem(data, item, key);
        if (sameItem)
            sameArray.push(replace ? sameItem : __assign(__assign({}, item), sameItem));
        else
            sameArray.push(item);
    });
    //Add new items to result.
    if (!Array.isArray(data))
        data = [data];
    var newItems = filter(data, function (dataItem) {
        var sameItem = findSameItem(sameArray, dataItem, key);
        return !sameItem;
    });
    return __spreadArray(__spreadArray([], sameArray, true), newItems, true);
}
exports.addOrReplace = addOrReplace;
/**
 * Adds passed prop-class to native component-class. If non exists, empty string is returned instead
 * @param nativeClass
 * @param propClass
 * @returns
 */
var propClass = function (nativeClass, propClass) {
    if (nativeClass === void 0) { nativeClass = ''; }
    if (propClass === void 0) { propClass = ''; }
    return "".concat(nativeClass).concat(nativeClass ? ' ' + propClass : propClass);
};
exports.propClass = propClass;
/**
 * Function for parsing json, but avoiding crashes.
 * @param {string} data Data to parse (should be a string)
 * @returns {object | any} Object from parsed json, or same data as was passed.
 */
var jsonParse = function (data) {
    var result = (0, exports.tryCatch)(function () { return JSON.parse(data); });
    if ((0, exports.isError)(result))
        return data;
    return result;
};
exports.jsonParse = jsonParse;
