import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class VerificationResultPrimarySource extends BackboneElement {
    canPushUpdates?: CodeableConcept;
    communicationMethod?: CodeableConcept[];
    pushTypeAvailable?: CodeableConcept[];
    type?: CodeableConcept[];
    validationDate?: string;
    _validationDate?: Element;
    validationStatus?: CodeableConcept;
    who?: Reference;
    constructor(source?: Partial<VerificationResultPrimarySource>);
}
//# sourceMappingURL=VerificationResultPrimarySource.d.ts.map