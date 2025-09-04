import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { SubstanceSourceMaterialOrganismAuthor } from './SubstanceSourceMaterialOrganismAuthor';
import { SubstanceSourceMaterialOrganismHybrid } from './SubstanceSourceMaterialOrganismHybrid';
import { SubstanceSourceMaterialOrganismOrganismGeneral } from './SubstanceSourceMaterialOrganismOrganismGeneral';

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
 */
export interface SubstanceSourceMaterialOrganism extends BackboneElement {

  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  author?: SubstanceSourceMaterialOrganismAuthor[] | undefined;
  /**
   * The family of an organism shall be specified.
   */
  family?: CodeableConcept | undefined;
  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies.
   */
  genus?: CodeableConcept | undefined;
  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  hybrid?: SubstanceSourceMaterialOrganismHybrid | undefined;
  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention.
   */
  intraspecificDescription?: string | undefined;
  _intraspecificDescription?: Element | undefined;
  /**
   * The Intraspecific type of an organism shall be specified.
   */
  intraspecificType?: CodeableConcept | undefined;
  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral | undefined;
  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies.
   */
  species?: CodeableConcept | undefined;

}