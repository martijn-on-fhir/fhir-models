import 'reflect-metadata';
import { Element } from './Element';
export declare abstract class Resource {
    abstract readonly resourceType: string;
    id?: string;
    _id?: Element;
    implicitRules?: string;
    _implicitRules?: Element;
    language?: string;
    _language?: Element;
    meta?: Meta;
    constructor(source?: Partial<Resource>);
}
declare class Meta extends Element {
    lastUpdated?: string;
    _lastUpdated?: Element;
    profile?: string[];
    _profile?: Element[];
    security?: any[];
    tag?: any[];
    source?: string;
    _source?: Element;
    versionId?: string;
    _versionId?: Element;
    constructor(source?: Partial<Meta>);
}
export {};
//# sourceMappingURL=Resource.d.ts.map