import 'reflect-metadata';
import { Element } from '../base/Element';
import { Reference } from './Reference';
export declare class Annotation extends Element {
    authorReference?: Reference;
    authorString?: string;
    _authorString?: Element;
    text: string;
    _text?: Element;
    time?: string;
    _time?: Element;
    constructor(source?: Partial<Annotation>);
}
//# sourceMappingURL=Annotation.d.ts.map