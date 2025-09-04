import { CodeableConcept } from './CodeableConcept';
import { CompositionAttester } from './CompositionAttester';
import { CompositionEvent } from './CompositionEvent';
import { CompositionRelatesTo } from './CompositionRelatesTo';
import { CompositionSection } from './CompositionSection';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export interface Composition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Composition';
  /**
   * Only list each attester once.
   */
  attester?: CompositionAttester[] | undefined;
  /**
   * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
   */
  author: Reference[];
  /**
   * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
   */
  category?: CodeableConcept[] | undefined;
  /**
   * The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).  This element is labeled as a modifier because highly confidential documents must not be treated as if they are not.
   */
  confidentiality?: string | undefined;
  _confidentiality?: Element | undefined;
  /**
   * This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged.
   */
  custodian?: Reference | undefined;
  /**
   * The Last Modified Date on the composition may be after the date of the document was attested without being changed.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * Describes the clinical encounter or type of care this documentation is associated with.
   */
  encounter?: Reference | undefined;
  /**
   * The event needs to be consistent with the type element, though can provide further information if desired.
   */
  event?: CompositionEvent[] | undefined;
  /**
   * Similar to ClinicalDocument/setId in CDA. See discussion in resource definition for how these relate.
   */
  identifier?: Identifier | undefined;
  /**
   * A document is a version specific composition.
   */
  relatesTo?: CompositionRelatesTo[] | undefined;
  /**
   * The root of the sections that make up the composition.
   */
  section?: CompositionSection[] | undefined;
  /**
   * If a composition is marked as withdrawn, the compositions/documents in the series, or data from the composition or document series, should never be displayed to a user without being clearly marked as untrustworthy. The flag "entered-in-error" is why this element is labeled as a modifier of other elements.
   * Some reporting work flows require that the original narrative of a final document never be altered; instead, only new narrative can be added. The composition resource has no explicit status for explicitly noting whether this business rule is in effect. This would be handled by an extension if required.
   */
  status: ('preliminary'|'final'|'amended'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * For clinical documents, this is usually the patient.
   */
  subject?: Reference | undefined;
  /**
   * For many compositions, the title is the same as the text or a display name of Composition.type (e.g. a "consultation" or "progress note"). Note that CDA does not make title mandatory, but there are no known cases where it is useful for title to be omitted, so it is mandatory here. Feedback on this requirement is welcome during the trial use period.
   */
  title: string;
  _title?: Element | undefined;
  /**
   * For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding.
   */
  type: CodeableConcept;

}