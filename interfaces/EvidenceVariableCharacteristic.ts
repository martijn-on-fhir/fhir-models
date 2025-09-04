import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { DataRequirement } from './DataRequirement';
import { Duration } from './Duration';
import { Element } from './Element';
import { Expression } from './Expression';
import { Period } from './Period';
import { Reference } from './Reference';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

/**
 * Characteristics can be defined flexibly to accommodate different use cases for membership criteria, ranging from simple codes, all the way to using an expression language to express the criteria.
 */
export interface EvidenceVariableCharacteristic extends BackboneElement {

  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionReference?: Reference | undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCanonical?: string | undefined;
  _definitionCanonical?: Element | undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionCodeableConcept?: CodeableConcept | undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionExpression?: Expression | undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionDataRequirement?: DataRequirement | undefined;
  /**
   * Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year).
   */
  definitionTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * When true, members with this characteristic are excluded from the element.
   */
  exclude?: boolean | undefined;
  _exclude?: Element | undefined;
  /**
   * Indicates how elements are aggregated within the study effective period.
   */
  groupMeasure?: ('mean'|'median'|'mean-of-mean'|'mean-of-median'|'median-of-mean'|'median-of-median') | undefined;
  _groupMeasure?: Element | undefined;
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
   * Indicates duration from the participant's study entry.
   */
  timeFromStart?: Duration | undefined;
  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   */
  usageContext?: UsageContext[] | undefined;

}