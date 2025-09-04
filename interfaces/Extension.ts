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
 * Optional Extension Element - found in all resources.
 */
export interface Extension extends Element {

  /**
   * The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.
   */
  url: string;
  _url?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBase64Binary?: string | undefined;
  _valueBase64Binary?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCanonical?: string | undefined;
  _valueCanonical?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCode?: string | undefined;
  _valueCode?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDecimal?: number | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueId?: string | undefined;
  _valueId?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInstant?: string | undefined;
  _valueInstant?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueInteger?: number | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMarkdown?: string | undefined;
  _valueMarkdown?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueOid?: string | undefined;
  _valueOid?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePositiveInt?: number | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUnsignedInt?: number | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUrl?: string | undefined;
  _valueUrl?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUuid?: string | undefined;
  _valueUuid?: Element | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAddress?: Address | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAge?: Age | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAnnotation?: Annotation | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueAttachment?: Attachment | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCoding?: Coding | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactPoint?: ContactPoint | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueCount?: Count | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDistance?: Distance | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDuration?: Duration | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueHumanName?: HumanName | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueIdentifier?: Identifier | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMoney?: Money | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valuePeriod?: Period | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueQuantity?: Quantity | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRange?: Range | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRatio?: Ratio | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: Reference | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSampledData?: SampledData | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueSignature?: Signature | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTiming?: Timing | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContactDetail?: ContactDetail | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueContributor?: Contributor | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDataRequirement?: DataRequirement | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueExpression?: Expression | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueParameterDefinition?: ParameterDefinition | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueUsageContext?: UsageContext | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueDosage?: Dosage | undefined;
  /**
   * Value of extension - must be one of a constrained set of the data types (see [Extensibility](extensibility.html) for a list).
   */
  valueMeta?: Meta | undefined;

}