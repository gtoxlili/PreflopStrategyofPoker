import React from "react";
import "./styles.css";


function Submit(pr) {

    let changeDD = () => {
        let teststr = pr.testhc.current.value.trim();
        if (teststr.length == 3 || teststr.length == 2) {
            pr.optfunc();
            pr.ddRef.current.open = true;
        }
    }

    return (
        <div class="Submitdiv">
            <wired-button elevation="1" onClick={(changeDD)}>
                <span
                    class="Submitbutton">查询</span>
            </wired-button>
        </div>
    );
}


export default Submit;
