import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceProteinSubunit } from '../backbone/SubstanceProteinSubunit';
export declare class SubstanceProtein extends DomainResource {
    readonly resourceType: "SubstanceProtein";
    disulfideLinkage?: string[];
    _disulfideLinkage?: Element[];
    numberOfSubunits?: number;
    sequenceType?: CodeableConcept;
    subunit?: SubstanceProteinSubunit[];
    constructor(source?: Partial<SubstanceProtein>);
}
//# sourceMappingURL=SubstanceProtein.d.ts.map