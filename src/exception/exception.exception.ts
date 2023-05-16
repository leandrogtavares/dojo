export class Exception {
    constructor(public message: string) { }
}

export class InvalidArgumentValueException extends Exception { }

// export class RepeatedValueException extends Exception { }