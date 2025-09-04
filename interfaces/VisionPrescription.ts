import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';
import { VisionPrescriptionLensSpecification } from './VisionPrescriptionLensSpecification';

/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export interface VisionPrescription extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'VisionPrescription';
  /**
   * The date this resource was created.
   */
  created: string;
  _created?: Element | undefined;
  /**
   * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
   */
  dateWritten: string;
  _dateWritten?: Element | undefined;
  /**
   * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
   */
  encounter?: Reference | undefined;
  /**
   * A unique identifier assigned to this vision prescription.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
   */
  lensSpecification: VisionPrescriptionLensSpecification[];
  /**
   * A resource reference to the person to whom the vision prescription applies.
   */
  patient: Reference;
  /**
   * The healthcare professional responsible for authorizing the prescription.
   */
  prescriber: Reference;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('active'|'cancelled'|'draft'|'entered-in-error');
  _status?: Element | undefined;

}