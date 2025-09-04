import { Age } from './Age';
import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Range } from './Range';

/**
 * The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 */
export interface FamilyMemberHistoryCondition extends BackboneElement {

  /**
   * The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system.
   */
  code: CodeableConcept;
  /**
   * This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown.
   */
  contributedToDeath?: boolean | undefined;
  _contributedToDeath?: Element | undefined;
  /**
   * An area where general notes can be placed about this specific condition.
   */
  note?: Annotation[] | undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetAge?: Age | undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetRange?: Range | undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetPeriod?: Period | undefined;
  /**
   * Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence.
   */
  onsetString?: string | undefined;
  _onsetString?: Element | undefined;
  /**
   * Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation.
   */
  outcome?: CodeableConcept | undefined;

}