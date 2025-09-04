import { ADR } from './ADR';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ConsentPolicy } from './ConsentPolicy';
import { ConsentProvision } from './ConsentProvision';
import { ConsentVerification } from './ConsentVerification';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export interface Consent extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Consent';
  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
   */
  category: CodeableConcept[];
  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  dateTime?: string | undefined;
  _dateTime?: Element | undefined;
  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  organization?: Reference[] | undefined;
  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  patient?: Reference | undefined;
  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
   */
  performer?: Reference[] | undefined;
  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
   */
  policy?: ConsentPolicy[] | undefined;
  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  policyRule?: CodeableConcept | undefined;
  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  provision?: ConsentProvision | undefined;
  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  scope: CodeableConcept;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceAttachment?: Attachment | undefined;
  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
   */
  sourceReference?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
   */
  status: ('draft'|'proposed'|'active'|'rejected'|'inactive'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
   */
  verification?: ConsentVerification[] | undefined;

}