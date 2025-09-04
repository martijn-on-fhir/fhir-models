import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export interface ClinicalImpressionInvestigation extends BackboneElement {

  /**
   * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
   */
  code: CodeableConcept;
  /**
   * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
   */
  item?: Reference[] | undefined;

}