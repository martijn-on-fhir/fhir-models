import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * There is no assumption that linked patient records have mutual links.
 */
export interface PatientLink extends BackboneElement {

  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the same individual.
   */
  other: Reference;
  /**
   * The type of link between this patient resource and another patient resource.
   */
  type: ('replaced-by'|'replaces'|'refer'|'seealso');
  _type?: Element | undefined;

}