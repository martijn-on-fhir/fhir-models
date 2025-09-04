import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class ServiceRequest extends DomainResource {
    readonly resourceType: "ServiceRequest";
    asNeededBoolean?: boolean;
    _asNeededBoolean?: Element;
    asNeededCodeableConcept?: CodeableConcept;
    authoredOn?: string;
    _authoredOn?: Element;
    basedOn?: Reference[];
    bodySite?: CodeableConcept[];
    category?: CodeableConcept[];
    code?: CodeableConcept;
    doNotPerform?: boolean;
    _doNotPerform?: Element;
    encounter?: Reference;
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    _instantiatesCanonical?: Element[];
    instantiatesUri?: string[];
    _instantiatesUri?: Element[];
    insurance?: Reference[];
    intent?: ('proposal' | 'plan' | 'directive' | 'order' | 'original-order' | 'reflex-order' | 'filler-order' | 'instance-order' | 'option');
    _intent?: Element;
    locationCode?: CodeableConcept[];
    locationReference?: Reference[];
    note?: Annotation[];
    occurrenceDateTime?: string;
    _occurrenceDateTime?: Element;
    constructor(source?: Partial<ServiceRequest>);
}
//# sourceMappingURL=ServiceRequest.d.ts.map