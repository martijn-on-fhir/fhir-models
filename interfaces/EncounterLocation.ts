import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export interface EncounterLocation extends BackboneElement {

  /**
   * The location where the encounter takes place.
   */
  location: Reference;
  /**
   * Time period during which the patient was present at the location.
   */
  period?: Period | undefined;
  /**
   * This information is de-normalized from the Location resource to support the easier understanding of the encounter resource and processing in messaging or query.
   * There may be many levels in the hierachy, and this may only pic specific levels that are required for a specific usage scenario.
   */
  physicalType?: CodeableConcept | undefined;
  /**
   * When the patient is no longer active at a location, then the period end date is entered, and the status may be changed to completed.
   */
  status?: ('planned'|'active'|'reserved'|'completed') | undefined;
  _status?: Element | undefined;

}