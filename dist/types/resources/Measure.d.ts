import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { MeasureGroup } from '../backbone/MeasureGroup';
import { Period } from '../elements/Period';
export declare class Measure extends DomainResource {
    readonly resourceType: "Measure";
    approvalDate?: string;
    _approvalDate?: Element;
    author?: ContactDetail[];
    clinicalRecommendationStatement?: string;
    _clinicalRecommendationStatement?: Element;
    compositeScoring?: CodeableConcept;
    contact?: ContactDetail[];
    copyright?: string;
    _copyright?: Element;
    date?: string;
    _date?: Element;
    definition?: string[];
    _definition?: Element[];
    description?: string;
    _description?: Element;
    disclaimer?: string;
    _disclaimer?: Element;
    editor?: ContactDetail[];
    effectivePeriod?: Period;
    endorser?: ContactDetail[];
    experimental?: boolean;
    _experimental?: Element;
    group?: MeasureGroup[];
    guidance?: string;
    _guidance?: Element;
    constructor(source?: Partial<Measure>);
}
//# sourceMappingURL=Measure.d.ts.map