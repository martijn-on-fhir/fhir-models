import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { Reference } from './Reference';

/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export interface PaymentNotice extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'PaymentNotice';
  /**
   * The amount sent to the payee.
   */
  amount: Money;
  /**
   * The date when this resource was created.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * A unique identifier assigned to this payment notice.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The party who will receive or has received payment that is the subject of this notification.
   */
  payee?: Reference | undefined;
  /**
   * A reference to the payment which is the subject of this notice.
   */
  payment: Reference;
  /**
   * The date when the above payment action occurred.
   */
  paymentDate?: string | undefined;
  _paymentDate?: Element | undefined;
  /**
   * Typically paid: payment sent, cleared: payment received.
   */
  paymentStatus?: CodeableConcept | undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: Reference | undefined;
  /**
   * The party who is notified of the payment status.
   */
  recipient: Reference;
  /**
   * Reference of resource for which payment is being made.
   */
  request?: Reference | undefined;
  /**
   * Reference of response to resource for which payment is being made.
   */
  response?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'cancelled'|'draft'|'entered-in-error');
  _status?: Element | undefined;

}