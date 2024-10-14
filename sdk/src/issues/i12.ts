export type A = number

export abstract class D {
    abstract f(): number
    e(): number {
        return 1
    }
}

export class Z extends D {
    constructor() {
        super()
    }

    f() {
        return 1
    }
}
/**
 * @class 
 */
export class C extends Z {
    private a: A = 1

    constructor() {
        super()
    }

    e() {
        return this.a
    }

    f() {
        return 2;
    }
}
