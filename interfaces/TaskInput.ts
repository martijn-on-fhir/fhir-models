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
 * Additional information that may be needed in the execution of the task.
 */
export interface TaskInput extends BackboneElement {

  /**
   * If referencing a BPMN workflow or Protocol, the "system" is the URL for the workflow definition and the code is the "name" of the required input.
   */
  type: CodeableConcept;
  /**
   * The value of the input parameter as a basic type.
   */
  valueBase64Binary?: string | undefined;
  _valueBase64Binary?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueCanonical?: string | undefined;
  _valueCanonical?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueCode?: string | undefined;
  _valueCode?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDecimal?: number | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueId?: string | undefined;
  _valueId?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueInstant?: string | undefined;
  _valueInstant?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueInteger?: number | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueMarkdown?: string | undefined;
  _valueMarkdown?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueOid?: string | undefined;
  _valueOid?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valuePositiveInt?: number | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueUnsignedInt?: number | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueUrl?: string | undefined;
  _valueUrl?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueUuid?: string | undefined;
  _valueUuid?: Element | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueAddress?: Address | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueAge?: Age | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueAnnotation?: Annotation | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueCoding?: Coding | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueContactPoint?: ContactPoint | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueCount?: Count | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDistance?: Distance | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDuration?: Duration | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueHumanName?: HumanName | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueIdentifier?: Identifier | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueMoney?: Money | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valuePeriod?: Period | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueRange?: Range | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueRatio?: Ratio | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueReference?: Reference | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueSampledData?: SampledData | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueSignature?: Signature | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueTiming?: Timing | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueContactDetail?: ContactDetail | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueContributor?: Contributor | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDataRequirement?: DataRequirement | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueExpression?: Expression | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueParameterDefinition?: ParameterDefinition | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueUsageContext?: UsageContext | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueDosage?: Dosage | undefined;
  /**
   * The value of the input parameter as a basic type.
   */
  valueMeta?: Meta | undefined;

}