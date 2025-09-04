import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DosageDoseAndRate } from './DosageDoseAndRate';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';
import { Timing } from './Timing';
export declare class Dosage extends BackboneElement {
    additionalInstruction?: CodeableConcept[];
    asNeededBoolean?: boolean;
    _asNeededBoolean?: Element;
    asNeededCodeableConcept?: CodeableConcept;
    doseAndRate?: DosageDoseAndRate[];
    maxDosePerAdministration?: Quantity;
    maxDosePerLifetime?: Quantity;
    maxDosePerPeriod?: Ratio;
    method?: CodeableConcept;
    patientInstruction?: string;
    _patientInstruction?: Element;
    route?: CodeableConcept;
    sequence?: number;
    site?: CodeableConcept;
    text?: string;
    _text?: Element;
    timing?: Timing;
    constructor(source?: Partial<Dosage>);
}
//# sourceMappingURL=Dosage.d.ts.map