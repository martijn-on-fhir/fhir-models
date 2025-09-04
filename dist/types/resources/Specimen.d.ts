import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { SpecimenCollection } from '../backbone/SpecimenCollection';
import { SpecimenContainer } from '../backbone/SpecimenContainer';
import { SpecimenProcessing } from '../backbone/SpecimenProcessing';
export declare class Specimen extends DomainResource {
    readonly resourceType: "Specimen";
    accessionIdentifier?: Identifier;
    collection?: SpecimenCollection;
    condition?: CodeableConcept[];
    container?: SpecimenContainer[];
    identifier?: Identifier[];
    note?: Annotation[];
    parent?: Reference[];
    processing?: SpecimenProcessing[];
    receivedTime?: string;
    _receivedTime?: Element;
    request?: Reference[];
    status?: ('available' | 'unavailable' | 'unsatisfactory' | 'entered-in-error');
    _status?: Element;
    subject?: Reference;
    type?: CodeableConcept;
    constructor(source?: Partial<Specimen>);
}
//# sourceMappingURL=Specimen.d.ts.map