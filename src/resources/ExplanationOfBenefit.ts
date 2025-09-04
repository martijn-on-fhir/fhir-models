import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitAccident } from '../backbone/ExplanationOfBenefitAccident';
import { ExplanationOfBenefitAddItem } from '../backbone/ExplanationOfBenefitAddItem';
import { ExplanationOfBenefitBenefitBalance } from '../backbone/ExplanationOfBenefitBenefitBalance';
import { ExplanationOfBenefitCareTeam } from '../backbone/ExplanationOfBenefitCareTeam';
import { ExplanationOfBenefitDiagnosis } from '../backbone/ExplanationOfBenefitDiagnosis';
import { ExplanationOfBenefitInsurance } from '../backbone/ExplanationOfBenefitInsurance';
import { ExplanationOfBenefitItem } from '../backbone/ExplanationOfBenefitItem';
import { ExplanationOfBenefitItemAdjudication } from '../backbone/ExplanationOfBenefitItemAdjudication';
import { ExplanationOfBenefitPayee } from '../backbone/ExplanationOfBenefitPayee';
import { ExplanationOfBenefitPayment } from '../backbone/ExplanationOfBenefitPayment';
import { ExplanationOfBenefitProcedure } from '../backbone/ExplanationOfBenefitProcedure';
import { ExplanationOfBenefitProcessNote } from '../backbone/ExplanationOfBenefitProcessNote';
import { ExplanationOfBenefitRelated } from '../backbone/ExplanationOfBenefitRelated';
import { ExplanationOfBenefitSupportingInfo } from '../backbone/ExplanationOfBenefitSupportingInfo';
import { ExplanationOfBenefitTotal } from '../backbone/ExplanationOfBenefitTotal';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExplanationOfBenefit extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ExplanationOfBenefit' as const;

  /**
   * Details of a accident which resulted in injuries which required the products and services listed in the claim.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ExplanationOfBenefitAccident)
  accident?: ExplanationOfBenefitAccident;

  /**
   * The first-tier service adjudications for payor added product or service lines.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitAddItem)
  addItem?: ExplanationOfBenefitAddItem[];

  /**
   * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitItemAdjudication)
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /**
   * Balance by Benefit Category.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitBenefitBalance)
  benefitBalance?: ExplanationOfBenefitBenefitBalance[];

  /**
   * Not applicable when use=claim.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  benefitPeriod?: Period;

  /**
   * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and prodeterm
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  billablePeriod?: Period;

  /**
   * The members of the team who provided the products and services.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitCareTeam)
  careTeam?: ExplanationOfBenefitCareTeam[];

  /**
   * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claim?: Reference;

  /**
   * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization respo
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claimResponse?: Reference;

  /**
   * This field is independent of the date of creation of the resource as it may reflect the creation date of a source docume
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * Information about diagnoses relevant to the claim items.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitDiagnosis)
  diagnosis?: ExplanationOfBenefitDiagnosis[];

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
   * Individual who created the claim, predetermination or preauthorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /**
   * Facility where the services were provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

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
   * This field is only used for preauthorizations.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserveRequested?: CodeableConcept;

  /**
   * A unique identifier assigned to this explanation of benefit.
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
  @Type(() => ExplanationOfBenefitInsurance)
  insurance?: ExplanationOfBenefitInsurance[];

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
  @Type(() => ExplanationOfBenefitItem)
  item?: ExplanationOfBenefitItem[];

  /**
   * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the p
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  originalPrescription?: Reference;

  /**
   * Constructor for ExplanationOfBenefit
   */
  constructor(source: Partial<ExplanationOfBenefit> = {}) {
    super(source);
    this.resourceType = 'ExplanationOfBenefit';
  }
}
