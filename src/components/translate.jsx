import React from "react";
import "./translate.scss";

class Translate extends React.Component {
    render() {
        return (
                <div class="single bounce-in-top">
                    <div class="word">
                        {this.props.word}
                    </div>
                    <div class="def">
                        {this.props.definition}
                    </div>
                </div>
        );
    }
}
export default Translate;