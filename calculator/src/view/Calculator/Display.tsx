import React, {Component} from 'react';

interface DisplayProps {
    result: number;
    secondaryResult: string;
}

class Display extends Component<DisplayProps, any> {
    render() {

        return (
            <div id="display">
                <div id="secondaryResult">
                    {this.props.secondaryResult}
                </div>
                <div id="result">
                    {this.props.result}
                </div>
            </div>
        )
    }
}

export default Display;