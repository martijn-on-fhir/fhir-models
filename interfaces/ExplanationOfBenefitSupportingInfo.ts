import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Element } from './Element';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface ExplanationOfBenefitSupportingInfo extends BackboneElement {

  /**
   * This may contain a category for the local bill type codes.
   */
  category: CodeableConcept;
  /**
   * This may contain the local bill type codes such as the US UB-04 bill type code.
   */
  code?: CodeableConcept | undefined;
  /**
   * For example: the reason for the additional stay, or why a tooth is  missing.
   */
  reason?: Coding | undefined;
  /**
   * A number to uniquely identify supporting information entries.
   */
  sequence: number;
  /**
   * The date when or period to which this information refers.
   */
  timingDate?: string | undefined;
  _timingDate?: Element | undefined;
  /**
   * The date when or period to which this information refers.
   */
  timingPeriod?: Period | undefined;
  /**
   * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * Could be used to provide references to other resources, document. For example, could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueReference?: Reference | undefined;

}