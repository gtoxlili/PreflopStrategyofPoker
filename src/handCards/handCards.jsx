import React from "react";
import "./styles.css";

function HandCards(props) {
    return (
        <>
            <h4 class="smalltitleStyle">请输入手牌：</h4>
            <wired-input placeholder="XX、XYo 或 XYs" class="handCardInput" ref={props.hcRef}></wired-input>
        </>
    );
}

export default HandCards;
