import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicinalProductPharmaceuticalCharacteristics } from '../backbone/MedicinalProductPharmaceuticalCharacteristics';
import { MedicinalProductPharmaceuticalRouteOfAdministration } from '../backbone/MedicinalProductPharmaceuticalRouteOfAdministration';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPharmaceutical extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductPharmaceutical' as const;

  /**
   * The administrable dose form, after necessary reconstitution.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  administrableDoseForm?: CodeableConcept;

  /**
   * Characteristics e.g. a products onset of action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalCharacteristics)
  characteristics?: MedicinalProductPharmaceuticalCharacteristics[];

  /**
   * Accompanying device.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  device?: Reference[];

  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Ingredient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  ingredient?: Reference[];

  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalRouteOfAdministration)
  routeOfAdministration?: MedicinalProductPharmaceuticalRouteOfAdministration[];

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfPresentation?: CodeableConcept;

  /**
   * Constructor for MedicinalProductPharmaceutical
   */
  constructor(source: Partial<MedicinalProductPharmaceutical> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductPharmaceutical';
  }
}
