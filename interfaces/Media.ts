import { Annotation } from './Annotation';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Event } from './Event';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
 */
export interface Media extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Media';
  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  basedOn?: Reference[] | undefined;
  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
   * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
   */
  bodySite?: CodeableConcept | undefined;
  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
   */
  content: Attachment;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdDateTime?: string | undefined;
  _createdDateTime?: Element | undefined;
  /**
   * The date and time(s) at which the media was collected.
   */
  createdPeriod?: Period | undefined;
  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a media can be represented using either extension or through the Observation.related element.
   */
  device?: Reference | undefined;
  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  deviceName?: string | undefined;
  _deviceName?: Element | undefined;
  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  duration?: number | undefined;
  /**
   * This will typically be the encounter the media occurred within.
   */
  encounter?: Reference | undefined;
  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one frame unless it is explicitly stated.
   */
  frames?: number | undefined;
  /**
   * Height of the image in pixels (photo/video).
   */
  height?: number | undefined;
  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  identifier?: Identifier[] | undefined;
  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that does not require the new version to be reviewed and verified again.
   */
  issued?: string | undefined;
  _issued?: Element | undefined;
  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality.
   */
  modality?: CodeableConcept | undefined;
  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/ImagingStudy resource.
   */
  note?: Annotation[] | undefined;
  /**
   * The person who administered the collection of the image.
   */
  operator?: Reference | undefined;
  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: Reference[] | undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   */
  status: ('preparation'|'in-progress'|'not-done'|'on-hold'|'stopped'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * Who/What this Media is a record of.
   */
  subject?: Reference | undefined;
  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  type?: CodeableConcept | undefined;
  /**
   * The name of the imaging view e.g. Lateral or Antero-posterior (AP).
   */
  view?: CodeableConcept | undefined;
  /**
   * Width of the image in pixels (photo/video).
   */
  width?: number | undefined;

}