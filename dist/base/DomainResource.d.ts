import 'reflect-metadata';
import { Resource } from './Resource';
import { Extension } from '../elements/Extension';
import { Narrative } from '../elements/Narrative';
export declare abstract class DomainResource extends Resource {
    contained?: any[];
    extension?: Extension[];
    modifierExtension?: Extension[];
    text?: Narrative;
    constructor(source?: Partial<DomainResource>);
}
//# sourceMappingURL=DomainResource.d.ts.map