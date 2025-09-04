import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the practitioner.  For example, a medical license issued by a medical board authorizing the practitioner to practice medicine within a certian locality.
 */
export interface PractitionerQualification extends BackboneElement {

  /**
   * Coded representation of the qualification.
   */
  code: CodeableConcept;
  /**
   * An identifier that applies to this person's qualification in this role.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Organization that regulates and issues the qualification.
   */
  issuer?: Reference | undefined;
  /**
   * Period during which the qualification is valid.
   */
  period?: Period | undefined;

}