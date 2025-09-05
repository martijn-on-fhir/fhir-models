import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { ProvenanceAgent } from '../backbone/ProvenanceAgent';
import { ProvenanceEntity } from '../backbone/ProvenanceEntity';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';
export declare class Provenance extends DomainResource {
    readonly resourceType: "Provenance";
    activity?: CodeableConcept;
    agent?: ProvenanceAgent[];
    entity?: ProvenanceEntity[];
    location?: Reference;
    occurredPeriod?: Period;
    occurredDateTime?: string;
    _occurredDateTime?: Element;
    policy?: string[];
    _policy?: Element[];
    reason?: CodeableConcept[];
    recorded?: string;
    _recorded?: Element;
    signature?: Signature[];
    target?: Reference[];
    constructor(source?: Partial<Provenance>);
}
//# sourceMappingURL=Provenance.d.ts.map