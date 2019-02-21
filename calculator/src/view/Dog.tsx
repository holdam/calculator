import {retrieveFile} from "../integration/clients/FireBaseClient";
import React, {Component} from "react";

interface DogState {
    dogImgSrc : string;
}
class Dog extends Component<any, DogState> {
    constructor(props: any) {
        super(props);
        this.state = {dogImgSrc: ''};
        retrieveFile('fam.jpg').getDownloadURL().then((url) => {
            this.setState({dogImgSrc : url})
        });
    }
    render() {
        return (
            <img id="dog" src={this.state.dogImgSrc} alt="Probably the greatest picture on the internet - shame you should miss it!" />
        )
    }
}

export default Dog;