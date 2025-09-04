import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Configurations of the external repository. The repository shall store target's observedSeq or records related with target's observedSeq.
 */
export interface MolecularSequenceRepository extends BackboneElement {

  /**
   * Id of the variant in this external repository. The server will understand how to use this id to call for more info about datasets in external repository.
   */
  datasetId?: string | undefined;
  _datasetId?: Element | undefined;
  /**
   * URI of an external repository which contains further details about the genetics data.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Id of the read in this external repository.
   */
  readsetId?: string | undefined;
  _readsetId?: Element | undefined;
  /**
   * Click and see / RESTful API / Need login to see / RESTful API with authentication / Other ways to see resource.
   */
  type: ('directlink'|'openapi'|'login'|'oauth'|'other');
  _type?: Element | undefined;
  /**
   * URI of an external repository which contains further details about the genetics data.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * Id of the variantset in this external repository. The server will understand how to use this id to call for more info about variantsets in external repository.
   */
  variantsetId?: string | undefined;
  _variantsetId?: Element | undefined;

}