import * as React from 'react'
import {Component} from 'react'
import {ClearButton, EqualButton, NumberButton, OperatorButton} from './Button';
import Display from './Display';
import {OperatorCommand} from "../../business/commands/OperatorCommands";
import {
    DivisionCommandFactory,
    MinusCommandFactory, MultiplicationCommandFactory,
    PlusCommandFactory
} from "../../business/factories/OperatorCommandFactory";
import {NumberCommand} from "../../business/commands/NumberCommand";
import {CalculatorLogic} from "../../business/calculator/CalculatorLogic";


interface CalculatorState {
    secondaryResult: string
    result: number
}

class Calculator extends Component<any, CalculatorState> {
    readonly calculatorLogic : CalculatorLogic;
    readonly initState = {result: 0, secondaryResult: ''};
    public constructor(props: any) {
        super(props);
        this.calculatorLogic = new CalculatorLogic();
        this.operatorClicked = this.operatorClicked.bind(this);
        this.numberClicked = this.numberClicked.bind(this);
        this.equalsClicked = this.equalsClicked.bind(this);
        this.clearClicked = this.clearClicked.bind(this);
        this.state = this.initState;
    }

    equalsClicked() {
        const result = this.calculatorLogic.getResult();
        this.setState({result: result, secondaryResult: ' '});
    }

    operatorClicked(operatorCommand: OperatorCommand) {
        this.calculatorLogic.pushOperatorCommand(operatorCommand);
        const secondaryResult = String(`${this.state.result} ${operatorCommand.operator}`);
        this.setState({secondaryResult});
    }

    numberClicked(numberCommand: NumberCommand) {
        const result = this.calculatorLogic.pushNumberCommand(numberCommand);
        this.setState( {result: result});
    }

    clearClicked() {
        this.calculatorLogic.clear();
        this.setState(this.initState)
    }

    render() {
        return (
            <div id="calculator">
                <Display result={this.state.result} secondaryResult={this.state.secondaryResult}/>
                <div className="buttonRow">
                    <NumberButton number={7} clickHandler={this.numberClicked}/>
                    <NumberButton number={8} clickHandler={this.numberClicked}/>
                    <NumberButton number={9} clickHandler={this.numberClicked}/>
                    <OperatorButton operatorCommandFactory={new PlusCommandFactory()} clickHandler={this.operatorClicked}/>
                </div>
                <div className="buttonRow">
                    <NumberButton number={4} clickHandler={this.numberClicked}/>
                    <NumberButton number={5} clickHandler={this.numberClicked}/>
                    <NumberButton number={6} clickHandler={this.numberClicked}/>
                    <OperatorButton operatorCommandFactory={new DivisionCommandFactory()} clickHandler={this.operatorClicked}/>
                </div>
                <div className="buttonRow">
                    <NumberButton number={1} clickHandler={this.numberClicked}/>
                    <NumberButton number={2} clickHandler={this.numberClicked}/>
                    <NumberButton number={3} clickHandler={this.numberClicked}/>
                    <OperatorButton operatorCommandFactory={new MinusCommandFactory()} clickHandler={this.operatorClicked}/>
                </div>
                <div className="buttonRow">
                    <ClearButton clickHandler={this.clearClicked}/>
                    <NumberButton number={0} clickHandler={this.numberClicked}/>
                    <OperatorButton operatorCommandFactory={new MultiplicationCommandFactory()} clickHandler={this.operatorClicked}/>
                    <EqualButton clickHandler={this.equalsClicked}/>
                </div>
            </div>
        )
    }
}

export default Calculator;