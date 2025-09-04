import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DataRequirement } from '../elements/DataRequirement';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class GuidanceResponse extends DomainResource {
    readonly resourceType: "GuidanceResponse";
    dataRequirement?: DataRequirement[];
    encounter?: Reference;
    evaluationMessage?: Reference[];
    identifier?: Identifier[];
    moduleUri?: string;
    _moduleUri?: Element;
    moduleCanonical?: string;
    _moduleCanonical?: Element;
    moduleCodeableConcept?: CodeableConcept;
    note?: Annotation[];
    occurrenceDateTime?: string;
    _occurrenceDateTime?: Element;
    outputParameters?: Reference;
    performer?: Reference;
    reasonCode?: CodeableConcept[];
    reasonReference?: Reference[];
    requestIdentifier?: Identifier;
    result?: Reference;
    status?: ('success' | 'data-requested' | 'data-required' | 'in-progress' | 'failure' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    constructor(source?: Partial<GuidanceResponse>);
}
//# sourceMappingURL=GuidanceResponse.d.ts.map