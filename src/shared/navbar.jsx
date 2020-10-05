import React from "react";
import "./navbar.scss";

function Navbar() {
    return (
        <div>
        <div class="Container">
            <div class="box">
                <div class="title">
                    <span class="block"></span>
                    <h1>Dictionary4You<span></span></h1>
                </div>
                <div class="role">
                    <div class="block"></div>
                        <p>Learn-Sleep-Repeat</p>
                </div>
            </div>
        </div>
            <a href="https://youtu.be/7d2XsPSjjjI" target="_blank"><footer>
                <div class="texto">
                    <span>
                    <i class="fab fa-youtube"></i>
                watch on youtube</span>
                </div>
        </footer>
        </a>
        </div>
    );
}
export default Navbar;