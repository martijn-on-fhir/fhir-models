import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export interface ClaimSupportingInfo extends BackboneElement {

  /**
   * This may contain a category for the local bill type codes.
   */
  category: CodeableConcept;
  /**
   * System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought.
   */
  code?: CodeableConcept | undefined;
  /**
   * For example: the reason for the additional stay, or why a tooth is  missing.
   */
  reason?: CodeableConcept | undefined;
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
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueQuantity?: Quantity | undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueAttachment?: Attachment | undefined;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  valueReference?: Reference | undefined;

}