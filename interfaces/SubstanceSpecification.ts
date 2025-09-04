import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';
import { SubstanceSpecificationCode } from './SubstanceSpecificationCode';
import { SubstanceSpecificationMoiety } from './SubstanceSpecificationMoiety';
import { SubstanceSpecificationName } from './SubstanceSpecificationName';
import { SubstanceSpecificationProperty } from './SubstanceSpecificationProperty';
import { SubstanceSpecificationRelationship } from './SubstanceSpecificationRelationship';
import { SubstanceSpecificationStructure } from './SubstanceSpecificationStructure';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export interface SubstanceSpecification extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SubstanceSpecification';
  /**
   * Codes associated with the substance.
   */
  code?: SubstanceSpecificationCode[] | undefined;
  /**
   * Textual comment about this record of a substance.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Textual description of the substance.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * If the substance applies to only human or veterinary use.
   */
  domain?: CodeableConcept | undefined;
  /**
   * Identifier by which this substance is known.
   */
  identifier?: Identifier | undefined;
  /**
   * Moiety, for structural modifications.
   */
  moiety?: SubstanceSpecificationMoiety[] | undefined;
  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[] | undefined;
  /**
   * Names applicable to this substance.
   */
  name?: SubstanceSpecificationName[] | undefined;
  /**
   * Data items specific to nucleic acids.
   */
  nucleicAcid?: Reference | undefined;
  /**
   * Data items specific to polymers.
   */
  polymer?: Reference | undefined;
  /**
   * General specifications for this substance, including how it is related to other substances.
   */
  property?: SubstanceSpecificationProperty[] | undefined;
  /**
   * Data items specific to proteins.
   */
  protein?: Reference | undefined;
  /**
   * General information detailing this substance.
   */
  referenceInformation?: Reference | undefined;
  /**
   * A link between this substance and another, with details of the relationship.
   */
  relationship?: SubstanceSpecificationRelationship[] | undefined;
  /**
   * Supporting literature.
   */
  source?: Reference[] | undefined;
  /**
   * Material or taxonomic/anatomical source for the substance.
   */
  sourceMaterial?: Reference | undefined;
  /**
   * Status of substance within the catalogue e.g. approved.
   */
  status?: CodeableConcept | undefined;
  /**
   * Structural information.
   */
  structure?: SubstanceSpecificationStructure | undefined;
  /**
   * High level categorization, e.g. polymer or nucleic acid.
   */
  type?: CodeableConcept | undefined;

}