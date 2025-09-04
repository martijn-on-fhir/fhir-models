import { Annotation } from './Annotation';
import { ChargeItemPerformer } from './ChargeItemPerformer';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Money } from './Money';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Timing } from './Timing';

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export interface ChargeItem extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'ChargeItem';
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  account?: Reference[] | undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodysite?: CodeableConcept[] | undefined;
  /**
   * A code that identifies the charge, like a billing code.
   */
  code: CodeableConcept;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: Reference | undefined;
  /**
   * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
   */
  costCenter?: Reference | undefined;
  /**
   * References the source of pricing information, rules of application for the code this ChargeItem uses.
   */
  definitionCanonical?: string[] | undefined;
  _definitionCanonical?: Element[] | undefined;
  /**
   * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   */
  definitionUri?: string[] | undefined;
  _definitionUri?: Element[] | undefined;
  /**
   * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   */
  enteredDate?: string | undefined;
  _enteredDate?: Element | undefined;
  /**
   * The enterer is also the person considered responsible for factor/price overrides if applicable.
   */
  enterer?: Reference | undefined;
  /**
   * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  factorOverride?: number | undefined;
  /**
   * Identifiers assigned to this event performer or other systems.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  note?: Annotation[] | undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrencePeriod?: Period | undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrenceTiming?: Timing | undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  overrideReason?: string | undefined;
  _overrideReason?: Element | undefined;
  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   */
  partOf?: Reference[] | undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  performer?: ChargeItemPerformer[] | undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  performingOrganization?: Reference | undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  priceOverride?: Money | undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  productReference?: Reference | undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  productCodeableConcept?: CodeableConcept | undefined;
  /**
   * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
   */
  quantity?: Quantity | undefined;
  /**
   * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
   */
  reason?: CodeableConcept[] | undefined;
  /**
   * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
   */
  requestingOrganization?: Reference | undefined;
  /**
   * Indicated the rendered service that caused this charge.
   */
  service?: Reference[] | undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
   */
  status: ('planned'|'billable'|'not-billable'|'aborted'|'billed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * The individual or set of individuals the action is being or was performed on.
   */
  subject: Reference;
  /**
   * Further information supporting this charge.
   */
  supportingInformation?: Reference[] | undefined;

}