import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Circumstance of the asset.
 */
export interface ContractTermAssetContext extends BackboneElement {

  /**
   * Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository),  location held, e.g., building,  jurisdiction.
   */
  reference?: Reference | undefined;
  /**
   * Context description.
   */
  text?: string | undefined;
  _text?: Element | undefined;

}