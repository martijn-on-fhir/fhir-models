import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceNucleicAcidSubunit } from '../backbone/SubstanceNucleicAcidSubunit';
export declare class SubstanceNucleicAcid extends DomainResource {
    readonly resourceType: "SubstanceNucleicAcid";
    areaOfHybridisation?: string;
    _areaOfHybridisation?: Element;
    numberOfSubunits?: number;
    oligoNucleotideType?: CodeableConcept;
    sequenceType?: CodeableConcept;
    subunit?: SubstanceNucleicAcidSubunit[];
    constructor(source?: Partial<SubstanceNucleicAcid>);
}
//# sourceMappingURL=SubstanceNucleicAcid.d.ts.map