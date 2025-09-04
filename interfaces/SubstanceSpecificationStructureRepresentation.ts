import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Molecular structural representation.
 */
export interface SubstanceSpecificationStructureRepresentation extends BackboneElement {

  /**
   * An attached file with the structural representation.
   */
  attachment?: Attachment | undefined;
  /**
   * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
   */
  representation?: string | undefined;
  _representation?: Element | undefined;
  /**
   * The type of structure (e.g. Full, Partial, Representative).
   */
  type?: CodeableConcept | undefined;

}