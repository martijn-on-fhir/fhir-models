import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { RequestGroupAction } from '../backbone/RequestGroupAction';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RequestGroup extends DomainResource implements fhir.RequestGroup {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'RequestGroup' as const;

  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequestGroupAction)
  action?: RequestGroupAction[];

  /**
   * Provides a reference to the author of the request group.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * Indicates when the request group was created.
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Describes the context of the request group, if any.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common re
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /**
   * Allows a service to provide a unique, business identifier for the request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesCanonical?: Element[];

  /**
   * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesUri?: Element[];

  /**
   * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'directive', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Indicates how quickly the request should be addressed with respect to other requests.
   */
  @IsOptional()
  @IsIn(['routine', 'urgent', 'asap', 'stat'])
  priority?: ('routine'|'urgent'|'asap'|'stat');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _priority?: Element;

  /**
   * Describes the reason for the request group in coded or textual form.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this request group.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /**
   * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'])
  status?: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The subject for which the request group was created.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for RequestGroup
   */
  constructor(source: Partial<RequestGroup> = {}) {
    super(source);
    this.resourceType = 'RequestGroup';
  }
}
