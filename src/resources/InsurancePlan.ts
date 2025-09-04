import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { InsurancePlanContact } from '../backbone/InsurancePlanContact';
import { InsurancePlanCoverage } from '../backbone/InsurancePlanCoverage';
import { InsurancePlanPlan } from '../backbone/InsurancePlanPlan';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class InsurancePlan extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'InsurancePlan' as const;

  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behal
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  administeredBy?: Reference;

  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but 
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _alias?: Element[];

  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine wh
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanContact)
  contact?: InsurancePlanContact[];

  /**
   * Details about the coverage offered by the insurance product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanCoverage)
  coverage?: InsurancePlanCoverage[];

  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  coverageArea?: Reference[];

  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and prop
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be locat
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance ca
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  ownedBy?: Reference;

  /**
   * The period of time that the health insurance product is available.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Details about an insurance plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InsurancePlanPlan)
  plan?: InsurancePlanPlan[];

  /**
   * The current state of the health insurance product.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The kind of health insurance product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for InsurancePlan
   */
  constructor(source: Partial<InsurancePlan> = {}) {
    super(source);
    this.resourceType = 'InsurancePlan';
  }
}
