import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { TerminologyCapabilitiesCodeSystemVersion } from './TerminologyCapabilitiesCodeSystemVersion';

/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
export interface TerminologyCapabilitiesCodeSystem extends BackboneElement {

  /**
   * True if subsumption is supported for this version of the code system.
   */
  subsumption?: boolean | undefined;
  _subsumption?: Element | undefined;
  /**
   * URI for the Code System.
   */
  uri?: string | undefined;
  _uri?: Element | undefined;
  /**
   * Language translations might not be available for all codes.
   */
  version?: TerminologyCapabilitiesCodeSystemVersion[] | undefined;

}