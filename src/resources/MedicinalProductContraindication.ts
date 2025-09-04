import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductContraindicationOtherTherapy } from '../backbone/MedicinalProductContraindicationOtherTherapy';
import { Population } from '../backbone/Population';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductContraindication extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductContraindication' as const;

  /**
   * A comorbidity (concurrent condition) or coinfection.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  comorbidity?: CodeableConcept[];

  /**
   * The disease, symptom or procedure for the contraindication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  disease?: CodeableConcept;

  /**
   * The status of the disease or symptom for the contraindication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diseaseStatus?: CodeableConcept;

  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductContraindicationOtherTherapy)
  otherTherapy?: MedicinalProductContraindicationOtherTherapy[];

  /**
   * The population group to which this applies.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Population)
  population?: Population[];

  /**
   * The medication for which this is an indication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subject?: Reference[];

  /**
   * Information about the use of the medicinal product in relation to other therapies as part of the indication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  therapeuticIndication?: Reference[];

  /**
   * Constructor for MedicinalProductContraindication
   */
  constructor(source: Partial<MedicinalProductContraindication> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductContraindication';
  }
}
