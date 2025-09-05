import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class AllergyIntoleranceReaction extends BackboneElement {
    description?: string;
    _description?: Element;
    exposureRoute?: CodeableConcept;
    manifestation?: CodeableConcept[];
    note?: Annotation[];
    onset?: string;
    _onset?: Element;
    severity?: ('mild' | 'moderate' | 'severe');
    _severity?: Element;
    substance?: CodeableConcept;
    constructor(source?: Partial<AllergyIntoleranceReaction>);
}
//# sourceMappingURL=AllergyIntoleranceReaction.d.ts.map