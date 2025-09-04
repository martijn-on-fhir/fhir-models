import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Element } from './Element';
import { SpecimenDefinitionTypeTestedContainer } from './SpecimenDefinitionTypeTestedContainer';
import { SpecimenDefinitionTypeTestedHandling } from './SpecimenDefinitionTypeTestedHandling';

/**
 * Specimen conditioned in a container as expected by the testing laboratory.
 */
export interface SpecimenDefinitionTypeTested extends BackboneElement {

  /**
   * The specimen's container.
   */
  container?: SpecimenDefinitionTypeTestedContainer | undefined;
  /**
   * Set of instructions for preservation/transport of the specimen at a defined temperature interval, prior the testing process.
   */
  handling?: SpecimenDefinitionTypeTestedHandling[] | undefined;
  /**
   * Primary of secondary specimen.
   */
  isDerived?: boolean | undefined;
  _isDerived?: Element | undefined;
  /**
   * The preference for this type of conditioned specimen.
   */
  preference: ('preferred'|'alternate');
  _preference?: Element | undefined;
  /**
   * Criterion for rejection of the specimen in its container by the laboratory.
   */
  rejectionCriterion?: CodeableConcept[] | undefined;
  /**
   * Requirements for delivery and special handling of this kind of conditioned specimen.
   */
  requirement?: string | undefined;
  _requirement?: Element | undefined;
  /**
   * The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing.
   */
  retentionTime?: Duration | undefined;
  /**
   * The kind of specimen conditioned for testing expected by lab.
   */
  type?: CodeableConcept | undefined;

}