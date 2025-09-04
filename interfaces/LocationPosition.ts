import { BackboneElement } from './BackboneElement';

/**
 * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
 */
export interface LocationPosition extends BackboneElement {

  /**
   * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
   */
  altitude?: number | undefined;
  /**
   * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
   */
  latitude: number;
  /**
   * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
   */
  longitude: number;

}