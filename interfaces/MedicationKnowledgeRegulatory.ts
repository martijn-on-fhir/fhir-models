import { BackboneElement } from './BackboneElement';
import { MedicationKnowledgeRegulatoryMaxDispense } from './MedicationKnowledgeRegulatoryMaxDispense';
import { MedicationKnowledgeRegulatorySchedule } from './MedicationKnowledgeRegulatorySchedule';
import { MedicationKnowledgeRegulatorySubstitution } from './MedicationKnowledgeRegulatorySubstitution';
import { Reference } from './Reference';

/**
 * Regulatory information about a medication.
 */
export interface MedicationKnowledgeRegulatory extends BackboneElement {

  /**
   * The maximum number of units of the medication that can be dispensed in a period.
   */
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense | undefined;
  /**
   * The authority that is specifying the regulations.
   */
  regulatoryAuthority: Reference;
  /**
   * Specifies the schedule of a medication in jurisdiction.
   */
  schedule?: MedicationKnowledgeRegulatorySchedule[] | undefined;
  /**
   * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
   */
  substitution?: MedicationKnowledgeRegulatorySubstitution[] | undefined;

}