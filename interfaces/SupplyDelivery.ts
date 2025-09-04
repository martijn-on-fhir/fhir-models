import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { SupplyDeliverySuppliedItem } from './SupplyDeliverySuppliedItem';
import { Timing } from './Timing';
import { Trial } from './Trial';

/**
 * Record of delivery of what is supplied.
 */
export interface SupplyDelivery extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SupplyDelivery';
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: Reference[] | undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  destination?: Reference | undefined;
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  identifier?: Identifier[] | undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrencePeriod?: Period | undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceTiming?: Timing | undefined;
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: Reference[] | undefined;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  patient?: Reference | undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  receiver?: Reference[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: ('in-progress'|'completed'|'abandoned'|'entered-in-error') | undefined;
  _status?: Element | undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  suppliedItem?: SupplyDeliverySuppliedItem | undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: Reference | undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: CodeableConcept | undefined;

}