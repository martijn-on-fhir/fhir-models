import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ValueSetComposeInclude } from './ValueSetComposeInclude';
export declare class ValueSetCompose extends BackboneElement {
    exclude?: ValueSetComposeInclude[];
    inactive?: boolean;
    _inactive?: Element;
    include?: ValueSetComposeInclude[];
    lockedDate?: string;
    _lockedDate?: Element;
    constructor(source?: Partial<ValueSetCompose>);
}
//# sourceMappingURL=ValueSetCompose.d.ts.map