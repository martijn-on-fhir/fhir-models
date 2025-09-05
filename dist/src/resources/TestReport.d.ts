import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { TestReportParticipant } from '../backbone/TestReportParticipant';
import { TestReportSetup } from '../backbone/TestReportSetup';
import { TestReportTeardown } from '../backbone/TestReportTeardown';
import { TestReportTest } from '../backbone/TestReportTest';
export declare class TestReport extends DomainResource {
    readonly resourceType: "TestReport";
    identifier?: Identifier;
    issued?: string;
    _issued?: Element;
    name?: string;
    _name?: Element;
    participant?: TestReportParticipant[];
    result?: ('pass' | 'fail' | 'pending');
    _result?: Element;
    score?: number;
    setup?: TestReportSetup;
    status?: ('completed' | 'in-progress' | 'waiting' | 'stopped' | 'entered-in-error');
    _status?: Element;
    teardown?: TestReportTeardown;
    test?: TestReportTest[];
    tester?: string;
    _tester?: Element;
    testScript?: Reference;
    constructor(source?: Partial<TestReport>);
}
//# sourceMappingURL=TestReport.d.ts.map