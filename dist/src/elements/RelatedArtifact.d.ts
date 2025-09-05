import 'reflect-metadata';
import { Element } from '../base/Element';
import { Attachment } from './Attachment';
export declare class RelatedArtifact extends Element {
    citation?: string;
    _citation?: Element;
    display?: string;
    _display?: Element;
    document?: Attachment;
    label?: string;
    _label?: Element;
    resource?: string;
    _resource?: Element;
    type: ('documentation' | 'justification' | 'citation' | 'predecessor' | 'successor' | 'derived-from' | 'depends-on' | 'composed-of');
    _type?: Element;
    url?: string;
    _url?: Element;
    constructor(source?: Partial<RelatedArtifact>);
}
//# sourceMappingURL=RelatedArtifact.d.ts.map