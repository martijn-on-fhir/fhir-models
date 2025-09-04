import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { ClaimItemDetail } from './ClaimItemDetail';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimItem extends BackboneElement {
  /**
   * For example: Providing a tooth code, allows an insurer to identify a provider performing a filling on a tooth that was p
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /**
   * CareTeam members related to this service or product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  careTeamSequence?: number[];

  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimItemDetail)
  detail?: ClaimItemDetail[];

  /**
   * Diagnosis applicable for this service or product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  diagnosisSequence?: number[];

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  encounter?: Reference[];

  /**
   * To show a 10% senior's discount, the value entered is: 0.90 (1.00 - 0.10).
   */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /**
   * Exceptions, special conditions and supporting information applicable for this service or product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  informationSequence?: number[];

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
   * Procedures applicable for this service or product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  procedureSequence?: number[];

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
   * The number of repetitions of a service or product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * The type of revenue or cost center providing the product and/or service.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  revenue?: CodeableConcept;

  /**
   * A number to uniquely identify item entries.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

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
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  subSite?: CodeableConcept[];

  /**
   * Unique Device Identifiers associated with this line item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  udi?: Reference[];

  /**
   * If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /**
   * Constructor for ClaimItem
   */
  constructor(source: Partial<ClaimItem> = {}) {
    super(source);
  }
}
