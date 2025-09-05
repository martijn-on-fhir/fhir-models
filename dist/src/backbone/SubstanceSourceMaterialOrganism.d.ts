import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceSourceMaterialOrganismAuthor } from './SubstanceSourceMaterialOrganismAuthor';
import { SubstanceSourceMaterialOrganismHybrid } from './SubstanceSourceMaterialOrganismHybrid';
import { SubstanceSourceMaterialOrganismOrganismGeneral } from './SubstanceSourceMaterialOrganismOrganismGeneral';
export declare class SubstanceSourceMaterialOrganism extends BackboneElement {
    author?: SubstanceSourceMaterialOrganismAuthor[];
    family?: CodeableConcept;
    genus?: CodeableConcept;
    hybrid?: SubstanceSourceMaterialOrganismHybrid;
    intraspecificDescription?: string;
    _intraspecificDescription?: Element;
    intraspecificType?: CodeableConcept;
    organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;
    species?: CodeableConcept;
    constructor(source?: Partial<SubstanceSourceMaterialOrganism>);
}
//# sourceMappingURL=SubstanceSourceMaterialOrganism.d.ts.map