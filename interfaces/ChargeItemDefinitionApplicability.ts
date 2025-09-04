import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 */
export interface ChargeItemDefinitionApplicability extends BackboneElement {

  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
   * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   */
  expression?: string | undefined;
  _expression?: Element | undefined;
  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   */
  language?: string | undefined;
  _language?: Element | undefined;

}