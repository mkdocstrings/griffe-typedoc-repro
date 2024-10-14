export type A = number

export abstract class D {
    abstract f(): number
    e(): number {
        return 1
    }
}

/**
 * @class 
 */
export class C extends D {
    private a: A

    /**
     * Silly example
     * 
     * @param {string} a this is a number
     */
    constructor(a: A) {
        super()
        this.a = a
    }

    e() {
        return this.a
    }

    f() {
        return 2;
    }
}
