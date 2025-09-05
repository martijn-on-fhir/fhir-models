import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductContraindicationOtherTherapy } from '../backbone/MedicinalProductContraindicationOtherTherapy';
import { Population } from '../backbone/Population';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductContraindication extends DomainResource {
    readonly resourceType: "MedicinalProductContraindication";
    comorbidity?: CodeableConcept[];
    disease?: CodeableConcept;
    diseaseStatus?: CodeableConcept;
    otherTherapy?: MedicinalProductContraindicationOtherTherapy[];
    population?: Population[];
    subject?: Reference[];
    therapeuticIndication?: Reference[];
    constructor(source?: Partial<MedicinalProductContraindication>);
}
//# sourceMappingURL=MedicinalProductContraindication.d.ts.map