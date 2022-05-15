/***** IMPORTS *****/
//import {Dispatch, ReactNode} from 'react';


/***** INTERFACES *****/
export interface IHistory {
    match: any,
    location: any,
    history: any,
}

export interface IBaseProps {
    className?: string,
    tabIndex?: number,
    onClick?: any,
    onChange?: any,
    onTouchStart?: Function,
    onTouchEnd?: Function,
    onTouchMove?: Function,
    children?: any, //ReactNode,
    onSubmit?: any,
}


export interface IFetchOptions {
    fields?: Array<string>,
    quantity?: number,
    page?: number,
    start?: number,
    sort?: Array<string> //['createdAt', 'asc'],
    abort?: AbortSignal,
    origin?: string,
    mode?: 'same-origin' | 'no-cors' | 'cors' | 'navigate',
    isSilent?: boolean,
    returnType?: 'json' | 'blob',
    method?: 'post' | 'get' | 'put' | 'delete';
    signal?: AbortSignal, 
    contentType?: string,
    body?: any,
    auth?: string,
    headers?: genObject,
    authOnly?: boolean, //If true, no requests are sent unless jwt is present.
}


export interface IMailOptions {
    type: 'contact' | 'offer'
    toMail?: string,
    subject?: string,
    fromMail?: string,
    replyTo?: string,
    message?: string,
    data?: genObject,
    origin?: string,
}


/***** TYPES *****/

//Generic object-type.
export type genObject = {
    [key: string]: any | string
};

export interface IDangerousHtml {__html: string,}

export type FToggle = (toggle: boolean) => void;
export type FEmpty = () => void;

// export interface FSetLocalState<T> {
//     (value: T): Dispatch<SetStateAction<T>> | void
// }

