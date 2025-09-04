import { CodeableConcept } from './CodeableConcept';
import { DocumentManifestRelated } from './DocumentManifestRelated';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A collection of documents compiled for a purpose together with metadata that applies to the collection.
 */
export interface DocumentManifest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'DocumentManifest';
  /**
   * Not necessarily who did the actual data entry (i.e. typist) or who was the source (informant).
   */
  author?: Reference[] | undefined;
  /**
   * When used for XDS the intended focus of the DocumentManifest is for the reference to target to be a set of DocumentReference Resources. The reference is to "Any" to support EN 13606 usage, where an extract is DocumentManifest that references  List and Composition resources.
   */
  content: Reference[];
  /**
   * Creation time is used for tracking, organizing versions and searching. This is the creation time of the document set, not the documents on which it is based.
   */
  created?: string | undefined;
  _created?: Element | undefined;
  /**
   * What the document is about, rather than a terse summary of the document. It is commonly the case that records do not have a title and are collectively referred to by the display name of Record code (e.g. a "consultation" or "progress note").
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Other identifiers associated with the document manifest, including version independent  identifiers.
   */
  identifier?: Identifier[] | undefined;
  /**
   * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
   */
  masterIdentifier?: Identifier | undefined;
  /**
   * How the recipient receives the document set or is notified of it is up to the implementation. This element is just a statement of intent. If the recipient is a person, and it is not known whether the person is a patient or a practitioner, RelatedPerson would be the default choice.
   */
  recipient?: Reference[] | undefined;
  /**
   * May be identifiers or resources that caused the DocumentManifest to be created.
   */
  related?: DocumentManifestRelated[] | undefined;
  /**
   * Identifies the source system, application, or software that produced the document manifest.
   */
  source?: string | undefined;
  _source?: Element | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes that mark the manifest as not currently valid.
   */
  status: ('current'|'superseded'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
   */
  subject?: Reference | undefined;
  /**
   * Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
   */
  type?: CodeableConcept | undefined;

}