import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { ClaimResponseItemAdjudication } from './ClaimResponseItemAdjudication';
import { ClaimResponseItemDetailSubDetail } from './ClaimResponseItemDetailSubDetail';
export declare class ClaimResponseItemDetail extends BackboneElement {
    adjudication?: ClaimResponseItemAdjudication[];
    detailSequence?: number;
    noteNumber?: number[];
    subDetail?: ClaimResponseItemDetailSubDetail[];
    constructor(source?: Partial<ClaimResponseItemDetail>);
}
//# sourceMappingURL=ClaimResponseItemDetail.d.ts.map