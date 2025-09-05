import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Range } from '../elements/Range';
export declare class ObservationDefinitionQualifiedInterval extends BackboneElement {
    age?: Range;
    appliesTo?: CodeableConcept[];
    category?: ('reference' | 'critical' | 'absolute');
    _category?: Element;
    condition?: string;
    _condition?: Element;
    context?: CodeableConcept;
    gender?: ('male' | 'female' | 'other' | 'unknown');
    _gender?: Element;
    gestationalAge?: Range;
    range?: Range;
    constructor(source?: Partial<ObservationDefinitionQualifiedInterval>);
}
//# sourceMappingURL=ObservationDefinitionQualifiedInterval.d.ts.map