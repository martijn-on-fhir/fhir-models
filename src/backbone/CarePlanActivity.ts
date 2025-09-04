import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Annotation } from '../elements/Annotation';
import { CarePlanActivityDetail } from './CarePlanActivityDetail';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CarePlanActivity extends BackboneElement implements fhir.CarePlanActivity {
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know abou
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CarePlanActivityDetail)
  detail?: CarePlanActivityDetail;

  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  outcomeCodeableConcept?: CodeableConcept[];

  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a tar
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  outcomeReference?: Reference[];

  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointe
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  progress?: Annotation[];

  /**
   * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be re
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /**
   * Constructor for CarePlanActivity
   */
  constructor(source: Partial<CarePlanActivity> = {}) {
    super(source);
  }
}
