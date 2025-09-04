import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Identifier } from './Identifier';
import { MedicinalProductPharmaceuticalCharacteristics } from './MedicinalProductPharmaceuticalCharacteristics';
import { MedicinalProductPharmaceuticalRouteOfAdministration } from './MedicinalProductPharmaceuticalRouteOfAdministration';
import { Reference } from './Reference';

/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
export interface MedicinalProductPharmaceutical extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicinalProductPharmaceutical';
  /**
   * The administrable dose form, after necessary reconstitution.
   */
  administrableDoseForm: CodeableConcept;
  /**
   * Characteristics e.g. a products onset of action.
   */
  characteristics?: MedicinalProductPharmaceuticalCharacteristics[] | undefined;
  /**
   * Accompanying device.
   */
  device?: Reference[] | undefined;
  /**
   * An identifier for the pharmaceutical medicinal product.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Ingredient.
   */
  ingredient?: Reference[] | undefined;
  /**
   * The path by which the pharmaceutical product is taken into or makes contact with the body.
   */
  routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministration[];
  /**
   * Todo.
   */
  unitOfPresentation?: CodeableConcept | undefined;

}