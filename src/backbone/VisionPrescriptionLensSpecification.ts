import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { VisionPrescriptionLensSpecificationPrism } from './VisionPrescriptionLensSpecificationPrism';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class VisionPrescriptionLensSpecification extends BackboneElement {
  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  @IsOptional()
  @IsNumber()
  add?: number;

  /**
   * The limits are +180 and -180 degrees.
   */
  @IsOptional()
  @IsNumber()
  axis?: number;

  /**
   * Back curvature measured in millimetres.
   */
  @IsOptional()
  @IsNumber()
  backCurve?: number;

  /**
   * Brand recommendations or restrictions.
   */
  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _brand?: Element;

  /**
   * Special color or pattern.
   */
  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _color?: Element;

  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  @IsOptional()
  @IsNumber()
  cylinder?: number;

  /**
   * Contact lens diameter measured in millimetres.
   */
  @IsOptional()
  @IsNumber()
  diameter?: number;

  /**
   * The recommended maximum wear period for the lens.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  duration?: Quantity;

  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  @IsOptional()
  @IsIn(['right', 'left'])
  eye?: ('right'|'left');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _eye?: Element;

  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  @IsOptional()
  @IsNumber()
  power?: number;

  /**
   * Allows for adjustment on two axis.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisionPrescriptionLensSpecificationPrism)
  prism?: VisionPrescriptionLensSpecificationPrism[];

  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  product?: CodeableConcept;

  /**
   * The value is negative for near-sighted and positive for far sighted. Often insurance will not cover a lens with power be
   */
  @IsOptional()
  @IsNumber()
  sphere?: number;

  /**
   * Constructor for VisionPrescriptionLensSpecification
   */
  constructor(source: Partial<VisionPrescriptionLensSpecification> = {}) {
    super(source);
  }
}
