import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A document definition.
 */
export interface CapabilityStatementDocument extends BackboneElement {

  /**
   * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * Mode of this document declaration - whether an application is a producer or consumer.
   */
  mode: ('producer'|'consumer');
  _mode?: Element | undefined;
  /**
   * The profile is actually on the Bundle.
   */
  profile: string;
  _profile?: Element | undefined;

}