import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CompartmentDefinitionResource } from '../backbone/CompartmentDefinitionResource';
import { ContactDetail } from '../elements/ContactDetail';
import { UsageContext } from '../elements/UsageContext';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CompartmentDefinition extends DomainResource implements fhir.CompartmentDefinition {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CompartmentDefinition' as const;

  /**
   * Only the specification can define the compartments that can exist. Servers can choose to support them.
   */
  @IsOptional()
  @IsIn(['Patient', 'Encounter', 'RelatedPerson', 'Practitioner', 'Device'])
  code?: ('Patient'|'Encounter'|'RelatedPerson'|'Practitioner'|'Device');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

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
   * This description can be used to capture details such as why the compartment definition was built, comments about misuse,
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Allows filtering of compartment definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is 
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organi
   */
  @IsOptional()
  @IsString()
  publisher?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _publisher?: Element;

  /**
   * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the
   */
  @IsOptional()
  @IsString()
  purpose?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _purpose?: Element;

  /**
   * Information about how a resource is related to the compartment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CompartmentDefinitionResource)
  resource?: CompartmentDefinitionResource[];

  /**
   * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
   */
  @IsOptional()
  @IsBoolean()
  search?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _search?: Element;

  /**
   * Allows filtering of compartment definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'retired', 'unknown'])
  status?: ('draft'|'active'|'retired'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if t
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UsageContext)
  useContext?: UsageContext[];

  /**
   * There may be different compartment definition instances that have the same identifier but different versions.  The versi
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for CompartmentDefinition
   */
  constructor(source: Partial<CompartmentDefinition> = {}) {
    super(source);
    this.resourceType = 'CompartmentDefinition';
  }
}
