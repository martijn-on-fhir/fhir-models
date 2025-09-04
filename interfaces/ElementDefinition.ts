import { Address } from './Address';
import { Age } from './Age';
import { Annotation } from './Annotation';
import { Array } from './Array';
import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { ContactPoint } from './ContactPoint';
import { Contributor } from './Contributor';
import { Count } from './Count';
import { DataRequirement } from './DataRequirement';
import { Distance } from './Distance';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Element } from './Element';
import { ElementDefinitionBase } from './ElementDefinitionBase';
import { ElementDefinitionBinding } from './ElementDefinitionBinding';
import { ElementDefinitionConstraint } from './ElementDefinitionConstraint';
import { ElementDefinitionExample } from './ElementDefinitionExample';
import { ElementDefinitionMapping } from './ElementDefinitionMapping';
import { ElementDefinitionSlicing } from './ElementDefinitionSlicing';
import { ElementDefinitionType } from './ElementDefinitionType';
import { Expression } from './Expression';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Money } from './Money';
import { ParameterDefinition } from './ParameterDefinition';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { SampledData } from './SampledData';
import { Signature } from './Signature';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';
import { UsageContext } from './UsageContext';

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinition extends BackboneElement {

  /**
   * Identifies additional names by which this element might also be known.
   */
  alias?: string[] | undefined;
  _alias?: Element[] | undefined;
  /**
   * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. For tooling simplicity, the base information must always be populated in element definitions in snap shots, even if it is the same.
   */
  base?: ElementDefinitionBase | undefined;
  /**
   * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
   */
  binding?: ElementDefinitionBinding | undefined;
  /**
   * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
   */
  code?: Coding[] | undefined;
  /**
   * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
   */
  condition?: string[] | undefined;
  _condition?: Element[] | undefined;
  /**
   * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
   */
  constraint?: ElementDefinitionConstraint[] | undefined;
  /**
   * ContentReferences can only be defined in specializations, not constrained types, and they cannot be changed and always reference the non-constrained definition.
   */
  contentReference?: string | undefined;
  _contentReference?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueBase64Binary?: string | undefined;
  _defaultValueBase64Binary?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueBoolean?: boolean | undefined;
  _defaultValueBoolean?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueCanonical?: string | undefined;
  _defaultValueCanonical?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueCode?: string | undefined;
  _defaultValueCode?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDate?: string | undefined;
  _defaultValueDate?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDateTime?: string | undefined;
  _defaultValueDateTime?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDecimal?: number | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueId?: string | undefined;
  _defaultValueId?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueInstant?: string | undefined;
  _defaultValueInstant?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueInteger?: number | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueMarkdown?: string | undefined;
  _defaultValueMarkdown?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueOid?: string | undefined;
  _defaultValueOid?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValuePositiveInt?: number | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueString?: string | undefined;
  _defaultValueString?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueTime?: string | undefined;
  _defaultValueTime?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueUnsignedInt?: number | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueUri?: string | undefined;
  _defaultValueUri?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueUrl?: string | undefined;
  _defaultValueUrl?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueUuid?: string | undefined;
  _defaultValueUuid?: Element | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueAddress?: Address | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueAge?: Age | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueAnnotation?: Annotation | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueAttachment?: Attachment | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueCodeableConcept?: CodeableConcept | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueCoding?: Coding | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueContactPoint?: ContactPoint | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueCount?: Count | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDistance?: Distance | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDuration?: Duration | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueHumanName?: HumanName | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueIdentifier?: Identifier | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueMoney?: Money | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValuePeriod?: Period | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueQuantity?: Quantity | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueRange?: Range | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueRatio?: Ratio | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueReference?: Reference | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueSampledData?: SampledData | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueSignature?: Signature | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueTiming?: Timing | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueContactDetail?: ContactDetail | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueContributor?: Contributor | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDataRequirement?: DataRequirement | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueExpression?: Expression | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueParameterDefinition?: ParameterDefinition | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueUsageContext?: UsageContext | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueDosage?: Dosage | undefined;
  /**
   * Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed, or changed in constraints on content models. Defining default values creates many difficulties in implementation (e.g. when is a value missing?). For these reasons, default values are (and should be) used extremely sparingly.
   * No default values are ever defined in the FHIR specification, nor can they be defined in constraints ("profiles") on data types or resources. This element only exists so that default values may be defined in logical models.
   */
  defaultValueMeta?: Meta | undefined;
  /**
   * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions in a profile.
   */
  definition?: string | undefined;
  _definition?: Element | undefined;
  /**
   * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
   */
  example?: ElementDefinitionExample[] | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedBase64Binary?: string | undefined;
  _fixedBase64Binary?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedBoolean?: boolean | undefined;
  _fixedBoolean?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedCanonical?: string | undefined;
  _fixedCanonical?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedCode?: string | undefined;
  _fixedCode?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDate?: string | undefined;
  _fixedDate?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDateTime?: string | undefined;
  _fixedDateTime?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDecimal?: number | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedId?: string | undefined;
  _fixedId?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedInstant?: string | undefined;
  _fixedInstant?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedInteger?: number | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedMarkdown?: string | undefined;
  _fixedMarkdown?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedOid?: string | undefined;
  _fixedOid?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedPositiveInt?: number | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedString?: string | undefined;
  _fixedString?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedTime?: string | undefined;
  _fixedTime?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedUnsignedInt?: number | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedUri?: string | undefined;
  _fixedUri?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedUrl?: string | undefined;
  _fixedUrl?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedUuid?: string | undefined;
  _fixedUuid?: Element | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedAddress?: Address | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedAge?: Age | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedAnnotation?: Annotation | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedAttachment?: Attachment | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedCodeableConcept?: CodeableConcept | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedCoding?: Coding | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedContactPoint?: ContactPoint | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedCount?: Count | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDistance?: Distance | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDuration?: Duration | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedHumanName?: HumanName | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedIdentifier?: Identifier | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedMoney?: Money | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedPeriod?: Period | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedQuantity?: Quantity | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedRange?: Range | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedRatio?: Ratio | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedReference?: Reference | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedSampledData?: SampledData | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedSignature?: Signature | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedTiming?: Timing | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedContactDetail?: ContactDetail | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedContributor?: Contributor | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDataRequirement?: DataRequirement | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedExpression?: Expression | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedParameterDefinition?: ParameterDefinition | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedUsageContext?: UsageContext | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedDosage?: Dosage | undefined;
  /**
   * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
   */
  fixedMeta?: Meta | undefined;
  /**
   * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
   */
  isModifier?: boolean | undefined;
  _isModifier?: Element | undefined;
  /**
   * Explains how that element affects the interpretation of the resource or element that contains it.
   */
  isModifierReason?: string | undefined;
  _isModifierReason?: Element | undefined;
  /**
   * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers might not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. In resource and data type definitions, if an element is at the root or has a parent that is 'mustSupport' and the minimum cardinality is 1 or the element is a modifier, it must be marked as isSummary=true.
   */
  isSummary?: boolean | undefined;
  _isSummary?: Element | undefined;
  /**
   * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
   */
  label?: string | undefined;
  _label?: Element | undefined;
  /**
   * Mappings are not necessarily specific enough for safe translation.
   */
  mapping?: ElementDefinitionMapping[] | undefined;
  /**
   * The maximum number of times this element is permitted to appear in the instance.
   */
  max?: string | undefined;
  _max?: Element | undefined;
  /**
   * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
   */
  maxLength?: number | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueDate?: string | undefined;
  _maxValueDate?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueDateTime?: string | undefined;
  _maxValueDateTime?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueInstant?: string | undefined;
  _maxValueInstant?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueTime?: string | undefined;
  _maxValueTime?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueDecimal?: number | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueInteger?: number | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValuePositiveInt?: number | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueUnsignedInt?: number | undefined;
  /**
   * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
   */
  maxValueQuantity?: Quantity | undefined;
  /**
   * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
   */
  meaningWhenMissing?: string | undefined;
  _meaningWhenMissing?: Element | undefined;
  /**
   * The minimum number of times this element SHALL appear in the instance.
   */
  min?: number | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueDate?: string | undefined;
  _minValueDate?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueDateTime?: string | undefined;
  _minValueDateTime?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueInstant?: string | undefined;
  _minValueInstant?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueTime?: string | undefined;
  _minValueTime?: Element | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueDecimal?: number | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueInteger?: number | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValuePositiveInt?: number | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueUnsignedInt?: number | undefined;
  /**
   * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a [Duration](datatypes.html#Duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
   */
  minValueQuantity?: Quantity | undefined;
  /**
   * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.  A profile on a type can always make musSupport = true if it is false in the base type but cannot make mustSupport = false if it is true in the base type.   This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.    Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
   */
  mustSupport?: boolean | undefined;
  _mustSupport?: Element | undefined;
  /**
   * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
   */
  orderMeaning?: string | undefined;
  _orderMeaning?: Element | undefined;
  /**
   * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
   */
  path: string;
  _path?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternBase64Binary?: string | undefined;
  _patternBase64Binary?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternBoolean?: boolean | undefined;
  _patternBoolean?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternCanonical?: string | undefined;
  _patternCanonical?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternCode?: string | undefined;
  _patternCode?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDate?: string | undefined;
  _patternDate?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDateTime?: string | undefined;
  _patternDateTime?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDecimal?: number | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternId?: string | undefined;
  _patternId?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternInstant?: string | undefined;
  _patternInstant?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternInteger?: number | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternMarkdown?: string | undefined;
  _patternMarkdown?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternOid?: string | undefined;
  _patternOid?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternPositiveInt?: number | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternString?: string | undefined;
  _patternString?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternTime?: string | undefined;
  _patternTime?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternUnsignedInt?: number | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternUri?: string | undefined;
  _patternUri?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternUrl?: string | undefined;
  _patternUrl?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternUuid?: string | undefined;
  _patternUuid?: Element | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternAddress?: Address | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternAge?: Age | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternAnnotation?: Annotation | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternAttachment?: Attachment | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternCodeableConcept?: CodeableConcept | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternCoding?: Coding | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternContactPoint?: ContactPoint | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternCount?: Count | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDistance?: Distance | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDuration?: Duration | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternHumanName?: HumanName | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternIdentifier?: Identifier | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternMoney?: Money | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternPeriod?: Period | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternQuantity?: Quantity | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternRange?: Range | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternRatio?: Ratio | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternReference?: Reference | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternSampledData?: SampledData | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternSignature?: Signature | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternTiming?: Timing | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternContactDetail?: ContactDetail | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternContributor?: Contributor | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDataRequirement?: DataRequirement | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternExpression?: Expression | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternParameterDefinition?: ParameterDefinition | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternUsageContext?: UsageContext | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternDosage?: Dosage | undefined;
  /**
   * Mostly used for fixing values of CodeableConcept. In general, pattern[x] is not intended for use with primitive types, where is has the same meaning as fixed[x].
   */
  patternMeta?: Meta | undefined;
  /**
   * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc.).
   */
  representation?: Array<'xmlAttr'|'xmlText'|'typeAttr'|'cdaText'|'xhtml'> | undefined;
  _representation?: Element[] | undefined;
  /**
   * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
   */
  requirements?: string | undefined;
  _requirements?: Element | undefined;
  /**
   * It is easy for a different short definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing short definitions in a profile.
   */
  short?: string | undefined;
  _short?: Element | undefined;
  /**
   * If set to true, an ancestor profile SHALL have a slicing definition with this name.  If set to false, no ancestor profile is permitted to have a slicing definition with this name.
   */
  sliceIsConstraining?: boolean | undefined;
  _sliceIsConstraining?: Element | undefined;
  /**
   * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
   */
  sliceName?: string | undefined;
  _sliceName?: Element | undefined;
  /**
   * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
   */
  slicing?: ElementDefinitionSlicing | undefined;
  /**
   * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
   */
  type?: ElementDefinitionType[] | undefined;

}