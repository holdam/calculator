import {DoNothingCommand, OperatorCommand} from "../commands/OperatorCommands";
import {NumberCommand} from "../commands/NumberCommand";
import CommandTypes from "../data/enums/CommandTypes";
import {postCalculation} from "../../integration/clients/FireBaseClient";

export class CalculatorLogic {
    private previousNumber: number;
    private currentNumber: number;
    private operatorCommand : OperatorCommand;
    private previousCommandType : CommandTypes;

    constructor() {
        this.currentNumber = 0;
        this.previousNumber = 0;
        this.operatorCommand = new DoNothingCommand();
        this.previousCommandType = CommandTypes.UNKNOWN;
        this.pushNumberCommand = this.pushNumberCommand.bind(this);
        this.pushOperatorCommand = this.pushOperatorCommand.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    public pushOperatorCommand(operatorCommand: OperatorCommand): void {
        this.operatorCommand = operatorCommand;
        // Only reset logic if a number was pressed in between operator commands
        if (this.previousCommandType === CommandTypes.NUMBER) {
            this.previousNumber = this.currentNumber;
            this.currentNumber = 0;
        }
        this.previousCommandType = CommandTypes.OPERATOR;
    }

    /**
     * Returns the new number in the buffer after the NumberCommand has been processed
     * @param numberCommand
     */
    public pushNumberCommand(numberCommand: NumberCommand): number {
        const apendeeNumber = this.currentNumber === 0 ? '' : String(this.currentNumber);
        let newResult = Number((apendeeNumber + (String(numberCommand.value))));
        newResult = isNaN(newResult) || !isFinite(newResult) ? this.currentNumber : newResult;
        this.currentNumber = newResult;
        this.previousCommandType = CommandTypes.NUMBER;
        return newResult;
    }

    public clear() : void {
        this.previousNumber = 0;
        this.currentNumber = 0;
        this.operatorCommand = new DoNothingCommand();
    }

    public getResult(): number {
        const result = this.operatorCommand.execute(this.previousNumber, this.currentNumber);
        postCalculation(`${this.previousNumber} ${this.operatorCommand.operator} ${this.currentNumber} = ${result}`);
        this.currentNumber = result;
        this.previousNumber = 0;
        return result;
    }
}