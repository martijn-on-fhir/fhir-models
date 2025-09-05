import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { VisionPrescriptionLensSpecification } from '../backbone/VisionPrescriptionLensSpecification';
export declare class VisionPrescription extends DomainResource {
    readonly resourceType: "VisionPrescription";
    created?: string;
    _created?: Element;
    dateWritten?: string;
    _dateWritten?: Element;
    encounter?: Reference;
    identifier?: Identifier[];
    lensSpecification?: VisionPrescriptionLensSpecification[];
    patient?: Reference;
    prescriber?: Reference;
    status?: ('active' | 'cancelled' | 'draft' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<VisionPrescription>);
}
//# sourceMappingURL=VisionPrescription.d.ts.map