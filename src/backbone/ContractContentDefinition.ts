import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractContentDefinition extends BackboneElement implements fhir.ContractContentDefinition {
  /**
   * A copyright statement relating to Contract precursor content. Copyright statements are generally legal restrictions on t
   */
  @IsOptional()
  @IsString()
  copyright?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _copyright?: Element;

  /**
   * The date (and optionally time) when the contract was published. The date must change when the business version changes a
   */
  @IsOptional()
  @IsString()
  publicationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publicationDate?: Element;

  /**
   * amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | r
   */
  @IsOptional()
  @IsString()
  publicationStatus?: ('amended'|'appended'|'cancelled'|'disputed'|'entered-in-error'|'executable'|'executed'|'negotiable'|'offered'|'policy'|'rejected'|'renewed'|'revoked'|'resolved'|'terminated');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publicationStatus?: Element;

  /**
   * The  individual or organization that published the Contract precursor content.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  publisher?: Reference;

  /**
   * Detailed Precusory content type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /**
   * Precusory content structure and use, i.e., a boilerplate, template, application for a contract such as an insurance poli
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ContractContentDefinition
   */
  constructor(source: Partial<ContractContentDefinition> = {}) {
    super(source);
  }
}
