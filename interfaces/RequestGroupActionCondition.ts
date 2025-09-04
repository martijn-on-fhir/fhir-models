import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Expression } from './Expression';

/**
 * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
 */
export interface RequestGroupActionCondition extends BackboneElement {

  /**
   * The expression may be inlined, or may be a reference to a named expression within a logic library referenced by the library element.
   */
  expression?: Expression | undefined;
  /**
   * Applicability criteria are used to determine immediate applicability when a plan definition is applied to a given context. Start and stop criteria are carried through application and used to describe enter/exit criteria for an action.
   */
  kind: ('applicability'|'start'|'stop');
  _kind?: Element | undefined;

}