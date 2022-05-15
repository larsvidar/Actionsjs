/***** IMPORTS *****/
/***** INTERFACES *****/
export interface IHistory {
    match: any;
    location: any;
    history: any;
}
export interface IBaseProps {
    className?: string;
    tabIndex?: number;
    onClick?: any;
    onChange?: any;
    onTouchStart?: Function;
    onTouchEnd?: Function;
    onTouchMove?: Function;
    children?: any;
    onSubmit?: any;
}
export interface IFetchOptions {
    fields?: Array<string>;
    quantity?: number;
    page?: number;
    start?: number;
    sort?: Array<string>;
    abort?: AbortSignal;
    origin?: string;
    mode?: 'same-origin' | 'no-cors' | 'cors' | 'navigate';
    isSilent?: boolean;
    returnType?: 'json' | 'blob';
    method?: 'post' | 'get' | 'put' | 'delete';
    signal?: AbortSignal;
    contentType?: string;
    body?: any;
    auth?: string;
    headers?: genObject;
    authOnly?: boolean;
}
export interface IMailOptions {
    type: 'contact' | 'offer';
    toMail?: string;
    subject?: string;
    fromMail?: string;
    replyTo?: string;
    message?: string;
    data?: genObject;
    origin?: string;
}
/***** TYPES *****/
export declare type genObject = {
    [key: string]: any | string;
};
export interface IDangerousHtml {
    __html: string;
}
export declare type FToggle = (toggle: boolean) => void;
export declare type FEmpty = () => void;
