import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { VisionPrescriptionLensSpecification } from '../backbone/VisionPrescriptionLensSpecification';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class VisionPrescription extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'VisionPrescription' as const;

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
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years fro
   */
  @IsOptional()
  @IsString()
  dateWritten?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dateWritten?: Element;

  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * A unique identifier assigned to this vision prescription.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisionPrescriptionLensSpecification)
  lensSpecification?: VisionPrescriptionLensSpecification[];

  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  prescriber?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['active', 'cancelled', 'draft', 'entered-in-error'])
  status?: ('active'|'cancelled'|'draft'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for VisionPrescription
   */
  constructor(source: Partial<VisionPrescription> = {}) {
    super(source);
    this.resourceType = 'VisionPrescription';
  }
}
