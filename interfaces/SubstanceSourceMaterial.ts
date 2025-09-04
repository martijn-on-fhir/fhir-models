import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { SubstanceSourceMaterialFractionDescription } from './SubstanceSourceMaterialFractionDescription';
import { SubstanceSourceMaterialOrganism } from './SubstanceSourceMaterialOrganism';
import { SubstanceSourceMaterialPartDescription } from './SubstanceSourceMaterialPartDescription';

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.
 */
export interface SubstanceSourceMaterial extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'SubstanceSourceMaterial';
  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate.
   */
  countryOfOrigin?: CodeableConcept[] | undefined;
  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum).
   */
  developmentStage?: CodeableConcept | undefined;
  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels.
   */
  fractionDescription?: SubstanceSourceMaterialFractionDescription[] | undefined;
  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  geographicalLocation?: string[] | undefined;
  _geographicalLocation?: Element[] | undefined;
  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf.
   */
  organism?: SubstanceSourceMaterialOrganism | undefined;
  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  organismId?: Identifier | undefined;
  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  organismName?: string | undefined;
  _organismName?: Element | undefined;
  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant).
   */
  parentSubstanceId?: Identifier[] | undefined;
  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  parentSubstanceName?: string[] | undefined;
  _parentSubstanceName?: Element[] | undefined;
  /**
   * To do.
   */
  partDescription?: SubstanceSourceMaterialPartDescription[] | undefined;
  /**
   * General high level classification of the source material specific to the origin of the material.
   */
  sourceMaterialClass?: CodeableConcept | undefined;
  /**
   * The state of the source material when extracted.
   */
  sourceMaterialState?: CodeableConcept | undefined;
  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent.
   */
  sourceMaterialType?: CodeableConcept | undefined;

}