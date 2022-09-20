export declare type And<A, B, C = unknown, D = unknown, E = unknown, F = unknown> = A & B & C & D & E & F;
export declare type Entry<K extends PropertyKey, T> = readonly [K, T];
export declare type IndexedObject<T = unknown> = Rec<PropertyKey, T>;
export declare type IndexedObjects<T = unknown> = ReadonlyArray<IndexedObject<T>>;
export declare type IndexedRecord<T = unknown> = Rec<string, T>;
export declare type IndexedRecords<T = unknown> = ReadonlyArray<IndexedRecord<T>>;
export declare type NumStr = number | string;
export declare type NumStrE = empty | NumStr;
export declare type NumStrU = NumStr | undefined;
export declare type NumStrs = readonly NumStr[];
export declare type Optional<T> = {
    [K in keyof T]?: T[K];
};
export declare type Or<A, B, C = never, D = never, E = never, F = never> = A | B | C | D | E | F;
export declare type PartialRecord<K extends PropertyKey, V> = {
    readonly [L in K]?: V;
};
export declare type PartialRecords<K extends PropertyKey, V> = ReadonlyArray<PartialRecord<K, V>>;
export declare type PropertyKeyE = empty | PropertyKey;
export declare type PropertyKeyU = PropertyKey | undefined;
export declare type PropertyKeys = readonly PropertyKey[];
export declare type Rec<K extends PropertyKey, V> = {
    readonly [L in K]: V;
};
export declare type Recs<K extends PropertyKey, V> = ReadonlyArray<Rec<K, V>>;
export declare type Writable<T> = {
    -readonly [K in keyof T]: T[K];
};
export declare type WritableIndexedObject<T = unknown> = WritableRecord<PropertyKey, T>;
export declare type WritableIndexedObjects<T = unknown> = ReadonlyArray<WritableIndexedObject<T>>;
export declare type WritableIndexedRecord<T = unknown> = WritableRecord<string, T>;
export declare type WritableIndexedRecords<T = unknown> = ReadonlyArray<WritableIndexedRecord<T>>;
export declare type WritablePartialRecord<K extends PropertyKey, V> = {
    [L in K]?: V;
};
export declare type WritablePartialRecords<K extends PropertyKey, V> = ReadonlyArray<WritablePartialRecord<K, V>>;
export declare type WritableRecord<K extends PropertyKey, V> = {
    [L in K]: V;
};
export declare type WritableRecords<K extends PropertyKey, V> = ReadonlyArray<WritableRecord<K, V>>;
export declare type booleanE = empty | boolean;
export declare type booleanU = boolean | undefined;
export declare type booleans = readonly boolean[];
export declare type empty = null | undefined;
export declare type falseU = false | undefined;
export declare type nevers = readonly never[];
export declare type numberE = empty | number;
export declare type numberU = number | undefined;
export declare type numbers = readonly number[];
export declare type objectE = empty | object;
export declare type objectU = object | undefined;
export declare type objects = readonly object[];
export declare type stringE = empty | string;
export declare type stringU = string | undefined;
export declare type strings = readonly string[];
export declare type trueU = true | undefined;
export declare type unknowns = readonly unknown[];
//# sourceMappingURL=core.d.ts.map