import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { EFT } from './EFT';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { PaymentReconciliationDetail } from './PaymentReconciliationDetail';
import { PaymentReconciliationProcessNote } from './PaymentReconciliationProcessNote';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * This resource provides the details including amount of a payment and allocates the payment items being paid.
 */
export interface PaymentReconciliation extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'PaymentReconciliation';
  /**
   * The date when the resource was created.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: PaymentReconciliationDetail[] | undefined;
  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  disposition?: string | undefined;
  _disposition?: Element | undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  formCode?: CodeableConcept | undefined;
  /**
   * A unique identifier assigned to this payment reconciliation.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome?: ('queued'|'complete'|'error'|'partial') | undefined;
  _outcome?: Element | undefined;
  /**
   * Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: Money;
  /**
   * The date of payment as indicated on the financial instrument.
   */
  paymentDate: string;
  _paymentDate?: Element | undefined;
  /**
   * For example: EFT number or check number.
   */
  paymentIdentifier?: Identifier | undefined;
  /**
   * This party is also responsible for the reconciliation.
   */
  paymentIssuer?: Reference | undefined;
  /**
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: Period | undefined;
  /**
   * A note that describes or explains the processing in a human readable form.
   */
  processNote?: PaymentReconciliationProcessNote[] | undefined;
  /**
   * Original request resource reference.
   */
  request?: Reference | undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'cancelled'|'draft'|'entered-in-error');
  _status?: Element | undefined;

}