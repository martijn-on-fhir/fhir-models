import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductInteractionInteractant } from '../backbone/MedicinalProductInteractionInteractant';
import { Reference } from '../elements/Reference';
export declare class MedicinalProductInteraction extends DomainResource {
    readonly resourceType: "MedicinalProductInteraction";
    description?: string;
    _description?: Element;
    effect?: CodeableConcept;
    incidence?: CodeableConcept;
    interactant?: MedicinalProductInteractionInteractant[];
    management?: CodeableConcept;
    subject?: Reference[];
    type?: CodeableConcept;
    constructor(source?: Partial<MedicinalProductInteraction>);
}
//# sourceMappingURL=MedicinalProductInteraction.d.ts.map