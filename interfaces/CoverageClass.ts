import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export interface CoverageClass extends BackboneElement {

  /**
   * A short description for the class.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  type: CodeableConcept;
  /**
   * For example, the Group or Plan number.
   */
  value: string;
  _value?: Element | undefined;

}