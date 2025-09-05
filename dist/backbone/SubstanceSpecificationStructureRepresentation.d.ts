import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
export declare class SubstanceSpecificationStructureRepresentation extends BackboneElement {
    attachment?: Attachment;
    representation?: string;
    _representation?: Element;
    type?: CodeableConcept;
    constructor(source?: Partial<SubstanceSpecificationStructureRepresentation>);
}
//# sourceMappingURL=SubstanceSpecificationStructureRepresentation.d.ts.map