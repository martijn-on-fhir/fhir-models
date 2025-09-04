import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Defines how IG is built by tools.
 */
export interface ImplementationGuideDefinitionParameter extends BackboneElement {

  /**
   * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
   */
  code: ('apply'|'path-resource'|'path-pages'|'path-tx-cache'|'expansion-parameter'|'rule-broken-links'|'generate-xml'|'generate-json'|'generate-turtle'|'html-template');
  _code?: Element | undefined;
  /**
   * Value for named type.
   */
  value: string;
  _value?: Element | undefined;

}