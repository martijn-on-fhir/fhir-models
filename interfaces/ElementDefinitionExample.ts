import { Address } from './Address';
import { Age } from './Age';
import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
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
 * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
 */
export interface ElementDefinitionExample extends Element {

  /**
   * Describes the purpose of this example amoung the set of examples.
   */
  label: string;
  _label?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueBase64Binary?: string | undefined;
  _valueBase64Binary?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCanonical?: string | undefined;
  _valueCanonical?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCode?: string | undefined;
  _valueCode?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDecimal?: number | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueId?: string | undefined;
  _valueId?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueInstant?: string | undefined;
  _valueInstant?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueInteger?: number | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMarkdown?: string | undefined;
  _valueMarkdown?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueOid?: string | undefined;
  _valueOid?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valuePositiveInt?: number | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUnsignedInt?: number | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUrl?: string | undefined;
  _valueUrl?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUuid?: string | undefined;
  _valueUuid?: Element | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAddress?: Address | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAge?: Age | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAnnotation?: Annotation | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCoding?: Coding | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContactPoint?: ContactPoint | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueCount?: Count | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDistance?: Distance | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDuration?: Duration | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueHumanName?: HumanName | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueIdentifier?: Identifier | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMoney?: Money | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valuePeriod?: Period | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRange?: Range | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRatio?: Ratio | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueReference?: Reference | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueSampledData?: SampledData | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueSignature?: Signature | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTiming?: Timing | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContactDetail?: ContactDetail | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueContributor?: Contributor | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDataRequirement?: DataRequirement | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueExpression?: Expression | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueParameterDefinition?: ParameterDefinition | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueUsageContext?: UsageContext | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueDosage?: Dosage | undefined;
  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
  valueMeta?: Meta | undefined;

}