import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { AuditEventEntityDetail } from './AuditEventEntityDetail';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AuditEventEntity extends BackboneElement implements fhir.AuditEventEntity {
  /**
   * Text that describes the entity in more detail.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Tagged value pairs for conveying additional information about the entity.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AuditEventEntityDetail)
  detail?: AuditEventEntityDetail[];

  /**
   * This can be used to provide an audit trail for data, over time, as it passes through the system.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  lifecycle?: Coding;

  /**
   * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple sy
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.
   */
  @IsOptional()
  @IsString()
  query?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _query?: Element;

  /**
   * Code representing the role the entity played in the event being audited.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  role?: Coding;

  /**
   * Copied from entity meta security tags.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  securityLabel?: Coding[];

  /**
   * This value is distinct from the user's role or any user relationship to the entity.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /**
   * Identifies a specific instance of the entity. The reference should be version specific.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  what?: Reference;

  /**
   * Constructor for AuditEventEntity
   */
  constructor(source: Partial<AuditEventEntity> = {}) {
    super(source);
  }
}
