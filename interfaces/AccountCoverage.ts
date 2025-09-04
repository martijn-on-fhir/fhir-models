import { BackboneElement } from './BackboneElement';
import { Reference } from './Reference';

/**
 * Typically. this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdictional business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdictional extension may be defined to specify the order for the type of charge.
 */
export interface AccountCoverage extends BackboneElement {

  /**
   * The party(s) that contribute to payment (or part of) of the charges applied to this account (including self-pay).
   * A coverage may only be responsible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   */
  coverage: Reference;
  /**
   * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
   */
  priority?: number | undefined;

}