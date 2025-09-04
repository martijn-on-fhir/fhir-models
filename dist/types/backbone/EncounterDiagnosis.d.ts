import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
export declare class EncounterDiagnosis extends BackboneElement {
    condition?: Reference;
    rank?: number;
    use?: CodeableConcept;
    constructor(source?: Partial<EncounterDiagnosis>);
}
//# sourceMappingURL=EncounterDiagnosis.d.ts.map