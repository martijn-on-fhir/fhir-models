import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { SubstanceReferenceInformationClassification } from './SubstanceReferenceInformationClassification';
import { SubstanceReferenceInformationGene } from './SubstanceReferenceInformationGene';
import { SubstanceReferenceInformationGeneElement } from './SubstanceReferenceInformationGeneElement';
import { SubstanceReferenceInformationTarget } from './SubstanceReferenceInformationTarget';

/**
 * Todo.
 */
export interface SubstanceReferenceInformation extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SubstanceReferenceInformation';
  /**
   * Todo.
   */
  classification?: SubstanceReferenceInformationClassification[] | undefined;
  /**
   * Todo.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Todo.
   */
  gene?: SubstanceReferenceInformationGene[] | undefined;
  /**
   * Todo.
   */
  geneElement?: SubstanceReferenceInformationGeneElement[] | undefined;
  /**
   * Todo.
   */
  target?: SubstanceReferenceInformationTarget[] | undefined;

}