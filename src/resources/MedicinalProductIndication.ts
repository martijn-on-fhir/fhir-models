import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductIndicationOtherTherapy } from '../backbone/MedicinalProductIndicationOtherTherapy';
import { Population } from '../backbone/Population';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductIndication extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductIndication' as const;

  /**
   * Comorbidity (concurrent condition) or co-infection as part of the indication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  comorbidity?: CodeableConcept[];

  /**
   * The status of the disease or symptom for which the indication applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diseaseStatus?: CodeableConcept;

  /**
   * The disease, symptom or procedure that is the indication for treatment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diseaseSymptomProcedure?: CodeableConcept;

  /**
   * Timing or duration information as part of the indication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  duration?: Quantity;

  /**
   * The intended effect, aim or strategy to be achieved by the indication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intendedEffect?: CodeableConcept;

  /**
   * Information about the use of the medicinal product in relation to other therapies described as part of the indication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductIndicationOtherTherapy)
  otherTherapy?: MedicinalProductIndicationOtherTherapy[];

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
   * Describe the undesirable effects of the medicinal product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  undesirableEffect?: Reference[];

  /**
   * Constructor for MedicinalProductIndication
   */
  constructor(source: Partial<MedicinalProductIndication> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductIndication';
  }
}
