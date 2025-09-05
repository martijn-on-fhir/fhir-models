import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CapabilityStatementRestResourceInteraction } from './CapabilityStatementRestResourceInteraction';
import { CapabilityStatementRestResourceOperation } from './CapabilityStatementRestResourceOperation';
import { CapabilityStatementRestResourceSearchParam } from './CapabilityStatementRestResourceSearchParam';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRestResource extends BackboneElement {
  /**
   * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  @IsOptional()
  @IsBoolean()
  conditionalCreate?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _conditionalCreate?: Element;

  /**
   * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  @IsOptional()
  @IsIn(['not-supported', 'single', 'multiple'])
  conditionalDelete?: ('not-supported'|'single'|'multiple');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _conditionalDelete?: Element;

  /**
   * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  @IsOptional()
  @IsIn(['not-supported', 'modified-since', 'not-match', 'full-support'])
  conditionalRead?: ('not-supported'|'modified-since'|'not-match'|'full-support');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _conditionalRead?: Element;

  /**
   * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
   */
  @IsOptional()
  @IsBoolean()
  conditionalUpdate?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _conditionalUpdate?: Element;

  /**
   * Additional information about the resource type used by the system.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. the
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceInteraction)
  interaction?: CapabilityStatementRestResourceInteraction[];

  /**
   * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or Operatio
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceOperation)
  operation?: CapabilityStatementRestResourceOperation[];

  /**
   * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
   */
  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _profile?: Element;

  /**
   * It is useful to support the vRead operation for current operations, even if past versions aren't available.
   */
  @IsOptional()
  @IsBoolean()
  readHistory?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _readHistory?: Element;

  /**
   * A set of flags that defines how references are supported.
   */
  @IsOptional()
  @IsIn(['literal', 'logical', 'resolves', 'enforced', 'local'])
  referencePolicy?: Array<'literal'|'logical'|'resolves'|'enforced'|'local'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _referencePolicy?: Element[];

  /**
   * If this list is empty, the server does not support includes.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  searchInclude?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _searchInclude?: Element[];

  /**
   * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this r
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CapabilityStatementRestResourceSearchParam)
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /**
   * If this list is empty, the server does not support reverse includes.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  searchRevInclude?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _searchRevInclude?: Element[];

  /**
   * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The r
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  supportedProfile?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _supportedProfile?: Element[];

  /**
   * A type of resource exposed via the restful interface.
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence
   */
  @IsOptional()
  @IsBoolean()
  updateCreate?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _updateCreate?: Element;

  /**
   * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
   */
  @IsOptional()
  @IsIn(['no-version', 'versioned', 'versioned-update'])
  versioning?: ('no-version'|'versioned'|'versioned-update');

  /**
   * Constructor for CapabilityStatementRestResource
   */
  constructor(source: Partial<CapabilityStatementRestResource> = {}) {
    super(source);
  }
}
