import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { SearchParameterComponent } from '../backbone/SearchParameterComponent';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SearchParameter extends DomainResource implements fhir.SearchParameter {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SearchParameter' as const;

  /**
   * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resour
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  base?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _base?: Element[];

  /**
   * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know t
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  chain?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _chain?: Element[];

  /**
   * For maximum compatibility, use only lowercase ASCII characters.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * If no comparators are listed, clients should not expect servers to support any comparators.
   */
  @IsOptional()
  @IsIn(['eq', 'ne', 'gt', 'lt', 'ge', 'le', 'sa', 'eb', 'ap'])
  comparator?: Array<'eq'|'ne'|'gt'|'lt'|'ge'|'le'|'sa'|'eb'|'ap'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _comparator?: Element[];

  /**
   * Used to define the parts of a composite search parameter.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SearchParameterComponent)
  component?: SearchParameterComponent[];

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation 
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * The intent of this is that a server can designate that it provides support for a search parameter defined in the specifi
   */
  @IsOptional()
  @IsString()
  derivedFrom?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _derivedFrom?: Element;

  /**
   * This description can be used to capture details such as why the search parameter was built, comments about misuse, instr
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine qu
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally des
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * A modifier supported for the search parameter.
   */
  @IsOptional()
  @IsIn(['missing', 'exact', 'contains', 'not', 'text', 'in', 'not-in', 'below', 'above', 'type', 'identifier', 'ofType'])
  modifier?: Array<'missing'|'exact'|'contains'|'not'|'text'|'in'|'not-in'|'below'|'above'|'type'|'identifier'|'ofType'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _modifier?: Element[];

  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the
   */
  @IsOptional()
  @IsBoolean()
  multipleAnd?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _multipleAnd?: Element;

  /**
   * Constructor for SearchParameter
   */
  constructor(source: Partial<SearchParameter> = {}) {
    super(source);
    this.resourceType = 'SearchParameter';
  }
}
