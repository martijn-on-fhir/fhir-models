import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { MedicinalProductInteractionInteractant } from './MedicinalProductInteractionInteractant';
import { Reference } from './Reference';

/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export interface MedicinalProductInteraction extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductInteraction';
  /**
   * The interaction described.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The effect of the interaction, for example "reduced gastric absorption of primary medication".
   */
  effect?: CodeableConcept | undefined;
  /**
   * The incidence of the interaction, e.g. theoretical, observed.
   */
  incidence?: CodeableConcept | undefined;
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  interactant?: MedicinalProductInteractionInteractant[] | undefined;
  /**
   * Actions for managing the interaction.
   */
  management?: CodeableConcept | undefined;
  /**
   * The medication for which this is a described interaction.
   */
  subject?: Reference[] | undefined;
  /**
   * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
   */
  type?: CodeableConcept | undefined;

}