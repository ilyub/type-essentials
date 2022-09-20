export declare type Omit1<T, K extends keyof T> = Omit<T, K>;
export declare type Omit2<K extends PropertyKey> = {
    [L in K]?: never;
};
export declare type PickGroupsOption = "defined" | "optional" | "readonly" | "required" | "undefined" | "writable";
//# sourceMappingURL=object.internal.d.ts.map