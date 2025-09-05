import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { ClaimResponseAddItemDetail } from './ClaimResponseAddItemDetail';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseAddItem extends BackboneElement {
  /**
   * The adjudication results.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * For example: Providing a tooth code allows an insurer to identify a provider performing a filling on a tooth that was pr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /**
   * The second-tier service adjudications for payor added services.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseAddItemDetail)
  detail?: ClaimResponseAddItemDetail[];

  /**
   * The sequence number of the details within the claim item which this line is intended to replace.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  detailSequence?: number[];

  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /**
   * Claim items which this service line is intended to replace.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  itemSequence?: number[];

  /**
   * Where the product or service was provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  locationCodeableConcept?: CodeableConcept;

  /**
   * Where the product or service was provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  locationAddress?: Address;

  /**
   * Where the product or service was provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  locationReference?: Reference;

  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /**
   * For example, the formula: quantity * unitPrice * factor  = net. Quantity and factor are assumed to be 1 if not supplied.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  noteNumber?: number[];

  /**
   * If this is an actual service or product line, i.e. not a Group, then use code to indicate the Professional Service or Pr
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /**
   * For example: Neonatal program, child dental program or drug users recovery program.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programCode?: CodeableConcept[];

  /**
   * The providers who are authorized for the services rendered to the patient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  provider?: Reference[];

  /**
   * The number of repetitions of a service or product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  @IsOptional()
  @IsString()
  servicedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _servicedDate?: Element;

  /**
   * The date or dates when the service or product was supplied, performed or completed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicedPeriod?: Period;

  /**
   * The sequence number of the sub-details within the details within the claim item which this line is intended to replace.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  subdetailSequence?: number[];

  /**
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subSite?: CodeableConcept[];

  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /**
   * Constructor for ClaimResponseAddItem
   */
  constructor(source: Partial<ClaimResponseAddItem> = {}) {
    super(source);
  }
}
