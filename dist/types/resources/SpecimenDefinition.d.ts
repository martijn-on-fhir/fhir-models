import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { SpecimenDefinitionTypeTested } from '../backbone/SpecimenDefinitionTypeTested';
export declare class SpecimenDefinition extends DomainResource {
    readonly resourceType: "SpecimenDefinition";
    collection?: CodeableConcept[];
    identifier?: Identifier;
    patientPreparation?: CodeableConcept[];
    timeAspect?: string;
    _timeAspect?: Element;
    typeCollected?: CodeableConcept;
    typeTested?: SpecimenDefinitionTypeTested[];
    constructor(source?: Partial<SpecimenDefinition>);
}
//# sourceMappingURL=SpecimenDefinition.d.ts.map