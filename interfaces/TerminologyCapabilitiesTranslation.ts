import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
export interface TerminologyCapabilitiesTranslation extends BackboneElement {

  /**
   * Whether the client must identify the map.
   */
  needsMap: boolean;
  _needsMap?: Element | undefined;

}