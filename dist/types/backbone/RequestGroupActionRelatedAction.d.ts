import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { Range } from '../elements/Range';
export declare class RequestGroupActionRelatedAction extends BackboneElement {
    actionId?: string;
    _actionId?: Element;
    offsetDuration?: Duration;
    offsetRange?: Range;
    relationship?: ('before-start' | 'before' | 'before-end' | 'concurrent-with-start' | 'concurrent' | 'concurrent-with-end' | 'after-start' | 'after' | 'after-end');
    _relationship?: Element;
    constructor(source?: Partial<RequestGroupActionRelatedAction>);
}
//# sourceMappingURL=RequestGroupActionRelatedAction.d.ts.map