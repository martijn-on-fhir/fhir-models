import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIndicationOtherTherapy } from '../backbone/MedicinalProductIndicationOtherTherapy';
import { Population } from '../backbone/Population';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductIndication extends DomainResource {
    readonly resourceType: "MedicinalProductIndication";
    comorbidity?: CodeableConcept[];
    diseaseStatus?: CodeableConcept;
    diseaseSymptomProcedure?: CodeableConcept;
    duration?: Quantity;
    intendedEffect?: CodeableConcept;
    otherTherapy?: MedicinalProductIndicationOtherTherapy[];
    population?: Population[];
    subject?: Reference[];
    undesirableEffect?: Reference[];
    constructor(source?: Partial<MedicinalProductIndication>);
}
//# sourceMappingURL=MedicinalProductIndication.d.ts.map