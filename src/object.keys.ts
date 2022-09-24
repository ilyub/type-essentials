import type { And } from "./core";
import type { Extends } from "ts-toolbelt/out/Any/Extends";
import type { FilterKeys as Filter } from "ts-toolbelt/out/Object/FilterKeys";
import type { If } from "ts-toolbelt/out/Any/If";
import type { Match } from "ts-toolbelt/out/Any/_Internal";
import type { OptionalKeys as Optional } from "ts-toolbelt/out/Object/OptionalKeys";
import type { PickGroupsOption } from "./object.keys.internal";
import type {
  // eslint-disable-next-line misc/no-shadow -- Ok
  ReadonlyKeys as Readonly
} from "ts-toolbelt/out/Object/ReadonlyKeys";
import type {
  // eslint-disable-next-line misc/no-shadow -- Ok
  RequiredKeys as Required
} from "ts-toolbelt/out/Object/RequiredKeys";
import type { WritableKeys as Writable } from "ts-toolbelt/out/Object/WritableKeys";

export type { FilterKeys as Filter } from "ts-toolbelt/out/Object/FilterKeys";
export type { OptionalKeys as Optional } from "ts-toolbelt/out/Object/OptionalKeys";
export type { ReadonlyKeys as Readonly } from "ts-toolbelt/out/Object/ReadonlyKeys";
export type { RequiredKeys as Required } from "ts-toolbelt/out/Object/RequiredKeys";
export type { WritableKeys as Writable } from "ts-toolbelt/out/Object/WritableKeys";

export type Defined<T extends object> = Filter<T, undefined, "<-extends">;

export type Pick<T extends object, S, M extends Match = "default"> =
  // @prettier
  Exclude<keyof T, Filter<T, S, M>>;

export type PickGroups<T extends object, O extends PickGroupsOption> = And<
  If<Extends<"defined", O>, Defined<T>, keyof T>,
  If<Extends<"optional", O>, Optional<T>, keyof T>,
  If<Extends<"readonly", O>, Readonly<T>, keyof T>,
  If<Extends<"required", O>, Required<T>, keyof T>,
  If<Extends<"undefined", O>, Undefined<T>, keyof T>,
  If<Extends<"writable", O>, Writable<T>, keyof T>
>;

export type ReadonlyDefined<T extends object> =
  // @prettier
  PickGroups<T, "defined" | "readonly">;

export type ReadonlyUndefined<T extends object> =
  // @prettier
  PickGroups<T, "readonly" | "undefined">;

export type Undefined<T extends object> = Pick<T, undefined, "<-extends">;

export type WritableDefined<T extends object> =
  // @prettier
  PickGroups<T, "defined" | "writable">;

export type WritableUndefined<T extends object> =
  // @prettier
  PickGroups<T, "undefined" | "writable">;
