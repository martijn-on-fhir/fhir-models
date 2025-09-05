import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class EncounterHospitalization extends BackboneElement {
    admitSource?: CodeableConcept;
    destination?: Reference;
    dietPreference?: CodeableConcept[];
    dischargeDisposition?: CodeableConcept;
    origin?: Reference;
    preAdmissionIdentifier?: Identifier;
    reAdmission?: CodeableConcept;
    specialArrangement?: CodeableConcept[];
    specialCourtesy?: CodeableConcept[];
    constructor(source?: Partial<EncounterHospitalization>);
}
//# sourceMappingURL=EncounterHospitalization.d.ts.map