import { AuditEventEntityDetail } from './AuditEventEntityDetail';
import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export interface AuditEventEntity extends BackboneElement {

  /**
   * Text that describes the entity in more detail.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Tagged value pairs for conveying additional information about the entity.
   */
  detail?: AuditEventEntityDetail[] | undefined;
  /**
   * This can be used to provide an audit trail for data, over time, as it passes through the system.
   */
  lifecycle?: Coding | undefined;
  /**
   * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   */
  query?: string | undefined;
  _query?: Element | undefined;
  /**
   * Code representing the role the entity played in the event being audited.
   */
  role?: Coding | undefined;
  /**
   * Copied from entity meta security tags.
   */
  securityLabel?: Coding[] | undefined;
  /**
   * This value is distinct from the user's role or any user relationship to the entity.
   */
  type?: Coding | undefined;
  /**
   * Identifies a specific instance of the entity. The reference should be version specific.
   */
  what?: Reference | undefined;

}