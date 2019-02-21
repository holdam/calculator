import {OperatorCommand, PlusCommand, MinusCommand, DivisionCommand, MultiplicationCommand} from "../commands/OperatorCommands";

export interface OperatorCommandFactory {
    createCommand() : OperatorCommand;
}

export class PlusCommandFactory implements OperatorCommandFactory {
    createCommand(): OperatorCommand {
        return new PlusCommand();
    }
}

export class MinusCommandFactory implements OperatorCommandFactory {
    createCommand(): OperatorCommand {
        return new MinusCommand();
    }
}

export class DivisionCommandFactory implements OperatorCommandFactory {
    createCommand(): OperatorCommand {
        return new DivisionCommand();
    }
}

export class MultiplicationCommandFactory implements OperatorCommandFactory {
    createCommand(): OperatorCommand {
        return new MultiplicationCommand();
    }
}