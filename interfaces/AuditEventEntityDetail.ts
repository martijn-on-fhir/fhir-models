import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export interface AuditEventEntityDetail extends BackboneElement {

  /**
   * The type of extra detail provided in the value.
   */
  type: string;
  _type?: Element | undefined;
  /**
   * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
   */
  valueBase64Binary?: string | undefined;
  _valueBase64Binary?: Element | undefined;

}