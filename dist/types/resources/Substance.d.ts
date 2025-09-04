import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { SubstanceIngredient } from '../backbone/SubstanceIngredient';
import { SubstanceInstance } from '../backbone/SubstanceInstance';
export declare class Substance extends DomainResource {
    readonly resourceType: "Substance";
    category?: CodeableConcept[];
    code?: CodeableConcept;
    description?: string;
    _description?: Element;
    identifier?: Identifier[];
    ingredient?: SubstanceIngredient[];
    instance?: SubstanceInstance[];
    status?: ('active' | 'inactive' | 'entered-in-error');
    _status?: Element;
    constructor(source?: Partial<Substance>);
}
//# sourceMappingURL=Substance.d.ts.map