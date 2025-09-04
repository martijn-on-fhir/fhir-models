import { AccountCoverage } from './AccountCoverage';
import { AccountGuarantor } from './AccountGuarantor';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export interface Account extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Account';
  /**
   * Typically. this may be some form of insurance, internal charges, or self-pay.
   * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
   * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
   */
  coverage?: AccountCoverage[] | undefined;
  /**
   * Provides additional information about what the account tracks and how it is used.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The parties responsible for balancing the account if other payment options fall short.
   */
  guarantor?: AccountGuarantor[] | undefined;
  /**
   * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number).
   */
  identifier?: Identifier[] | undefined;
  /**
   * Name used for the account when displaying it to humans in reports, etc.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
   */
  owner?: Reference | undefined;
  /**
   * Reference to a parent Account.
   */
  partOf?: Reference | undefined;
  /**
   * It is possible for transactions to be posted outside the service period, as long as the service was provided within the defined service period.
   */
  servicePeriod?: Period | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
   */
  status: ('active'|'inactive'|'entered-in-error'|'on-hold'|'unknown');
  _status?: Element | undefined;
  /**
   * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patients not tracked, and costs charged to another body), or might not be allocated.
   */
  subject?: Reference[] | undefined;
  /**
   * Categorizes the account for reporting and searching purposes.
   */
  type?: CodeableConcept | undefined;

}