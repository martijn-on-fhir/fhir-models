import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ObservationDefinitionQualifiedInterval } from '../backbone/ObservationDefinitionQualifiedInterval';
import { ObservationDefinitionQuantitativeDetails } from '../backbone/ObservationDefinitionQuantitativeDetails';
import { Reference } from '../elements/Reference';
export declare class ObservationDefinition extends DomainResource {
    readonly resourceType: "ObservationDefinition";
    abnormalCodedValueSet?: Reference;
    category?: CodeableConcept[];
    code?: CodeableConcept;
    criticalCodedValueSet?: Reference;
    identifier?: Identifier[];
    method?: CodeableConcept;
    multipleResultsAllowed?: boolean;
    _multipleResultsAllowed?: Element;
    normalCodedValueSet?: Reference;
    permittedDataType?: Array<'Quantity' | 'CodeableConcept' | 'string' | 'boolean' | 'integer' | 'Range' | 'Ratio' | 'SampledData' | 'time' | 'dateTime' | 'Period'>;
    _permittedDataType?: Element[];
    preferredReportName?: string;
    _preferredReportName?: Element;
    qualifiedInterval?: ObservationDefinitionQualifiedInterval[];
    quantitativeDetails?: ObservationDefinitionQuantitativeDetails;
    validCodedValueSet?: Reference;
    constructor(source?: Partial<ObservationDefinition>);
}
//# sourceMappingURL=ObservationDefinition.d.ts.map