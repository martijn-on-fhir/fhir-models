import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Age } from '../elements/Age';
import { CodeableConcept } from '../elements/CodeableConcept';
import { FamilyMemberHistoryCondition } from '../backbone/FamilyMemberHistoryCondition';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
export declare class FamilyMemberHistory extends DomainResource {
    readonly resourceType: "FamilyMemberHistory";
    ageAge?: Age;
    ageRange?: Range;
    ageString?: string;
    _ageString?: Element;
    bornPeriod?: Period;
    bornDate?: string;
    _bornDate?: Element;
    bornString?: string;
    _bornString?: Element;
    condition?: FamilyMemberHistoryCondition[];
    dataAbsentReason?: CodeableConcept;
    date?: string;
    _date?: Element;
    deceasedBoolean?: boolean;
    _deceasedBoolean?: Element;
    deceasedAge?: Age;
    deceasedRange?: Range;
    deceasedDate?: string;
    _deceasedDate?: Element;
    deceasedString?: string;
    _deceasedString?: Element;
    estimatedAge?: boolean;
    _estimatedAge?: Element;
    identifier?: Identifier[];
    instantiatesCanonical?: string[];
    constructor(source?: Partial<FamilyMemberHistory>);
}
//# sourceMappingURL=FamilyMemberHistory.d.ts.map