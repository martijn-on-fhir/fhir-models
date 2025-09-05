import { ClassConstructor } from 'class-transformer';
export * from './base';
export * from './elements';
export * from './backbone';
export * from './resources';
export declare const jsonToObject: <T>(classConstructor: ClassConstructor<T>, entity: any) => T | Error;
export declare const objectToJson: <T>(classConstructor: ClassConstructor<T>, entity: T) => string | Error;
//# sourceMappingURL=index.d.ts.map