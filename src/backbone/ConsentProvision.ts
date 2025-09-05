import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ConsentProvisionActor } from './ConsentProvisionActor';
import { ConsentProvisionData } from './ConsentProvisionData';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConsentProvision extends BackboneElement {
  /**
   * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the onl
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  action?: CodeableConcept[];

  /**
   * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitti
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentProvisionActor)
  actor?: ConsentProvisionActor[];

  /**
   * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or docum
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  class?: Coding[];

  /**
   * Typical use of this is a Document code with class = CDA.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * The resources controlled by this rule if specific resources are referenced.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentProvisionData)
  data?: ConsentProvisionData[];

  /**
   * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  dataPeriod?: Period;

  /**
   * The timeframe in this rule is valid.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Rules which provide exceptions to the base rule or subrules.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentProvision)
  provision?: ConsentProvision[];

  /**
   * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  purpose?: Coding[];

  /**
   * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. fo
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  securityLabel?: Coding[];

  /**
   * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested
   */
  @IsOptional()
  @IsIn(['deny', 'permit'])
  type?: ('deny'|'permit');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for ConsentProvision
   */
  constructor(source: Partial<ConsentProvision> = {}) {
    super(source);
  }
}
