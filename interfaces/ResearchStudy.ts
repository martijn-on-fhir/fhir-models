import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { ResearchStudyArm } from './ResearchStudyArm';
import { ResearchStudyObjective } from './ResearchStudyObjective';

/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export interface ResearchStudy extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ResearchStudy';
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  arm?: ResearchStudyArm[] | undefined;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
   */
  condition?: CodeableConcept[] | undefined;
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A full description of how the study is being conducted.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  enrollment?: Reference[] | undefined;
  /**
   * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  focus?: CodeableConcept[] | undefined;
  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  keyword?: CodeableConcept[] | undefined;
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  location?: CodeableConcept[] | undefined;
  /**
   * Comments made about the study by the performer, subject or other participants.
   */
  note?: Annotation[] | undefined;
  /**
   * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
   */
  objective?: ResearchStudyObjective[] | undefined;
  /**
   * A larger research study of which this particular study is a component or step.
   */
  partOf?: Reference[] | undefined;
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  period?: Period | undefined;
  /**
   * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
   */
  phase?: CodeableConcept | undefined;
  /**
   * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
   */
  primaryPurposeType?: CodeableConcept | undefined;
  /**
   * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
   */
  principalInvestigator?: Reference | undefined;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  protocol?: Reference[] | undefined;
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  reasonStopped?: CodeableConcept | undefined;
  /**
   * Citations, references and other related documents.
   */
  relatedArtifact?: RelatedArtifact[] | undefined;
  /**
   * A facility in which study activities are conducted.
   */
  site?: Reference[] | undefined;
  /**
   * An organization that initiates the investigation and is legally responsible for the study.
   */
  sponsor?: Reference | undefined;
  /**
   * The current state of the study.
   */
  status: ('active'|'administratively-completed'|'approved'|'closed-to-accrual'|'closed-to-accrual-and-intervention'|'completed'|'disapproved'|'in-review'|'temporarily-closed-to-accrual'|'temporarily-closed-to-accrual-and-intervention'|'withdrawn');
  _status?: Element | undefined;
  /**
   * A short, descriptive user-friendly label for the study.
   */
  title?: string | undefined;
  _title?: Element | undefined;

}