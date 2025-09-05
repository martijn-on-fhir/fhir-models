import {ClassConstructor, plainToInstance} from 'class-transformer'

export * from './base';
export * from './elements';
export * from './backbone';
export * from './resources';

export const jsonToObject = <T>( classConstructor: ClassConstructor<T>, entity: any ): T | Error => {
    try {
        return plainToInstance(classConstructor, entity) as T;
    } catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
}

export const objectToJson = <T>( classConstructor: ClassConstructor<T>, entity: T ): string | Error => {

    try {
        return JSON.stringify(entity);
    }
    catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
}