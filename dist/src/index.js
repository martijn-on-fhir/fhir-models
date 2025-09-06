"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToJson = exports.jsonToObject = exports.defaultFHIRSerializer = exports.optimizedStringify = exports.createFHIRSerializer = exports.OptimizedFHIRSerializer = void 0;
const class_transformer_1 = require("class-transformer");
const optimized_serializer_1 = require("./serialization/optimized-serializer");
__exportStar(require("./base"), exports);
__exportStar(require("./elements"), exports);
__exportStar(require("./backbone"), exports);
__exportStar(require("./resources"), exports);
var optimized_serializer_2 = require("./serialization/optimized-serializer");
Object.defineProperty(exports, "OptimizedFHIRSerializer", { enumerable: true, get: function () { return optimized_serializer_2.OptimizedFHIRSerializer; } });
Object.defineProperty(exports, "createFHIRSerializer", { enumerable: true, get: function () { return optimized_serializer_2.createFHIRSerializer; } });
Object.defineProperty(exports, "optimizedStringify", { enumerable: true, get: function () { return optimized_serializer_2.optimizedStringify; } });
Object.defineProperty(exports, "defaultFHIRSerializer", { enumerable: true, get: function () { return optimized_serializer_2.defaultFHIRSerializer; } });
const jsonToObject = (classConstructor, entity) => {
    try {
        return (0, class_transformer_1.plainToInstance)(classConstructor, entity);
    }
    catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
};
exports.jsonToObject = jsonToObject;
const objectToJson = (entity) => {
    try {
        if (entity && typeof entity === 'object' && 'resourceType' in entity) {
            const resourceType = entity.resourceType;
            if (resourceType === 'Bundle') {
                return optimized_serializer_1.optimizedStringify.bundle(entity);
            }
            else if (resourceType) {
                return optimized_serializer_1.optimizedStringify.resource(entity);
            }
        }
        return JSON.stringify(entity);
    }
    catch (e) {
        return e instanceof Error ? e : new Error(String(e));
    }
};
exports.objectToJson = objectToJson;
//# sourceMappingURL=index.js.map