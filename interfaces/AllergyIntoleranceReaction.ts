import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { Clinical } from './Clinical';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Details about each adverse reaction event linked to exposure to the identified substance.
 */
export interface AllergyIntoleranceReaction extends BackboneElement {

  /**
   * Use the description to provide any details of a particular event of the occurred reaction such as circumstances, reaction specifics, what happened before/after. Information, related to the event, but not describing a particular care should be captured in the comment field. For example: at the age of four, the patient was given penicillin for strep throat and subsequently developed severe hives.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Coding of the route of exposure with a terminology should be used wherever possible.
   */
  exposureRoute?: CodeableConcept | undefined;
  /**
   * Manifestation can be expressed as a single word, phrase or brief description. For example: nausea, rash or no reaction. It is preferable that manifestation should be coded with a terminology, where possible. The values entered here may be used to display on an application screen as part of a list of adverse reactions, as recommended in the UK NHS CUI guidelines.  Terminologies commonly used include, but are not limited to, SNOMED CT or ICD10.
   */
  manifestation: CodeableConcept[];
  /**
   * Use this field to record information indirectly related to a particular event and not captured in the description. For example: Clinical records are no longer available, recorded based on information provided to the patient by her mother and her mother is deceased.
   */
  note?: Annotation[] | undefined;
  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  onset?: string | undefined;
  _onset?: Element | undefined;
  /**
   * It is acknowledged that this assessment is very subjective. There may be some specific practice domains where objective scales have been applied. Objective scales can be included in this model as extensions.
   */
  severity?: ('mild'|'moderate'|'severe') | undefined;
  _severity?: Element | undefined;
  /**
   * Coding of the specific substance (or pharmaceutical product) with a terminology capable of triggering decision support should be used wherever possible.  The 'code' element allows for the use of a specific substance or pharmaceutical product, or a group or class of substances. In the case of an allergy or intolerance to a class of substances, (for example, "penicillins"), the 'reaction.substance' element could be used to code the specific substance that was identified as having caused the reaction (for example, "amoxycillin"). Duplication of the value in the 'code' and 'reaction.substance' elements is acceptable when a specific substance has been recorded in 'code'.
   */
  substance?: CodeableConcept | undefined;

}