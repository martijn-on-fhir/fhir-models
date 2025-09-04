import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';
import { SubstanceSpecificationNameOfficial } from './SubstanceSpecificationNameOfficial';

/**
 * Names applicable to this substance.
 */
export interface SubstanceSpecificationName extends BackboneElement {

  /**
   * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
   */
  domain?: CodeableConcept[] | undefined;
  /**
   * The jurisdiction where this name applies.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * Language of the name.
   */
  language?: CodeableConcept[] | undefined;
  /**
   * The actual name.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Details of the official nature of this name.
   */
  official?: SubstanceSpecificationNameOfficial[] | undefined;
  /**
   * If this is the preferred name for this substance.
   */
  preferred?: boolean | undefined;
  _preferred?: Element | undefined;
  /**
   * Supporting literature.
   */
  source?: Reference[] | undefined;
  /**
   * The status of the name.
   */
  status?: CodeableConcept | undefined;
  /**
   * A synonym of this name.
   */
  synonym?: SubstanceSpecificationName[] | undefined;
  /**
   * A translation for this name.
   */
  translation?: SubstanceSpecificationName[] | undefined;
  /**
   * Name type.
   */
  type?: CodeableConcept | undefined;

}