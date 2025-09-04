import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ConsentPolicy } from '../backbone/ConsentPolicy';
import { ConsentProvision } from '../backbone/ConsentProvision';
import { ConsentVerification } from '../backbone/ConsentVerification';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Consent extends DomainResource implements fhir.Consent {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Consent' as const;

  /**
   * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * This is not the time of the original consent, but the time that this statement was made or derived.
   */
  @IsOptional()
  @IsString()
  dateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dateTime?: Element;

  /**
   * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The organization that manages the consent, and the framework within which it is executed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  organization?: Reference[];

  /**
   * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be som
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /**
   * The references to the policies that are included in this consent scope. Policies may be organizational, but are often de
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentPolicy)
  policy?: ConsentPolicy[];

  /**
   * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  policyRule?: CodeableConcept;

  /**
   * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ConsentProvision)
  provision?: ConsentProvision;

  /**
   * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  scope?: CodeableConcept;

  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (Docu
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  sourceAttachment?: Attachment;

  /**
   * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (Docu
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sourceReference?: Reference;

  /**
   * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the 
   */
  @IsOptional()
  @IsIn(['draft', 'proposed', 'active', 'rejected', 'inactive', 'entered-in-error'])
  status?: ('draft'|'proposed'|'active'|'rejected'|'inactive'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConsentVerification)
  verification?: ConsentVerification[];

  /**
   * Constructor for Consent
   */
  constructor(source: Partial<Consent> = {}) {
    super(source);
    this.resourceType = 'Consent';
  }
}
