import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ObservationComponent } from './ObservationComponent';
import { ObservationReferenceRange } from './ObservationReferenceRange';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { SampledData } from './SampledData';
import { Timing } from './Timing';

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface Observation extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Observation';
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
   */
  basedOn?: Reference[] | undefined;
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
   */
  code: CodeableConcept;
  /**
   * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
   */
  component?: ObservationComponent[] | undefined;
  /**
   * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".
   * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when > 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
   */
  dataAbsentReason?: CodeableConcept | undefined;
  /**
   * All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.
   */
  derivedFrom?: Reference[] | undefined;
  /**
   * Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such devices may be documented using the Provenance resource where relevant.
   */
  device?: Reference | undefined;
  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
   */
  effectiveDateTime?: string | undefined;
  _effectiveDateTime?: Element | undefined;
  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
   */
  effectivePeriod?: Period | undefined;
  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
   */
  effectiveTiming?: Timing | undefined;
  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
   */
  effectiveInstant?: string | undefined;
  _effectiveInstant?: Element | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
   */
  encounter?: Reference | undefined;
  /**
   * Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the distinction between the subject and what is directly measured for an observation is specified in the observation code itself ( e.g., "Blood Glucose") and does not need to be represented separately using this element.  Use `specimen` if a reference to a specimen is required.  If a code is required instead of a resource use either  `bodysite` for bodysites or the standard extension [focusCode](extension-observation-focuscode.html).
   */
  focus?: Reference[] | undefined;
  /**
   * When using this element, an observation will typically have either a value or a set of related resources, although both may be present in some cases.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.  Note that a system may calculate results from [QuestionnaireResponse](questionnaireresponse.html)  into a final score and represent the score as an Observation.
   */
  hasMember?: Reference[] | undefined;
  /**
   * A unique identifier assigned to this observation.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
   */
  interpretation?: CodeableConcept[] | undefined;
  /**
   * For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn’t require the new version to be reviewed and verified again.
   */
  issued?: string | undefined;
  _issued?: Element | undefined;
  /**
   * Only used if not implicit in code for Observation.code.
   */
  method?: CodeableConcept | undefined;
  /**
   * May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
   */
  note?: Annotation[] | undefined;
  /**
   * To link an Observation to an Encounter use `encounter`.  See the  [Notes](observation.html#obsgrouping) below for guidance on referencing another Observation.
   */
  partOf?: Reference[] | undefined;
  /**
   * Who was responsible for asserting the observed value as "true".
   */
  performer?: Reference[] | undefined;
  /**
   * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
   */
  referenceRange?: ObservationReferenceRange[] | undefined;
  /**
   * Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).
   */
  specimen?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('registered'|'preliminary'|'final'|'amended'|'corrected'|'cancelled'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
   */
  subject?: Reference | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueInteger?: number | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueRange?: Range | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueRatio?: Ratio | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueSampledData?: SampledData | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
   */
  valuePeriod?: Period | undefined;

}