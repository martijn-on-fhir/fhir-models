import { CodeableConcept } from './CodeableConcept';
import { DocumentReferenceContent } from './DocumentReferenceContent';
import { DocumentReferenceContext } from './DocumentReferenceContext';
import { DocumentReferenceRelatesTo } from './DocumentReferenceRelatesTo';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export interface DocumentReference extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'DocumentReference';
  /**
   * Represents a participant within the author institution who has legally authenticated or attested the document. Legal authentication implies that a document has been signed manually or electronically by the legal Authenticator.
   */
  authenticator?: Reference | undefined;
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  author?: Reference[] | undefined;
  /**
   * Key metadata element describing the the category or classification of the document. This is a broader perspective that groups similar documents based on how they would be used. This is a primary key used in searching.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * The document and format referenced. There may be multiple content element repetitions, each with a different format.
   */
  content: DocumentReferenceContent[];
  /**
   * These values are primarily added to help with searching for interesting/relevant documents.
   */
  context?: DocumentReferenceContext | undefined;
  /**
   * Identifies the logical organization (software system, vendor, or department) to go to find the current version, where to report issues, etc. This is different from the physical location (URL, disk drive, or server) of the document, which is the technical location of the document, which host may be delegated to the management of some other organization.
   */
  custodian?: Reference | undefined;
  /**
   * Referencing/indexing time is used for tracking, organizing versions and searching.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * What the document is about,  a terse summary of the document.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The document that is pointed to might be in various lifecycle states.
   */
  docStatus?: ('preliminary'|'final'|'amended'|'entered-in-error') | undefined;
  _docStatus?: Element | undefined;
  /**
   * Other identifiers associated with the document, including version independent identifiers.
   */
  identifier?: Identifier[] | undefined;
  /**
   * CDA Document Id extension and root.
   */
  masterIdentifier?: Identifier | undefined;
  /**
   * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
   */
  relatesTo?: DocumentReferenceRelatesTo[] | undefined;
  /**
   * The confidentiality codes can carry multiple vocabulary items. HL7 has developed an understanding of security and privacy tags that might be desirable in a Document Sharing environment, called HL7 Healthcare Privacy and Security Classification System (HCS). The following specification is recommended but not mandated, as the vocabulary bindings are an administrative domain responsibility. The use of this method is up to the policy domain such as the XDS Affinity Domain or other Trust Domain where all parties including sender and recipients are trusted to appropriately tag and enforce.
   * In the HL7 Healthcare Privacy and Security Classification (HCS) there are code systems specific to Confidentiality, Sensitivity, Integrity, and Handling Caveats. Some values would come from a local vocabulary as they are related to workflow roles and special projects.
   */
  securityLabel?: CodeableConcept[] | undefined;
  /**
   * This is the status of the DocumentReference object, which might be independent from the docStatus element.
   * This element is labeled as a modifier because the status contains the codes that mark the document or reference as not currently valid.
   */
  status: ('current'|'superseded'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
   */
  subject?: Reference | undefined;
  /**
   * Key metadata element describing the document that describes he exact type of document. Helps humans to assess whether the document is of interest when viewing a list of documents.
   */
  type?: CodeableConcept | undefined;

}