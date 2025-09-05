import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class EncounterLocation extends BackboneElement {
    location?: Reference;
    period?: Period;
    physicalType?: CodeableConcept;
    status?: ('planned' | 'active' | 'reserved' | 'completed');
    _status?: Element;
    constructor(source?: Partial<EncounterLocation>);
}
//# sourceMappingURL=EncounterLocation.d.ts.map