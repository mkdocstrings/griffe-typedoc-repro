export type A = number

export abstract class D {
    protected _y?: number
    get x() {
        return -1
    }
    /**
     * @param v the value
     */
    set y(v: number) {
        this.y = v
    }
}

export class Z extends D {
    constructor() {
        super()
    }

    get x() {
        return 0
    }

    /**
     * @param v the value
     */
    set y(v: number) {
        this.y = v + 1
    }

}
/**
 * @class 
 */
export class C extends Z {
    get x() {
        return 1
    }

    /**
     * @param v the value
     */
    set y(v: number) {
        this.y = v + 2
    }
}
