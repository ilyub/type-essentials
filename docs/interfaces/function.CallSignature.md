[Typescript types](../index.md) / [Exports](../modules.md) / [function](../modules/function.md) / CallSignature

# Interface: CallSignature<T\>

[function](../modules/function.md).CallSignature

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](function.Callable.md) |

## Callable

### CallSignature

▸ **CallSignature**(`this`, ...`args`): `ReturnType`<`T`\>

Call signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ThisParameterType`<`T`\> | This argument. |
| `...args` | `Parameters`<`T`\> | Arguments. |

#### Returns

`ReturnType`<`T`\>

Result.
