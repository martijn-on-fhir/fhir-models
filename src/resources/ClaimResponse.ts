import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { ClaimResponseAddItem } from '../backbone/ClaimResponseAddItem';
import { ClaimResponseError } from '../backbone/ClaimResponseError';
import { ClaimResponseInsurance } from '../backbone/ClaimResponseInsurance';
import { ClaimResponseItem } from '../backbone/ClaimResponseItem';
import { ClaimResponseItemAdjudication } from '../backbone/ClaimResponseItemAdjudication';
import { ClaimResponsePayment } from '../backbone/ClaimResponsePayment';
import { ClaimResponseProcessNote } from '../backbone/ClaimResponseProcessNote';
import { ClaimResponseTotal } from '../backbone/ClaimResponseTotal';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponse extends DomainResource implements fhir.ClaimResponse {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ClaimResponse' as const;

  /**
   * The first-tier service adjudications for payor added product or service lines.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseAddItem)
  addItem?: ClaimResponseAddItem[];

  /**
   * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItemAdjudication)
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * For example: professional reports, documents, images, clinical resources, or accident reports.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  communicationRequest?: Reference[];

  /**
   * The date this resource was created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * A human readable description of the status of the adjudication.
   */
  @IsOptional()
  @IsString()
  disposition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _disposition?: Element;

  /**
   * If the request contains errors then an error element should be provided and no adjudication related sections (item, addI
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseError)
  error?: ClaimResponseError[];

  /**
   * Needed to permit insurers to include the actual form.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  form?: Attachment;

  /**
   * May be needed to identify specific jurisdictional forms.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  formCode?: CodeableConcept;

  /**
   * Fund would be release by a future claim quoting the preAuthRef of this response. Examples of values include: provider, p
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserve?: CodeableConcept;

  /**
   * A unique identifier assigned to this claim response.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed i
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseInsurance)
  insurance?: ClaimResponseInsurance[];

  /**
   * The party responsible for authorization, adjudication and reimbursement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /**
   * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseItem)
  item?: ClaimResponseItem[];

  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed
   */
  @IsOptional()
  @IsIn(['queued', 'complete', 'error', 'partial'])
  outcome?: ('queued'|'complete'|'error'|'partial');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _outcome?: Element;

  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actu
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Type of Party to be reimbursed: subscriber, provider, other.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  payeeType?: CodeableConcept;

  /**
   * Payment details for the adjudication of the claim.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ClaimResponsePayment)
  payment?: ClaimResponsePayment;

  /**
   * The time frame during which this authorization is effective.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  preAuthPeriod?: Period;

  /**
   * This value is only present on preauthorization adjudications.
   */
  @IsOptional()
  @IsString()
  preAuthRef?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preAuthRef?: Element;

  /**
   * A note that describes or explains adjudication results in a human readable form.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimResponseProcessNote)
  processNote?: ClaimResponseProcessNote[];

  /**
   * Original request resource reference.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * Constructor for ClaimResponse
   */
  constructor(source: Partial<ClaimResponse> = {}) {
    super(source);
    this.resourceType = 'ClaimResponse';
  }
}
