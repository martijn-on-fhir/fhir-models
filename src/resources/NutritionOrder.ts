import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { NutritionOrderEnteralFormula } from '../backbone/NutritionOrderEnteralFormula';
import { NutritionOrderOralDiet } from '../backbone/NutritionOrderOralDiet';
import { NutritionOrderSupplement } from '../backbone/NutritionOrderSupplement';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class NutritionOrder extends DomainResource implements fhir.NutritionOrder {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'NutritionOrder' as const;

  /**
   * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  allergyIntolerance?: Reference[];

  /**
   * The date and time that this nutrition order was requested.
   */
  @IsOptional()
  @IsString()
  dateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dateTime?: Element;

  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => NutritionOrderEnteralFormula)
  enteralFormula?: NutritionOrderEnteralFormula;

  /**
   * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  excludeFoodModifier?: CodeableConcept[];

  /**
   * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should rece
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  foodPreferenceModifier?: CodeableConcept[];

  /**
   * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this N
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiates?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiates?: Element[];

  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is bes
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
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
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
   * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'directive', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.ins
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => NutritionOrderOralDiet)
  oralDiet?: NutritionOrderOralDiet;

  /**
   * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  orderer?: Reference;

  /**
   * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula fe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiv
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'])
  status?: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Oral nutritional products given in order to add further nutritional value to the patient's diet.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NutritionOrderSupplement)
  supplement?: NutritionOrderSupplement[];

  /**
   * Constructor for NutritionOrder
   */
  constructor(source: Partial<NutritionOrder> = {}) {
    super(source);
    this.resourceType = 'NutritionOrder';
  }
}
