import 'reflect-metadata';
export declare class Element {
    id?: string;
    _id?: Element;
    extension?: Extension[];
    constructor(source?: Partial<Element>);
}
declare class Extension extends Element {
    url: string;
    _url?: Element;
    valueString?: string;
    _valueString?: Element;
    constructor(source?: Partial<Extension>);
}
export {};
//# sourceMappingURL=Element.d.ts.map