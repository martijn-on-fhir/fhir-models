import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { TaskRestriction } from './TaskRestriction';

/**
 * A task to be performed.
 */
export interface Task extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Task';
  /**
   * The date and time this task was created.
   */
  authoredOn?: string | undefined;
  _authoredOn?: Element | undefined;
  /**
   * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by FocusOn.  For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient.
   */
  basedOn?: Reference[] | undefined;
  /**
   * Contains business-specific nuances of the business state.
   */
  businessStatus?: CodeableConcept | undefined;
  /**
   * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
   */
  code?: CodeableConcept | undefined;
  /**
   * A free-text description of what is to be performed.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
   */
  encounter?: Reference | undefined;
  /**
   * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end).
   */
  executionPeriod?: Period | undefined;
  /**
   * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for each referenced resource.).
   */
  focus?: Reference | undefined;
  /**
   * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
   */
  for?: Reference | undefined;
  /**
   * An identifier that links together multiple tasks and other requests that were created in the same context.
   */
  groupIdentifier?: Identifier | undefined;
  /**
   * The business identifier for this task.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Additional information that may be needed in the execution of the task.
   */
  input?: TaskInput[] | undefined;
  /**
   * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
   */
  instantiatesCanonical?: string | undefined;
  _instantiatesCanonical?: Element | undefined;
  /**
   * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task.
   */
  instantiatesUri?: string | undefined;
  _instantiatesUri?: Element | undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
   */
  insurance?: Reference[] | undefined;
  /**
   * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances.
   * In most cases, Tasks will have an intent of "order".
   */
  intent: ('unknown'|'proposal'|'plan'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');
  _intent?: Element | undefined;
  /**
   * The date and time of last modification to this task.
   */
  lastModified?: string | undefined;
  _lastModified?: Element | undefined;
  /**
   * Principal physical location where the this task is performed.
   */
  location?: Reference | undefined;
  /**
   * Free-text information captured about the task as it progresses.
   */
  note?: Annotation[] | undefined;
  /**
   * Outputs produced by the Task.
   */
  output?: TaskOutput[] | undefined;
  /**
   * Tasks may be created with an owner not yet identified.
   */
  owner?: Reference | undefined;
  /**
   * This should usually be 0..1.
   */
  partOf?: Reference[] | undefined;
  /**
   * The kind of participant that should perform the task.
   */
  performerType?: CodeableConcept[] | undefined;
  /**
   * Indicates how quickly the Task should be addressed with respect to other requests.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * This should only be included if there is no focus or if it differs from the reason indicated on the focus.
   */
  reasonCode?: CodeableConcept | undefined;
  /**
   * Tasks might be justified based on an Observation, a Condition, a past or planned procedure, etc.   This should only be included if there is no focus or if it differs from the reason indicated on the focus.    Use the CodeableConcept text element in `Task.reasonCode` if the data is free (uncoded) text.
   */
  reasonReference?: Reference | undefined;
  /**
   * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
   */
  relevantHistory?: Reference[] | undefined;
  /**
   * The creator of the task.
   */
  requester?: Reference | undefined;
  /**
   * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
   */
  restriction?: TaskRestriction | undefined;
  /**
   * The current status of the task.
   */
  status: ('draft'|'requested'|'received'|'accepted'|'rejected'|'ready'|'cancelled'|'in-progress'|'on-hold'|'failed'|'completed'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * This applies to the current status.  Look at the history of the task to see reasons for past statuses.
   */
  statusReason?: CodeableConcept | undefined;

}