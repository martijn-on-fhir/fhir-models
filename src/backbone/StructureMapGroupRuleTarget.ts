import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { StructureMapGroupRuleTargetParameter } from './StructureMapGroupRuleTargetParameter';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureMapGroupRuleTarget extends BackboneElement {
  /**
   * Type or variable this rule applies to.
   */
  @IsOptional()
  @IsString()
  context?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _context?: Element;

  /**
   * How to interpret the context.
   */
  @IsOptional()
  @IsIn(['type', 'variable'])
  contextType?: ('type'|'variable');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contextType?: Element;

  /**
   * Field to create in the context.
   */
  @IsOptional()
  @IsString()
  element?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _element?: Element;

  /**
   * If field is a list, how to manage the list.
   */
  @IsOptional()
  @IsIn(['first', 'share', 'last', 'collate'])
  listMode?: Array<'first'|'share'|'last'|'collate'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _listMode?: Element[];

  /**
   * Internal rule reference for shared list items.
   */
  @IsOptional()
  @IsString()
  listRuleId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _listRuleId?: Element;

  /**
   * Parameters to the transform.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StructureMapGroupRuleTargetParameter)
  parameter?: StructureMapGroupRuleTargetParameter[];

  /**
   * How the data is copied / created.
   */
  @IsOptional()
  @IsString()
  transform?: ('create'|'copy'|'truncate'|'escape'|'cast'|'append'|'translate'|'reference'|'dateOp'|'uuid'|'pointer'|'evaluate'|'cc'|'c'|'qty'|'id'|'cp');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _transform?: Element;

  /**
   * Named context for field, if desired, and a field is specified.
   */
  @IsOptional()
  @IsString()
  variable?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _variable?: Element;

  /**
   * Constructor for StructureMapGroupRuleTarget
   */
  constructor(source: Partial<StructureMapGroupRuleTarget> = {}) {
    super(source);
  }
}
