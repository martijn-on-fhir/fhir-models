import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { DataRequirement } from './DataRequirement';
import { Duration } from './Duration';
import { Element } from './Element';
import { Expression } from './Expression';
import { Period } from './Period';
import { Timing } from './Timing';
import { UsageContext } from './UsageContext';

/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export interface ResearchElementDefinitionCharacteristic extends BackboneElement {

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: CodeableConcept | undefined;
  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string | undefined;
  _definitionCanonical?: Element | undefined;
  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: Expression | undefined;
  /**
   * Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionDataRequirement?: DataRequirement | undefined;
  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: boolean | undefined;
  _exclude?: Element | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDateTime?: string | undefined;
  _participantEffectiveDateTime?: Element | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectivePeriod?: Period | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveDuration?: Duration | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  participantEffectiveTiming?: Timing | undefined;
  /**
   * A narrative description of the time period the study covers.
   */
  participantEffectiveDescription?: string | undefined;
  _participantEffectiveDescription?: Element | undefined;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  participantEffectiveGroupMeasure?: ('mean'|'median'|'mean-of-mean'|'mean-of-median'|'median-of-mean'|'median-of-median') | undefined;
  _participantEffectiveGroupMeasure?: Element | undefined;
  /**
   * Indicates duration from the participant's study entry.
   */
  participantEffectiveTimeFromStart?: Duration | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  studyEffectiveDateTime?: string | undefined;
  _studyEffectiveDateTime?: Element | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  studyEffectivePeriod?: Period | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  studyEffectiveDuration?: Duration | undefined;
  /**
   * Indicates what effective period the study covers.
   */
  studyEffectiveTiming?: Timing | undefined;
  /**
   * A narrative description of the time period the study covers.
   */
  studyEffectiveDescription?: string | undefined;
  _studyEffectiveDescription?: Element | undefined;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  studyEffectiveGroupMeasure?: ('mean'|'median'|'mean-of-mean'|'mean-of-median'|'median-of-mean'|'median-of-median') | undefined;
  _studyEffectiveGroupMeasure?: Element | undefined;
  /**
   * Indicates duration from the study initiation.
   */
  studyEffectiveTimeFromStart?: Duration | undefined;
  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: CodeableConcept | undefined;
  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  usageContext?: UsageContext[] | undefined;

}