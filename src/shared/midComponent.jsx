import React from "react";
import "./midComponent.scss";

class MidComponent extends React.Component {
    render() {
        return (
            <div class="flip">
                <h4 class="wordCarousel">
                    <span>Enter A word Below To: </span>
                    <div>
            <ul class="flip4">
                            <li>of your word</li>
                            <li>Definitions</li>
                            <li>Different</li>
                            <li>Find</li>
                        </ul>
                    </div>
                </h4>
            </div>
        );
    }
}
export default MidComponent;