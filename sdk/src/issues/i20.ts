export interface LoggerOptions {
    module?: string
}

export interface Logger {
}

export interface LoggerFactory {
    (options?: LoggerOptions): Logger
}

export class A implements Logger {

}

export const lf: LoggerFactory = (options?: LoggerOptions) => {
    console.log(options)
    return new A()
}
