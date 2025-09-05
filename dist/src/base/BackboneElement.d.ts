import 'reflect-metadata';
import { Element } from './Element';
export declare class BackboneElement extends Element {
    modifierExtension?: Extension[];
    constructor(source?: Partial<BackboneElement>);
}
declare class Extension extends Element {
    url: string;
    _url?: Element;
    valueString?: string;
    _valueString?: Element;
    constructor(source?: Partial<Extension>);
}
export {};
//# sourceMappingURL=BackboneElement.d.ts.map