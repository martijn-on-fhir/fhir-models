import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
export declare class MarketingStatus extends BackboneElement {
    country?: CodeableConcept;
    dateRange?: Period;
    jurisdiction?: CodeableConcept;
    restoreDate?: string;
    _restoreDate?: Element;
    status?: CodeableConcept;
    constructor(source?: Partial<MarketingStatus>);
}
//# sourceMappingURL=MarketingStatus.d.ts.map