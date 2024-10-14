export type A = number

export interface X {
    type?: string
    value: string
}

interface E {
    x?: X[]
    y: number
    a: () => {}
}

/**
 * @class 
 */
export class C implements E {
    x?: X[]
    get y() {
        return 1
    }
    a() { return 1 }
}
