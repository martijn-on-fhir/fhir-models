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
import { FhirResource } from './FhirResource';
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
 * A parameter passed to or received from the operation.
 */
export interface ParametersParameter extends BackboneElement {

  /**
   * The name of the parameter (reference to the operation definition).
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Only one level of nested parameters is allowed.
   */
  part?: ParametersParameter[] | undefined;
  /**
   * When resolving references in resources, the operation definition may specify how references may be resolved between parameters. If a reference cannot be resolved between the parameters, the application should fall back to it's general resource resolution methods.
   */
  resource?: FhirResource | undefined;
  /**
   * If the parameter is a data type.
   */
  valueBase64Binary?: string | undefined;
  _valueBase64Binary?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueCanonical?: string | undefined;
  _valueCanonical?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueCode?: string | undefined;
  _valueCode?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDate?: string | undefined;
  _valueDate?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDecimal?: number | undefined;
  /**
   * If the parameter is a data type.
   */
  valueId?: string | undefined;
  _valueId?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueInstant?: string | undefined;
  _valueInstant?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueInteger?: number | undefined;
  /**
   * If the parameter is a data type.
   */
  valueMarkdown?: string | undefined;
  _valueMarkdown?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueOid?: string | undefined;
  _valueOid?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valuePositiveInt?: number | undefined;
  /**
   * If the parameter is a data type.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueTime?: string | undefined;
  _valueTime?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueUnsignedInt?: number | undefined;
  /**
   * If the parameter is a data type.
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueUrl?: string | undefined;
  _valueUrl?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueUuid?: string | undefined;
  _valueUuid?: Element | undefined;
  /**
   * If the parameter is a data type.
   */
  valueAddress?: Address | undefined;
  /**
   * If the parameter is a data type.
   */
  valueAge?: Age | undefined;
  /**
   * If the parameter is a data type.
   */
  valueAnnotation?: Annotation | undefined;
  /**
   * If the parameter is a data type.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * If the parameter is a data type.
   */
  valueCodeableConcept?: CodeableConcept | undefined;
  /**
   * If the parameter is a data type.
   */
  valueCoding?: Coding | undefined;
  /**
   * If the parameter is a data type.
   */
  valueContactPoint?: ContactPoint | undefined;
  /**
   * If the parameter is a data type.
   */
  valueCount?: Count | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDistance?: Distance | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDuration?: Duration | undefined;
  /**
   * If the parameter is a data type.
   */
  valueHumanName?: HumanName | undefined;
  /**
   * If the parameter is a data type.
   */
  valueIdentifier?: Identifier | undefined;
  /**
   * If the parameter is a data type.
   */
  valueMoney?: Money | undefined;
  /**
   * If the parameter is a data type.
   */
  valuePeriod?: Period | undefined;
  /**
   * If the parameter is a data type.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * If the parameter is a data type.
   */
  valueRange?: Range | undefined;
  /**
   * If the parameter is a data type.
   */
  valueRatio?: Ratio | undefined;
  /**
   * If the parameter is a data type.
   */
  valueReference?: Reference | undefined;
  /**
   * If the parameter is a data type.
   */
  valueSampledData?: SampledData | undefined;
  /**
   * If the parameter is a data type.
   */
  valueSignature?: Signature | undefined;
  /**
   * If the parameter is a data type.
   */
  valueTiming?: Timing | undefined;
  /**
   * If the parameter is a data type.
   */
  valueContactDetail?: ContactDetail | undefined;
  /**
   * If the parameter is a data type.
   */
  valueContributor?: Contributor | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDataRequirement?: DataRequirement | undefined;
  /**
   * If the parameter is a data type.
   */
  valueExpression?: Expression | undefined;
  /**
   * If the parameter is a data type.
   */
  valueParameterDefinition?: ParameterDefinition | undefined;
  /**
   * If the parameter is a data type.
   */
  valueRelatedArtifact?: RelatedArtifact | undefined;
  /**
   * If the parameter is a data type.
   */
  valueTriggerDefinition?: TriggerDefinition | undefined;
  /**
   * If the parameter is a data type.
   */
  valueUsageContext?: UsageContext | undefined;
  /**
   * If the parameter is a data type.
   */
  valueDosage?: Dosage | undefined;
  /**
   * If the parameter is a data type.
   */
  valueMeta?: Meta | undefined;

}