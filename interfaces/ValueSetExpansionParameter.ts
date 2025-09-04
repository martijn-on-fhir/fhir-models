import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The server decides which parameters to include here, but at a minimum, the list SHOULD include all of the parameters that affect the $expand operation. If the expansion will be persisted all of these parameters SHALL be included. If the codeSystem on the server has a specified version then this version SHALL be provided as a parameter in the expansion (note that not all code systems have a version).
 */
export interface ValueSetExpansionParameter extends BackboneElement {

  /**
   * The names are assigned at the discretion of the server.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * The value of the parameter.
   */
  valueString?: string | undefined;
  _valueString?: Element | undefined;
  /**
   * The value of the parameter.
   */
  valueBoolean?: boolean | undefined;
  _valueBoolean?: Element | undefined;
  /**
   * The value of the parameter.
   */
  valueInteger?: number | undefined;
  /**
   * The value of the parameter.
   */
  valueDecimal?: number | undefined;
  /**
   * The value of the parameter.
   */
  valueUri?: string | undefined;
  _valueUri?: Element | undefined;
  /**
   * The value of the parameter.
   */
  valueCode?: string | undefined;
  _valueCode?: Element | undefined;
  /**
   * The value of the parameter.
   */
  valueDateTime?: string | undefined;
  _valueDateTime?: Element | undefined;

}