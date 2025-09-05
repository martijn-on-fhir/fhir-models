/**
 * FHIR Models core functionality module
 * Provides utilities for JSON conversion and validation of FHIR resources
 * @module fhir-models
 */

import {ClassConstructor, plainToInstance} from 'class-transformer'

export * from './base';
export * from './elements';
export * from './backbone';
export * from './resources';

/**
 * Converts a JSON object to a typed instance of a specified class
 * @param classConstructor - The class constructor to convert the object to
 * @param entity - The JSON object to convert
 * @returns The converted typed instance or Error if conversion fails
 * @typeParam T - The type of the class to convert to
 */
export const jsonToObject = <T>( classConstructor: ClassConstructor<T>, entity: any ): T | Error => {
    try {
        return plainToInstance(classConstructor, entity) as T;
    } catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
}

/**
 * Converts an object instance to a JSON string
 * @param entity - The object to convert to JSON
 * @returns JSON string representation of the object or Error if conversion fails
 * @typeParam T - The type of the object to convert
 */
export const objectToJson = <T>(entity: T ): string | Error => {

    try {
        return JSON.stringify(entity);
    }
    catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
}
