import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { SubstanceReferenceInformationClassification } from '../backbone/SubstanceReferenceInformationClassification';
import { SubstanceReferenceInformationGene } from '../backbone/SubstanceReferenceInformationGene';
import { SubstanceReferenceInformationGeneElement } from '../backbone/SubstanceReferenceInformationGeneElement';
import { SubstanceReferenceInformationTarget } from '../backbone/SubstanceReferenceInformationTarget';
export declare class SubstanceReferenceInformation extends DomainResource {
    readonly resourceType: "SubstanceReferenceInformation";
    classification?: SubstanceReferenceInformationClassification[];
    comment?: string;
    _comment?: Element;
    gene?: SubstanceReferenceInformationGene[];
    geneElement?: SubstanceReferenceInformationGeneElement[];
    target?: SubstanceReferenceInformationTarget[];
    constructor(source?: Partial<SubstanceReferenceInformation>);
}
//# sourceMappingURL=SubstanceReferenceInformation.d.ts.map