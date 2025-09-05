import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Population } from '../backbone/Population';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductUndesirableEffect extends DomainResource {
    readonly resourceType: "MedicinalProductUndesirableEffect";
    classification?: CodeableConcept;
    frequencyOfOccurrence?: CodeableConcept;
    population?: Population[];
    subject?: Reference[];
    symptomConditionEffect?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductUndesirableEffect>);
}
//# sourceMappingURL=MedicinalProductUndesirableEffect.d.ts.map