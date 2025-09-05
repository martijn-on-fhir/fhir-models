import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Age } from '../elements/Age';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
export declare class FamilyMemberHistoryCondition extends BackboneElement {
    code?: CodeableConcept;
    contributedToDeath?: boolean;
    _contributedToDeath?: Element;
    note?: Annotation[];
    onsetAge?: Age;
    onsetRange?: Range;
    onsetPeriod?: Period;
    onsetString?: string;
    _onsetString?: Element;
    outcome?: CodeableConcept;
    constructor(source?: Partial<FamilyMemberHistoryCondition>);
}
//# sourceMappingURL=FamilyMemberHistoryCondition.d.ts.map