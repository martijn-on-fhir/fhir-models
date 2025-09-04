import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Formalin } from './Formalin';
import { Reference } from './Reference';

/**
 * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export interface SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement {

  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: CodeableConcept | undefined;
  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: Reference | undefined;

}