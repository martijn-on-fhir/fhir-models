import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Element } from './Element';
import { Range } from './Range';

/**
 * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
 */
export interface SpecimenDefinitionTypeTestedHandling extends BackboneElement {

  /**
   * Additional textual instructions for the preservation or transport of the specimen. For instance, 'Protect from light exposure'.
   */
  instruction?: string | undefined;
  _instruction?: Element | undefined;
  /**
   * The maximum time interval of preservation of the specimen with these conditions.
   */
  maxDuration?: Duration | undefined;
  /**
   * It qualifies the interval of temperature, which characterizes an occurrence of handling. Conditions that are not related to temperature may be handled in the instruction element.
   */
  temperatureQualifier?: CodeableConcept | undefined;
  /**
   * The temperature interval for this set of handling instructions.
   */
  temperatureRange?: Range | undefined;

}