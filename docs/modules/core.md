[Typescript types](../index.md) / [Exports](../modules.md) / core

# Module: core

## Table of contents

### Type Aliases

- [And](core.md#and)
- [Entry](core.md#entry)
- [IndexedObject](core.md#indexedobject)
- [IndexedObjects](core.md#indexedobjects)
- [IndexedRecord](core.md#indexedrecord)
- [IndexedRecords](core.md#indexedrecords)
- [NumStr](core.md#numstr)
- [NumStrE](core.md#numstre)
- [NumStrU](core.md#numstru)
- [NumStrs](core.md#numstrs)
- [Optional](core.md#optional)
- [Or](core.md#or)
- [PartialRecord](core.md#partialrecord)
- [PartialRecords](core.md#partialrecords)
- [PropertyKeyE](core.md#propertykeye)
- [PropertyKeyU](core.md#propertykeyu)
- [PropertyKeys](core.md#propertykeys)
- [Rec](core.md#rec)
- [Recs](core.md#recs)
- [Writable](core.md#writable)
- [WritableIndexedObject](core.md#writableindexedobject)
- [WritableIndexedObjects](core.md#writableindexedobjects)
- [WritableIndexedRecord](core.md#writableindexedrecord)
- [WritableIndexedRecords](core.md#writableindexedrecords)
- [WritablePartialRecord](core.md#writablepartialrecord)
- [WritablePartialRecords](core.md#writablepartialrecords)
- [WritableRecord](core.md#writablerecord)
- [WritableRecords](core.md#writablerecords)
- [booleanE](core.md#booleane)
- [booleanU](core.md#booleanu)
- [booleans](core.md#booleans)
- [empty](core.md#empty)
- [falseU](core.md#falseu)
- [nevers](core.md#nevers)
- [numberE](core.md#numbere)
- [numberU](core.md#numberu)
- [numbers](core.md#numbers)
- [objectE](core.md#objecte)
- [objectU](core.md#objectu)
- [objects](core.md#objects)
- [stringE](core.md#stringe)
- [stringU](core.md#stringu)
- [strings](core.md#strings)
- [trueU](core.md#trueu)
- [unknowns](core.md#unknowns)

## Type Aliases

### And

Ƭ **And**<`A`, `B`, `C`, `D`, `E`, `F`\>: `A` & `B` & `C` & `D` & `E` & `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `C` | `unknown` |
| `D` | `unknown` |
| `E` | `unknown` |
| `F` | `unknown` |

___

### Entry

Ƭ **Entry**<`K`, `T`\>: readonly [`K`, `T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### IndexedObject

Ƭ **IndexedObject**<`T`\>: [`Rec`](core.md#rec)<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### IndexedObjects

Ƭ **IndexedObjects**<`T`\>: `ReadonlyArray`<[`IndexedObject`](core.md#indexedobject)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### IndexedRecord

Ƭ **IndexedRecord**<`T`\>: [`Rec`](core.md#rec)<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### IndexedRecords

Ƭ **IndexedRecords**<`T`\>: `ReadonlyArray`<[`IndexedRecord`](core.md#indexedrecord)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### NumStr

Ƭ **NumStr**: `number` \| `string`

___

### NumStrE

Ƭ **NumStrE**: [`empty`](core.md#empty) \| [`NumStr`](core.md#numstr)

___

### NumStrU

Ƭ **NumStrU**: [`NumStr`](core.md#numstr) \| `undefined`

___

### NumStrs

Ƭ **NumStrs**: readonly [`NumStr`](core.md#numstr)[]

___

### Optional

Ƭ **Optional**<`T`\>: { [K in keyof T]?: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Or

Ƭ **Or**<`A`, `B`, `C`, `D`, `E`, `F`\>: `A` \| `B` \| `C` \| `D` \| `E` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `B` | `B` |
| `C` | `never` |
| `D` | `never` |
| `E` | `never` |
| `F` | `never` |

___

### PartialRecord

Ƭ **PartialRecord**<`K`, `V`\>: { readonly [L in K]?: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### PartialRecords

Ƭ **PartialRecords**<`K`, `V`\>: `ReadonlyArray`<[`PartialRecord`](core.md#partialrecord)<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### PropertyKeyE

Ƭ **PropertyKeyE**: [`empty`](core.md#empty) \| `PropertyKey`

___

### PropertyKeyU

Ƭ **PropertyKeyU**: `PropertyKey` \| `undefined`

___

### PropertyKeys

Ƭ **PropertyKeys**: readonly `PropertyKey`[]

___

### Rec

Ƭ **Rec**<`K`, `V`\>: { readonly [L in K]: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### Recs

Ƭ **Recs**<`K`, `V`\>: `ReadonlyArray`<[`Rec`](core.md#rec)<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### Writable

Ƭ **Writable**<`T`\>: { -readonly [K in keyof T]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### WritableIndexedObject

Ƭ **WritableIndexedObject**<`T`\>: [`WritableRecord`](core.md#writablerecord)<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritableIndexedObjects

Ƭ **WritableIndexedObjects**<`T`\>: `ReadonlyArray`<[`WritableIndexedObject`](core.md#writableindexedobject)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritableIndexedRecord

Ƭ **WritableIndexedRecord**<`T`\>: [`WritableRecord`](core.md#writablerecord)<`string`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritableIndexedRecords

Ƭ **WritableIndexedRecords**<`T`\>: `ReadonlyArray`<[`WritableIndexedRecord`](core.md#writableindexedrecord)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritablePartialRecord

Ƭ **WritablePartialRecord**<`K`, `V`\>: { [L in K]?: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritablePartialRecords

Ƭ **WritablePartialRecords**<`K`, `V`\>: `ReadonlyArray`<[`WritablePartialRecord`](core.md#writablepartialrecord)<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritableRecord

Ƭ **WritableRecord**<`K`, `V`\>: { [L in K]: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritableRecords

Ƭ **WritableRecords**<`K`, `V`\>: `ReadonlyArray`<[`WritableRecord`](core.md#writablerecord)<`K`, `V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### booleanE

Ƭ **booleanE**: [`empty`](core.md#empty) \| `boolean`

___

### booleanU

Ƭ **booleanU**: `boolean` \| `undefined`

___

### booleans

Ƭ **booleans**: readonly `boolean`[]

___

### empty

Ƭ **empty**: ``null`` \| `undefined`

___

### falseU

Ƭ **falseU**: ``false`` \| `undefined`

___

### nevers

Ƭ **nevers**: readonly `never`[]

___

### numberE

Ƭ **numberE**: [`empty`](core.md#empty) \| `number`

___

### numberU

Ƭ **numberU**: `number` \| `undefined`

___

### numbers

Ƭ **numbers**: readonly `number`[]

___

### objectE

Ƭ **objectE**: [`empty`](core.md#empty) \| `object`

___

### objectU

Ƭ **objectU**: `object` \| `undefined`

___

### objects

Ƭ **objects**: readonly `object`[]

___

### stringE

Ƭ **stringE**: [`empty`](core.md#empty) \| `string`

___

### stringU

Ƭ **stringU**: `string` \| `undefined`

___

### strings

Ƭ **strings**: readonly `string`[]

___

### trueU

Ƭ **trueU**: ``true`` \| `undefined`

___

### unknowns

Ƭ **unknowns**: readonly `unknown`[]
