import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ListEntry } from '../backbone/ListEntry';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class List extends DomainResource implements fhir.List {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'List' as const;

  /**
   * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.s
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that 
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is fo
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  emptyReason?: CodeableConcept;

  /**
   * The encounter that is the context in which this list was created.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * If there are no entries in the list, an emptyReason SHOULD be provided.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ListEntry)
  entry?: ListEntry[];

  /**
   * Identifier for the List assigned for business purposes outside the context of FHIR.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
   */
  @IsOptional()
  @IsIn(['working', 'snapshot', 'changes'])
  mode?: ('working'|'snapshot'|'changes');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * Comments that apply to the overall list.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own prefe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  orderedBy?: CodeableConcept;

  /**
   * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['current', 'retired', 'entered-in-error'])
  status?: ('current'|'retired'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Some purely arbitrary lists do not have a common subject, so this is optional.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * A label for the list assigned by the author.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * Constructor for List
   */
  constructor(source: Partial<List> = {}) {
    super(source);
    this.resourceType = 'List';
  }
}
