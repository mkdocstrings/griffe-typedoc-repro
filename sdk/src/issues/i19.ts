export class S {
    get a() {
        return 1
    }

    set b(a: number) {
        console.log(a)
    }
}


export class C extends S {
    constructor() {
        super()
    }
}
