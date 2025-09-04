import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CarePlanActivity } from '../backbone/CarePlanActivity';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
export declare class CarePlan extends DomainResource {
    readonly resourceType: "CarePlan";
    activity?: CarePlanActivity[];
    addresses?: Reference[];
    author?: Reference;
    basedOn?: Reference[];
    careTeam?: Reference[];
    category?: CodeableConcept[];
    contributor?: Reference[];
    created?: string;
    _created?: Element;
    description?: string;
    _description?: Element;
    encounter?: Reference;
    goal?: Reference[];
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    intent?: ('proposal' | 'plan' | 'order' | 'option');
    _intent?: Element;
    note?: Annotation[];
    partOf?: Reference[];
    period?: Period;
    replaces?: Reference[];
    status?: ('draft' | 'active' | 'on-hold' | 'revoked' | 'completed' | 'entered-in-error' | 'unknown');
    constructor(source?: Partial<CarePlan>);
}
//# sourceMappingURL=CarePlan.d.ts.map