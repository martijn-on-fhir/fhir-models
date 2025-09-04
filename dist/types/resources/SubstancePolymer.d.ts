import 'reflect-metadata';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstancePolymerMonomerSet } from '../backbone/SubstancePolymerMonomerSet';
import { SubstancePolymerRepeat } from '../backbone/SubstancePolymerRepeat';
export declare class SubstancePolymer extends DomainResource {
    readonly resourceType: "SubstancePolymer";
    class?: CodeableConcept;
    copolymerConnectivity?: CodeableConcept[];
    geometry?: CodeableConcept;
    modification?: string[];
    _modification?: Element[];
    monomerSet?: SubstancePolymerMonomerSet[];
    repeat?: SubstancePolymerRepeat[];
    constructor(source?: Partial<SubstancePolymer>);
}
//# sourceMappingURL=SubstancePolymer.d.ts.map