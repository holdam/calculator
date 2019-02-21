import Operator from "../data/enums/Operator";
import Command from "./Command";

export interface OperatorCommand extends Command {
    execute(num1 : number, num2: number) : number;

    readonly operator : Operator;
}

export class PlusCommand implements OperatorCommand {
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
    readonly operator : Operator = Operator.PLUS;
}

export class MinusCommand implements OperatorCommand {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
    readonly operator : Operator = Operator.MINUS;
}

export class DivisionCommand implements OperatorCommand {
    execute(num1: number, num2: number): number {
        return num1 / num2;
    }
    readonly operator : Operator = Operator.DIVISION;
}

export class MultiplicationCommand implements OperatorCommand {
    execute(num1: number, num2: number): number {
        return num1 * num2;
    }
    readonly operator : Operator = Operator.MULTIPLICATION;
}


export class DoNothingCommand implements OperatorCommand {
    readonly operator: Operator = Operator.INITIAL;

    execute(num1: number, num2: number): number {
        return num1;
    }
}
