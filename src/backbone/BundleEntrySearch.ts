import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BundleEntrySearch extends BackboneElement {
  /**
   * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In t
   */
  @IsOptional()
  @IsIn(['match', 'include', 'outcome'])
  mode?: ('match'|'include'|'outcome');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results a
   */
  @IsOptional()
  @IsNumber()
  score?: number;

  /**
   * Constructor for BundleEntrySearch
   */
  constructor(source: Partial<BundleEntrySearch> = {}) {
    super(source);
  }
}
