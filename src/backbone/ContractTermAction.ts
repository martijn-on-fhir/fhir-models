import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContractTermActionSubject } from './ContractTermActionSubject';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { Timing } from './Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTermAction extends BackboneElement {
  /**
   * Encounter or Episode with primary association to specified term activity.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /**
   * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or Quest
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  contextLinkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _contextLinkId?: Element[];

  /**
   * True if the term prohibits the  action.
   */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doNotPerform?: Element;

  /**
   * Reason or purpose for the action stipulated by this Contract Provision.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intent?: CodeableConcept;

  /**
   * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _linkId?: Element[];

  /**
   * Comments made about the term action made by the requester, performer, subject or other participants.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * When action happens.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * When action happens.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * When action happens.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /**
   * Indicates who or what is being asked to perform (or not perform) the ction.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenc
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  performerLinkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _performerLinkId?: Element[];

  /**
   * The type of role or competency of an individual desired or required to perform or not perform the action.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  performerRole?: CodeableConcept;

  /**
   * The type of individual that is desired or required to perform or not perform the action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept[];

  /**
   * Describes why the action is to be performed or not performed in textual form.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reason?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _reason?: Element[];

  /**
   * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenc
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reasonLinkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _reasonLinkId?: Element[];

  /**
   * Indicates another resource whose existence justifies permitting or not permitting this action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * Who or what initiated the action and has responsibility for its activation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  requester?: Reference[];

  /**
   * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or Quest
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  requesterLinkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _requesterLinkId?: Element[];

  /**
   * Security labels that protects the action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  securityLabelNumber?: number[];

  /**
   * Current state of the term action.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * Entity of the action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContractTermActionSubject)
  subject?: ContractTermActionSubject[];

  /**
   * Constructor for ContractTermAction
   */
  constructor(source: Partial<ContractTermAction> = {}) {
    super(source);
  }
}
