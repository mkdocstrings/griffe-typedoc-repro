export type A = number
export type B = string

/**
 * @class 
 */
export class C {
    private a: A
    private b: B

    /**
     * Silly example
     * 
     * @param {string} a this is a number
     * @param {string} b this is another number
     */
    constructor(a: A, b: B) {
        this.a = a
        this.b = b
    }

    /**
     * Description fnA 
     * 
     * @param {number} x this is a number
     * @returns a number
     */
    fnA(x: number) {
        return x + 1
    }

    /**
     * Description fnB
     * 
     * @deprecated
     * @returns {Promise<void>} returns b
     */
    async fnB() {
        return [this.b, this.a]
    }
}
