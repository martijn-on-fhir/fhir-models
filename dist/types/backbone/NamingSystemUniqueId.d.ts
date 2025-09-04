import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
export declare class NamingSystemUniqueId extends BackboneElement {
    comment?: string;
    _comment?: Element;
    period?: Period;
    preferred?: boolean;
    _preferred?: Element;
    type?: ('oid' | 'uuid' | 'uri' | 'other');
    _type?: Element;
    value?: string;
    _value?: Element;
    constructor(source?: Partial<NamingSystemUniqueId>);
}
//# sourceMappingURL=NamingSystemUniqueId.d.ts.map