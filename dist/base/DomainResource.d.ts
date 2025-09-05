import 'reflect-metadata';
import { Resource } from './Resource';
import { Element } from './Element';
export declare abstract class DomainResource extends Resource {
    contained?: any[];
    extension?: Extension[];
    modifierExtension?: Extension[];
    text?: Narrative;
    constructor(source?: Partial<DomainResource>);
}
declare class Extension extends Element {
    url: string;
    _url?: Element;
    valueString?: string;
    _valueString?: Element;
    constructor(source?: Partial<Extension>);
}
declare class Narrative extends Element {
    status: 'generated' | 'extensions' | 'additional' | 'empty';
    _status?: Element;
    div: string;
    _div?: Element;
    constructor(source?: Partial<Narrative>);
}
export {};
//# sourceMappingURL=DomainResource.d.ts.map