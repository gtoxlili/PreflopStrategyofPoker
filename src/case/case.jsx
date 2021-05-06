import React from "react";
import "./styles.css";

const listcomboitme = ['前面无人尚加注', '加注被后位 3bet', '面对前位加注']


function Case(props) {
    return (
        <>
            <h4 class="smalltitleStyle">请选择所遭遇情况：</h4>
            <wired-listbox selected="0"
                class="listCaseStyle"
                ref={props.csref}
            >
                <GetboxItem />
            </wired-listbox>
        </>
    );
}

function BoxItme(item) {
    return <wired-item value={item.index} class="itemstyle">{item.value}</wired-item>
}

function GetboxItem() {
    return listcomboitme.map((item, index) => {
        return <BoxItme value={item} index={index} key={item} />
    })
}

export default Case;
