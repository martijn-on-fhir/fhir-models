import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficiency for multiple modes, then you need multiple RelatedPerson.Communication associations.   If the RelatedPerson does not speak the default local language, then the Interpreter Required Standard can be used to explicitly declare that an interpreter is required.
 */
export interface RelatedPersonCommunication extends BackboneElement {

  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
   */
  language: CodeableConcept;
  /**
   * This language is specifically identified for communicating healthcare information.
   */
  preferred?: boolean | undefined;
  _preferred?: Element | undefined;

}