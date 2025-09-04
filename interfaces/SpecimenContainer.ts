import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Formalin } from './Formalin';
import { Identifier } from './Identifier';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export interface SpecimenContainer extends BackboneElement {

  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: CodeableConcept | undefined;
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: Reference | undefined;
  /**
   * The capacity (volume or other measure) the container may contain.
   */
  capacity?: Quantity | undefined;
  /**
   * Textual description of the container.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
   */
  specimenQuantity?: Quantity | undefined;
  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  type?: CodeableConcept | undefined;

}