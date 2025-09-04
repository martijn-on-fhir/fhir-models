import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
export interface TerminologyCapabilitiesSoftware extends BackboneElement {

  /**
   * Name the software is known by.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * If possible, a version should be specified, as statements are likely to be different for different versions of software.
   */
  version?: string | undefined;
  _version?: Element | undefined;

}