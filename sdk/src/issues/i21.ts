

export type ErrorCodesType =
    string
    | 'A'
    | 'B'
    | 'C'

export type CodesObject = {
    [key in ErrorCodesType]: ErrorCodesType
}
