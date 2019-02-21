import Command from "./Command";

export class NumberCommand implements Command{
    constructor(readonly value: number) {
    }
}