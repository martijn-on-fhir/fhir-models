"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFHIRSerializer = exports.optimizedStringify = exports.OptimizedFHIRSerializer = void 0;
exports.createFHIRSerializer = createFHIRSerializer;
const stream_1 = require("stream");
class OptimizedFHIRSerializer {
    constructor(options = {}) {
        this.options = Object.assign({ useStreaming: false, chunkSize: 1000, removeNullValues: true, compact: true, replacer: this.defaultReplacer.bind(this), maxDepth: 50 }, options);
    }
    defaultReplacer(key, value) {
        if (this.options.removeNullValues && (value === null || value === undefined)) {
            return undefined;
        }
        if (Array.isArray(value) && value.length === 0) {
            return undefined;
        }
        if (value && typeof value === 'object' && Object.keys(value).length === 0) {
            return undefined;
        }
        if (value instanceof Date) {
            return value.toISOString();
        }
        return value;
    }
    serializeResource(resource) {
        try {
            const separator = this.options.compact ? '' : ' ';
            return JSON.stringify(resource, this.options.replacer, this.options.compact ? 0 : 2);
        }
        catch (error) {
            return error instanceof Error ? error : new Error(String(error));
        }
    }
    serializeBundle(bundle) {
        try {
            if (!bundle.entry || bundle.entry.length < this.options.chunkSize) {
                return this.serializeResource(bundle);
            }
            return this.serializeLargeBundle(bundle);
        }
        catch (error) {
            return error instanceof Error ? error : new Error(String(error));
        }
    }
    serializeLargeBundle(bundle) {
        const { entry } = bundle, bundleWithoutEntry = __rest(bundle, ["entry"]);
        const chunks = new Array(Math.ceil(entry.length / this.options.chunkSize));
        const separator = this.options.compact ? ',' : ', ';
        let result = JSON.stringify(bundleWithoutEntry, this.options.replacer, this.options.compact ? 0 : 2);
        result = result.slice(0, -1) + (this.options.compact ? ',"entry":[' : ', "entry": [');
        for (let i = 0; i < entry.length; i += this.options.chunkSize) {
            const chunk = entry.slice(i, i + this.options.chunkSize);
            const serializedChunk = chunk.map((item) => JSON.stringify(item, this.options.replacer, this.options.compact ? 0 : 2)).join(separator);
            if (i > 0) {
                result += separator;
            }
            result += serializedChunk;
        }
        result += ']}';
        return result;
    }
    serializeBundleStream(bundle) {
        const stream = new stream_1.Readable({
            objectMode: false,
            read() { }
        });
        this.streamSerialize(bundle, stream).catch(error => {
            stream.emit('error', error);
        });
        return stream;
    }
    streamSerialize(bundle, stream) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { entry } = bundle, bundleWithoutEntry = __rest(bundle, ["entry"]);
                const metadataJson = JSON.stringify(bundleWithoutEntry, this.options.replacer, this.options.compact ? 0 : 2);
                const openingPart = metadataJson.slice(0, -1) + (this.options.compact ? ',"entry":[' : ', "entry": [');
                stream.push(openingPart);
                if (entry && entry.length > 0) {
                    for (let i = 0; i < entry.length; i += this.options.chunkSize) {
                        const chunk = entry.slice(i, i + this.options.chunkSize);
                        for (let j = 0; j < chunk.length; j++) {
                            if (i > 0 || j > 0) {
                                stream.push(this.options.compact ? ',' : ', ');
                            }
                            const serialized = JSON.stringify(chunk[j], this.options.replacer, this.options.compact ? 0 : 2);
                            stream.push(serialized);
                            if ((i + j) % 100 === 0) {
                                yield new Promise(resolve => setImmediate(resolve));
                            }
                        }
                    }
                }
                stream.push(']}');
                stream.push(null);
            }
            catch (error) {
                stream.emit('error', error);
            }
        });
    }
    serializeBundleWithBuffering(bundle, maxBufferSize = 64 * 1024) {
        try {
            const buffers = [];
            let currentBuffer = '';
            let bufferSize = 0;
            const flushBuffer = () => {
                if (currentBuffer) {
                    buffers.push(currentBuffer);
                    currentBuffer = '';
                    bufferSize = 0;
                }
            };
            const addToBuffer = (chunk) => {
                if (bufferSize + chunk.length > maxBufferSize) {
                    flushBuffer();
                }
                currentBuffer += chunk;
                bufferSize += chunk.length;
            };
            const { entry } = bundle, bundleWithoutEntry = __rest(bundle, ["entry"]);
            const metadata = JSON.stringify(bundleWithoutEntry, this.options.replacer, this.options.compact ? 0 : 2);
            addToBuffer(metadata.slice(0, -1) + (this.options.compact ? ',"entry":[' : ', "entry": ['));
            if (entry && entry.length > 0) {
                for (let i = 0; i < entry.length; i++) {
                    if (i > 0) {
                        addToBuffer(this.options.compact ? ',' : ', ');
                    }
                    const entryJson = JSON.stringify(entry[i], this.options.replacer, this.options.compact ? 0 : 2);
                    addToBuffer(entryJson);
                }
            }
            addToBuffer(']}');
            flushBuffer();
            return buffers.join('');
        }
        catch (error) {
            return error instanceof Error ? error : new Error(String(error));
        }
    }
}
exports.OptimizedFHIRSerializer = OptimizedFHIRSerializer;
function createFHIRSerializer(options) {
    return new OptimizedFHIRSerializer(Object.assign({ removeNullValues: true, compact: true, chunkSize: 1000, maxDepth: 50 }, options));
}
exports.optimizedStringify = {
    resource: (resource, options) => {
        const serializer = createFHIRSerializer(options);
        return serializer.serializeResource(resource);
    },
    bundle: (bundle, options) => {
        const serializer = createFHIRSerializer(options);
        return serializer.serializeBundle(bundle);
    },
    bundleStream: (bundle, options) => {
        const serializer = createFHIRSerializer(options);
        return serializer.serializeBundleStream(bundle);
    }
};
exports.defaultFHIRSerializer = createFHIRSerializer();
//# sourceMappingURL=optimized-serializer.js.map