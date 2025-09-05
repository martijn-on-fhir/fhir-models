import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EpisodeOfCareStatusHistory extends BackboneElement {
  /**
   * The period during this EpisodeOfCare that the specific status applied.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * planned | waitlist | active | onhold | finished | cancelled.
   */
  @IsOptional()
  @IsIn(['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'])
  status?: ('planned'|'waitlist'|'active'|'onhold'|'finished'|'cancelled'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for EpisodeOfCareStatusHistory
   */
  constructor(source: Partial<EpisodeOfCareStatusHistory> = {}) {
    super(source);
  }
}
