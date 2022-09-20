[Typescript types](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Interfaces

- [Async](../interfaces/function.Async.md)
- [CallSignature](../interfaces/function.CallSignature.md)
- [Callable](../interfaces/function.Callable.md)
- [ConstructSignature](../interfaces/function.ConstructSignature.md)
- [Constructor](../interfaces/function.Constructor.md)
- [Sync](../interfaces/function.Sync.md)

### Type Aliases

- [AsyncPromise](function.md#asyncpromise)
- [AsyncPromiseSync](function.md#asyncpromisesync)

## Type Aliases

### AsyncPromise

Ƭ **AsyncPromise**<`R`, `A`\>: [`Async`](../interfaces/function.Async.md)<`R`, `A`\> \| `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](core.md#unknowns) = readonly [] |

___

### AsyncPromiseSync

Ƭ **AsyncPromiseSync**<`R`, `A`\>: [`Async`](../interfaces/function.Async.md)<`R`, `A`\> \| `Promise`<`R`\> \| [`Sync`](../interfaces/function.Sync.md)<`R`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](core.md#unknowns) = readonly [] |
