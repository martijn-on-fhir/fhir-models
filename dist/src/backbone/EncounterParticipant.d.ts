import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class EncounterParticipant extends BackboneElement {
    individual?: Reference;
    period?: Period;
    type?: CodeableConcept[];
    constructor(source?: Partial<EncounterParticipant>);
}
//# sourceMappingURL=EncounterParticipant.d.ts.map