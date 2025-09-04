import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { LinkageItem } from '../backbone/LinkageItem';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Linkage extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Linkage' as const;

  /**
   * If false, any asserted linkages should not be considered current/relevant/applicable.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * Identifies the user or organization responsible for asserting the linkages as well as the user or organization who estab
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LinkageItem)
  item?: LinkageItem[];

  /**
   * Constructor for Linkage
   */
  constructor(source: Partial<Linkage> = {}) {
    super(source);
    this.resourceType = 'Linkage';
  }
}
