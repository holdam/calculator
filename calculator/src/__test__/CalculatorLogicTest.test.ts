import {CalculatorLogic} from "../business/calculator/CalculatorLogic";
import {NumberCommand} from "../business/commands/NumberCommand";
import {DivisionCommand, MinusCommand, MultiplicationCommand, PlusCommand} from "../business/commands/OperatorCommands";

test('Calculator can add numbers', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(2));
    calculator.pushNumberCommand(createNumberCommand(5));
    calculator.pushOperatorCommand(new PlusCommand());
    calculator.pushNumberCommand(createNumberCommand(1));
    calculator.pushNumberCommand(createNumberCommand(0));
    calculator.pushNumberCommand(createNumberCommand(0));
    expect(calculator.getResult()).toEqual(125);
});

test('Calculator can subtract numbers', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(5));
    calculator.pushNumberCommand(createNumberCommand(0));
    calculator.pushOperatorCommand(new MinusCommand());
    calculator.pushNumberCommand(createNumberCommand(3));
    calculator.pushNumberCommand(createNumberCommand(3));
    expect(calculator.getResult()).toEqual(17);
});

test('Calculator can multiply numbers', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(2));
    calculator.pushNumberCommand(createNumberCommand(1));
    calculator.pushOperatorCommand(new MultiplicationCommand());
    calculator.pushNumberCommand(createNumberCommand(6));
    expect(calculator.getResult()).toEqual(126);
});

test('Calculator can divide numbers', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(7));
    calculator.pushNumberCommand(createNumberCommand(2));
    calculator.pushNumberCommand(createNumberCommand(6));
    calculator.pushOperatorCommand(new DivisionCommand());
    calculator.pushNumberCommand(createNumberCommand(2));
    calculator.pushNumberCommand(createNumberCommand(2));
    expect(calculator.getResult()).toEqual(33);
});

test('Calculator can handle multiple calculations in a row', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(8));
    calculator.pushOperatorCommand(new DivisionCommand());
    calculator.pushNumberCommand(new NumberCommand(2));
    expect(calculator.getResult()).toEqual(4);
    calculator.pushOperatorCommand(new MultiplicationCommand());
    calculator.pushNumberCommand(createNumberCommand(8));
    expect(calculator.getResult()).toEqual(32);
    calculator.pushOperatorCommand(new MinusCommand());
    calculator.pushNumberCommand(createNumberCommand(6));
    expect(calculator.getResult()).toEqual(26);
    calculator.pushOperatorCommand(new PlusCommand());
    calculator.pushNumberCommand(createNumberCommand(7));
    expect(calculator.getResult()).toEqual(33);
});

test('Calculator can be have different operators clicked in a row', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(8));
    calculator.pushOperatorCommand(new DivisionCommand());
    calculator.pushOperatorCommand(new MinusCommand());
    calculator.pushOperatorCommand(new PlusCommand());
    calculator.pushOperatorCommand(new MultiplicationCommand());
    calculator.pushNumberCommand(new NumberCommand(2));
    expect(calculator.getResult()).toEqual(16);
});

test('Calculator can clear', () => {
    const calculator = new CalculatorLogic();
    calculator.pushNumberCommand(createNumberCommand(8));
    calculator.pushOperatorCommand(new MinusCommand());
    calculator.clear();
    calculator.pushNumberCommand(createNumberCommand(5));
    expect(calculator.getResult()).toEqual(0);
});



let createNumberCommand = (number: number) => new NumberCommand(number);

export default undefined;