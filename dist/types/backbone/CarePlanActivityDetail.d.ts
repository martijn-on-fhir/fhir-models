import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import { Timing } from './Timing';
export declare class CarePlanActivityDetail extends BackboneElement {
    code?: CodeableConcept;
    dailyAmount?: Quantity;
    description?: string;
    _description?: Element;
    doNotPerform?: boolean;
    _doNotPerform?: Element;
    goal?: Reference[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    kind?: ('Appointment' | 'CommunicationRequest' | 'DeviceRequest' | 'MedicationRequest' | 'NutritionOrder' | 'Task' | 'ServiceRequest' | 'VisionPrescription');
    _kind?: Element;
    location?: Reference;
    performer?: Reference[];
    productCodeableConcept?: CodeableConcept;
    productReference?: Reference;
    quantity?: Quantity;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    scheduledTiming?: Timing;
    scheduledPeriod?: Period;
    scheduledString?: string;
    _scheduledString?: Element;
    status?: ('not-started' | 'scheduled' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled' | 'stopped' | 'unknown' | 'entered-in-error');
    _status?: Element;
    statusReason?: CodeableConcept;
    constructor(source?: Partial<CarePlanActivityDetail>);
}
//# sourceMappingURL=CarePlanActivityDetail.d.ts.map