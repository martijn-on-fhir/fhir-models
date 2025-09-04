import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { ContactPoint } from '../elements/ContactPoint';
import { SubscriptionChannel } from '../backbone/SubscriptionChannel';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Subscription extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Subscription' as const;

  /**
   * Details where to send notifications when resources are received that meet the criteria.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubscriptionChannel)
  channel?: SubscriptionChannel;

  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubles
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /**
   * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
   */
  @IsOptional()
  @IsString()
  criteria?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _criteria?: Element;

  /**
   * The server is permitted to deviate from this time but should observe it.
   */
  @IsOptional()
  @IsString()
  end?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _end?: Element;

  /**
   * A record of the last error that occurred when the server processed a notification.
   */
  @IsOptional()
  @IsString()
  error?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _error?: Element;

  /**
   * A description of why this subscription is defined.
   */
  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _reason?: Element;

  /**
   * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription 
   */
  @IsOptional()
  @IsIn(['requested', 'active', 'error', 'off'])
  status?: ('requested'|'active'|'error'|'off');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for Subscription
   */
  constructor(source: Partial<Subscription> = {}) {
    super(source);
    this.resourceType = 'Subscription';
  }
}
