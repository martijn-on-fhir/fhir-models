import 'reflect-metadata';
import { IsOptional, IsString, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * The sort order for the data requirement.
 */
export class DataRequirementSort extends Element {
  /**
   * The direction of the sort, ascending or descending.
   */
  @IsIn(['ascending', 'descending'])
  direction: 'ascending' | 'descending';

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _direction?: Element;

  /**
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  @IsString()
  path: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * Constructor for DataRequirementSort
   */
  constructor(source: Partial<DataRequirementSort> = {}) {
    super(source);
  }
}