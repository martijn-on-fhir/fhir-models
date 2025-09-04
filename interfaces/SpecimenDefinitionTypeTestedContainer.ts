import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Formalin } from './Formalin';
import { Quantity } from './Quantity';
import { SpecimenDefinitionTypeTestedContainerAdditive } from './SpecimenDefinitionTypeTestedContainerAdditive';

/**
 * The specimen's container.
 */
export interface SpecimenDefinitionTypeTestedContainer extends BackboneElement {

  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[] | undefined;
  /**
   * Color of container cap.
   */
  cap?: CodeableConcept | undefined;
  /**
   * The capacity (volume or other measure) of this kind of container.
   */
  capacity?: Quantity | undefined;
  /**
   * The textual description of the kind of container.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The type of material of the container.
   */
  material?: CodeableConcept | undefined;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeQuantity?: Quantity | undefined;
  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeString?: string | undefined;
  _minimumVolumeString?: Element | undefined;
  /**
   * Special processing that should be applied to the container for this kind of specimen.
   */
  preparation?: string | undefined;
  _preparation?: Element | undefined;
  /**
   * The type of container used to contain this kind of specimen.
   */
  type?: CodeableConcept | undefined;

}