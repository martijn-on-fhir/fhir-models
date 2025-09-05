import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { TerminologyCapabilitiesCodeSystemVersionFilter } from './TerminologyCapabilitiesCodeSystemVersionFilter';
export declare class TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {
    code?: string;
    _code?: Element;
    compositional?: boolean;
    _compositional?: Element;
    filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];
    isDefault?: boolean;
    _isDefault?: Element;
    language?: string[];
    _language?: Element[];
    property?: string[];
    _property?: Element[];
    constructor(source?: Partial<TerminologyCapabilitiesCodeSystemVersion>);
}
//# sourceMappingURL=TerminologyCapabilitiesCodeSystemVersion.d.ts.map