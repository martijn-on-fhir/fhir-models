import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
 */
export interface MessageDefinitionFocus extends BackboneElement {

  /**
   * Multiple focuses addressing different resources may occasionally occur.  E.g. to link or unlink a resource from a particular account or encounter, etc.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  max?: string | undefined;
  _max?: Element | undefined;
  /**
   * Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition.
   */
  min: number;
  /**
   * This should be present for most message definitions.  However, if the message focus is only a single resource and there is no need to include referenced resources or otherwise enforce the presence of particular elements, it can be omitted.
   */
  profile?: string | undefined;
  _profile?: Element | undefined;

}