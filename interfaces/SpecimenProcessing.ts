import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Details concerning processing and processing steps for the specimen.
 */
export interface SpecimenProcessing extends BackboneElement {

  /**
   * Material used in the processing step.
   */
  additive?: Reference[] | undefined;
  /**
   * Textual description of procedure.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  procedure?: CodeableConcept | undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timeDateTime?: string | undefined;
  _timeDateTime?: Element | undefined;
  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
   */
  timePeriod?: Period | undefined;

}