[Typescript types](../index.md) / [Exports](../modules.md) / object.style

# Module: object.style

## Table of contents

### Type Aliases

- [Optional](object_style.md#optional)
- [OptionalUndefined](object_style.md#optionalundefined)
- [Undefined](object_style.md#undefined)

## Type Aliases

### Optional

Ƭ **Optional**<`T`\>: [`And`](core.md#and)<{ [K in WritableDefined<T\>]: T[K] }, { [K in WritableUndefined<T\>]?: Exclude<T[K], undefined\> }, { readonly [K in ReadonlyDefined<T\>]: T[K] }, { readonly [K in ReadonlyUndefined<T\>]?: Exclude<T[K], undefined\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### OptionalUndefined

Ƭ **OptionalUndefined**<`T`\>: [`And`](core.md#and)<{ [K in WritableDefined<T\>]: T[K] }, { [K in WritableUndefined<T\>]?: T[K] }, { readonly [K in ReadonlyDefined<T\>]: T[K] }, { readonly [K in ReadonlyUndefined<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Undefined

Ƭ **Undefined**<`T`\>: [`And`](core.md#and)<{ [K in WritableDefined<T\>]: T[K] }, { [K in WritableUndefined<T\>]: T[K] \| undefined }, { readonly [K in ReadonlyDefined<T\>]: T[K] }, { readonly [K in ReadonlyUndefined<T\>]: T[K] \| undefined }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
