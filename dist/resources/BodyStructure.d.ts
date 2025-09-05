import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
export declare class BodyStructure extends DomainResource {
    readonly resourceType: "BodyStructure";
    active?: boolean;
    _active?: Element;
    description?: string;
    _description?: Element;
    identifier?: Identifier[];
    image?: Attachment[];
    location?: CodeableConcept;
    locationQualifier?: CodeableConcept[];
    morphology?: CodeableConcept;
    patient?: Reference;
    constructor(source?: Partial<BodyStructure>);
}
//# sourceMappingURL=BodyStructure.d.ts.map