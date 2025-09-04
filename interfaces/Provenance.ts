import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Period } from './Period';
import { ProvenanceAgent } from './ProvenanceAgent';
import { ProvenanceEntity } from './ProvenanceEntity';
import { Reference } from './Reference';
import { Signature } from './Signature';
import { Where } from './Where';

/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export interface Provenance extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Provenance';
  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
   */
  activity?: CodeableConcept | undefined;
  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   */
  agent: ProvenanceAgent[];
  /**
   * An entity used in this activity.
   */
  entity?: ProvenanceEntity[] | undefined;
  /**
   * Where the activity occurred, if relevant.
   */
  location?: Reference | undefined;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  occurredPeriod?: Period | undefined;
  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
   */
  occurredDateTime?: string | undefined;
  _occurredDateTime?: Element | undefined;
  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
   */
  policy?: string[] | undefined;
  _policy?: Element[] | undefined;
  /**
   * The reason that the activity was taking place.
   */
  reason?: CodeableConcept[] | undefined;
  /**
   * This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
   */
  recorded: string;
  _recorded?: Element | undefined;
  /**
   * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
   */
  signature?: Signature[] | undefined;
  /**
   * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
   */
  target: Reference[];

}