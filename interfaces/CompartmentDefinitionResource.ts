import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Information about how a resource is related to the compartment.
 */
export interface CompartmentDefinitionResource extends BackboneElement {

  /**
   * The name of a resource supported by the server.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * Additional documentation about the resource and compartment.
   */
  documentation?: string | undefined;
  _documentation?: Element | undefined;
  /**
   * If no search parameters are listed, then the resource is not linked to the compartment.
   */
  param?: string[] | undefined;
  _param?: Element[] | undefined;

}