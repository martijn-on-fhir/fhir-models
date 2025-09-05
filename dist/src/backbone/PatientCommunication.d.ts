import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class PatientCommunication extends BackboneElement {
    language?: CodeableConcept;
    preferred?: boolean;
    _preferred?: Element;
    constructor(source?: Partial<PatientCommunication>);
}
//# sourceMappingURL=PatientCommunication.d.ts.map