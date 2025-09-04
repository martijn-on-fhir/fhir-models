import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { ImmunizationRecommendationRecommendation } from '../backbone/ImmunizationRecommendationRecommendation';
import { Reference } from '../elements/Reference';
export declare class ImmunizationRecommendation extends DomainResource {
    readonly resourceType: "ImmunizationRecommendation";
    authority?: Reference;
    date?: string;
    _date?: Element;
    identifier?: Identifier[];
    patient?: Reference;
    recommendation?: ImmunizationRecommendationRecommendation[];
    constructor(source?: Partial<ImmunizationRecommendation>);
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map