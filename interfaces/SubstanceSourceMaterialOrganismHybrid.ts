import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
 */
export interface SubstanceSourceMaterialOrganismHybrid extends BackboneElement {

  /**
   * The hybrid type of an organism shall be specified.
   */
  hybridType?: CodeableConcept | undefined;
  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismId?: string | undefined;
  _maternalOrganismId?: Element | undefined;
  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal.
   */
  maternalOrganismName?: string | undefined;
  _maternalOrganismName?: Element | undefined;
  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary.
   */
  paternalOrganismId?: string | undefined;
  _paternalOrganismId?: Element | undefined;
  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  paternalOrganismName?: string | undefined;
  _paternalOrganismName?: Element | undefined;

}