import 'reflect-metadata';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';
import { ImagingStudySeriesInstance } from './ImagingStudySeriesInstance';
import { ImagingStudySeriesPerformer } from './ImagingStudySeriesPerformer';
import { Reference } from '../elements/Reference';
export declare class ImagingStudySeries extends BackboneElement {
    bodySite?: Coding;
    description?: string;
    _description?: Element;
    endpoint?: Reference[];
    instance?: ImagingStudySeriesInstance[];
    laterality?: Coding;
    modality?: Coding;
    number?: number;
    numberOfInstances?: number;
    performer?: ImagingStudySeriesPerformer[];
    specimen?: Reference[];
    started?: string;
    _started?: Element;
    uid?: string;
    _uid?: Element;
    constructor(source?: Partial<ImagingStudySeries>);
}
//# sourceMappingURL=ImagingStudySeries.d.ts.map