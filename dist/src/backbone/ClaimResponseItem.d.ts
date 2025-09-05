import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponseItemDetail } from './ClaimResponseItemDetail';
export declare class ClaimResponseItem extends BackboneElement {
    adjudication?: ClaimResponseItemAdjudication[];
    detail?: ClaimResponseItemDetail[];
    itemSequence?: number;
    noteNumber?: number[];
    constructor(source?: Partial<ClaimResponseItem>);
}
//# sourceMappingURL=ClaimResponseItem.d.ts.map