import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { SpecimenDefinitionTypeTested } from './SpecimenDefinitionTypeTested';

/**
 * A kind of specimen with associated set of requirements.
 */
export interface SpecimenDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SpecimenDefinition';
  /**
   * The action to be performed for collecting the specimen.
   */
  collection?: CodeableConcept[] | undefined;
  /**
   * A business identifier associated with the kind of specimen.
   */
  identifier?: Identifier | undefined;
  /**
   * Preparation of the patient for specimen collection.
   */
  patientPreparation?: CodeableConcept[] | undefined;
  /**
   * Time aspect of specimen collection (duration or offset).
   */
  timeAspect?: string | undefined;
  _timeAspect?: Element | undefined;
  /**
   * The kind of material to be collected.
   */
  typeCollected?: CodeableConcept | undefined;
  /**
   * Specimen conditioned in a container as expected by the testing laboratory.
   */
  typeTested?: SpecimenDefinitionTypeTested[] | undefined;

}