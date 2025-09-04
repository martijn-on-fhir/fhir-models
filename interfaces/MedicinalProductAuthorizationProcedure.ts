import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';

/**
 * The regulatory procedure for granting or amending a marketing authorization.
 */
export interface MedicinalProductAuthorizationProcedure extends BackboneElement {

  /**
   * Applcations submitted to obtain a marketing authorization.
   */
  application?: MedicinalProductAuthorizationProcedure[] | undefined;
  /**
   * Date of procedure.
   */
  datePeriod?: Period | undefined;
  /**
   * Date of procedure.
   */
  dateDateTime?: string | undefined;
  _dateDateTime?: Element | undefined;
  /**
   * Identifier for this procedure.
   */
  identifier?: Identifier | undefined;
  /**
   * Type of procedure.
   */
  type: CodeableConcept;

}