import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ImmunizationRecommendationRecommendationDateCriterion } from './ImmunizationRecommendationRecommendationDateCriterion';
import { Reference } from '../elements/Reference';
export declare class ImmunizationRecommendationRecommendation extends BackboneElement {
    contraindicatedVaccineCode?: CodeableConcept[];
    dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];
    description?: string;
    _description?: Element;
    doseNumberPositiveInt?: number;
    doseNumberString?: string;
    _doseNumberString?: Element;
    forecastReason?: CodeableConcept[];
    forecastStatus?: CodeableConcept;
    series?: string;
    _series?: Element;
    seriesDosesPositiveInt?: number;
    seriesDosesString?: string;
    _seriesDosesString?: Element;
    supportingImmunization?: Reference[];
    supportingPatientInformation?: Reference[];
    targetDisease?: CodeableConcept;
    vaccineCode?: CodeableConcept[];
    constructor(source?: Partial<ImmunizationRecommendationRecommendation>);
}
//# sourceMappingURL=ImmunizationRecommendationRecommendation.d.ts.map