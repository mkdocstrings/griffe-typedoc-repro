export class X<S> {
    [s: string]: S
}

export interface C2<T> {
    t: T
}

export abstract class Z<S> {
    s: S
    constructor(s: S) {
        this.s = s
    }
    [s: string]: S
}


export abstract class A<T, S> {
    t: T
    s: S
    constructor(t: T, s: S) {
        this.t = t
        this.s = s
    }
    doit<U>(t: U): U {
        return t
    }
}

export class B<T, S> {
    t: T
    s: S
    constructor(t: T, s: S) {
        this.t = t
        this.s = s
    }
    doit<U>(t: U): U {
        return t
    }
}


/**
 * @class 
 */
export class C extends B<string, string> {
    _y?: number
    set y(x: number) {
        this.y = x
    }
    public u: C

    constructor() {
        super('1', '2')
        this.u = this
    }
}