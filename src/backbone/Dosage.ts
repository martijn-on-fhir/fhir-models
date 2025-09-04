import 'reflect-metadata';
import {IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {BackboneElement} from '../base/BackboneElement';
import {Element} from '../base/Element';
import {CodeableConcept} from '../elements/CodeableConcept';
import {DosageDoseAndRate} from './DosageDoseAndRate';
import {Quantity} from '../elements/Quantity';
import {Ratio} from '../elements/Ratio';
import {Timing} from './Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Dosage extends BackboneElement {
  /**
   * Information about administration or preparation of the medication (e.g. "infuse as rapidly as possibly via intraperitone
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  additionalInstruction?: CodeableConcept[];

  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populat
   */
  @IsOptional()
  @IsBoolean()
  asNeededBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _asNeededBoolean?: Element;

  /**
   * Can express "as needed" without a reason by setting the Boolean = True.  In this case the CodeableConcept is not populat
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  asNeededCodeableConcept?: CodeableConcept;

  /**
   * The amount of medication administered.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DosageDoseAndRate)
  doseAndRate?: DosageDoseAndRate[];

  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example, a body surface area relat
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxDosePerAdministration?: Quantity;

  /**
   * Upper limit on medication per lifetime of the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxDosePerLifetime?: Quantity;

  /**
   * This is intended for use as an adjunct to the dosage when there is an upper cap.  For example "2 tablets every 4 hours t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  maxDosePerPeriod?: Ratio;

  /**
   * Terminologies used often pre-coordinate this term with the route and or form of administration.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * Instructions in terms that are understood by the patient or consumer.
   */
  @IsOptional()
  @IsString()
  patientInstruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _patientInstruction?: Element;

  /**
   * How drug should enter body.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  route?: CodeableConcept;

  /**
   * Indicates the order in which the dosage instructions should be applied or interpreted.
   */
  @IsOptional()
  @IsNumber()
  sequence?: number;

  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the stan
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  site?: CodeableConcept;

  /**
   * Free text dosage instructions e.g. SIG.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * This attribute might not always be populated while the Dosage.text is expected to be populated.  If both are populated, 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timing?: Timing;

  /**
   * Constructor for Dosage
   */
  constructor(source: Partial<Dosage> = {}) {
    super(source);
  }
}
