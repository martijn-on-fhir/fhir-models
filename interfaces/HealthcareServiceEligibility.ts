import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export interface HealthcareServiceEligibility extends BackboneElement {

  /**
   * Coded value for the eligibility.
   */
  code?: CodeableConcept | undefined;
  /**
   * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;

}