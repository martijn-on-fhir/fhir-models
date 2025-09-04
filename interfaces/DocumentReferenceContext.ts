import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * These values are primarily added to help with searching for interesting/relevant documents.
 */
export interface DocumentReferenceContext extends BackboneElement {

  /**
   * Describes the clinical encounter or type of care that the document content is associated with.
   */
  encounter?: Reference[] | undefined;
  /**
   * An event can further specialize the act inherent in the type, such as  where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more event codes are included, they shall not conflict with the values inherent in the class or type elements as such a conflict would create an ambiguous situation.
   */
  event?: CodeableConcept[] | undefined;
  /**
   * The kind of facility where the patient was seen.
   */
  facilityType?: CodeableConcept | undefined;
  /**
   * The time period over which the service that is described by the document was provided.
   */
  period?: Period | undefined;
  /**
   * This element should be based on a coarse classification system for the class of specialty practice. Recommend the use of the classification system for Practice Setting, such as that described by the Subject Matter Domain in LOINC.
   */
  practiceSetting?: CodeableConcept | undefined;
  /**
   * May be identifiers or resources that caused the DocumentReference or referenced Document to be created.
   */
  related?: Reference[] | undefined;
  /**
   * The Patient Information as known when the document was published. May be a reference to a version specific, or contained.
   */
  sourcePatientInfo?: Reference | undefined;

}