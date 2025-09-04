import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PatientLink extends BackboneElement implements fhir.PatientLink {
  /**
   * Referencing a RelatedPerson here removes the need to use a Person record to associate a Patient and RelatedPerson as the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  other?: Reference;

  /**
   * The type of link between this patient resource and another patient resource.
   */
  @IsOptional()
  @IsIn(['replaced-by', 'replaces', 'refer', 'seealso'])
  type?: ('replaced-by'|'replaces'|'refer'|'seealso');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for PatientLink
   */
  constructor(source: Partial<PatientLink> = {}) {
    super(source);
  }
}
