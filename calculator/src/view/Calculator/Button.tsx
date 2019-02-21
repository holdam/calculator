import React, {Component} from 'react';
import {OperatorCommand} from "../../business/commands/OperatorCommands";
import {OperatorCommandFactory} from "../../business/factories/OperatorCommandFactory";
import {NumberCommand} from "../../business/commands/NumberCommand";
import {ClickHandlerProps} from "../Props";

interface NumberButtonProps {
    number: number,
    clickHandler: (numberCommand: NumberCommand) => void;
}

export class NumberButton extends Component<NumberButtonProps, any> {
    render() {
        return (
            <Button value={this.props.number} clickHandler={() => this.props.clickHandler(new NumberCommand(this.props.number))}/>
        );
    }
}

export class EqualButton extends Component<ClickHandlerProps, any> {
    render() {
        return (
            <Button value={"="} clickHandler={this.props.clickHandler}/>
        )
    }
}

export class ClearButton extends Component<ClickHandlerProps, any> {
    render() {
        return (
            <Button value={"C"} clickHandler={this.props.clickHandler}/>
        )
    }
}

interface OperatorButtonProps {
    operatorCommandFactory: OperatorCommandFactory;
    clickHandler: (operatorCommand: OperatorCommand) => void;
}

export class OperatorButton extends Component<OperatorButtonProps, any> {
    render() {
        const operator = this.props.operatorCommandFactory.createCommand().operator;
        return (
            <Button value={operator} clickHandler={() => this.props.clickHandler(this.props.operatorCommandFactory.createCommand())}/>
        )
    }
}

interface ButtonProps {
    value: any
    clickHandler: (e: any) => void
}

class Button extends Component<ButtonProps, any> {
    render() {
        return (
            <div className="button" onClick={() => this.props.clickHandler(this.props.value)}>
                {this.props.value}
            </div>
        );
    }
}
