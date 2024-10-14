export type A = number

interface E {
    y: number
}

/**
 * @class 
 */
export class C implements E {
    _y?: number
    set y(x: number) {
        this.y = x
    }
}
