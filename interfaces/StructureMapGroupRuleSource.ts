import { Address } from './Address';
import { Age } from './Age';
import { Annotation } from './Annotation';
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
 * Source inputs to the mapping.
 */
export interface StructureMapGroupRuleSource extends BackboneElement {

  /**
   * FHIRPath expression  - must be true or the mapping engine throws an error instead of completing.
   */
  check?: string | undefined;
  _check?: Element | undefined;
  /**
   * FHIRPath expression  - must be true or the rule does not apply.
   */
  condition?: string | undefined;
  _condition?: Element | undefined;
  /**
   * Type or variable this rule applies to.
   */
  context: string;
  _context?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueBase64Binary?: string | undefined;
  _defaultValueBase64Binary?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueBoolean?: boolean | undefined;
  _defaultValueBoolean?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueCanonical?: string | undefined;
  _defaultValueCanonical?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueCode?: string | undefined;
  _defaultValueCode?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDate?: string | undefined;
  _defaultValueDate?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDateTime?: string | undefined;
  _defaultValueDateTime?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDecimal?: number | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueId?: string | undefined;
  _defaultValueId?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueInstant?: string | undefined;
  _defaultValueInstant?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueInteger?: number | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueMarkdown?: string | undefined;
  _defaultValueMarkdown?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueOid?: string | undefined;
  _defaultValueOid?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValuePositiveInt?: number | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueString?: string | undefined;
  _defaultValueString?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueTime?: string | undefined;
  _defaultValueTime?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueUnsignedInt?: number | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueUri?: string | undefined;
  _defaultValueUri?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueUrl?: string | undefined;
  _defaultValueUrl?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueUuid?: string | undefined;
  _defaultValueUuid?: Element | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueAddress?: Address | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueAge?: Age | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueAnnotation?: Annotation | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueAttachment?: Attachment | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueCodeableConcept?: CodeableConcept | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueCoding?: Coding | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueContactPoint?: ContactPoint | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueCount?: Count | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDistance?: Distance | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDuration?: Duration | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueHumanName?: HumanName | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueIdentifier?: Identifier | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueMoney?: Money | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValuePeriod?: Period | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueQuantity?: Quantity | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueRange?: Range | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueRatio?: Ratio | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueReference?: Reference | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueSampledData?: SampledData | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueSignature?: Signature | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueTiming?: Timing | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueContactDetail?: ContactDetail | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueContributor?: Contributor | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDataRequirement?: DataRequirement | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueExpression?: Expression | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueParameterDefinition?: ParameterDefinition | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueUsageContext?: UsageContext | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueDosage?: Dosage | undefined;
  /**
   * If there's a default value on an item that can repeat, it will only be used once.
   */
  defaultValueMeta?: Meta | undefined;
  /**
   * Optional field for this source.
   */
  element?: string | undefined;
  _element?: Element | undefined;
  /**
   * How to handle the list mode for this element.
   */
  listMode?: ('first'|'not_first'|'last'|'not_last'|'only_one') | undefined;
  _listMode?: Element | undefined;
  /**
   * This is typically used for recording that something Is not transformed to the target for some reason.
   */
  logMessage?: string | undefined;
  _logMessage?: Element | undefined;
  /**
   * Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value).
   */
  max?: string | undefined;
  _max?: Element | undefined;
  /**
   * Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content.
   */
  min?: number | undefined;
  /**
   * Specified type for the element. This works as a condition on the mapping - use for polymorphic elements.
   */
  type?: string | undefined;
  _type?: Element | undefined;
  /**
   * Named context for field, if a field is specified.
   */
  variable?: string | undefined;
  _variable?: Element | undefined;

}