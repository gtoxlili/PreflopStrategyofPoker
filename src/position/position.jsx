import React from "react";
import "./styles.css";

const listboxitme = ['CO', 'BTN', 'SB', 'BB']

function Position(props) {

    return (
        <>
            <h4 class="smalltitleStyle">请选择位置：</h4>
            <wired-listbox horizontal selected="CO"
                class="listboxStyle"
                ref={props.ptref}
            >
                <GetboxItem />
            </wired-listbox>
        </>
    );
}

function BoxItme(item) {
    return <wired-item value={item.value} style={{ fontSize: "18px" }}>{item.value}</wired-item>
}

function GetboxItem() {
    return listboxitme.map((item) => <BoxItme value={item} key={item} />)
}

export default Position;
