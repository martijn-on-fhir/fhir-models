import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CareTeamParticipant extends BackboneElement {
    member?: Reference;
    onBehalfOf?: Reference;
    period?: Period;
    role?: CodeableConcept[];
    constructor(source?: Partial<CareTeamParticipant>);
}
//# sourceMappingURL=CareTeamParticipant.d.ts.map