import 'reflect-metadata';
import { Element } from '../base/Element';
import { Coding } from './Coding';
export declare class Meta extends Element {
    lastUpdated?: string;
    _lastUpdated?: Element;
    profile?: string[];
    _profile?: Element[];
    security?: Coding[];
    source?: string;
    _source?: Element;
    tag?: Coding[];
    versionId?: string;
    _versionId?: Element;
    constructor(source?: Partial<Meta>);
}
//# sourceMappingURL=Meta.d.ts.map