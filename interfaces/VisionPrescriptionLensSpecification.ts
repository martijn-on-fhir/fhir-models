import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Quantity } from './Quantity';
import { VisionPrescriptionLensSpecificationPrism } from './VisionPrescriptionLensSpecificationPrism';

/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export interface VisionPrescriptionLensSpecification extends BackboneElement {

  /**
   * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
   */
  add?: number | undefined;
  /**
   * The limits are +180 and -180 degrees.
   */
  axis?: number | undefined;
  /**
   * Back curvature measured in millimetres.
   */
  backCurve?: number | undefined;
  /**
   * Brand recommendations or restrictions.
   */
  brand?: string | undefined;
  _brand?: Element | undefined;
  /**
   * Special color or pattern.
   */
  color?: string | undefined;
  _color?: Element | undefined;
  /**
   * Power adjustment for astigmatism measured in dioptres (0.25 units).
   */
  cylinder?: number | undefined;
  /**
   * Contact lens diameter measured in millimetres.
   */
  diameter?: number | undefined;
  /**
   * The recommended maximum wear period for the lens.
   */
  duration?: Quantity | undefined;
  /**
   * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
   */
  eye: ('right'|'left');
  _eye?: Element | undefined;
  /**
   * Notes for special requirements such as coatings and lens materials.
   */
  note?: Annotation[] | undefined;
  /**
   * Contact lens power measured in dioptres (0.25 units).
   */
  power?: number | undefined;
  /**
   * Allows for adjustment on two axis.
   */
  prism?: VisionPrescriptionLensSpecificationPrism[] | undefined;
  /**
   * Identifies the type of vision correction product which is required for the patient.
   */
  product: CodeableConcept;
  /**
   * The value is negative for near-sighted and positive for far sighted.
   * Often insurance will not cover a lens with power between +75 and -75.
   */
  sphere?: number | undefined;

}