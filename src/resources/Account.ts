import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AccountCoverage } from '../backbone/AccountCoverage';
import { AccountGuarantor } from '../backbone/AccountGuarantor';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Account extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Account' as const;

  /**
   * Typically. this may be some form of insurance, internal charges, or self-pay. Local or jurisdictional business rules may
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountCoverage)
  coverage?: AccountCoverage[];

  /**
   * Provides additional information about what the account tracks and how it is used.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The parties responsible for balancing the account if other payment options fall short.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AccountGuarantor)
  guarantor?: AccountGuarantor[];

  /**
   * Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number)
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Name used for the account when displaying it to humans in reports, etc.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Indicates the service area, hospital, department, etc. with responsibility for managing the Account.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /**
   * Reference to a parent Account.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /**
   * It is possible for transactions to be posted outside the service period, as long as the service was provided within the 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicePeriod?: Period;

  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the 
   */
  @IsOptional()
  @IsIn(['active', 'inactive', 'entered-in-error', 'on-hold', 'unknown'])
  status?: ('active'|'inactive'|'entered-in-error'|'on-hold'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Accounts can be applied to non-patients for tracking other non-patient related activities, such as group services (patie
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /**
   * Categorizes the account for reporting and searching purposes.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for Account
   */
  constructor(source: Partial<Account> = {}) {
    super(source);
    this.resourceType = 'Account';
  }
}
