import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * 4.9.13.6.1 Author type (Conditional).
 */
export interface SubstanceSourceMaterialOrganismAuthor extends BackboneElement {

  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank).
   */
  authorDescription?: string | undefined;
  _authorDescription?: Element | undefined;
  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name.
   */
  authorType?: CodeableConcept | undefined;

}