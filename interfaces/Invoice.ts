import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { InvoiceLineItem } from './InvoiceLineItem';
import { InvoiceLineItemPriceComponent } from './InvoiceLineItemPriceComponent';
import { InvoiceParticipant } from './InvoiceParticipant';
import { Money } from './Money';
import { Reference } from './Reference';

/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
export interface Invoice extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Invoice';
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the potprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  account?: Reference | undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  cancelledReason?: string | undefined;
  _cancelledReason?: Element | undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  issuer?: Reference | undefined;
  /**
   * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
   */
  lineItem?: InvoiceLineItem[] | undefined;
  /**
   * Comments made about the invoice by the issuer, subject, or other participants.
   */
  note?: Annotation[] | undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  participant?: InvoiceParticipant[] | undefined;
  /**
   * Derived Profiles may chose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  paymentTerms?: string | undefined;
  _paymentTerms?: Element | undefined;
  /**
   * The individual or Organization responsible for balancing of this invoice.
   */
  recipient?: Reference | undefined;
  /**
   * The current state of the Invoice.
   */
  status: ('draft'|'issued'|'balanced'|'cancelled'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * The individual or set of individuals receiving the goods and services billed in this invoice.
   */
  subject?: Reference | undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  totalGross?: Money | undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  totalNet?: Money | undefined;
  /**
   * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
   */
  totalPriceComponent?: InvoiceLineItemPriceComponent[] | undefined;
  /**
   * Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).
   */
  type?: CodeableConcept | undefined;

}