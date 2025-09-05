import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { OperationOutcomeIssue } from '../backbone/OperationOutcomeIssue';
export declare class OperationOutcome extends DomainResource {
    readonly resourceType: "OperationOutcome";
    issue?: OperationOutcomeIssue[];
    constructor(source?: Partial<OperationOutcome>);
}
//# sourceMappingURL=OperationOutcome.d.ts.map