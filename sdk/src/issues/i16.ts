export type A = number

export interface SourceField {
    label?: string
    value?: string | number | boolean
}

export class C1 {
    [key: string]: SourceField
}

export interface C2 {
    [key: string]: SourceField
}

class B<T> {
    t: T
    constructor(t: T) {
        this.t = t
    }
    [key: string]: any
    sourceFields?: C1
    sourceFields2?: C2
}

export interface Equal<T> {
    isEqual(other: T): boolean
    isSame(other: T): boolean
}

export interface Serializable<T> {
    serialize(): T
}

export interface Updatable<T> {
    update(other: T): T
}

export type Cachable<T, K> = Equal<T> & Serializable<K> & Updatable<T>

export interface CacheCountable {
    incrementCacheCounter(): void
    decrementCacheCounter(): void
    getCacheCounter(): number
}

/**
 * @class 
 */
export class C extends B<string> implements C2, CacheCountable, Cachable<string, C> {
    _y?: number
    set y(x: number) {
        this.y = x
    }
    public u: C

    constructor() {
        super('1')
        this.u = this
    }

    isEqual() { return false }
    isSame() { return true }
    update(other: string) { return other }
    serialize() { return this }
    incrementCacheCounter() { }
    decrementCacheCounter() { }
    getCacheCounter() { return 1 }
}