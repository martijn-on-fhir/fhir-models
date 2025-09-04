import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { SupplyRequestParameter } from './SupplyRequestParameter';
import { Timing } from './Timing';

/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export interface SupplyRequest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SupplyRequest';
  /**
   * When the request was made.
   */
  authoredOn?: string | undefined;
  _authoredOn?: Element | undefined;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  category?: CodeableConcept | undefined;
  /**
   * Where the supply is expected to come from.
   */
  deliverFrom?: Reference | undefined;
  /**
   * Where the supply is destined to go.
   */
  deliverTo?: Reference | undefined;
  /**
   * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  itemCodeableConcept?: CodeableConcept | undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  itemReference?: Reference | undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrencePeriod?: Period | undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrenceTiming?: Timing | undefined;
  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  parameter?: SupplyRequestParameter[] | undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * The amount that is being ordered of the indicated item.
   */
  quantity: Quantity;
  /**
   * The reason why the supply item was requested.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * The reason why the supply item was requested.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  requester?: Reference | undefined;
  /**
   * Status of the supply request.
   */
  status?: ('draft'|'active'|'suspended'|'cancelled'|'completed'|'entered-in-error'|'unknown') | undefined;
  _status?: Element | undefined;
  /**
   * Who is intended to fulfill the request.
   */
  supplier?: Reference[] | undefined;

}