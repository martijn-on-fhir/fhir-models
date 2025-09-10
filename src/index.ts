/**
 * FHIR Models core functionality module
 * Provides utilities for JSON conversion and validation of FHIR resources
 * @module fhir-models
 */

import {ClassConstructor, plainToInstance} from 'class-transformer'
import { optimizedStringify } from './serialization/optimized-serializer';
import {validate as v} from 'class-validator';

export * from './base';
export * from './elements';
export * from './backbone';
export * from './resources';

// Export optimized serialization functions
export {
    OptimizedFHIRSerializer,
    createFHIRSerializer,
    optimizedStringify,
    defaultFHIRSerializer,
    type SerializationOptions
} from './serialization/optimized-serializer';

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
        if (entity && typeof entity === 'object' && 'resourceType' in entity) {
            const resourceType = (entity as any).resourceType;
            
            if (resourceType === 'Bundle') {
                return optimizedStringify.bundle(entity);
            } else if (resourceType) {
                return optimizedStringify.resource(entity);
            }
        }
        
        return JSON.stringify(entity);
    } catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
}

/**
 * Validates a FHIR object using class-validator decorators
 * @param entity - The object to validate
 * @returns true if valid, array of error messages if invalid
 * @typeParam T - The type of the object to validate
 */
export const validate = async <T>(entity: T): Promise<true | string[]> => {

    if (entity === null || entity === undefined) {
        return ['Entity cannot be null or undefined'];
    }

    if (typeof entity !== 'object') {
        return ['Entity must be an object'];
    }

    try {
        const errors = await v(entity as object);

        if (errors.length === 0) {
            return true;
        }

        return errors.map(error =>
            Object.values(error.constraints || {}).join('; ')
        )

    } catch (error) {

        if (error instanceof Error) {
            return [error.message];
        }

        return ['Validation failed with unknown error'];
    }
}


