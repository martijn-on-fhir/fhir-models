import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Compartment Consistency Rules.
 */
export interface GraphDefinitionLinkTargetCompartment extends BackboneElement {

  /**
   * Identifies the compartment.
   */
  code: ('Patient'|'Encounter'|'RelatedPerson'|'Practitioner'|'Device');
  _code?: Element | undefined;
  /**
   * Documentation for FHIRPath expression.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Custom rule, as a FHIRPath expression.
   */
  expression?: string | undefined;
  _expression?: Element | undefined;
  /**
   * identical | matching | different | no-rule | custom.
   */
  rule: ('identical'|'matching'|'different'|'custom');
  _rule?: Element | undefined;
  /**
   * All conditional rules are evaluated; if they are true, then the rules are evaluated.
   */
  use: ('condition'|'requirement');
  _use?: Element | undefined;

}