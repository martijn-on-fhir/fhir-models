import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { SubstanceSourceMaterialFractionDescription } from '../backbone/SubstanceSourceMaterialFractionDescription';
import { SubstanceSourceMaterialOrganism } from '../backbone/SubstanceSourceMaterialOrganism';
import { SubstanceSourceMaterialPartDescription } from '../backbone/SubstanceSourceMaterialPartDescription';
export declare class SubstanceSourceMaterial extends DomainResource {
    readonly resourceType: "SubstanceSourceMaterial";
    countryOfOrigin?: CodeableConcept[];
    developmentStage?: CodeableConcept;
    fractionDescription?: SubstanceSourceMaterialFractionDescription[];
    geographicalLocation?: string[];
    _geographicalLocation?: Element[];
    organism?: SubstanceSourceMaterialOrganism;
    organismId?: Identifier;
    organismName?: string;
    _organismName?: Element;
    parentSubstanceId?: Identifier[];
    parentSubstanceName?: string[];
    _parentSubstanceName?: Element[];
    partDescription?: SubstanceSourceMaterialPartDescription[];
    sourceMaterialClass?: CodeableConcept;
    sourceMaterialState?: CodeableConcept;
    sourceMaterialType?: CodeableConcept;
    constructor(source?: Partial<SubstanceSourceMaterial>);
}
//# sourceMappingURL=SubstanceSourceMaterial.d.ts.map