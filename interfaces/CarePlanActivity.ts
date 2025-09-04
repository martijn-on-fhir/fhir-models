import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CarePlanActivityDetail } from './CarePlanActivityDetail';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export interface CarePlanActivity extends BackboneElement {

  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: CarePlanActivityDetail | undefined;
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  outcomeCodeableConcept?: CodeableConcept[] | undefined;
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: Reference[] | undefined;
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  progress?: Annotation[] | undefined;
  /**
   * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  reference?: Reference | undefined;

}