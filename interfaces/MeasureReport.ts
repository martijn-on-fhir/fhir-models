import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MeasureReportGroup } from './MeasureReportGroup';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReport extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MeasureReport';
  /**
   * The date this measure report was generated.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * A reference to a Bundle containing the Resources that were used in the calculation of this measure.
   */
  evaluatedResource?: Reference[] | undefined;
  /**
   * The results of the calculation, one for each population group in the measure.
   */
  group?: MeasureReportGroup[] | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II data type - e.g. to identify this {{title}} outside of FHIR, where the logical URL is not possible to use.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This element is typically defined by the measure, but reproduced here to ensure the measure score can be interpreted. The element is labeled as a modifier because it changes the interpretation of the reported measure score.
   */
  improvementNotation?: CodeableConcept | undefined;
  /**
   * A reference to the Measure that was calculated to produce this report.
   */
  measure: string;
  _measure?: Element | undefined;
  /**
   * The reporting period for which the report was calculated.
   */
  period: Period;
  /**
   * The individual, location, or organization that is reporting the data.
   */
  reporter?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('complete'|'pending'|'error');
  _status?: Element | undefined;
  /**
   * Optional subject identifying the individual or individuals the report is for.
   */
  subject?: Reference | undefined;
  /**
   * Data-collection reports are used only to communicate data-of-interest for a measure. They do not necessarily include all the data for a particular subject or population, but they may.
   */
  type: ('individual'|'subject-list'|'summary'|'data-collection');
  _type?: Element | undefined;

}