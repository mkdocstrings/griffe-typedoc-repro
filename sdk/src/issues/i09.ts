export type A = number

export interface D {
    e(): number;
}
/**
 * @class 
 */
export class C implements D {
    private a: A

    /**
     * Silly example
     * 
     * @param {string} a this is a number
     */
    constructor(a: A) {
        this.a = a
    }

    e() {
        return this.a
    }
}
