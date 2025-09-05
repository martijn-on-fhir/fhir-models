import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Reference } from '../elements/Reference';
export declare class CommunicationPayload extends BackboneElement {
    contentString?: string;
    _contentString?: Element;
    contentAttachment?: Attachment;
    contentReference?: Reference;
    constructor(source?: Partial<CommunicationPayload>);
}
//# sourceMappingURL=CommunicationPayload.d.ts.map