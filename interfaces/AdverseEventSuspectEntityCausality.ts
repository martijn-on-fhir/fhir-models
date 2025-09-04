import { BackboneElement } from './BackboneElement';
import { Bayesian } from './Bayesian';
import { Checklist } from './Checklist';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Information on the possible cause of the event.
 */
export interface AdverseEventSuspectEntityCausality extends BackboneElement {

  /**
   * Assessment of if the entity caused the event.
   */
  assessment?: CodeableConcept | undefined;
  /**
   * AdverseEvent.suspectEntity.causalityAuthor.
   */
  author?: Reference | undefined;
  /**
   * ProbabilityScale | Bayesian | Checklist.
   */
  method?: CodeableConcept | undefined;
  /**
   * AdverseEvent.suspectEntity.causalityProductRelatedness.
   */
  productRelatedness?: string | undefined;
  _productRelatedness?: Element | undefined;

}